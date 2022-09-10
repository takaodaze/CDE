import {
  EnglishPitchName,
  isEnglishPitchName,
  isItalicPitchName,
  ItalicPitchName,
} from "./types";

export type Problem = ItalicPitchNameProblem | EnglishPitchNameProblem;

export const whatProblemType = (p: Problem) => {
  if (isEnglishPitchName(p.pitchName)) {
    return "englishPitchName";
  } else if (isItalicPitchName(p.pitchName)) {
    return "italicPitchName";
  } else {
    throw new Error("invalid problem error");
  }
};

export type ItalicPitchNameProblem = {
  pitchName: ItalicPitchName;
};

export type EnglishPitchNameProblem = {
  pitchName: EnglishPitchName;
};

export const problems: Problem[] = [
  {
    pitchName: "C",
  },
  {
    pitchName: "D",
  },
  {
    pitchName: "E",
  },
  {
    pitchName: "F",
  },
  {
    pitchName: "G",
  },
  {
    pitchName: "A",
  },
  {
    pitchName: "B",
  },
  {
    pitchName: "ド",
  },
  {
    pitchName: "レ",
  },
  {
    pitchName: "ミ",
  },
  {
    pitchName: "ファ",
  },
  {
    pitchName: "ソ",
  },
  {
    pitchName: "ラ",
  },
  {
    pitchName: "シ",
  },
];
const randomIndex = () => {
  return Math.floor(Math.random() * (problems.length - 1));
};

export const nextProblemIndex = (currIndex?: number) => {
  if (currIndex == null) return randomIndex();

  let nextIndex: number | null = null;

  do {
    nextIndex = randomIndex();
  } while (currIndex === nextIndex);

  return nextIndex;
};
