'use client';

import { useState } from 'react';

const techStack = [
  { name: 'React', icon: '⚛️' },
  { name: 'Next.js', icon: '▲' },
  { name: 'TypeScript', icon: '📘' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'Python', icon: '🐍' },
  { name: 'Docker', icon: '🐳' },
  { name: 'PostgreSQL', icon: '🐘' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'AWS', icon: '☁️' },
  { name: 'Git', icon: '📦' },
  { name: 'GraphQL', icon: '◈' },
  { name: 'Tailwind', icon: '🎨' },
];

export default function Skills() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            My <span className="text-cyan-400">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I have experience working with a variety of technologies and tools. 
            Here are some of the skills I&apos;ve developed over the years.
          </p>
        </div>

        {/* Tech Stack Icons */}
        <div className="flex flex-wrap justify-center gap-4">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex items-center justify-center w-14 h-14 bg-gray-900 rounded-lg hover:bg-gray-700 transition-all duration-300 cursor-pointer">
                <span className="text-2xl">{tech.icon}</span>
              </div>
              {hoveredIndex === index && (
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-white text-gray-900 text-sm font-semibold rounded-md shadow-xl whitespace-nowrap z-50 pointer-events-none">
                  {tech.name}
                  <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-l-transparent border-r-transparent border-t-white"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
