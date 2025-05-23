import React, { useState, useEffect } from 'react';
import { questions } from '../data/questions';

function Quiz({ onComplete }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [fadeOut, setFadeOut] = useState(false);

  const getVisibleQuestions = () => {
    return questions.filter((question, index) => {
      if (!question.conditional) return true;
      return question.conditional(answers);
    });
  };

  const visibleQuestions = getVisibleQuestions();
  const currentQuestion = visibleQuestions[currentQuestionIndex];

  const handleAnswer = (option) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: option
    }));

    if (currentQuestionIndex < visibleQuestions.length - 1) {
      setFadeOut(true);
      setTimeout(() => {
        setCurrentQuestionIndex(prev => prev + 1);
        setFadeOut(false);
      }, 500);
    } else {
      setFadeOut(true);
      setTimeout(() => {
        onComplete(answers);
      }, 500);
    }
  };

  const getQuestionType = (type) => {
    switch(type) {
      case 'belief':
        return 'text-4xl font-bold text-red-400';
      case 'emotional':
        return 'text-3xl font-semibold text-pink-400';
      case 'style':
        return 'text-3xl font-semibold text-purple-400';
      default:
        return 'text-2xl font-semibold text-white';
    }
  };

  // Hide cost for questions 21-25
  const hideCost = currentQuestion.id >= 21 && currentQuestion.id <= 25;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-6">
      <div className="max-w-2xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="h-2 bg-gray-700 rounded-full">
            <div
              className="h-full bg-gradient-to-r from-red-500 to-pink-500 rounded-full transition-all duration-500"
              style={{ width: `${((currentQuestionIndex + 1) / visibleQuestions.length) * 100}%` }}
            />
          </div>
          <p className="text-sm text-gray-400 mt-2">
            คำถามที่ {currentQuestionIndex + 1} จาก {visibleQuestions.length}
          </p>
        </div>

        {/* Question */}
        <div className={`mb-8 transition-opacity duration-500 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
          <h2 className={getQuestionType(currentQuestion.type)}>
            {currentQuestion.question}
          </h2>
        </div>

        {/* Options */}
        <div className={`space-y-4 transition-opacity duration-500 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option)}
              className="w-full p-4 text-left bg-gray-800/50 backdrop-blur-sm rounded-xl hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-102"
            >
              <span className="text-lg">{option.text}</span>
              {!hideCost && option.cost > 0 && (
                <span className="block text-sm text-gray-400 mt-1">
                  งบประมาณ: {option.cost.toLocaleString()} บาท
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Quiz; 