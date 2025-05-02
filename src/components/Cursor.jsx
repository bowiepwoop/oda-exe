import React, { useEffect } from "react";
import { gsap } from "gsap/gsap-core";

const Cursor = () => {
    useEffect(() => {
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

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
        window.removeEventListener("mousemove", handleMouseMove);
    };
}, []);

    return (
        <div id="cursor" 
             className="fixed top-0 left-0 h-[20px] w-[20px] bg-[#23FEFF] rounded-full z-10 pointer-events-none mix-blend-difference" />
    );
};

export default Cursor;