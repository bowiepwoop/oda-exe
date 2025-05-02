import './index.css';
import { useEffect, useRef } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Landing from './pages/Landing';
import Projects from './pages/Projects';
import About from './components/About';
import Works from './pages/Works';
import Cursor from './components/Cursor';
import { gsap } from 'gsap';

function App() {
  const location = useLocation();
  const fadeRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      fadeRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 3,
        ease: 'power2.out'
      }
    );
  }, [location]);

  return (
    <div className="w-full h-full overflow-hidden">
      <Cursor />
      <div ref={fadeRef} className="w-full h-screen overflow-hidden">
        <Routes location={location}>
          <Route path="/" element={<Landing />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
