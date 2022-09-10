export type EnglishPitchName = "C" | "D" | "E" | "F" | "G" | "A" | "B";
export type ItalicPitchName = "ド" | "レ" | "ミ" | "ファ" | "ソ" | "ラ" | "シ";

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
    }
  }
}
