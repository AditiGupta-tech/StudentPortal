import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const fullText = "Welcome to Student Portal";
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const typingTimer = setTimeout(() => {
        setDisplayedText(prevText => prevText + fullText[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, 100); 

      return () => clearTimeout(typingTimer);
    }
  }, [currentIndex, fullText]);

return (
    <div className="min-h-screen flex flex-col justify-center items-center p-6 sm:p-10 text-center
                    bg-gray-50 dark:bg-gray-900 transition-colors duration-300"> 

      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-pink-600 dark:text-pink-400 mb-6 typing-effect">
        {displayedText}
        <span className="animate-blink text-pink-500 dark:text-pink-300">|</span> 
      </h2>

      <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-2xl leading-relaxed">
        Manage all your academic details in one intuitive place. 
      </p>

      <div className="mt-8">
        <button onClick={() => navigate('/signup')} className="bg-pink-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-pink-700 transition-colors duration-200">Get Started</button>
      </div>
    </div>
  );
}