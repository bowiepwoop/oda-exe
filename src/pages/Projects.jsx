import Contact from '../components/Contact';
import ProjectCard from '../components/ProjectCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Marquee from '../components/Marquee';
import Hero from '../components/Hero';

export default function Projects() {
  return (
    <div className="bg-[#FEFEFF] text-[#DB0000] flex flex-col font-sans min-h-screen">
      {/* Marquee */}
      <Marquee className="flex-shrink-0" />

      {/* Hero */}
      <Hero className="flex-shrink-0" />

      {/* Navbar */}
      <Navbar className="flex-shrink-0" />

      {/* Main Content - Allow scrolling */}
      <main className="flex-1 overflow-y-auto px-4 py-6">
        <ProjectCard />
      </main>

      {/* Footer Section - Stays at bottom */}
      <div className="flex-shrink-0">
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
