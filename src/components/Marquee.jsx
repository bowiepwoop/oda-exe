import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { FaStar } from 'react-icons/fa';

export default function Marquee() {
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
    <div className="bg-[#DB0000] text-white py-3 overflow-hidden whitespace-nowrap">
      <div ref={marqueeRef} className="inline-block w-[200%]">
        {Array(20).fill().map((_, i) => (
          <span key={i} className="inline-flex items-center text-sm sm:text-base md:text-lg mx-2">
            IMPERFECTION IS A STATEMENT <FaStar className="mx-2" />
          </span>
        ))}
      </div>
    </div>
  );
}
