import React, { useState, useEffect } from "react";
import { fetchQuestion } from "./services/api";
import QuestionCard from "./components/QuestionCard";
import ResultPage from "./components/ResultPage";
import { Question } from "./types/types";
import Loader from "./components/Loader";
import { debounce } from "./utils/utility";

const App: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);

  const loadQuestion = async () => {
    const question = await fetchQuestion();
    setQuestions((prev) => [...prev, question]);
  };
  const debouncedFetchQuestion = debounce(loadQuestion, 1000);
  useEffect(() => {
    debouncedFetchQuestion();
  }, [currentQuestionIndex]);

  const handleNext = (isCorrect: boolean) => {
    if (isCorrect) setCorrectCount((prev) => prev + 1);
    else setIncorrectCount((prev) => prev + 1);
    currentQuestionIndex < 10 && setCurrentQuestionIndex((prev) => prev + 1);
  };

  if (currentQuestionIndex === 10) {
    return <ResultPage correct={correctCount} incorrect={incorrectCount} />;
  }

  if (!questions[currentQuestionIndex]) return <Loader />;

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex items-center flex-col">
        <h2 className="text-4xl font-bold text-center text-blue-600 mt-8 mb-4">
          Trivia Game
        </h2>
        <QuestionCard
          questionData={questions[currentQuestionIndex]}
          onNext={handleNext}
          index={currentQuestionIndex}
        />
      </div>
    </>
  );
};

export default App;
