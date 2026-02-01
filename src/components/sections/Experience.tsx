'use client';

import { useState, useEffect, useRef } from 'react';

const experiences = [
  
  
  {
    id: 3,
    role: 'Full Stack Developer',
    company: 'Swift Technologies',
    location: 'Addis Ababa, Ethiopia',
    period: 'September 2023 - March 2024',
    description: 'Built responsive user interfaces using React and Tailwind CSS, integrated real-time features and optimized web performance',
  },
  {
    id: 4,
    role: 'Backend Developer',
    company: 'TechHub Ethiopia',
    location: 'Addis Ababa, Ethiopia',
    period: 'March 2023 - August 2023',
    description: 'Developed RESTful APIs and microservices architecture for fintech applications, implemented secure payment processing systems',
  },
  {
    id: 5,
    role: 'Junior Developer',
    company: 'Digital Solutions Inc',
    location: 'Addis Ababa, Ethiopia',
    period: 'June 2022 - February 2023',
    description: 'Built and maintained client websites using React and Node.js, collaborated with senior developers on enterprise projects',
  },
  {
    id: 6,
    role: 'Web Development Intern',
    company: 'StartUp Labs',
    location: 'Remote',
    period: 'January 2022 - May 2022',
    description: 'Assisted in developing landing pages and marketing websites, learned modern web development practices and version control',
  },
];

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.findIndex((ref) => ref === entry.target);
            if (index !== -1) {
              setActiveIndex(index);
            }
          }
        });
      },
      {
        rootMargin: '-40% 0px -40% 0px',
        threshold: 0.1,
      }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const activeExperience = experiences[activeIndex];

  return (
    <section id="experience" className="py-20 bg-[#253137] relative">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
          <span className="text-emerald-400 italic">010.</span> Places I&apos;ve Worked At
        </h2>

        {/* Two Column Layout */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-32">
          {/* Left Side - Job Roles (Scrollable) */}
          <div className="lg:w-1/2 space-y-16">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                ref={(el) => { sectionRefs.current[index] = el; }}
                className={`min-h-[120px] transition-all duration-300 ${
                  activeIndex === index 
                    ? 'opacity-100' 
                    : 'opacity-50'
                }`}
              >
                <h3 className={`text-xl font-bold mb-2 transition-colors duration-300 ${
                  activeIndex === index ? 'text-white' : 'text-gray-500'
                }`}>
                  {exp.role}
                </h3>
                <p className={`text-sm text-emerald-400/70 mb-3 lg:hidden`}>
                  {exp.company}
                </p>
                <p className={`text-sm leading-relaxed transition-colors duration-300 ${
                  activeIndex === index ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {exp.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right Side - Company Info (Sticky) */}
          <div className="lg:w-1/2 hidden lg:flex lg:sticky lg:top-0 lg:h-screen flex-col justify-center">
            <div className="transition-all duration-500">
              <h3 className="text-4xl font-bold text-emerald-400 leading-tight mb-4">
                {activeExperience.company.split(' ').map((word, i) => (
                  <span key={i} className="block">{word}</span>
                ))}
              </h3>
              <p className="text-emerald-400 text-lg">
                {activeExperience.period} | {activeExperience.location}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
