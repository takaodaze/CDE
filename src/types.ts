export type EnglishPitchName = "C" | "D" | "E" | "F" | "G" | "A" | "B";

export const isEnglishPitchName = (u: unknown): u is EnglishPitchName => {
  const m = u as EnglishPitchName;
  switch (m) {
    case "C":
    case "D":
    case "E":
    case "F":
    case "G":
    case "A":
    case "B":
      return true;
    default:
      return false;
  }
};

export type ItalicPitchName = "ド" | "レ" | "ミ" | "ファ" | "ソ" | "ラ" | "シ";

export const isItalicPitchName = (u: unknown): u is ItalicPitchName => {
  const m = u as ItalicPitchName;
  switch (m) {
    case "ド":
    case "レ":
    case "ミ":
    case "ファ":
    case "ソ":
    case "ラ":
    case "シ":
      return true;
    default:
      return false;
  }
};

export class PitchNameMatcher {
  static match(e: EnglishPitchName, i: ItalicPitchName) {
    switch (e) {
      case "C":
        return i === "ド";
      case "D":
        return i === "レ";
      case "E":
        return i === "ミ";
      case "F":
        return i === "ファ";
      case "G":
        return i === "ソ";
      case "A":
        return i === "ラ";
      case "B":
        return i === "シ";
      default:
        const _: never = e;
        throw new Error(`${PitchNameMatcher.name}:error!`);
    }
  }
}
