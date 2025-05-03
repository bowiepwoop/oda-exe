import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const baseClasses =
    'text-center py-4 px-4 sm:py-5 sm:px-5 text-lg sm:text-2xl uppercase font-medium font-body relative overflow-hidden group transition-all';

  const linkSpanBase =
    'relative z-10 transition-colors duration-300';

  const bgTransitionBase =
    'absolute inset-0 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out';

  return (
    <nav className="border-b-2 border-[#DB0000]">
      <div className="flex flex-col sm:grid sm:grid-cols-3">
        {/* Projects */}
        <Link
          to="/projects"
          className={`${baseClasses} ${
            isActive('/projects') ? 'bg-[#DB0000] text-[#fefeff]' : 'text-[#DB0000]'
          } border-b-2 sm:border-b-0 sm:border-r-2 border-[#DB0000]`}
          onMouseEnter={() => gsap.to("#cursor", { scale: 3.5, duration: 0.3 })}
          onMouseLeave={() => gsap.to("#cursor", { scale: 1, duration: 0.3 })}
        >
          <span
            className={`${linkSpanBase} ${
              isActive('/projects')
                ? 'group-hover:text-[#DB0000]'
                : 'group-hover:text-white'
            }`}
          >
            Projects
          </span>
          <span
            className={`${bgTransitionBase} ${
              isActive('/projects') ? 'bg-[#fefeff]' : 'bg-[#DB0000]'
            }`}
          ></span>
        </Link>

        {/* About */}
        <Link
          to="/about"
          className={`${baseClasses} ${
            isActive('/about') ? 'bg-[#DB0000] text-[#fefeff]' : 'text-[#DB0000]'
          } border-b-2 sm:border-b-0 sm:border-r-2 border-[#DB0000]`}
          onMouseEnter={() => gsap.to("#cursor", { scale: 3.5, duration: 0.3 })}
          onMouseLeave={() => gsap.to("#cursor", { scale: 1, duration: 0.3 })}
        >
          <span
            className={`${linkSpanBase} ${
              isActive('/about')
                ? 'group-hover:text-[#DB0000]'
                : 'group-hover:text-white'
            }`}
          >
            About
          </span>
          <span
            className={`${bgTransitionBase} ${
              isActive('/about') ? 'bg-[#fefeff]' : 'bg-[#DB0000]'
            }`}
          ></span>
        </Link>

        {/* Works */}
        <Link
          to="/works"
          className={`${baseClasses} ${
            isActive('/works') ? 'bg-[#DB0000] text-[#fefeff]' : 'text-[#DB0000]'
          }`}
          onMouseEnter={() => gsap.to("#cursor", { scale: 3.5, duration: 0.3 })}
          onMouseLeave={() => gsap.to("#cursor", { scale: 1, duration: 0.3 })}
        >
          <span
            className={`${linkSpanBase} ${
              isActive('/works')
                ? 'group-hover:text-[#DB0000]'
                : 'group-hover:text-white'
            }`}
          >
            Works
          </span>
          <span
            className={`${bgTransitionBase} ${
              isActive('/works') ? 'bg-[#fefeff]' : 'bg-[#DB0000]'
            }`}
          ></span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
