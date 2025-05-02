import { useState, useEffect } from 'react';
import { gsap } from 'gsap';

const WorkCard = () => {
  const [works] = useState([
    { id: 1, title: 'Project 1', thumbnailUrl: '/img/cat.gif', fullImageUrl: '/img/kuromi.jpeg' },
    { id: 2, title: 'Project 2', thumbnailUrl: '/img/cat.gif', fullImageUrl: '/img/kuromi.jpeg' },
    { id: 3, title: 'Project 3', thumbnailUrl: '/img/cat.gif', fullImageUrl: '/img/kuromi.jpeg' },
    { id: 4, title: 'Project 4', thumbnailUrl: '/img/cat.gif', fullImageUrl: '/img/kuromi.jpeg' },
    { id: 5, title: 'Project 5', thumbnailUrl: '/img/cat.gif', fullImageUrl: '/img/kuromi.jpeg' },
    { id: 6, title: 'Project 6', thumbnailUrl: '/img/star.gif', fullImageUrl: '/img/kuromi.jpeg' },
    { id: 7, title: 'Project 7', thumbnailUrl: '/img/star.gif', fullImageUrl: '/img/kuromi.jpeg' },
    { id: 8, title: 'Project 8', thumbnailUrl: '/img/star.gif', fullImageUrl: '/img/kuromi.jpeg' },
    { id: 9, title: 'Project 9', thumbnailUrl: '/img/star.gif', fullImageUrl: '/img/kuromi.jpeg' },
    { id: 10, title: 'Project 10', thumbnailUrl: '/img/star.gif', fullImageUrl: '/img/kuromi.jpeg' },
    { id: 11, title: 'Project 11', thumbnailUrl: '/img/heart.gif', fullImageUrl: '/img/kuromi.jpeg' },
    { id: 12, title: 'Project 12', thumbnailUrl: '/img/heart.gif', fullImageUrl: '/img/kuromi.jpeg' },
    { id: 13, title: 'Project 13', thumbnailUrl: '/img/heart.gif', fullImageUrl: '/img/kuromi.jpeg' },
    { id: 14, title: 'Project 14', thumbnailUrl: '/img/heart.gif', fullImageUrl: '/img/kuromi.jpeg' },
    { id: 15, title: 'Project 15', thumbnailUrl: '/img/heart.gif', fullImageUrl: '/img/kuromi.jpeg' },
    { id: 16, title: 'Project 16', thumbnailUrl: '/img/spiral.gif', fullImageUrl: '/img/kuromi.jpeg' },
    { id: 17, title: 'Project 17', thumbnailUrl: '/img/spiral.gif', fullImageUrl: '/img/kuromi.jpeg' },
    { id: 18, title: 'Project 18', thumbnailUrl: '/img/spiral.gif', fullImageUrl: '/img/kuromi.jpeg' },
  ]);

  const [selectedImage, setSelectedImage] = useState(null);

  // Disable scroll when modal is open
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedImage(null);
      }
    };

    if (selectedImage) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden'; // Disable scrolling
    } else {
      document.body.style.overflow = 'auto'; // Enable scrolling
    }

    // Cleanup
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto'; // Ensure scroll is enabled when unmounted
    };
  }, [selectedImage]);

  const handleHover = (e) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      duration: 0.3,
      ease: 'power2.out'
    });
  };

  const handleHoverEnd = (e) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      duration: 0.3,
      ease: 'power2.out'
    });
  };

  return (
    <div className="h-full relative">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 h-full overflow-y-auto pt-4 pb-4 no-scrollbar">
        {works.map((work) => (
          <div
            key={work.id}
            className="relative group overflow-hidden h-[280px] cursor-pointer"
            onMouseEnter={handleHover}
            onMouseLeave={handleHoverEnd}
            onClick={() => setSelectedImage(work.fullImageUrl)}
          >
            <img
              src={work.thumbnailUrl}
              alt={work.title}
              className="w-full h-full object-cover border border-transparent group-hover:border-[#db0000] border-2 transition-all duration-300 p-8"
            />
            <div className="absolute inset-0 b flex items-end justify-center">
              <h3 className="text-white text-xl font-bold mb-4 transform translate-y-6 group-hover:translate-y-0 transition-all duration-500">
                {work.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img src={selectedImage} alt="Full size" className="max-w-full max-h-full" />
        </div>
      )}

      {/* Hide scrollbars */}
      <style jsx>{`
        .no-scrollbar {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default WorkCard;
