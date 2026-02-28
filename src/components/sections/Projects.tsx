'use client';

import { useState } from 'react';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: 'HR Ai-Agent',
    description: 'A full-featured HR management system with AI-powered recruitment, employee onboarding, performance tracking, and analytics dashboard.',
    image: '/projects/HR_AIagent.png',
    tags: ['React', 'NextJS', 'ExpressJS', 'Node.js', 'Supabase', 'JWT'],
    category: 'fullstack',
    github: 'https://github.com/Aklile612/HR_Ai-agent',
    demo: 'https://hr-ai-agent-delta.vercel.app/',
  },
  {
    id: 2,
    title: 'Swift Delivery',
    description: 'A comprehensive delivery platform with real-time tracking, payment integration, and multi-vendor support. Built with microservices architecture for scalability.',
    image: '/projects/delivery.png',
    tags: ['Next.js', 'Nest.js', 'PostgreSQL',  'Docker','chapa '],
    category: 'frontend',
    github: 'https://github.com',
    demo: 'https://swiftdelivery.et/',
  },
  {
    id: 3,
    title: 'Gebeta',
    description: 'A social platform for sharing and discovering recipes, featuring user profiles, comments, ratings, and personalized recommendations powered by machine learning.',
    image: '/projects/gebeta.png',
    tags: ['Go','Nuxt.js', 'TypeScript', 'PostgreSQL',],
    category: 'fullstack',
    github: 'https://github.com/Aklile612/gebeta',
    demo: 'https://gebeta-new.vercel.app/',
  },
  {
    id: 4,
    title: 'Reminder Student App',
    description: 'An interactive dashboard for students to manage assignments, track grades, and receive notifications. Features data visualization and calendar integration.',
    image: '/projects/reminder.png',
    tags: ['React', 'Node.js', 'Tailwind CSS', 'Firebase'],
    category: 'fullstack',
    github: 'https://github.com/Aklile612/Reminder-App',
    demo: 'https://reminder-app-phi-two.vercel.app/',
  },
  {
    id: 5,
    title: 'REST API Service',
    description: 'A high-performance REST API service with authentication, rate limiting, and comprehensive documentation. Handles 10k+ requests per minute.',
    image: '/projects/api.png',
    tags: ['Go', 'PostgreSQL'],
    category: 'backend',
    github: 'https://github.com/Aklile612/go-crud',
    demo: 'https://demo.com',
  },
  {
    id: 6,
    title: 'Mobile App UI/UX',
    description: 'Complete UI/UX design for a fitness tracking mobile application with intuitive navigation and engaging user experience.',
    image: '/projects/uiux.png',
    tags: ['Figma', 'Adobe XD', 'Prototyping', 'User Research'],
    category: 'uiux',
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
  {
    id: 7,
    title: 'Swift Mobility',
    description: 'A scooter rental platform with real-time availability, booking system, and payment gateway integration. Built for scalability and ease of use.',
    image: '/projects/swiftMobilty.png',
    tags: ['React', 'Node.js', 'MongoDB', 'chapa'],
    category: 'frontend',
    github: 'https://github.com/',
    demo: 'https://swift-mob.vercel.app/',
  },
];

const categories = [
  { id: 'fullstack', name: 'FullStack' },
  { id: 'frontend', name: 'Front-end' },
  { id: 'backend', name: 'Back-end' },
  { id: 'uiux', name: 'UI/UX' },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('fullstack');

  const filteredProjects = projects.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-[#253137] relative">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          <span className="text-gray-500">011.</span> Projects With A Bang
        </h2>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-emerald-500 text-white'
                  : 'bg-transparent text-gray-400 hover:text-white border border-gray-700 hover:border-gray-500'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects List - Alternating Layout */}
        <div className="space-y-24">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-8 items-center`}
            >
              {/* Project Image */}
              <div className="lg:w-3/5 w-full">
                <div className="relative group">
                  <div className="relative bg-gray-800 rounded-lg overflow-hidden border border-gray-700 aspect-video">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className={`lg:w-2/5 w-full ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {project.title}
                </h3>
                
                <div className={`bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-6 mb-6 ${index % 2 === 0 ? 'lg:-ml-20' : 'lg:-mr-20'} relative z-10`}>
                  <p className="text-gray-300 leading-relaxed text-left">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className={`flex flex-wrap gap-3 mb-6 ${index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'}`}>
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-gray-400 text-sm font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className={`flex gap-4 ${index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'}`}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-emerald-400 transition-colors"
                    title="View Code"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-emerald-400 transition-colors"
                    title="Live Demo"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
