// src/components/PageTransition.jsx
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const PageTransition = ({ children }) => {
  const transitionRef = useRef(null);

  useEffect(() => {
    // Initial animation when component mounts
    gsap.from(transitionRef.current, {
      duration: 0.5,
      opacity: 0,
      y: 20,
      ease: "power3.out",
    });
  }, []);

  return <div ref={transitionRef}>{children}</div>;
};

export default PageTransition;