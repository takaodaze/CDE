import { useEffect, useState } from "react";
import { nextProblemIndex, problems, whatProblemType } from "./problem";
import { ImCross } from "react-icons/im";
import a from "./correct.png";
import { BiCircle } from "react-icons/bi";

import {
  EnglishPitchName,
  isEnglishPitchName,
  isItalicPitchName,
  ItalicPitchName,
  PitchNameMatcher,
} from "./types";

export const App = () => {
  const [problemIndex, setProblemIndex] = useState(nextProblemIndex());
  const [answer, setAnswer] = useState<
    ItalicPitchName | EnglishPitchName | null
  >(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const problem = problems[problemIndex];
  const problemType = whatProblemType(problem);

  useEffect(() => {
    if (answer == null) return;

    const problemPitchName = problem.pitchName;
    let result = false;
    if (problemType === "englishPitchName") {
      if (isEnglishPitchName(problemPitchName) && isItalicPitchName(answer)) {
        result = PitchNameMatcher.match(problemPitchName, answer);
      } else {
        window.alert("何かエラーが起きました...");
        return;
      }
    } else {
      if (isItalicPitchName(problemPitchName) && isEnglishPitchName(answer)) {
        result = PitchNameMatcher.match(answer, problemPitchName);
      } else {
        window.alert("何かエラーが起きました...");
        return;
      }
    }

    if (result) {
      setIsCorrect(true);
      window.setTimeout(() => {
        setIsCorrect(null);
        setProblemIndex(nextProblemIndex(problemIndex));
      }, 1000);
    } else {
      setIsCorrect(false);
      window.setTimeout(() => setIsCorrect(null), 1000);
    }
    setAnswer(null);
  }, [answer]);

  const ItalicAnswerButton = (props: { pitchName: ItalicPitchName }) => (
    <AnswerButton
      text={props.pitchName}
      onClick={() => setAnswer(props.pitchName)}
    />
  );

  const EnglishAnswerButton = (props: { pitchName: EnglishPitchName }) => (
    <AnswerButton
      text={props.pitchName}
      onClick={() => setAnswer(props.pitchName)}
    />
  );

  return (
    <div className="h-screen flex flex-col justify-center p-4 gap-10">
      <img
        src={"/correct.png"}
        className={`absolute inset-1/2 -translate-x-16 -translate-y-16 h-32 w-32  text-blue-400 ${
          isCorrect ? "scale-100" : "scale-0"
        } transition-transform duration-400`}
      />
      <img
        src={"/incorrect.png"}
        className={`absolute inset-1/2 -translate-x-16 -translate-y-16 h-32 w-32  text-blue-400 ${
          isCorrect === false ? "scale-100" : "scale-0"
        } transition-transform duration-400`}
      />
      <div className="flex justify-center ">
        <div className="text-6xl">{problem.pitchName}</div>
      </div>
      <div className="flex justify-center gap-2 md:gap-3">
        {problemType === "englishPitchName" ? (
          <>
            <ItalicAnswerButton pitchName="ド" />
            <ItalicAnswerButton pitchName="レ" />
            <ItalicAnswerButton pitchName="ミ" />
            <ItalicAnswerButton pitchName="ファ" />
            <ItalicAnswerButton pitchName="ソ" />
            <ItalicAnswerButton pitchName="ラ" />
            <ItalicAnswerButton pitchName="シ" />
          </>
        ) : (
          <>
            <EnglishAnswerButton pitchName="C" />
            <EnglishAnswerButton pitchName="D" />
            <EnglishAnswerButton pitchName="E" />
            <EnglishAnswerButton pitchName="F" />
            <EnglishAnswerButton pitchName="G" />
            <EnglishAnswerButton pitchName="A" />
            <EnglishAnswerButton pitchName="B" />
          </>
        )}
      </div>
    </div>
  );
};

const AnswerButton = (props: { text: string; onClick: () => void }) => {
  return (
    <button
      className="text-lg font-bold border-2  bg-gray-100 border-slate-400 rounded-md  w-12 h-12 md:w-20 md:h-20"
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};
