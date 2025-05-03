import React, { useEffect, useRef, useCallback, useState } from 'react';
import { gsap } from 'gsap';
import { RiArrowLeftWideFill, RiArrowRightWideFill } from 'react-icons/ri';

const projects = [
  {
    title: 'HEADSPACE',
    description: `An ongoing, privacy-focused, web-based venting platform inspired by Omori. The project is designed to allow users to anonymously express their thoughts and emotions without any backend data storage. Built with React.js, Tailwind CSS and GSAP, it features a "scream into the void" space where users can post their emotions, focusing on user privacy and emotional expression.`,
    url: 'https://github.com/bowiepwoop/headspace'
  },
  {
    title: 'CLI PORTFOLIO',
    description: `A terminal-style portfolio website built with React.js and Tailwind CSS, inspired by the cyberpunk atmosphere of Serial Experiments Lain. Designed to mimic a CLI interface with keyboard-driven navigation, embracing minimalism and glitch aesthetics. Demonstrates creativity in UX and modern frontend techniques.`,
    url: 'https://github.com/bowiepwoop/oda-portfolio'
  },
  {
    title: 'RFID-BASED AMS',
    description: `A web-based attendance management system with RFID integration, designed for St. Clare College employees and students. The system includes login and sign-up functionality for users, real-time attendance logging using RFID cards and a dashboard to view attendance records. Built with PHP for the backend, MySQL for database management and RFID integration for seamless attendance tracking.`,
    url: 'http://github.com/bowiepwoop/thesis-main-1'
  },
  {
    title: 'ATTENDANCE MANAGEMENT SYSTEM',
    description: `A web-based attendance management system built with React.js, Node.js and MySQL. Designed to manage student attendance, with features including login authentication, CRUD operations for records and a dashboard to view data. Showcases full-stack development with an emphasis on user interface and real-time data handling.`,
    url: 'https://github.com/bowiepwoop/react-app-project'
  },
  {
    title: 'COLLEGE PORTFOLIO PROJECT',
    description: `A portfolio website created as part of a college project to enhance JavaScript skills. The website features basic interactive elements and demonstrates proficiency in front-end development techniques learned during the course.`,
    url: 'https://github.com/bowiepwoop/my-portfolio'
  },
];

const ProjectCard = () => {
  const containerRef = useRef(null);
  const lettersRef = useRef([]);
  const animationRefs = useRef([]);
  const lastMousePos = useRef({ x: 0, y: 0 });
  const rafId = useRef(null);
  const contentRef = useRef(null);
  const [projectIndex, setProjectIndex] = useState(0);
  const leftArrowRef = useRef(null);
  const rightArrowRef = useRef(null);
  const animationTimeline = useRef(null);
  const buttonRef = useRef(null);

  // Button hover effect
  const setupButton = useCallback(() => {
    const button = buttonRef.current;
    if (!button) return;

    const span = button.querySelector('span');
    if (!span) return;

    gsap.set(button, {
      overflow: 'hidden',
      position: 'relative',
      border: '2px solid #DB0000',
      color: '#DB0000',
    });

    gsap.set(span, {
      position: 'relative',
      zIndex: 10,
    });

    let fill = button.querySelector('.fill');
    if (fill) fill.remove();

    fill = document.createElement('div');
    fill.className = 'fill';
    Object.assign(fill.style, {
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
      height: '0%',
      backgroundColor: '#DB0000',
      zIndex: 0,
      transition: 'height 0.3s ease',
    });

    button.appendChild(fill);

    button.onmouseenter = () => {
      fill.style.height = '100%';
      gsap.to(span, { color: '#fefefe', duration: 0.2 });
    };

    button.onmouseleave = () => {
      fill.style.height = '0%';
      gsap.to(span, { color: '#DB0000', duration: 0.2 });
    };
  }, []);

  // Initialize button and arrow hover
  useEffect(() => {
    setupButton();

    gsap.set([contentRef.current, leftArrowRef.current, rightArrowRef.current], {
      willChange: 'transform, opacity',
    });

    const leftHover = gsap.to(leftArrowRef.current, {
      scale: 1.2,
      duration: 0.3,
      paused: true,
    });
    const rightHover = gsap.to(rightArrowRef.current, {
      scale: 1.2,
      duration: 0.3,
      paused: true,
    });

    leftArrowRef.current.addEventListener('mouseenter', () => leftHover.play());
    leftArrowRef.current.addEventListener('mouseleave', () => leftHover.reverse());
    rightArrowRef.current.addEventListener('mouseenter', () => rightHover.play());
    rightArrowRef.current.addEventListener('mouseleave', () => rightHover.reverse());

    return () => {
      if (animationTimeline.current) animationTimeline.current.kill();
      leftHover.kill();
      rightHover.kill();
    };
  }, [setupButton]);

  const handleMouseMove = useCallback((e) => {
    lastMousePos.current = { x: e.clientX, y: e.clientY };

    if (!rafId.current) {
      rafId.current = requestAnimationFrame(() => {
        updateLetters();
        rafId.current = null;
      });
    }
  }, []);

  const updateLetters = useCallback(() => {
    const { x, y } = lastMousePos.current;
    const threshold = 100 * 100;

    lettersRef.current.forEach((letter, i) => {
      if (!letter) return;

      const rect = letter.getBoundingClientRect();
      const dx = x - (rect.left + rect.width / 2);
      const dy = y - (rect.top + rect.height / 2);
      const distSq = dx * dx + dy * dy;

      if (animationRefs.current[i]) animationRefs.current[i].kill();

      if (distSq < threshold) {
        const angle = Math.atan2(dy, dx);
        // Reduce the animation intensity on smaller screens
        const offsetMultiplier = window.innerWidth < 768 ? -40 : -80;
        const offsetX = Math.cos(angle) * offsetMultiplier * (1 - distSq / threshold);
        const offsetY = Math.sin(angle) * offsetMultiplier * (1 - distSq / threshold);

        animationRefs.current[i] = gsap.to(letter, {
          x: offsetX,
          y: offsetY,
          duration: 0.5,
          ease: 'power2.out',
        });
      } else {
        animationRefs.current[i] = gsap.to(letter, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: 'power2.out',
        });
      }
    });
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    container.addEventListener('mousemove', handleMouseMove);
    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      animationRefs.current.forEach((a) => a && a.kill());
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [handleMouseMove]);

  const handleSlide = useCallback((dir) => {
    if (animationTimeline.current) animationTimeline.current.kill();

    const nextIndex = dir === 'left'
      ? (projectIndex - 1 + projects.length) % projects.length
      : (projectIndex + 1) % projects.length;

    const timeline = gsap.timeline({ defaults: { ease: 'power3.inOut' } });
    animationTimeline.current = timeline;

    timeline.to(
      dir === 'left' ? leftArrowRef.current : rightArrowRef.current,
      { scale: 0.9, duration: 0.1, yoyo: true, repeat: 1 },
      0
    );

    timeline.to(
      [contentRef.current, buttonRef.current],
      { x: dir === 'left' ? 100 : -100, opacity: 0, duration: 0.25 },
      0.1
    );

    timeline.add(() => {
      setProjectIndex(nextIndex);
      setTimeout(() => setupButton(), 0);
    });

    timeline.set([contentRef.current, buttonRef.current], {
      x: dir === 'left' ? -100 : 100,
      opacity: 0,
    }, '+=0.1');

    timeline.to(
      [contentRef.current, buttonRef.current],
      { x: 0, opacity: 1, duration: 0.4, onStart: () => gsap.set(lettersRef.current, { x: 0, y: 0 }) }
    );
  }, [projectIndex, setupButton]);

  const { title, description, url } = projects[projectIndex];

  return (
    <div
      ref={containerRef}
      className="relative w-full flex flex-col items-center justify-center px-2 sm:px-4 text-red-700 font-medium bg-white"
    >
      {/* Arrows */}
      <div className="absolute inset-0 flex items-center justify-between px-2 sm:px-4 md:px-6 lg:px-10 pointer-events-none">
        <div
          ref={leftArrowRef}
          onClick={() => handleSlide('left')}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl cursor-pointer pointer-events-auto text-red-700"
          onMouseEnter={() => gsap.to("#cursor", { scale: 6, duration: 0.3 })}
          onMouseLeave={() => gsap.to("#cursor", { scale: 1, duration: 0.3 })}
        >
          <RiArrowLeftWideFill />
        </div>
        <div
          ref={rightArrowRef}
          onClick={() => handleSlide('right')}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl cursor-pointer pointer-events-auto text-red-700"
          onMouseEnter={() => gsap.to("#cursor", { scale: 6, duration: 0.3 })}
          onMouseLeave={() => gsap.to("#cursor", { scale: 1, duration: 0.3 })}
        >
          <RiArrowRightWideFill />
        </div>
      </div>

      {/* Content */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-body tracking-wider text-red-700 mb-2 sm:mb-3 md:mb-4 py-3 sm:py-4 md:py-5 px-2 sm:px-4 md:px-6 whitespace-nowrap overflow-hidden cursor-default">
          {title.split('').map((char, i) => (
            <span
              key={i}
              ref={(el) => (lettersRef.current[i] = el)}
              className="inline-block will-change-transform hover:text-red-800"
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
      </h1>
      <div ref={contentRef} className="w-full max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-2xl py-2 sm:py-3 md:py-4 px-4 sm:px-6 md:px-8 text-center">
        <p className="text-xs sm:text-sm md:text-base font-body leading-relaxed mx-auto text-justify mb-3 sm:mb-4 md:mb-5 cursor-default line-clamp-6 sm:line-clamp-none">
          {description.split('').map((char, i) => (
            <span
              key={`desc-${i}`}
              ref={(el) => (lettersRef.current[title.length + i] = el)}
              className="inline-block will-change-transform"
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </p>

        <a
          ref={buttonRef}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 mt-2 sm:mt-3 md:mt-4 relative text-[#DB0000] font-medium font-body border-2 border-[#DB0000] transition-colors duration-300"
          onMouseEnter={() => gsap.to("#cursor", { scale: 2.5, duration: 0.3 })}
          onMouseLeave={() => gsap.to("#cursor", { scale: 1, duration: 0.3 })}
        >
          <span>View Here</span>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;