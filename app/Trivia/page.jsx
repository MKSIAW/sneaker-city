'use client';
import React, { useState } from 'react';

const TriviaPage = ({ setDiscount }) => {
  const [score, setScore] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const questions = [
    {
      question: 'Which brand is known for the Air Max?',
      options: ['Nike', 'Adidas', 'Puma', 'Reebok'],
      answer: 'Nike',
    },
    {
      question: 'What year did the Air Jordan 1 release?',
      options: ['1985', '1990', '1995', '2000'],
      answer: '1985',
    },
    // Add more questions as needed
  ];

  const handleAnswer = (option) => {
    if (option === questions[questionIndex].answer) {
      setScore(score + 1);
    }
    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      if (score + (option === questions[questionIndex].answer ? 1 : 0) === questions.length) {
        alert('Congratulations! You passed all questions and earned a discount!');
        setDiscount(0.2);  
      } else {
        alert('Good try! Please try again for discounts.');
      }
      setQuestionIndex(0);
      setScore(0);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-100">
      <h1 className="text-3xl text-center font-bold mb-6 text-green-600">Sneaker Trivia</h1>
      <div className="flex flex-col items-center mb-4">
        <h2 className="text-xl font-semibold text-center mb-4">{questions[questionIndex].question}</h2>
        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
          {questions[questionIndex].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option)}
              className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600 transition duration-300 text-center"
            >
              {option}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-6 text-center">
        <p className="text-lg font-semibold">Your Score: {score}</p>
      </div>
    </div>
  );
};

export default TriviaPage;