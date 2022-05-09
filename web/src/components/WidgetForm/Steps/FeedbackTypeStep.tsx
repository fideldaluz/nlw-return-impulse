import { FeedBackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";


interface FeedBackTypeStepsProps {
  onFeedbackTypeChange: (type: FeedBackType) => void;
}

export function FeedBackTypeStep({ onFeedbackTypeChange }: FeedBackTypeStepsProps) {
  return (
    <>
    <header> 
        <span className="text-xl leading-6">Deixe seu feedback</span>

        <CloseButton />
      </header>

      <div className="flex py-8 gap-2 w-full">
      {Object.entries(feedbackTypes).map(([key, value]) => {
        return (
          <button
            key={key}
            className="bg-zinc-800 py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:to-brand-500 focus:outline-none "
            onClick={() => onFeedbackTypeChange(key as FeedBackType)}
          >
            <img src={value.image.src} alt={value.image.alt}></img>
            <span>{value.title}</span>
          </button>
        );
      })}
    </div>
    </>
    
  );
}