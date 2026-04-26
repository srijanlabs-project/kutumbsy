import { Family } from "./types";

export function parseJson<T>(text: string): T {
  if (!text.trim()) {
    return {} as T;
  }

  return JSON.parse(text) as T;
}

export function formatCountdown(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  const remainder = seconds % 60;
  return minutes > 0 ? `${minutes}m ${remainder.toString().padStart(2, "0")}s` : `${remainder}s`;
}

export function filterFamilies(families: Family[], query: string): Family[] {
  const normalized = query.trim().toLowerCase();
  if (!normalized) {
    return families.slice(0, 8);
  }

  return families.filter((family) =>
    [family.name, family.familyCode, family.slug, family.nativePlace ?? ""].some((value) => value.toLowerCase().includes(normalized)),
  );
}
