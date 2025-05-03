import React, { useEffect, useRef, useCallback } from 'react';
import { gsap } from 'gsap';

const Welcome = () => {
  const containerRef = useRef(null);
  const lettersRef = useRef([]);
  const animationRefs = useRef([]);
  const lastMousePos = useRef({ x: 0, y: 0 });
  const rafId = useRef(null);

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
    const { x: mouseX, y: mouseY } = lastMousePos.current;
    const threshold = 100;
    const thresholdSq = threshold * threshold;

    lettersRef.current.forEach((letter, index) => {
      if (!letter) return;

      const rect = letter.getBoundingClientRect();
      const dx = mouseX - (rect.left + rect.width / 2);
      const dy = mouseY - (rect.top + rect.height / 2);
      const distanceSq = dx * dx + dy * dy;

      if (animationRefs.current[index]) {
        animationRefs.current[index].kill();
      }

      if (distanceSq < thresholdSq) {
        const angle = Math.atan2(dy, dx);
        const x = Math.cos(angle) * -80 * (1 - distanceSq / thresholdSq);
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
      animationRefs.current.forEach(anim => anim && anim.kill());
    };
  }, [handleMouseMove]);

  const text = "Holabels! May kwento akizkis, gorabels ang lola nyey sa nyinistop para mag-buyla meslu ng mga nyoging syempre kailangan ko mag-breakfastlu diba! Syempre sayla ko yung mga nyoging pila akez ganyan oh nyoging nyoging pak! Pag ka getlas mes ng nyoging eto ang nabili kes.......Mars..ang dako..ang daks ems! Mars, kasing laki ng fesang mey..oh! Mars parang ano eh....Mars nakakamatay oh oh look oh hanggang ditobels eh..Laki mars oh..oh..Mars grabe ngayon lang ako makakakain ng ganitong nyoging.....oh diba..hello oh oh saan ka na? nandito na ako..oo, diba pwedeng gawing nyelphone oh diba..pwedeng gawing face..pwedeng iganyan-ganyan sa fesang..emsss..eme..laki SiSss ngayon lang ako makakakain ng ganito kalaking nyoging ang daks talaga sis!!";

  return (
    <div 
      ref={containerRef}
      className="w-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-10 py-8 sm:py-12 md:py-16 lg:py-20"
    >
      <div className="w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto">
        <p className="text-xs sm:text-sm md:text-base lg:text-lg font-body leading-relaxed sm:leading-loose text-justify text-center cursor-default">
          {text.split('').map((char, index) => (
            <span
              key={index}
              ref={(el) => (lettersRef.current[index] = el)}
              className="inline-block will-change-transform"
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