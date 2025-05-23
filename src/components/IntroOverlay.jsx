import React, { useState, useRef } from 'react';

function IntroOverlay({ onComplete }) {
  const [started, setStarted] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const audioRefs = useRef({
    sound1: new Audio('/assets/audio/sound1.mp3'),
    sound2: new Audio('/assets/audio/sound2.mp3')
  });

  const startSequence = async () => {
    setStarted(true);
    try {
      // Play sound1 and wait for it to end
      await new Promise((resolve) => {
        audioRefs.current.sound1.onended = resolve;
        audioRefs.current.sound1.play();
      });
      // Show message and play sound2 simultaneously
      setShowMessage(true);
      audioRefs.current.sound2.play();
      await new Promise((resolve) => {
        audioRefs.current.sound2.onended = resolve;
      });
      // Start fade out
      setFadeOut(true);
      await new Promise(resolve => setTimeout(resolve, 1000));
      onComplete();
    } catch (error) {
      console.error('Error playing audio:', error);
      onComplete();
    }
  };

  const skipIntro = () => {
    setFadeOut(true);
    setTimeout(() => onComplete(), 1000);
  };

  React.useEffect(() => {
    return () => {
      // Cleanup audio on unmount
      Object.values(audioRefs.current).forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
      });
    };
  }, []);

  return (
    <div className={`fixed inset-0 bg-gradient-to-b from-gray-900 to-black z-50 flex items-center justify-center transition-opacity duration-1000 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
      {!started ? (
        <div className="text-center space-y-6">
          <button
            className="bg-red-600 text-white px-12 py-6 rounded-xl text-2xl shadow-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-105"
            onClick={startSequence}
          >
            เริ่มต้น
          </button>
          <button
            className="block mx-auto text-gray-400 hover:text-white transition-colors duration-300"
            onClick={skipIntro}
          >
            ข้ามบทนำ
          </button>
        </div>
      ) : (
        <div className={`text-center transition-all duration-1000 ${showMessage ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <h2 className="text-5xl font-bold text-white mb-6 animate-fade-in">
            ชีวิตสั้นกว่าที่คิด...
          </h2>
          <p className="text-3xl text-gray-300 animate-fade-in-delay">
            วางแผนวันสุดท้ายไว้ก่อนดีไหม?
          </p>
        </div>
      )}
    </div>
  );
}

export default IntroOverlay; 