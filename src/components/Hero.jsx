import { Link } from 'react-router-dom';
import { gsap } from 'gsap';

export default function Hero() {
  return (
    <header className="border-b-2 border-[#DB0000] px-4 py-4">
      <Link
        to="/"
        onMouseEnter={() => gsap.to("#cursor", { scale: 5, duration: 0.3 })}
        onMouseLeave={() => gsap.to("#cursor", { scale: 1, duration: 0.3 })}
        className="flex justify-between items-center w-full font-black text-4xl sm:text-6xl md:text-8xl lg:text-9xl"
      >
        <span className="w-1/3 text-left font-body">ODA</span>
        <span className="w-1/3 text-center font-body">.</span>
        <span className="w-1/3 text-right font-body">EXE</span>
      </Link>
    </header>
  );
}