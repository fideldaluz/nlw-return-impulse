import { useState } from "react";
import { FeedBackTypeStep } from "./Steps/FeedbackTypeStep";

import bugImageUrl from '../../assets/bug.svg';
import ideaImageUrl from '../../assets/idea.svg';
import thoughtImageUrl from '../../assets/thought.svg';
import { FeedBackContentStep } from "./Steps/FeedbackContentStep";
import { FeedBackSuccessStep } from "./Steps/FeedbackSuccessStep";

export const feedbackTypes = {
  BUG: {
    title: "Problema",
    image: {
      src: bugImageUrl,
      alt: 'Imagem de um inseto'
    },
  },
  IDEA: {
    title: "Ideia",
    image: {
      src: ideaImageUrl,
      alt: 'Imagem de uma lâmpada'
    },
  },
  OTHER: {
    title: "Outro",
    image: {
      src: thoughtImageUrl,
      alt: 'Imagem de um balão de pensamento'
    },
  },
}

export type FeedBackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedBackType, setFeedbackType] = useState<FeedBackType | null>(null);
  const [feedbackSend, setFeedbackSend] = useState(false);

  function handleRestartFeedback() {
    setFeedbackType(null);
    setFeedbackSend(false);
  }

  return (
    <div className="bg-zinc-900 p-4 realative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {feedbackSend ? (
        <FeedBackSuccessStep onFeedbackRestartRequested={handleRestartFeedback}/>
      ) : (
        <>
          {!feedBackType ? (
            <FeedBackTypeStep onFeedbackTypeChange={setFeedbackType} />
          ) : (
            <FeedBackContentStep
              feedbackType={feedBackType}
              onFeedbackRestartRequested={handleRestartFeedback}
              onFeedbackSend={() => setFeedbackSend(true)}
            />
          )}
        </>
      )}

      <footer className="text-xs text-neutral-400">
        Feito com ♥ pela <a className="underline underline-offset-2" href="https://www.rocketseat.com.br/" target="_blank">Rocketseat</a>
      </footer>
    </div>
  )
}