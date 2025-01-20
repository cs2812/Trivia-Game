import React, { useState } from "react";
import { Question } from "../types/types";

interface Props {
  questionData: Question;
  onNext: (isCorrect: boolean) => void;
  index: number;
}

const QuestionCard: React.FC<Props> = ({ questionData, onNext, index }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const options = [
    ...questionData.incorrect_answers,
    questionData.correct_answer,
  ].sort();

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-md w-3/4">
      <h1 className="text-xl font-semibold">
        Q<span className="text-lg">{index + 1}.</span>{" "}
        <span className="text-blue-950">{questionData.question}</span>
      </h1>
      <div className="mt-4">
        {options.map((option, index) => (
          <div key={index} className="mb-2">
            <label>
              <input
                type="radio"
                name="option"
                value={option}
                disabled={isSubmitted}
                onChange={(e) => setSelectedOption(e.target.value)}
                className="mr-2"
              />
              {option}
            </label>
          </div>
        ))}
      </div>
      <button
        onClick={handleSubmit}
        disabled={!selectedOption}
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md"
      >
        Submit
      </button>
      {isSubmitted && (
        <div className="mt-4">
          {selectedOption === questionData.correct_answer ? (
            <p className="text-green-500">Correct!</p>
          ) : (
            <p className="text-red-500">
              Incorrect! The correct answer is{" "}
              <span className="text-gray-500 font-bold">
                {questionData.correct_answer}
              </span>
            </p>
          )}
          <button
            onClick={() =>
              onNext(selectedOption === questionData.correct_answer)
            }
            className="mt-4 bg-gray-500 text-white py-2 px-4 rounded-md"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default QuestionCard;
