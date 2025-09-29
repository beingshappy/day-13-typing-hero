import React from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { useTypingEffect } from '../hooks/useTypingEffect';

const Hero: React.FC = () => {
  const typedText = useTypingEffect({
    words: ['Full Stack Developer', 'React Specialist', 'UI/UX Enthusiast', 'Problem Solver'],
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 2000,
  });

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6">
            Hi, I'm <span className="text-blue-400">John Doe</span>
          </h1>
          
          <div className="text-2xl sm:text-3xl md:text-4xl text-gray-300 mb-8 h-16 flex items-center justify-center">
            <span className="border-r-2 border-blue-400 animate-pulse pr-1">
              {typedText}
            </span>
          </div>
          
          <p className="text-lg sm:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating exceptional digital experiences with clean code and innovative solutions.
          </p>
          
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com"
              className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={24} className="text-white" />
            </a>
            <a
              href="https://linkedin.com"
              className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} className="text-white" />
            </a>
            <a
              href="mailto:john@example.com"
              className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              <Mail size={24} className="text-white" />
            </a>
          </div>
          
          <button
            onClick={scrollToAbout}
            className="inline-flex items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105"
          >
            View My Work
            <ChevronDown className="ml-2" size={20} />
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={scrollToAbout}
          className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;