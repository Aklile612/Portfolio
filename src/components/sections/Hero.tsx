'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

const projectImages = [
  { src: '/projects/HR_AIagent.png', title: 'AI_Agent', alt: 'AI Agent - HR Platform' },
  { src: '/projects/gebeta.png', title: 'Gebeta', alt: 'Gebeta - Ethiopian Recipe App' },
  { src: '/projects/swiftdelivery.png', title: 'Swift Delivery', alt: 'Swift Delivery - Delivery Platform' },
  { src: '/projects/swiftMobilty.png', title: 'Scooter App', alt: 'Scooter App' },
  { src: '/projects/reminder.png', title: 'Reminder App', alt: 'Reminder App' },
  // { src: '/projects/swiftdelivery.png', title: 'Zare Portal', alt: 'Zare Portal' },
];

// Project Card with hover effect
function ProjectCard({ img }: { img: typeof projectImages[0] }) {
  return (
    <div className="group flex-shrink-0 w-[380px] h-[240px] bg-gray-800/30 rounded-xl overflow-hidden border border-gray-600/20 hover:border-emerald-400/50 shadow-2xl cursor-pointer transition-all duration-300 hover:scale-105 hover:z-50">
      <div className="relative w-full h-full">
        <Image
          src={img.src}
          alt={img.alt}
          fill
          className="object-cover object-top opacity-70 group-hover:opacity-100 transition-opacity duration-300"
        />
        
        {/* Top Label - appears on hover */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-gray-900/95 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-600/50 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-y-4 group-hover:translate-y-0 z-20">
          <span className="text-white text-sm font-medium whitespace-nowrap">{img.title}</span>
        </div>

        {/* Vertical Line - appears on hover */}
        <div className="absolute left-1/2 -translate-x-1/2 top-[50px] w-[2px] h-0 bg-gradient-to-b from-emerald-400 via-emerald-400 to-emerald-400/50 group-hover:h-[140px] transition-all duration-700 ease-out z-10"></div>
        
        {/* Glow dot at line start */}
        <div className="absolute left-1/2 -translate-x-1/2 top-[46px] w-2 h-2 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-[0_0_12px_4px_rgba(16,185,129,0.6)] z-20"></div>

        {/* Bottom Title - appears on hover */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-gray-900/95 backdrop-blur-sm px-4 py-2 rounded-lg border border-emerald-400/50 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 z-20">
          <span className="text-emerald-400 text-base font-semibold whitespace-nowrap">{img.title}</span>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [windowHeight, setWindowHeight] = useState(800);

  useEffect(() => {
    // Set initial window height
    setWindowHeight(window.innerHeight);
    
    const handleScroll = () => {
      requestAnimationFrame(() => {
        setScrollY(window.scrollY);
      });
    };
    
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Landing position - images land just below hero section
  const targetY = windowHeight - 200; // Final resting Y position
  const maxScroll = targetY * 0.9; // Rotation completes just before landing
  
  // Progress from 0 to 1
  const progress = Math.min(scrollY / maxScroll, 1);
  
  // Rotation: starts diagonal (-8°/+8°), ends horizontal (0°)
  const rotation1 = -8 * (1 - progress);
  const rotation2 = 8 * (1 - progress);
  
  // Y position: drag down with scroll, stop at targetY
  const yOffset = Math.min(scrollY, targetY);
  
  // Once landed, switch from fixed to absolute positioning so it scrolls with page
  const hasLanded = scrollY >= targetY;

  return (
    <>
      {/* Hero Section */}
      <section id="home" className="relative h-screen bg-[#253137]">
        
        <div className="absolute inset-0 bg-[#253137]/50 z-[2] pointer-events-none"></div>

        
        <div className="relative z-[10] h-full flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-white">The </span>
              <span className="text-emerald-400">FullStack Developer</span>
              <br />
              <span className="text-emerald-400">you&apos;ve</span>
              <span className="text-white"> dreamt of having</span>
            </h1>

            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
              Hello there, I am <span className="text-emerald-400">Aklile Ansa</span> an Ethiopian developer with{' '}
              <span className="text-emerald-400">2+ years of experience</span> who specializes in creating and developing
              amazing digital experiences. At the moment, I&apos;m working at{' '}
              <span className="text-emerald-400">Swift
Technologies</span> on creating user-friendly, human-centered products.
            </p>

            <a
              href="/Aklile_Ansa.pdf"
              download
              className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              My Resume
            </a>

            <div className="mt-12 flex items-center justify-center">
              <div className="flex items-center gap-4 px-6 py-3 border border-emerald-400/50 rounded-full bg-[#253137]/60 backdrop-blur-sm">
                <a href="https://github.com/Aklile612" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-400 hover:text-emerald-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                </a>
                <a href="https://linkedin.com/in/aklile-ansa" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-400 hover:text-emerald-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                </a>
                {/* <a href="https://behance.net" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-400 hover:text-emerald-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/></svg>
                </a> */}
                {/* <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-400 hover:text-emerald-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12c6.627 0 12-5.373 12-12S18.627 0 12 0zm7.753 5.658a10.164 10.164 0 012.206 6.145c-.323-.066-3.55-.728-6.8-.314-.075-.175-.147-.35-.224-.525a23.12 23.12 0 00-.594-1.235c3.604-1.47 5.236-3.573 5.412-3.812v.001zM12 1.834c2.562 0 4.905.978 6.667 2.578-.14.208-1.628 2.188-5.102 3.47-1.594-2.93-3.362-5.33-3.632-5.7A10.258 10.258 0 0112 1.834zm-3.913.745c.257.356 1.99 2.76 3.608 5.625-4.545 1.206-8.544 1.186-8.985 1.18a10.19 10.19 0 015.377-6.805zM1.834 12v-.31c.43.009 5.105.076 9.96-1.385.278.546.543 1.1.793 1.657-.104.03-.209.06-.312.094-5.102 1.645-7.812 6.141-8 6.476a10.151 10.151 0 01-2.44-6.531L1.834 12zm10.167 10.167c-2.198 0-4.22-.7-5.877-1.887.148-.32 2.197-4.173 7.8-6.088l.021-.007c1.396 3.626 1.972 6.672 2.122 7.54a10.173 10.173 0 01-4.066.842v-.4zm5.856-1.858c-.106-.628-.622-3.538-1.923-7.11 3.063-.489 5.75.312 6.09.422a10.162 10.162 0 01-4.167 6.688z"/></svg>
                </a> */}
                <a href="tel:0941108719" className="p-2 text-gray-400 hover:text-emerald-400 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section - Where rows land */}
      <section className="relative min-h-[700px] bg-[#253137] overflow-visible">
        {/* Grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear_gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </section>

      {/* Project Rows - Fixed while dragging, then absolute when landed */}
      <div 
        className={`${hasLanded ? 'absolute' : 'fixed'} top-0 left-0 w-full z-[1] pointer-events-none`}
        style={{ 
          transform: hasLanded ? `translateY(${targetY}px)` : `translateY(${yOffset}px)`,
        }}
      >
        {/* First row - tilted left, slides left */}
        <div 
          className="absolute left-0 flex gap-5 animate-slide-left pointer-events-auto"
          style={{ 
            top: '30px',
            transform: `rotate(${rotation1}deg)`,
            transformOrigin: 'center center',
          }}
        >
          {[...projectImages, ...projectImages, ...projectImages, ...projectImages].map((img, index) => (
            <ProjectCard key={`row1-${index}`} img={img} />
          ))}
        </div>

        {/* Second row - tilted right, slides right */}
        <div 
          className="absolute left-0 flex gap-5 animate-slide-right pointer-events-auto"
          style={{ 
            top: '310px',
            transform: `rotate(${rotation2}deg)`,
            transformOrigin: 'center center',
          }}
        >
          {[...projectImages, ...projectImages, ...projectImages, ...projectImages].map((img, index) => (
            <ProjectCard key={`row2-${index}`} img={img} />
          ))}
        </div>
      </div>
    </>
  );
}
