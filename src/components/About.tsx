import React from 'react';
import { Code2, Coffee, Lightbulb, Users } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Code2 className="text-blue-400" size={24} />,
      title: 'Clean Code',
      description: 'Writing maintainable and efficient code'
    },
    {
      icon: <Lightbulb className="text-blue-400" size={24} />,
      title: 'Innovation',
      description: 'Always exploring new technologies'
    },
    {
      icon: <Users className="text-blue-400" size={24} />,
      title: 'Collaboration',
      description: 'Strong team player and communicator'
    },
    {
      icon: <Coffee className="text-blue-400" size={24} />,
      title: 'Dedication',
      description: 'Committed to continuous learning'
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-blue-400">Me</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            I'm a passionate full stack developer with 5+ years of experience creating digital solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              With a strong foundation in modern web technologies, I specialize in creating responsive, 
              user-friendly applications that solve real-world problems. My journey in software development 
              has been driven by curiosity and a desire to build meaningful digital experiences.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              I believe in writing clean, maintainable code and staying up-to-date with the latest industry 
              trends. When I'm not coding, you'll find me exploring new frameworks, contributing to open-source 
              projects, or sharing knowledge with the developer community.
            </p>
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300">
              Download Resume
            </button>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-gray-900 p-6 rounded-lg hover:bg-gray-700 transition-all duration-300 hover:scale-105"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;