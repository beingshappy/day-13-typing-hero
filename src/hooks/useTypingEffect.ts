import { useState, useEffect } from 'react';

interface UseTypingEffectOptions {
  words: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  delaySpeed?: number;
}

export const useTypingEffect = ({
  words,
  typeSpeed = 150,
  deleteSpeed = 100,
  delaySpeed = 2000,
}: UseTypingEffectOptions) => {
  const [displayText, setDisplayText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    
    const timeout = setTimeout(() => {
      if (isDeleting) {
        setDisplayText(currentWord.substring(0, displayText.length - 1));
        
        if (displayText === '') {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      } else {
        setDisplayText(currentWord.substring(0, displayText.length + 1));
        
        if (displayText === currentWord) {
          setTimeout(() => setIsDeleting(true), delaySpeed);
        }
      }
    }, isDeleting ? deleteSpeed : typeSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, wordIndex, isDeleting, words, typeSpeed, deleteSpeed, delaySpeed]);

  return displayText;
};