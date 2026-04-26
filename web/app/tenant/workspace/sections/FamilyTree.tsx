"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { ReactElement } from "react";
import type { CSSProperties, PointerEvent as ReactPointerEvent } from "react";
import type { Person, Relationship } from "../../../platform/admin/data-capture/types";
import styles from "../workspace.module.css";

type FamilyTreeProps = {
  people: Person[];
  relationships: Relationship[];
  selectedPersonId: string;
  onSelectPerson: (personId: string) => void;
  memberCount?: number;
  relationshipCount?: number;
};

type RelationEdge = {
  toId: string;
  delta: number;
  label: "Parent" | "Child" | "Spouse" | "Sibling" | "Related";
};

type TreeNode = {
  id: string;
  level: number;
  hops: number;
  viaLabel: RelationEdge["label"] | "Self";
  path: Array<{ fromId: string; toId: string; label: RelationEdge["label"] }>;
};

type DragState = {
  pointerId: number;
  startX: number;
  startY: number;
  startPanX: number;
  startPanY: number;
};

const MIN_ZOOM = 0.5;
const MAX_ZOOM = 2;
const ZOOM_STEP = 0.1;
const MAX_GENERATION_DEPTH = 3;
const VISIBLE_COLUMNS = 8;
const CARD_WIDTH = 200;
const CARD_GAP = 10;

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

const escapeXml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");

const isSpouseLikeRelationship = (relationshipType: string) =>
  relationshipType === "spouse_of" ||
  relationshipType === "divorced_from" ||
  relationshipType === "separated_from" ||
  relationshipType === "widowed_from";

const addEdge = (graph: Map<string, RelationEdge[]>, fromId: string, edge: RelationEdge) => {
  const edges = graph.get(fromId) ?? [];
  const exists = edges.some(
    (current) => current.toId === edge.toId && current.delta === edge.delta && current.label === edge.label,
  );

  if (!exists) {
    edges.push(edge);
    graph.set(fromId, edges);
  }
};

const relationshipKey = (fromId: string, toId: string, relationshipType: string) => `${fromId}|${toId}|${relationshipType}`;

const buildRelationshipGraph = (relationships: Relationship[]) => {
  const graph = new Map<string, RelationEdge[]>();
  const explicitRelationshipKeys = new Set<string>();
  const parentToChildren = new Map<string, Set<string>>();
  const spouseMap = new Map<string, Set<string>>();

  for (const relationship of relationships) {
    const sourceId = relationship.personOne.id;
    const targetId = relationship.personTwo.id;
    explicitRelationshipKeys.add(relationshipKey(sourceId, targetId, relationship.relationshipType));

    switch (relationship.relationshipType) {
      case "parent_of": {
        addEdge(graph, sourceId, { toId: targetId, delta: 1, label: "Child" });
        addEdge(graph, targetId, { toId: sourceId, delta: -1, label: "Parent" });

        const children = parentToChildren.get(sourceId) ?? new Set<string>();
        children.add(targetId);
        parentToChildren.set(sourceId, children);
        break;
      }
      case "sibling_of": {
        addEdge(graph, sourceId, { toId: targetId, delta: 0, label: "Sibling" });
        addEdge(graph, targetId, { toId: sourceId, delta: 0, label: "Sibling" });
        break;
      }
      default: {
        if (isSpouseLikeRelationship(relationship.relationshipType)) {
          addEdge(graph, sourceId, { toId: targetId, delta: 0, label: "Spouse" });
          addEdge(graph, targetId, { toId: sourceId, delta: 0, label: "Spouse" });

          const sourceSpouses = spouseMap.get(sourceId) ?? new Set<string>();
          sourceSpouses.add(targetId);
          spouseMap.set(sourceId, sourceSpouses);

          const targetSpouses = spouseMap.get(targetId) ?? new Set<string>();
          targetSpouses.add(sourceId);
          spouseMap.set(targetId, targetSpouses);
        } else {
          addEdge(graph, sourceId, { toId: targetId, delta: 0, label: "Related" });
          addEdge(graph, targetId, { toId: sourceId, delta: 0, label: "Related" });
        }
      }
    }
  }

  // Co-parent derivation without displaying "derived" wording.
  for (const [parentId, children] of parentToChildren.entries()) {
    const spouses = spouseMap.get(parentId) ?? new Set<string>();

    for (const spouseId of spouses) {
      for (const childId of children) {
        const hasExplicitParent =
          explicitRelationshipKeys.has(relationshipKey(spouseId, childId, "parent_of")) ||
          explicitRelationshipKeys.has(relationshipKey(spouseId, childId, "guardian_of"));

        if (hasExplicitParent) {
          continue;
        }

        addEdge(graph, spouseId, { toId: childId, delta: 1, label: "Child" });
        addEdge(graph, childId, { toId: spouseId, delta: -1, label: "Parent" });
      }
    }
  }

  return graph;
};

const buildTreeNodes = (selectedPersonId: string, relationships: Relationship[]): Map<string, TreeNode> => {
  const graph = buildRelationshipGraph(relationships);
  const nodes = new Map<string, TreeNode>();
  const queue: TreeNode[] = [{ id: selectedPersonId, level: 0, hops: 0, viaLabel: "Self", path: [] }];

  nodes.set(selectedPersonId, queue[0]);

  while (queue.length) {
    const current = queue.shift();
    if (!current) {
      break;
    }

    const edges = graph.get(current.id) ?? [];
    for (const edge of edges) {
      const nextLevel = current.level + edge.delta;
      if (Math.abs(nextLevel) > MAX_GENERATION_DEPTH) {
        continue;
      }

      const nextHops = current.hops + 1;
      const existing = nodes.get(edge.toId);
      const shouldReplace =
        !existing ||
        nextHops < existing.hops ||
        (nextHops === existing.hops && Math.abs(nextLevel) < Math.abs(existing.level));

      if (!shouldReplace) {
        continue;
      }

      const nextNode: TreeNode = {
        id: edge.toId,
        level: nextLevel,
        hops: nextHops,
        viaLabel: edge.label,
        path: [...current.path, { fromId: current.id, toId: edge.toId, label: edge.label }],
      };

      nodes.set(edge.toId, nextNode);
      queue.push(nextNode);
    }
  }

  return nodes;
};

const rowLabel = (level: number) => {
  if (level === -3) return "Great Grandparents";
  if (level === -2) return "Grandparents";
  if (level === -1) return "Parents";
  if (level === 0) return "Selected Member and Spouse";
  if (level === 1) return "Children and Partners";
  if (level === 2) return "Grandchildren";
  if (level === 3) return "Great Grandchildren";
  return "Family";
};

const relationFromSelected = (
  person: Person,
  node: TreeNode,
  selectedPerson: Person | null,
  peopleById: Map<string, Person>,
) => {
  if (node.hops === 0) {
    return "Self";
  }

  const gender = (person.gender ?? "").toLowerCase();
  const selectedGender = (selectedPerson?.gender ?? "").toLowerCase();

  if (node.hops === 1) {
    if (node.viaLabel === "Parent") {
      if (gender === "male") return "Father";
      if (gender === "female") return "Mother";
      return "Parent";
    }

    if (node.viaLabel === "Child") {
      if (gender === "male") return "Son";
      if (gender === "female") return "Daughter";
      return "Child";
    }

    if (node.viaLabel === "Sibling") {
      if (gender === "male") return "Brother";
      if (gender === "female") return "Sister";
      return "Sibling";
    }

    if (node.viaLabel === "Spouse") {
      if (selectedGender === "male") return "Wife";
      if (selectedGender === "female") return "Husband";
      return "Spouse";
    }

    return "Relative";
  }

  // Spouse of child => daughter-in-law / son-in-law.
  if (
    node.path.length === 2 &&
    node.path[0].label === "Child" &&
    node.path[1].label === "Spouse"
  ) {
    const spouseGender = (person.gender ?? "").toLowerCase();
    if (spouseGender === "female") return "Daughter-in-law";
    if (spouseGender === "male") return "Son-in-law";
    return "Child-in-law";
  }

  // Parent's spouse => parent.
  if (
    node.path.length === 2 &&
    node.path[0].label === "Parent" &&
    node.path[1].label === "Spouse"
  ) {
    const spouseGender = (person.gender ?? "").toLowerCase();
    if (spouseGender === "male") return "Father";
    if (spouseGender === "female") return "Mother";
    return "Parent";
  }

  // Child's child => grandchild, with simple paternal/maternal fallback when known.
  if (
    node.path.length >= 2 &&
    node.path[0].label === "Child" &&
    node.path[node.path.length - 1].label === "Child"
  ) {
    const firstChild = peopleById.get(node.path[0].toId);
    const childGender = (firstChild?.gender ?? "").toLowerCase();
    const personGender = (person.gender ?? "").toLowerCase();
    if (childGender === "male") {
      if (personGender === "male") return "Pota";
      if (personGender === "female") return "Poti";
      return "Grandchild";
    }
    if (childGender === "female") {
      if (personGender === "male") return "Nati";
      if (personGender === "female") return "Natini";
      return "Grandchild";
    }
    return "Grandchild";
  }

  if (node.level === -2) {
    if (gender === "male") return "Grandfather";
    if (gender === "female") return "Grandmother";
    return "Grandparent";
  }

  if (node.level === -3) {
    if (gender === "male") return "Great Grandfather";
    if (gender === "female") return "Great Grandmother";
    return "Great Grandparent";
  }

  if (node.level === 2) {
    if (gender === "male") return "Grandson";
    if (gender === "female") return "Granddaughter";
    return "Grandchild";
  }

  if (node.level === 3) {
    if (gender === "male") return "Great Grandson";
    if (gender === "female") return "Great Granddaughter";
    return "Great Grandchild";
  }

  if (node.level < 0) {
    return "Family Elder";
  }

  if (node.level > 0) {
    return "Family Younger";
  }

  return "Same generation";
};

const rowCardsWidth = (count: number) => {
  if (count <= 0) {
    return VISIBLE_COLUMNS * CARD_WIDTH + (VISIBLE_COLUMNS - 1) * CARD_GAP;
  }

  const cards = Math.max(VISIBLE_COLUMNS, count);
  return cards * CARD_WIDTH + (cards - 1) * CARD_GAP;
};

export function FamilyTree({
  people,
  relationships,
  selectedPersonId,
  onSelectPerson,
  memberCount,
  relationshipCount,
}: FamilyTreeProps) {
  const [zoom, setZoom] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [exportMessage, setExportMessage] = useState("");
  const [dragState, setDragState] = useState<DragState | null>(null);
  const [pan, setPan] = useState({ x: 24, y: 24 });

  const viewportRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLDivElement | null>(null);

  const peopleById = useMemo(() => new Map(people.map((person) => [person.id, person])), [people]);
  const selectedPerson = useMemo(() => peopleById.get(selectedPersonId) ?? null, [peopleById, selectedPersonId]);
  const treeNodes = useMemo(() => buildTreeNodes(selectedPersonId, relationships), [selectedPersonId, relationships]);

  const levelRows = useMemo(() => {
    const levels = new Map<number, Array<{ person: Person; node: TreeNode }>>();

    for (const node of treeNodes.values()) {
      const person = peopleById.get(node.id);
      if (!person) {
        continue;
      }

      const list = levels.get(node.level) ?? [];
      list.push({ person, node });
      levels.set(node.level, list);
    }

    for (const list of levels.values()) {
      list.sort((a, b) => a.person.fullName.localeCompare(b.person.fullName));
    }

    const rows: Array<{ level: number; items: Array<{ person: Person; node: TreeNode }> }> = [];
    for (let level = -MAX_GENERATION_DEPTH; level <= MAX_GENERATION_DEPTH; level += 1) {
      const items = levels.get(level) ?? [];
      if (items.length) {
        rows.push({ level, items });
      }
    }

    return rows;
  }, [treeNodes, peopleById]);

  const maxRowItems = useMemo(() => Math.max(VISIBLE_COLUMNS, ...levelRows.map((row) => row.items.length)), [levelRows]);
  const canvasWidth = rowCardsWidth(maxRowItems);

  const buildExportSvg = useCallback(() => {
    if (!selectedPerson) {
      return "";
    }

    const cardWidth = 208;
    const cardHeight = 72;
    const rowGap = 74;
    const margin = 36;
    const maxCols = Math.max(VISIBLE_COLUMNS, ...levelRows.map((row) => row.items.length));
    const width = margin * 2 + maxCols * cardWidth + (maxCols - 1) * 10;
    const height = margin * 2 + levelRows.length * cardHeight + Math.max(0, levelRows.length - 1) * rowGap;

    const elements: string[] = [];

    levelRows.forEach((row, rowIndex) => {
      const y = margin + rowIndex * (cardHeight + rowGap);
      const rowWidth = row.items.length * cardWidth + Math.max(0, row.items.length - 1) * 10;
      const startX = (width - rowWidth) / 2;

      elements.push(`<text x="${startX}" y="${y - 12}" fill="#5d4a35" font-size="12" font-family="Arial, sans-serif">${escapeXml(rowLabel(row.level))}</text>`);

      row.items.forEach((item, index) => {
        const x = startX + index * (cardWidth + 10);
        const isSelected = item.person.id === selectedPerson.id;
        const fill = isSelected ? "#edf6ef" : "#fffdf8";
        const stroke = isSelected ? "#2d4a35" : "#cfdccb";

        elements.push(`<rect x="${x}" y="${y}" width="${cardWidth}" height="${cardHeight}" rx="12" ry="12" fill="${fill}" stroke="${stroke}" stroke-width="1.3"/>`);
        elements.push(`<text x="${x + 12}" y="${y + 30}" fill="#1e2420" font-size="14" font-weight="700" font-family="Arial, sans-serif">${escapeXml(item.person.fullName)}</text>`);
        elements.push(`<text x="${x + 12}" y="${y + 52}" fill="#5c6d60" font-size="12" font-family="Arial, sans-serif">${escapeXml(relationFromSelected(item.person, item.node, selectedPerson, peopleById))}</text>`);
      });
    });

    return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
      <rect x="0" y="0" width="${width}" height="${height}" fill="#f8f2e6"/>
      ${elements.join("")}
    </svg>`;
  }, [selectedPerson, levelRows]);

  const applyZoomAroundCenter = (nextZoom: number) => {
    const safeZoom = clamp(nextZoom, MIN_ZOOM, MAX_ZOOM);
    const viewport = viewportRef.current;
    if (!viewport) {
      setZoom(safeZoom);
      return;
    }

    setPan((current) => {
      const centerX = viewport.clientWidth / 2;
      const centerY = viewport.clientHeight / 2;
      const worldX = (centerX - current.x) / zoom;
      const worldY = (centerY - current.y) / zoom;
      return {
        x: centerX - worldX * safeZoom,
        y: centerY - worldY * safeZoom,
      };
    });
    setZoom(safeZoom);
  };

  const fitToScreen = useCallback(() => {
    const viewport = viewportRef.current;
    const canvas = canvasRef.current;
    if (!viewport || !canvas) {
      return;
    }

    const padding = 24;
    const widthScale = (viewport.clientWidth - padding * 2) / canvas.offsetWidth;
    const heightScale = (viewport.clientHeight - padding * 2) / canvas.offsetHeight;
    const nextZoom = clamp(Math.min(widthScale, heightScale), MIN_ZOOM, MAX_ZOOM);
    setZoom(nextZoom);
    setPan({
      x: (viewport.clientWidth - canvas.offsetWidth * nextZoom) / 2,
      y: (viewport.clientHeight - canvas.offsetHeight * nextZoom) / 2,
    });
  }, []);

  const exportImage = () => {
    const svg = buildExportSvg();
    if (!svg) {
      setExportMessage("Select a member before exporting.");
      return;
    }

    const blob = new Blob([svg], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `kutumbsy-tree-${selectedPerson?.fullName?.replaceAll(" ", "-").toLowerCase() ?? "export"}.svg`;
    link.click();
    URL.revokeObjectURL(url);
    setExportMessage("Tree image exported as SVG.");
  };

  const exportPdf = () => {
    const svg = buildExportSvg();
    if (!svg) {
      setExportMessage("Select a member before exporting.");
      return;
    }

    const popup = window.open("", "_blank", "noopener,noreferrer,width=1280,height=900");
    if (!popup) {
      setExportMessage("Allow pop-ups to export PDF.");
      return;
    }

    popup.document.write(`
      <html>
        <head>
          <title>Kutumbsy Family Tree Export</title>
          <style>
            body { margin: 0; padding: 16px; background: #ffffff; font-family: Arial, sans-serif; }
            .wrap { display: flex; justify-content: center; }
            svg { width: 100%; height: auto; max-width: 1600px; border: 1px solid #ddd; }
            @page { size: landscape; margin: 10mm; }
          </style>
        </head>
        <body>
          <div class="wrap">${svg}</div>
        </body>
      </html>
    `);
    popup.document.close();
    popup.focus();
    popup.addEventListener("load", () => popup.print(), { once: true });
    setExportMessage("PDF print dialog opened.");
  };

  useEffect(() => {
    fitToScreen();
  }, [fitToScreen, selectedPersonId, relationships.length, isModalOpen, canvasWidth]);

  const onViewportPointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.button !== 0) {
      return;
    }

    const element = event.target as HTMLElement;
    if (element.closest("button, a, select, input, textarea, label")) {
      return;
    }

    event.currentTarget.setPointerCapture(event.pointerId);
    setDragState({
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      startPanX: pan.x,
      startPanY: pan.y,
    });
  };

  const onViewportPointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!dragState || dragState.pointerId !== event.pointerId) {
      return;
    }

    setPan({
      x: dragState.startPanX + (event.clientX - dragState.startX),
      y: dragState.startPanY + (event.clientY - dragState.startY),
    });
  };

  const onViewportPointerUp = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!dragState || dragState.pointerId !== event.pointerId) {
      return;
    }

    event.currentTarget.releasePointerCapture(event.pointerId);
    setDragState(null);
  };

  const renderPersonNode = (person: Person, node: TreeNode) => (
    <button
      key={person.id}
      type="button"
      className={`${styles.treePersonCard} ${person.id === selectedPersonId ? styles.treePersonCardPrimary : ""}`}
      onClick={() => onSelectPerson(person.id)}
    >
      <div className={styles.treePersonAvatarWrap}>
        {person.photoUrl ? (
          <img src={person.photoUrl} alt={person.fullName} className={styles.treePersonAvatarImage} />
        ) : (
          <span className={styles.treePersonAvatarFallback}>{person.fullName.slice(0, 1).toUpperCase()}</span>
        )}
      </div>
      <div className={styles.treePersonText}>
        <strong>{person.fullName}</strong>
        <span>{relationFromSelected(person, node, selectedPerson, peopleById)}</span>
      </div>
    </button>
  );

  const buildSpousePairsForRow = (rowItems: Array<{ person: Person; node: TreeNode }>) => {
    const idsInRow = new Set(rowItems.map((item) => item.person.id));
    const spouseById = new Map<string, string>();

    for (const relationship of relationships) {
      if (!isSpouseLikeRelationship(relationship.relationshipType)) {
        continue;
      }
      const leftId = relationship.personOne.id;
      const rightId = relationship.personTwo.id;
      if (idsInRow.has(leftId) && idsInRow.has(rightId)) {
        spouseById.set(leftId, rightId);
        spouseById.set(rightId, leftId);
      }
    }

    return spouseById;
  };

  const renderRowCards = (row: { level: number; items: Array<{ person: Person; node: TreeNode }> }) => {
    if (row.level !== 0) {
      const spouseById = buildSpousePairsForRow(row.items);
      const consumed = new Set<string>();
      const rendered: ReactElement[] = [];

      for (const item of row.items) {
        if (consumed.has(item.person.id)) {
          continue;
        }

        const spouseId = spouseById.get(item.person.id);
        const spouse = spouseId ? row.items.find((candidate) => candidate.person.id === spouseId) : null;

        rendered.push(renderPersonNode(item.person, item.node));
        consumed.add(item.person.id);

        if (spouse && !consumed.has(spouse.person.id)) {
          rendered.push(
            <span key={`marriage-${item.person.id}-${spouse.person.id}`} className={styles.treePairJoin}>
              +
            </span>,
          );
          rendered.push(renderPersonNode(spouse.person, spouse.node));
          consumed.add(spouse.person.id);
        }
      }

      return rendered;
    }

    const selectedEntry = row.items.find((item) => item.person.id === selectedPersonId);
    const spouseEntries = row.items.filter((item) => item.node.hops === 1 && item.node.viaLabel === "Spouse");
    const spouseIds = new Set(spouseEntries.map((item) => item.person.id));
    const remaining = row.items.filter((item) => item.person.id !== selectedPersonId && !spouseIds.has(item.person.id));

    const rendered: ReactElement[] = [];

    if (selectedEntry) {
      rendered.push(renderPersonNode(selectedEntry.person, selectedEntry.node));
      for (const spouseEntry of spouseEntries) {
        rendered.push(
          <span key={`marriage-${selectedEntry.person.id}-${spouseEntry.person.id}`} className={styles.treePairJoin}>
            +
          </span>,
        );
        rendered.push(renderPersonNode(spouseEntry.person, spouseEntry.node));
      }
    }

    for (const item of remaining) {
      rendered.push(renderPersonNode(item.person, item.node));
    }

    return rendered;
  };

  const renderTreeCanvas = () => (
    <div className={styles.relationshipTree}>
      {selectedPerson ? (
        <div
          ref={viewportRef}
          className={`${styles.treeViewport} ${dragState ? styles.treeViewportDragging : ""}`}
          onPointerDown={onViewportPointerDown}
          onPointerMove={onViewportPointerMove}
          onPointerUp={onViewportPointerUp}
          onPointerCancel={onViewportPointerUp}
        >
          <div
            ref={canvasRef}
            className={styles.treeCanvasInteractive}
            style={{ transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})` }}
          >
            <div className={styles.treeCanvasStructured} style={{ width: `${canvasWidth}px` } as CSSProperties}>
              {levelRows.map((row, index) => (
                <section key={row.level} className={styles.treeRowSection}>
                  <div className={styles.treeRowLabel}>{rowLabel(row.level)}</div>
                  <div
                    className={styles.treeRowCards}
                    style={{ justifyContent: row.items.length < VISIBLE_COLUMNS ? "center" : "flex-start" } as CSSProperties}
                  >
                    {renderRowCards(row)}
                  </div>
                  {index < levelRows.length - 1 ? <div className={styles.treeStructuredConnector} /> : null}
                </section>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.treeEmpty}>Select a member to view the family tree.</div>
      )}
    </div>
  );

  return (
    <>
      <section className={`${styles.panel} ${styles.treePanel}`}>
        <div className={styles.treeCta}>
          <div>
            <p className={styles.treeCtaLabel}>Relationship Tree</p>
            <h2 className={styles.treeCtaTitle}>3 up and 3 down around selected member</h2>
            <p className={styles.treeCtaSub}>
              {memberCount ?? people.length} members - {relationshipCount ?? relationships.length} relationships
              {selectedPerson ? ` - centered on ${selectedPerson.fullName}` : ""}
            </p>
            <div className={styles.treeCtaActions}>
              <button type="button" className={styles.heroGhostButton} onClick={() => setIsModalOpen(true)}>
                Open Full Screen Tree
              </button>
            </div>
          </div>
        </div>
      </section>

      {isModalOpen ? (
        <div className={styles.treeModalOverlay} role="dialog" aria-modal="true" aria-label="Relationship Tree">
          <section className={`${styles.panel} ${styles.treePanel} ${styles.treePanelFullscreen}`}>
            <button
              type="button"
              aria-label="Close Relationship Tree"
              className={styles.treeModalClose}
              onClick={() => setIsModalOpen(false)}
            >
              x
            </button>

            <div className={styles.panelHeader}>
              <h2>Relationship Tree</h2>
              <p>
                Showing up to 3 generations up and 3 down from selected member, with 8-person row viewport.
              </p>
            </div>

            <div className={styles.treeToolbar}>
              <div className={styles.treeZoomGroup}>
                <button
                  type="button"
                  className={styles.secondaryButton}
                  onClick={() => applyZoomAroundCenter(zoom - ZOOM_STEP)}
                >
                  Zoom Out
                </button>
                <button type="button" className={styles.secondaryButton} onClick={() => applyZoomAroundCenter(1)}>
                  {Math.round(zoom * 100)}%
                </button>
                <button
                  type="button"
                  className={styles.secondaryButton}
                  onClick={() => applyZoomAroundCenter(zoom + ZOOM_STEP)}
                >
                  Zoom In
                </button>
              </div>

              <button type="button" className={styles.secondaryButton} onClick={fitToScreen}>
                Fit to Screen
              </button>
              <button type="button" className={styles.secondaryButton} onClick={exportImage}>
                Export Image
              </button>
              <button type="button" className={styles.secondaryButton} onClick={exportPdf}>
                Export PDF
              </button>
            </div>

            {exportMessage ? <p className={styles.inlineStatus}>{exportMessage}</p> : null}
            {renderTreeCanvas()}
          </section>
        </div>
      ) : null}
    </>
  );
}
