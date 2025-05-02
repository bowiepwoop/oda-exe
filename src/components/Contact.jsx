import { useState, useEffect, useRef } from 'react';
import { GoArrowRight } from "react-icons/go";
import { FaStar } from 'react-icons/fa';
import gsap from "gsap";

const Contact = () => {
    const [isOpen, setIsOpen] = useState(false);
    const circleRef = useRef(null);
    const animationRef = useRef(null); 
  
    useEffect(() => {
      if (!isOpen && circleRef.current) {
        animationRef.current = gsap.to(circleRef.current, {
          rotation: "+=360",
          duration: 5,
          ease: "linear",
          repeat: -1,
          transformOrigin: "50% 50%",
          force3D: true, 
        });
      } else {

        if (animationRef.current) {
          animationRef.current.kill();
          animationRef.current = null;
          gsap.set(circleRef.current, { rotation: 0 });
        }
      }
  
      return () => {
        if (animationRef.current) {
          animationRef.current.kill();
          animationRef.current = null;
        }
      };
    }, [isOpen]);
  
    const openPanel = () => setIsOpen(true);
    const closePanel = () => setIsOpen(false);
  
    return (
      <>
        {!isOpen && (
          <button
            onClick={openPanel}
            className="fixed mb-16 bottom-8 right-8 z-50 w-20 h-20"
          >
            <div
              ref={circleRef}
              className="w-full h-full bg-[#DB0000] rounded-full shadow-lg flex items-center justify-center will-change-transform"
            >
              <FaStar className="h-12 w-12 text-[#FEFEFF]" />
            </div>
          </button>
        )}

      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-transparent"
          onClick={closePanel}
        />
      )}

      <div
        onClick={(e) => e.stopPropagation()}
        className={`fixed top-1/2 right-0 transform -translate-y-1/2 w-30 h-[20rem] bg-[#FEFEFF] text-[#DB0000] border-2 border-[#DB0000] shadow-xl z-40 transition-transform duration-500 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
<div className="h-full p-5 flex flex-col justify-center items-center overflow-visible">
  <h2 className="text-xl font-bold font-body mb-4 cursor-default"></h2>
  <ul className="space-y-6 text-center font-body">
    {[
      { href: "mailto:rnb120102@gmail.com", src: "/img/email.gif", alt: "EMAIL" },
      { href: "https://github.com/bowiepwoop", src: "/img/github.gif", alt: "GITHUB" },
      { href: "https://linkedin.com/in/bowiepwoop", src: "/img/linkedin.gif", alt: "LINKEDIN" },
      { href: "https://instagram.com/obladiobladaoda", src: "/img/ig.gif", alt: "INSTAGRAM" },
      { href: "https://twitter.com/bowiepwoop", src: "/img/x.gif", alt: "X" },
    ].map((link, index) => (
      <li key={index} className="relative group flex flex-col items-center">
        {/* Tooltip above the GIF */}
        <span className="absolute -top-6 text-[#db0000] text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10 pointer-events-none">
          {link.alt}
        </span>

        <a
          href={link.href}
          target="_blank"
          rel="noreferrer"
          className="inline-block transition-transform duration-300 hover:scale-125"
        >
          <img src={link.src} alt={link.alt} width="40" height="auto" />
        </a>
      </li>
    ))}
  </ul>
</div>


      </div>
    </>
  );
};

export default Contact;
