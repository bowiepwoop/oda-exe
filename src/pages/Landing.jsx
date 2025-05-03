import { gsap } from 'gsap';
import Navbar from '../components/Navbar';
import Marquee from '../components/Marquee';
import Hero from '../components/Hero';
import Footer from '../components/Footer'; 

export default function Landing() {
  return (
    <div className="bg-white text-[#DB0000] min-h-screen flex flex-col font-sans">
      {/* Marquee */}
      <Marquee />

      {/* Header Section */}
      <Hero />

      {/* Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <div className="flex-1 flex justify-center items-center px-4">
        <main className="w-full max-w-[90%] sm:max-w-[80%] md:max-w-[60%] flex justify-center items-center overflow-hidden">
          <img
            onMouseEnter={() => gsap.to("#cursor", { scale: 5, duration: 0.3 })}
            onMouseLeave={() => gsap.to("#cursor", { scale: 1, duration: 0.3 })}
            src="/img/welcome.gif"
            alt="welcome"
            className="w-full h-auto max-w-full"
          />
        </main>
      </div>

      {/* Footer */}
      <Footer /> 
    </div>
  );
}
