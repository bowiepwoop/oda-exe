import { gsap } from 'gsap';
import Navbar from '../components/Navbar';
import Marquee from '../components/Marquee';
import Hero from '../components/Hero';
import Footer from '../components/Footer'; 

export default function Landing() {
  return (
    <div className="bg-white text-[#DB0000] flex flex-col min-h-screen">
      {/* Marquee */}
      <Marquee className="flex-shrink-0" />

      {/* Header Section */}
      <Hero className="flex-shrink-0" />

      {/* Navigation */}
      <Navbar className="flex-shrink-0" />

      {/* Main Content Area - Allow scrolling */}
      <main className="flex-1 overflow-y-auto px-4 py-6 flex justify-center items-center">
        <div className="w-full max-w-[90%] sm:max-w-[80%] md:max-w-[60%]">
          <img
            onMouseEnter={() => gsap.to("#cursor", { scale: 5, duration: 0.3 })}
            onMouseLeave={() => gsap.to("#cursor", { scale: 1, duration: 0.3 })}
            src="/img/welcome.gif"
            alt="welcome"
            className="w-full h-auto"
          />
        </div>
      </main>

      {/* Footer - Stays at bottom */}
      <div className="flex-shrink-0">
        <Footer />
      </div>
    </div>
  );
}
