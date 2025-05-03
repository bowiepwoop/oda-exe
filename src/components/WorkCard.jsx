import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const WorkCard = () => {
  const [works] = useState([
    { id: 1, title: 'Project 1', thumbnailUrl: '/img/cat.gif', fullImageUrl: '/img/graphic/bowie.PNG' },
    { id: 2, title: 'Project 2', thumbnailUrl: '/img/cat.gif', fullImageUrl: '/img/graphic/queen.png' },
    { id: 3, title: 'Project 3', thumbnailUrl: '/img/cat.gif', fullImageUrl: '/img/graphic/dang.PNG' },
    { id: 4, title: 'Project 4', thumbnailUrl: '/img/cat.gif', fullImageUrl: '/img/graphic/lacasadepapel.PNG' },
    { id: 5, title: 'Project 5', thumbnailUrl: '/img/cat.gif', fullImageUrl: '/img/graphic/angela.PNG' },
    { id: 6, title: 'Project 6', thumbnailUrl: '/img/star.gif', fullImageUrl: '/img/3D/snowhouse.PNG' },
    { id: 7, title: 'Project 7', thumbnailUrl: '/img/star.gif', fullImageUrl: '/img/3D/chess.png' },
    { id: 8, title: 'Project 8', thumbnailUrl: '/img/star.gif', fullImageUrl: '/img/3D/gameboy.png' },
    { id: 9, title: 'Project 9', thumbnailUrl: '/img/star.gif', fullImageUrl: '/img/3D/nobitaroom.png' },
    { id: 10, title: 'Project 10', thumbnailUrl: '/img/star.gif', fullImageUrl: '/img/3D/jettskunai.png' },
    { id: 11, title: 'Project 11', thumbnailUrl: '/img/heart.gif', fullImageUrl: '/img/sketch/1.JPG' },
    { id: 12, title: 'Project 12', thumbnailUrl: '/img/heart.gif', fullImageUrl: '/img/sketch/2.JPG' },
    { id: 13, title: 'Project 13', thumbnailUrl: '/img/heart.gif', fullImageUrl: '/img/sketch/3.JPG' },
    { id: 14, title: 'Project 14', thumbnailUrl: '/img/heart.gif', fullImageUrl: '/img/sketch/4.PNG' },
    { id: 15, title: 'Project 15', thumbnailUrl: '/img/heart.gif', fullImageUrl: '/img/sketch/5.PNG' },
    { id: 16, title: 'Project 16', thumbnailUrl: '/img/heart.gif', fullImageUrl: '/img/sketch/6.JPEG' },
    { id: 17, title: 'Project 17', thumbnailUrl: '/img/heart.gif', fullImageUrl: '/img/sketch/7.PNG' },
    { id: 18, title: 'Project 18', thumbnailUrl: '/img/heart.gif', fullImageUrl: '/img/sketch/8.JPEG' },
    { id: 19, title: 'Project 19', thumbnailUrl: '/img/heart.gif', fullImageUrl: '/img/sketch/9.JPEG' },
    { id: 20, title: 'Project 20', thumbnailUrl: '/img/heart.gif', fullImageUrl: '/img/sketch/10.JPEG' },
    { id: 21, title: 'Project 21', thumbnailUrl: '/img/heart.gif', fullImageUrl: '/img/sketch/11.JPEG' },
    { id: 22, title: 'Project 22', thumbnailUrl: '/img/heart.gif', fullImageUrl: '/img/sketch/12.PNG' },
    { id: 23, title: 'Project 23', thumbnailUrl: '/img/heart.gif', fullImageUrl: '/img/sketch/13.JPEG' },
    { id: 24, title: 'Project 24', thumbnailUrl: '/img/heart.gif', fullImageUrl: '/img/sketch/14.PNG' },
    { id: 25, title: 'Project 25', thumbnailUrl: '/img/heart.gif', fullImageUrl: '/img/sketch/15.PNG' },
  ]);

  const [selectedImage, setSelectedImage] = useState(null);
  const gridRef = useRef(null);

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
      scale: 1.05,
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
      <div 
        ref={gridRef}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3 md:gap-4 lg:gap-5 h-full overflow-y-auto pt-2 pb-4 px-1 sm:px-2 md:px-3 no-scrollbar"
      >
        {works.map((work) => (
          <div
            key={work.id}
            className="relative group overflow-hidden h-32 sm:h-40 md:h-48 lg:h-56 cursor-pointer"
            onMouseEnter={handleHover}
            onMouseLeave={handleHoverEnd}
            onClick={() => setSelectedImage(work.fullImageUrl)}
          >
            <img
              src={work.thumbnailUrl}
              alt={work.title}
              className="w-full h-full object-cover border border-transparent group-hover:border-[#db0000] border-2 transition-all duration-300 p-2 sm:p-3 md:p-4 lg:p-6"
            />
            <div className="absolute inset-0 flex items-end justify-center">
              <h3 className="text-white text-xs sm:text-sm md:text-base lg:text-lg font-bold mb-1 sm:mb-2 md:mb-3 transform translate-y-6 group-hover:translate-y-0 transition-all duration-500">
                {work.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-full max-h-full">
            <button 
              className="absolute top-2 right-2 text-white text-xl bg-[#DB0000] rounded-full w-8 h-8 flex items-center justify-center"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              ×
            </button>
            <img 
              src={selectedImage} 
              alt="Full size" 
              className="max-w-full max-h-[85vh] object-contain"
            />
          </div>
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