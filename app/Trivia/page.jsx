'use client';
import React, { useState } from 'react';

const triviaQuestions = [
  {
    question: 'What year was the Nike Air Jordan 1 released?',
    options: ['1984', '1985', '1986', '1987'],
    answer: '1985',
  },
  {
    question: 'Which brand is known for the slogan "Just Do It"?',
    options: ['Adidas', 'Nike', 'Puma', 'Reebok'],
    answer: 'Nike',
  },
  {
    question: 'What is the name of Adidas’s famous three-stripe logo?',
    options: ['Stripes', 'Trefoil', 'Bauhaus', 'Zigzag'],
    answer: 'Trefoil',
  },
  // Add more questions as needed
];

const TriviaPage = () => {
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    if (option === triviaQuestions[currentQuestion].answer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    setSelectedOption(null);
    if (currentQuestion < triviaQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {showResult ? (
        <div className="text-center">
          <h1 className="text-4xl font-bold">Your Score: {score} / {triviaQuestions.length}</h1>
          <p className="mt-4">Thank you for participating!</p>
        </div>
      ) : (
        <div>
          <h1 className="text-2xl font-bold mb-4">{triviaQuestions[currentQuestion].question}</h1>
          <div className="space-y-2">
            {triviaQuestions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionClick(option)}
                className={`w-full p-2 rounded ${selectedOption === option ? (option === triviaQuestions[currentQuestion].answer ? 'bg-green-500' : 'bg-red-500') : 'bg-blue-500'}`}
                disabled={!!selectedOption}
              >
                {option}
              </button>
            ))}
          </div>
          {selectedOption && (
            <button
              onClick={handleNextQuestion}
              className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
            >
              Next Question
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default TriviaPage;
