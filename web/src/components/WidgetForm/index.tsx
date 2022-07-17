import { useState } from "react";
import { CloseButton } from "../CloseButton";

import BugImg from "../../assets/bug.svg";
import IdeaImg from "../../assets/idea.svg";
import OtherImg from "../../assets/thought.svg";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";

export const feedbackTypes = {
  BUG: {
    title: "Problema",
    image: {
      source: BugImg,
      alt: "Bug Icon",
    },
  },
  IDEA: {
    title: "Ideia",
    image: {
      source: IdeaImg,
      alt: "Ideia Icon",
    },
  },
  OTHER: {
    title: "Outro",
    image: {
      source: OtherImg,
      alt: "Outro Icon",
    },
  },
};

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

  const handleRestartFeedback = () => {
    setFeedbackSent(false);
    setFeedbackType(null);
  };
  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {feedbackSent ? (
        <FeedbackSuccessStep onPressGoBack={handleRestartFeedback} />
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
          ) : (
            <FeedbackContentStep
              feedbackType={feedbackType}
              onPressGoBack={handleRestartFeedback}
              onFeedbackSent={() => setFeedbackSent(true)}
            />
          )}
        </>
      )}
      <footer className="text-xs text-neutral-400">
        Desenvolvido por{" "}
        <a
          href="https://github.com/Guilhermerisu"
          className="underline underline-offset-2"
          target="_blank"
        >
          Guilhermerisu
        </a>
      </footer>
    </div>
  );
}
