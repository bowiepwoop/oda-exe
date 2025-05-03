import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { gsap } from 'gsap';
import Contact from '../components/Contact';
import ProjectCard from '../components/ProjectCard';
import Navbar from '../components/Navbar';

export default function Projects() {
  const marqueeRef = useRef(null);

  useEffect(() => {
    document.title = "ODA.exe – PROJECTS";

    const marqueeElement = marqueeRef.current;
    gsap.to(marqueeElement, {
      xPercent: -50,
      repeat: -1,
      duration: 30,
      ease: "linear"
    });
  }, []);

  return (
    <div className="bg-white text-[#DB0000] min-h-screen flex flex-col font-sans">
      {/* Marquee */}
      <div className="bg-[#DB0000] text-white py-3 sm:py-5 overflow-hidden whitespace-nowrap">
        <div
          ref={marqueeRef}
          className="inline-block"
          style={{ width: "200%" }}
        >
          {Array(20).fill().map((_, i) => (
            <span key={i} className="inline-flex items-center text-sm sm:text-base md:text-lg mx-2">
              IMPERFECTION IS A STATEMENT <FaStar className="mx-1" />
            </span>
          ))}
        </div>
      </div>

      {/* Header */}
      <header className="border-b-2 border-[#DB0000] px-4 py-6 sm:py-8">
        <Link
          to="/"
          onMouseEnter={() => gsap.to("#cursor", { scale: 5, duration: 0.3 })}
          onMouseLeave={() => gsap.to("#cursor", { scale: 1, duration: 0.3 })}
          className="flex justify-between items-center w-full font-extrabold text-5xl sm:text-7xl md:text-9xl"
        >
          <span className="w-1/3 text-left font-body">ODA</span>
          <span className="w-1/3 text-center font-body">.</span>
          <span className="w-1/3 text-right font-body">EXE</span>
        </Link>
      </header>

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 overflow-x-hidden px-4 py-6">
        <ProjectCard />
      </main>

      {/* Contact */}
      <div className="flex-shrink-0">
        <Contact />
      </div>

      {/* Footer */}
      <footer 
        className="border-t-2 border-[#DB0000] py-5 px-4 font-body text-center text-sm sm:text-base flex-shrink-0"
        onMouseEnter={() => gsap.to("#cursor", { scale: 1.5, duration: 0.3 })}
        onMouseLeave={() => gsap.to("#cursor", { scale: 1, duration: 0.3 })}
      >
        © 2025
      </footer>
    </div>
  );
}
