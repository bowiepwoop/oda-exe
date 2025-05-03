import Welcome from '../components/Welcome';
import Contact from '../components/Contact';
import Navbar from './Navbar';
import Hero from './Hero';
import Footer from './Footer';
import Marquee from './Marquee';

export default function About() {
  return (
    <div className="bg-white text-[#DB0000] min-h-screen flex flex-col font-sans">
      {/* Marquee */}
      <Marquee />

      {/* Header Section */}
      <Hero />

      {/* Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1 overflow-x-hidden px-4 py-4 sm:py-6 md:py-8">
        <Welcome />
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