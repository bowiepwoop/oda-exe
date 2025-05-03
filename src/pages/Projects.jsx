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
      <Marquee />

      {/* Hero */}
      <Hero />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 overflow-x-hidden px-4 py-6">
        <ProjectCard />
      </main>

      {/* Contact */}
      <div className="flex-shrink-0">
        <Contact />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
