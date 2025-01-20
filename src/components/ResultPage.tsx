import React from 'react';

interface Props {
  correct: number;
  incorrect: number;
}

const ResultPage: React.FC<Props> = ({ correct, incorrect }) => {
  return (
    <div className="p-6 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold">Quiz Results</h1>
      <p className="mt-4">Total Questions: {correct + incorrect}</p>
      <p>Correct Answers: {correct}</p>
      <p>Incorrect Answers: {incorrect}</p>
    </div>
  );
};

export default ResultPage;
