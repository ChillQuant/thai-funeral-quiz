import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Quiz from './components/Quiz';
import Summary from './components/Summary';
import IntroOverlay from './components/IntroOverlay';
import { questions } from './data/questions';

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [showQuiz, setShowQuiz] = useState(false);
  const [answers, setAnswers] = useState({});

  const handleIntroComplete = () => {
    setShowIntro(false);
    setShowQuiz(true);
  };

  const handleQuizComplete = (quizAnswers) => {
    setAnswers(quizAnswers);
    setShowQuiz(false);
  };

  const handleRestart = () => {
    setAnswers({});
    setShowIntro(true);
    setShowQuiz(false);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            {showIntro ? (
              <IntroOverlay onComplete={handleIntroComplete} />
            ) : showQuiz ? (
              <Quiz onComplete={handleQuizComplete} />
            ) : (
              <div
                style={{
                  width: '100vw',
                  height: '100vh',
                  overflow: 'auto',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'linear-gradient(to bottom, #e0eafc, #cfdef3)'
                }}
              >
                <Summary answers={answers} onRestart={handleRestart} />
              </div>
            )}
          </>
        } />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App; 