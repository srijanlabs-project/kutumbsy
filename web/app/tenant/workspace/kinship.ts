export type KinshipLanguage = "en" | "hi";

export type KinshipCode =
  | "SELF"
  | "FATHER"
  | "MOTHER"
  | "PARENT"
  | "SON"
  | "DAUGHTER"
  | "CHILD"
  | "BROTHER"
  | "SISTER"
  | "SIBLING"
  | "HUSBAND"
  | "WIFE"
  | "SPOUSE"
  | "SON_IN_LAW"
  | "DAUGHTER_IN_LAW"
  | "CHILD_IN_LAW"
  | "GRANDFATHER"
  | "GRANDMOTHER"
  | "GRANDPARENT"
  | "GRANDSON"
  | "GRANDDAUGHTER"
  | "GRANDCHILD"
  | "MAMA"
  | "MAMI"
  | "MAUSI"
  | "MAUSA"
  | "CHACHA"
  | "CHACHI"
  | "BUA"
  | "FUFA"
  | "BHATIJA"
  | "BHATIJI"
  | "BHANJA"
  | "BHANJI"
  | "DADA"
  | "DADI"
  | "NANA"
  | "NANI"
  | "POTA"
  | "POTI"
  | "NATI"
  | "NATINI"
  | "FAMILY_MEMBER";

const ENGLISH_KINSHIP_MASTER: Record<KinshipCode, string> = {
  SELF: "Self",
  FATHER: "Father",
  MOTHER: "Mother",
  PARENT: "Parent",
  SON: "Son",
  DAUGHTER: "Daughter",
  CHILD: "Child",
  BROTHER: "Brother",
  SISTER: "Sister",
  SIBLING: "Sibling",
  HUSBAND: "Husband",
  WIFE: "Wife",
  SPOUSE: "Spouse",
  SON_IN_LAW: "Son-in-law",
  DAUGHTER_IN_LAW: "Daughter-in-law",
  CHILD_IN_LAW: "Child-in-law",
  GRANDFATHER: "Grandfather",
  GRANDMOTHER: "Grandmother",
  GRANDPARENT: "Grandparent",
  GRANDSON: "Grandson",
  GRANDDAUGHTER: "Granddaughter",
  GRANDCHILD: "Grandchild",
  MAMA: "Maternal uncle (Mama)",
  MAMI: "Maternal uncle's wife (Mami)",
  MAUSI: "Maternal aunt (Mausi)",
  MAUSA: "Maternal aunt's husband (Mausa)",
  CHACHA: "Paternal uncle (Chacha)",
  CHACHI: "Paternal uncle's wife (Chachi)",
  BUA: "Paternal aunt (Bua)",
  FUFA: "Paternal aunt's husband (Fufa Ji)",
  BHATIJA: "Nephew (brother's son)",
  BHATIJI: "Niece (brother's daughter)",
  BHANJA: "Nephew (sister's son)",
  BHANJI: "Niece (sister's daughter)",
  DADA: "Paternal grandfather (Dada)",
  DADI: "Paternal grandmother (Dadi)",
  NANA: "Maternal grandfather (Nana)",
  NANI: "Maternal grandmother (Nani)",
  POTA: "Grandson (son's son)",
  POTI: "Granddaughter (son's daughter)",
  NATI: "Grandson (daughter's son)",
  NATINI: "Granddaughter (daughter's daughter)",
  FAMILY_MEMBER: "Family member",
};

const KINSHIP_MASTER: Record<KinshipLanguage, Record<KinshipCode, string>> = {
  en: ENGLISH_KINSHIP_MASTER,
  hi: ENGLISH_KINSHIP_MASTER,
};

const KINSHIP_CODES = new Set<KinshipCode>(Object.keys(ENGLISH_KINSHIP_MASTER) as KinshipCode[]);

export const getKinshipLabel = (code: KinshipCode, language: KinshipLanguage = "en") =>
  KINSHIP_MASTER[language][code];

export const isKinshipCode = (value: string): value is KinshipCode =>
  KINSHIP_CODES.has(value as KinshipCode);

export const normalizeKinshipLanguage = (_value: unknown): KinshipLanguage => {
  // Temporarily force English output until master data-backed localization is introduced.
  return "en";
};

// Scaffold for upcoming graph-path resolver.
// We will wire this to family tree + PDF + image exports in a follow-up step.
export type KinshipPathStep = "father" | "mother" | "parent" | "child" | "spouse" | "sibling";

export const resolveKinshipCodeFromPath = (path: KinshipPathStep[]): KinshipCode | null => {
  if (!path.length) {
    return "SELF";
  }

  // Direct one-hop relations.
  if (path.length === 1) {
    switch (path[0]) {
      case "father":
        return "FATHER";
      case "mother":
        return "MOTHER";
      case "parent":
        return "PARENT";
      case "child":
        return "CHILD";
      case "sibling":
        return "SIBLING";
      case "spouse":
        return "SPOUSE";
      default:
        return null;
    }
  }

  // Two-hop maternal/paternal examples.
  if (path.length === 2 && path[0] === "mother" && path[1] === "sibling") {
    return "MAMA";
  }
  if (path.length === 2 && path[0] === "father" && path[1] === "sibling") {
    return "CHACHA";
  }

  return null;
};
