import React, { useEffect, useState } from "react";
import { gsap } from "gsap/gsap-core";

const Cursor = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Check if the device is mobile on mount
  useEffect(() => {
    const checkMobileDevice = () => {
      setIsMobile(window.innerWidth <= 768);  // Mobile screen size
    };

    // Initial check
    checkMobileDevice();

    // Check on window resize
    window.addEventListener("resize", checkMobileDevice);

    // Cleanup event listener on component unmount
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
        ease: "power4.out",
      });
    };

    // Add event listener for mousemove if not mobile
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isMobile]); // Run this useEffect only when isMobile changes

  if (isMobile) return null;  // Do not render cursor on mobile

  return (
    <div
      id="cursor"
      className="fixed top-0 left-0 h-[20px] w-[20px] bg-[#23FEFF] rounded-full z-10 pointer-events-none mix-blend-difference"
    />
  );
};

export default Cursor;
