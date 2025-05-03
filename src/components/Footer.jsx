// src/components/Footer.jsx
import { gsap } from 'gsap';

const Footer = () => {
  return (
    <footer
      className="fixed bottom-0 left-0 w-full border-t-2 border-[#DB0000] py-5 px-5 font-body text-center text-base sm:text-lg bg-[#FEFEFF] z-50"
      onMouseEnter={() => gsap.to("#cursor", { scale: 1.5, duration: 0.3 })}
      onMouseLeave={() => gsap.to("#cursor", { scale: 1, duration: 0.3 })}
    >
      © 2025
    </footer>
  );
};

export default Footer;
