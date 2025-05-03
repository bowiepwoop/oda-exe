import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { gsap } from 'gsap';
import Contact from '../components/Contact';
import WorkCard from '../components/WorkCard';
import Navbar from '../components/Navbar';

export default function Works() {
  const marqueeRef = useRef(null);

  useEffect(() => {
    document.title = "ODA.exe – WORKS";

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
    <div className="bg-white text-[#DB0000] flex flex-col font-sans h-screen overflow-hidden">
      {/* Marquee */}
      <div className="bg-[#DB0000] text-white py-5 sm:py-3 md:py-2 overflow-hidden whitespace-nowrap">
        <div ref={marqueeRef} className="inline-block w-[200%]">
          {Array(20).fill().map((_, i) => (
            <span key={i} className="inline-flex items-center mb-5 text-sm sm:text-base md:text-lg">
              IMPERFECTION IS A STATEMENT <FaStar className="mx-2" />
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
          className="flex justify-between items-center w-full font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl py-2 sm:py-3 md:py-4"
        >
          <span className="w-1/3 text-left font-body pl-2 sm:pl-4">ODA</span>
          <span className="w-1/3 text-center font-body">.</span>
          <span className="w-1/3 text-right font-body pr-2 sm:pr-4">EXE</span>
        </Link>
      </header>

      {/* Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <div className="flex-grow overflow-hidden">
        <WorkCard />
      </div>

      {/* Contact & Footer Section */}
      <div className="mt-auto">
        <Contact className="flex-shrink-0" />
        
        {/* Footer */}
        <footer 
          className="border-t-2 border-[#DB0000] py-2 sm:py-3 md:py-4 lg:py-5 px-3 sm:px-4 md:px-5 font-body text-center text-sm sm:text-base md:text-lg cursor-default"
          onMouseEnter={() => gsap.to("#cursor", { scale: 1.5, duration: 0.3 })}
          onMouseLeave={() => gsap.to("#cursor", { scale: 1, duration: 0.3 })}
        >
          © 2025
        </footer>
      </div>
    </div>
  );
}