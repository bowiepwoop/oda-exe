import React, { useEffect, useRef, useCallback } from 'react';
import { gsap } from 'gsap';

const Welcome = () => {
  const containerRef = useRef(null);
  const lettersRef = useRef([]);
  const animationRefs = useRef([]); // Store animation instances
  const lastMousePos = useRef({ x: 0, y: 0 });
  const rafId = useRef(null);

  // Throttled mouse move handler using requestAnimationFrame
  const handleMouseMove = useCallback((e) => {
    lastMousePos.current = { x: e.clientX, y: e.clientY };
    
    if (!rafId.current) {
      rafId.current = requestAnimationFrame(() => {
        updateLetters();
        rafId.current = null;
      });
    }
  }, []);

  // Optimized letter position update
  const updateLetters = useCallback(() => {
    const { x: mouseX, y: mouseY } = lastMousePos.current;
    const threshold = 100;
    const thresholdSq = threshold * threshold; // Using squared distance to avoid Math.sqrt

    lettersRef.current.forEach((letter, index) => {
      if (!letter) return;

      const rect = letter.getBoundingClientRect();
      const dx = mouseX - (rect.left + rect.width / 2);
      const dy = mouseY - (rect.top + rect.height / 2);
      const distanceSq = dx * dx + dy * dy;

      // Kill any ongoing animation for this letter
      if (animationRefs.current[index]) {
        animationRefs.current[index].kill();
      }

      if (distanceSq < thresholdSq) {
        const angle = Math.atan2(dy, dx);
        const x = Math.cos(angle) * -80 * (1 - distanceSq / thresholdSq); // Scale effect by distance
        const y = Math.sin(angle) * -80 * (1 - distanceSq / thresholdSq);
        
        animationRefs.current[index] = gsap.to(letter, {
          x,
          y,
          duration: 0.5,
          ease: 'power2.out',
        });
      } else {
        animationRefs.current[index] = gsap.to(letter, {
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
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
      // Clean up all animations
      animationRefs.current.forEach(anim => anim && anim.kill());
    };
  }, [handleMouseMove]);

  const text = "Holabels! May kwento akizkis, gorabels ang lola nyey sa nyinistop para mag-buyla meslu ng mga nyoging syempre kailangan ko mag-breakfastlu diba! Syempre sayla ko yung mga nyoging pila akez ganyan oh nyoging nyoging pak! Pag ka getlas mes ng nyoging eto ang nabili kes.......Mars..ang dako..ang daks ems! Mars, kasing laki ng fesang mey..oh! Mars parang ano eh....Mars nakakamatay oh oh look oh hanggang ditobels eh..Laki mars oh..oh..Mars grabe ngayon lang ako makakakain ng ganitong nyoging.....oh diba..hello oh oh saan ka na? nandito na ako..oo, diba pwedeng gawing nyelphone oh diba..pwedeng gawing face..pwedeng iganyan-ganyan sa fesang..emsss..eme..laki SiSss ngayon lang ako makakakain ng ganito kalaking nyoging ang daks talaga sis!!";

  return (
    <div 
      ref={containerRef} 
      className="flex justify-center items-center h-full bg-white p-11 px-4 cursor-default"
    >
      <div className="max-w-3xl text-justify mx-auto">
        <p className="text-xl font-bold text-[#DB0000] leading-relaxed select-none">
          {text.split('').map((char, index) => (
            <span
              key={index}
              ref={(el) => (lettersRef.current[index] = el)}
              className="inline-block will-change-transform" // Hint for browser optimization
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default Welcome;