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
    // Cursor initialization is in a separate file
  }, []);

  return (
    <div className="bg-white text-[#DB0000] min-h-screen flex flex-col font-sans">
      {/* Marquee */}
      <div className="bg-[#DB0000] text-white py-5 overflow-hidden whitespace-nowrap">
        <div
          ref={marqueeRef}
          className="inline-block"
          style={{ width: "200%" }}
        >
          {Array(20).fill().map((_, i) => (
            <span key={i} className="inline-flex items-center text-lg">
              IMPERFECTION IS A STATEMENT <FaStar className="mx-1" />
            </span>
          ))}
        </div>
      </div>

      {/* Header Section */}
      <header className="border-b-2 border-[#DB0000]">
        <Link
          to="/"
          onMouseEnter={() => gsap.to("#cursor", { scale: 5, duration: 0.3 })}
          onMouseLeave={() => gsap.to("#cursor", { scale: 1, duration: 0.3 })}
          className="flex justify-between items-center w-full font-extrabold text-9xl"
        >
          <span className="w-1/3 text-left font-body">ODA</span>
          <span className="w-1/3 text-center font-body">.</span>
          <span className="w-1/3 text-right font-body">EXE</span>
        </Link>
      </header>

      {/* Navigation */}
          <Navbar />


      {/* Main Content Area */}
      <div className="flex-1 overflow-hidden"> 
    <main className="h-full">
      <ProjectCard />
    </main>
  </div>

  <Contact className="flex-shrink-0" />

      {/* Footer */}
      <footer 
    className="border-t-2 border-[#DB0000] py-5 px-5 font-body text-center text-lg flex-shrink-0"
    onMouseEnter={() => gsap.to("#cursor", { scale: 1.5, duration: 0.3 })}
    onMouseLeave={() => gsap.to("#cursor", { scale: 1, duration: 0.3 })}
  >
    © 2025
  </footer>
    </div>
  );
}