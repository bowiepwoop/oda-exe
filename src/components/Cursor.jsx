import React, { useEffect, useState } from "react";
import { gsap } from "gsap/gsap-core";

const Cursor = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Check if the device is mobile on mount
  useEffect(() => {
    const checkMobileDevice = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);  // Mobile screen size
      } else {
        setIsMobile(false);  // Desktop screen size
      }
    };

    // Check on window resize and on mount
    checkMobileDevice();
    window.addEventListener("resize", checkMobileDevice);

    return () => {
      window.removeEventListener("resize", checkMobileDevice);
    };
  }, []);

  useEffect(() => {
    if (isMobile) return;  // Do nothing on mobile

    const handleMouseMove = (event) => {
      const { clientX, clientY } = event; 
      gsap.to("#cursor", {
        x: clientX - 20 / 2,
        y: clientY - 20 / 2,
        duration: 1,
        delay: 0,
        ease: "power4.out",
      });
    };

    // Add event listener for mousemove if not mobile
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isMobile]); // Run this useEffect only when isMobile changes

  return (
    !isMobile && ( // Only render cursor on desktop
      <div
        id="cursor"
        className="fixed top-0 left-0 h-[20px] w-[20px] bg-[#23FEFF] rounded-full z-10 pointer-events-none mix-blend-difference"
      />
    )
  );
};

export default Cursor;
