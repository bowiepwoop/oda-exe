import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { gsap } from 'gsap';
import Navbar from '../components/Navbar';

export default function Landing() {
  const marqueeRef = useRef(null);

  useEffect(() => {
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
      <div className="bg-[#DB0000] text-white py-3 overflow-hidden whitespace-nowrap">
        <div ref={marqueeRef} className="inline-block w-[200%]">
          {Array(20).fill().map((_, i) => (
            <span key={i} className="inline-flex items-center text-sm sm:text-base md:text-lg mx-2">
              IMPERFECTION IS A STATEMENT <FaStar className="mx-2" />
            </span>
          ))}
        </div>
      </div>

      {/* Header Section */}
      <header className="border-b-2 border-[#DB0000] px-4 py-4">
        <Link
          to="/"
          onMouseEnter={() => gsap.to("#cursor", { scale: 5, duration: 0.3 })}
          onMouseLeave={() => gsap.to("#cursor", { scale: 1, duration: 0.3 })}
          className="flex flex-col sm:flex-row justify-between items-center w-full font-black text-4xl sm:text-6xl md:text-8xl lg:text-9xl text-center sm:text-left"
        >
          <span className="sm:w-1/3 font-body">ODA</span>
          <span className="sm:w-1/3 font-body">.</span>
          <span className="sm:w-1/3 font-body">EXE</span>
        </Link>
      </header>

      {/* Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <div className="flex-1 flex justify-center items-center px-4">
        <main className="w-full max-w-[90%] sm:max-w-[80%] md:max-w-[60%] flex justify-center items-center overflow-hidden">
          <img
            onMouseEnter={() => gsap.to("#cursor", { scale: 5, duration: 0.3 })}
            onMouseLeave={() => gsap.to("#cursor", { scale: 1, duration: 0.3 })}
            src="/img/welcome.gif"
            alt="welcome"
            className="w-full h-auto max-w-full"
          />
        </main>
      </div>

      {/* Footer */}
      <footer
        className="border-t-2 border-[#DB0000] py-5 px-5 font-body text-center text-base sm:text-lg"
        onMouseEnter={() => gsap.to("#cursor", { scale: 1.5, duration: 0.3 })}
        onMouseLeave={() => gsap.to("#cursor", { scale: 1, duration: 0.3 })}
      >
        © 2025
      </footer>
    </div>
  );
}
