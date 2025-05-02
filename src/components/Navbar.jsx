import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';

const Navbar = () => {
  const location = useLocation();

  // Function to check if the link is active
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="border-b-2 border-[#DB0000]">
      <div className="grid grid-cols-3">
        {/* Projects Link */}
        <Link 
          to="/projects" 
          className={`text-center py-5 px-5 border-r-2 border-[#DB0000] text-2xl uppercase font-medium font-body relative overflow-hidden group ${
            isActive("/projects") ? "bg-[#DB0000] text-[#fefeff]" : "text-[#DB0000]"
          }`}
          onMouseEnter={() => gsap.to("#cursor", { scale: 3.5, duration: 0.3 })}
          onMouseLeave={() => gsap.to("#cursor", { scale: 1, duration: 0.3 })}
        >
          <span 
            onMouseEnter={() => gsap.to("#cursor", { scale: 3.5, duration: 0.3 })}
            onMouseLeave={() => gsap.to("#cursor", { scale: 1, duration: 0.3 })}
            className={`relative z-10 ${
            isActive("/projects") 
              ? "group-hover:text-[#DB0000]" 
              : "group-hover:text-white"
          } transition-colors duration-300`}>Projects</span>
          <span 
            onMouseEnter={() => gsap.to("#cursor", { scale: 3.5, duration: 0.3 })}
            onMouseLeave={() => gsap.to("#cursor", { scale: 1, duration: 0.3 })}
            className={`absolute inset-0 ${
            isActive("/projects") 
              ? "bg-[#fefeff]" 
              : "bg-[#DB0000]"
          } transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out`}></span>
        </Link>

        {/* About Link */}
        <Link 
          to="/about" 
          className={`text-center py-5 px-5 border-r-2 border-[#DB0000] text-2xl uppercase font-medium font-body relative overflow-hidden group ${
            isActive("/about") ? "bg-[#DB0000] text-[#fefeff]" : "text-[#db0000]"
          }`}
          onMouseEnter={() => gsap.to("#cursor", { scale: 3.5, duration: 0.3 })}
          onMouseLeave={() => gsap.to("#cursor", { scale: 1, duration: 0.3 })}
        >
          <span className={`relative z-10 ${
            isActive("/about") 
              ? "group-hover:text-[#DB0000]" 
              : "group-hover:text-[#fefeff]"
          } transition-colors duration-300`}>About</span>
          <span className={`absolute inset-0 ${
            isActive("/about") 
              ? "bg-[#fefeff]" 
              : "bg-[#DB0000]"
          } transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out`}></span>
        </Link>

        {/* Works Link */}
        <Link 
          to="/works" 
          className={`text-center py-5 px-5 text-2xl uppercase font-medium font-body relative overflow-hidden group ${
            isActive("/works") ? "bg-[#DB0000] text-[#fefeff]" : "text-[#db0000]"
          }`}
          onMouseEnter={() => gsap.to("#cursor", { scale: 3.5, duration: 0.3 })}
          onMouseLeave={() => gsap.to("#cursor", { scale: 1, duration: 0.3 })}
        >
          <span className={`relative z-10 ${
            isActive("/works") 
              ? "group-hover:text-[#DB0000]" 
              : "group-hover:text-white"
          } transition-colors duration-300`}>Works</span>
          <span className={`absolute inset-0 ${
            isActive("/works") 
              ? "bg-[#fefeff]" 
              : "bg-[#DB0000]"
          } transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out`}></span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;