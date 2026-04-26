export type PillarTone = "green" | "rose" | "gold";

export type PillarCard = {
  tone: PillarTone;
  iconClass: "iconForest" | "iconRose" | "iconGold";
  icon: string;
  title: string;
  description: string;
  items: string[];
};

export type FeatureRow = [string, string, "badgeGreen" | "badgeSaff" | "badgeGold" | "badgeRose"];

export type Feature = {
  icon: string;
  iconClass: "iconForest" | "iconSaff" | "iconRose" | "iconGold";
  title: string;
  description: string;
};

export type MemoryType = [string, string, "Live" | "Coming", "mtBadgeLive" | "mtBadgeComing"];

export type PrivacyCard = {
  icon: string;
  title: string;
  description: string;
};

export type PromiseItem = {
  icon: string;
  iconClass: "iconForest" | "iconSaff" | "iconRose";
  title: string;
  description: string;
};

export type FooterColumn = {
  title: string;
  links: string[];
};

export const pillarCards: PillarCard[] = [
  {
    tone: "green",
    iconClass: "iconForest",
    icon: "🌳",
    title: "Family Graph",
    description:
      "Build multi-generation family relationships with clean onboarding and role-based collaboration. See your family the way it actually is.",
    items: [
      "Interactive, zoomable family tree",
      "Person profiles with rich biographies",
      "Relationship mapping across branches",
      "Invite family members with roles",
      "Branch-aware visibility controls",
    ],
  },
  {
    tone: "rose",
    iconClass: "iconRose",
    icon: "📸",
    title: "Memory Vault",
    description:
      "Preserve photos, documents, and audio stories before they disappear across generations. Give every memory a permanent home.",
    items: [
      "Photo albums tied to people and events",
      "Audio voice recordings and stories",
      "Document preservation for family records",
      "Timeline of family milestones",
      "Searchable memory archive",
    ],
  },
  {
    tone: "gold",
    iconClass: "iconGold",
    icon: "🔒",
    title: "Trust & Privacy",
    description:
      "Handle sensitive family data with consent, access control, and branch-aware permissions. Your family's story belongs to your family.",
    items: [
      "Granular consent management",
      "Role-based access per branch",
      "Deceased person data protection",
      "Export your data, always",
      "No advertising, ever",
    ],
  },
];

export const featureRows: FeatureRow[] = [
  ["👨‍👩‍👧‍👦 Sharma Family", "Active", "badgeGreen"],
  ["🌳 Family Tree Members", "47 People", "badgeSaff"],
  ["📸 Memory Vault Items", "284 Files", "badgeGold"],
  ["🌿 Family Branches", "4 Branches", "badgeGreen"],
  ["🔒 Privacy Consent", "All Verified", "badgeGreen"],
  ["🎙️ Voice Stories", "12 Recordings", "badgeRose"],
];

export const features: Feature[] = [
  {
    icon: "🌳",
    iconClass: "iconForest",
    title: "Interactive Family Tree",
    description:
      "A zoomable, visual map of your entire family with every person connected, every relationship named, and every branch visible.",
  },
  {
    icon: "📖",
    iconClass: "iconSaff",
    title: "Rich Person Profiles",
    description:
      "Each family member gets a full biography with birthplace, life events, occupation, stories, photographs, and voice notes.",
  },
  {
    icon: "🤝",
    iconClass: "iconRose",
    title: "Collaborative Branches",
    description:
      "Different branches of your family can contribute privately so each branch sees what it should and adds what it knows.",
  },
  {
    icon: "✉️",
    iconClass: "iconGold",
    title: "Smart Invite System",
    description:
      "Invite relatives via WhatsApp or email and assign family roles like editor, viewer, and branch admin in one clean flow.",
  },
];

export const memoryTypes: MemoryType[] = [
  ["📸", "Photos & family albums", "Live", "mtBadgeLive"],
  ["🎙️", "Voice recordings & oral stories", "Live", "mtBadgeLive"],
  ["📄", "Documents, letters, certificates", "Live", "mtBadgeLive"],
  ["🎬", "Family videos & celebrations", "Coming", "mtBadgeComing"],
  ["🗺️", "Ancestral places & maps", "Coming", "mtBadgeComing"],
];

export const privacyCards: PrivacyCard[] = [
  {
    icon: "🔒",
    title: "Consent-First Design",
    description:
      "Every family member controls their own data. No information is shared without explicit consent, even within the same family.",
  },
  {
    icon: "🌿",
    title: "Branch-Aware Access",
    description:
      "Different branches see only what they should. The Delhi branch does not see what the Pune branch has not shared.",
  },
  {
    icon: "👤",
    title: "Deceased Person Protection",
    description:
      "Data belonging to those who have passed is protected by the family administrator. It is preserved, not exposed.",
  },
  {
    icon: "📦",
    title: "Your Data, Always Yours",
    description:
      "Export your family tree, memories, documents, and stories in standard formats you can keep forever.",
  },
  {
    icon: "🚫",
    title: "No Advertising, Ever",
    description:
      "Kutumbsy is a platform for families, not advertisers. Family data is never sold or monetized for ad targeting.",
  },
  {
    icon: "🛡️",
    title: "Role-Based Governance",
    description:
      "Assign family administrators, branch editors, and read-only viewers with control over who can add, edit, or view records.",
  },
];

export const promiseItems: PromiseItem[] = [
  {
    icon: "🌳",
    iconClass: "iconForest",
    title: "Free to start, forever",
    description:
      "Create your family tree, add up to 25 people, and preserve your first memories completely free.",
  },
  {
    icon: "⚡",
    iconClass: "iconSaff",
    title: "Up in 2 minutes",
    description:
      "Start with yourself, add your parents, invite your siblings, and let the tree grow naturally.",
  },
  {
    icon: "🔒",
    iconClass: "iconRose",
    title: "Private by default",
    description:
      "Your family tree is completely private until you decide to invite someone into it.",
  },
];

export const footerColumns: FooterColumn[] = [
  {
    title: "Platform",
    links: ["Family Graph", "Memory Vault", "Privacy & Trust", "Get Started"],
  },
  {
    title: "Srijan Labs",
    links: ["About Us", "All Products", "Partners", "Contact"],
  },
  {
    title: "Connect",
    links: ["Rahul@srijanlabs.in", "9321471113", "9818671113", "Navi Mumbai, MH"],
  },
];