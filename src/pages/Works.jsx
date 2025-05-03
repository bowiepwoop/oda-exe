import Contact from '../components/Contact';
import WorkCard from '../components/WorkCard';
import Navbar from '../components/Navbar';
import Marquee from '../components/Marquee';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

export default function Works() {
  return (
    <div className="bg-[#FEFEFF] text-[rgb(219,0,0)] flex flex-col font-sans min-h-screen">
      {/* Marquee */}
      <Marquee />

      {/* Header Section */}
      <Hero />

      {/* Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1 p-2 flex items-center justify-center">
          <WorkCard />
      </main>

      {/* Footer Section */}
      <div className="">
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
