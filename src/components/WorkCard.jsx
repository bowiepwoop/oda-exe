import { useState, useEffect } from 'react';
import { gsap } from 'gsap';

const WorkCard = () => {
  const [works] = useState([
    { id: 1, title: 'Bowie', thumbnailUrl: '/img/cat.gif', fullImageUrl: '/img/graphic/bowie.PNG' },
    { id: 2, title: 'Queen', thumbnailUrl: '/img/cat.gif', fullImageUrl: '/img/graphic/queen.png' },
    { id: 3, title: 'Dang', thumbnailUrl: '/img/cat.gif', fullImageUrl: '/img/graphic/dang.PNG' },
    { id: 4, title: 'La Casa', thumbnailUrl: '/img/cat.gif', fullImageUrl: '/img/graphic/lacasadepapel.PNG' },
    { id: 5, title: 'Angela', thumbnailUrl: '/img/cat.gif', fullImageUrl: '/img/graphic/angela.PNG' },
    { id: 6, title: 'Snow House', thumbnailUrl: '/img/star.gif', fullImageUrl: '/img/3D/snowhouse.PNG' },
    { id: 7, title: 'Chess', thumbnailUrl: '/img/star.gif', fullImageUrl: '/img/3D/chess.png' },
    { id: 8, title: 'Gameboy', thumbnailUrl: '/img/star.gif', fullImageUrl: '/img/3D/gameboy.png' },
    { id: 9, title: 'Nobita Room', thumbnailUrl: '/img/star.gif', fullImageUrl: '/img/3D/nobitaroom.png' },
    { id: 10, title: 'Kunai', thumbnailUrl: '/img/star.gif', fullImageUrl: '/img/3D/jettskunai.png' },

    ...Array(20).fill().map((_, i) => ({
      id: i + 11,
      title: `Project ${i + 11}`,
      thumbnailUrl: '/img/heart.gif',
      fullImageUrl: `/img/sketch/${(i % 10) + 1}.jpg`
    }))
  ].slice(0, 30));

  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };

    if (selectedImage) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [selectedImage]);

  const handleHover = (e) => {
    gsap.to(e.currentTarget, {
      scale: 1.05,
      duration: 0.2,
      ease: 'power2.out'
    });
  };

  const handleHoverEnd = (e) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      duration: 0.2,
      ease: 'power2.out'
    });
  };

  return (
    <div className="w-full px-2 -mt-11 sm:py-8 mt-8 px-8">
      {/* Scrollable vertically on mobile only */}
      <div className="block sm:hidden max-h-[90vh] overflow-y-auto pb-16">
        <div className="grid grid-cols-3 gap-1">
          {works.map((work) => (
            <div
              key={work.id}
              className="relative aspect-square overflow-hidden group"
              onMouseEnter={handleHover}
              onMouseLeave={handleHoverEnd}
              onClick={() => setSelectedImage(work.fullImageUrl)}
            >
              <div className="w-full h-full p-3 border border-transparent group-hover:border-[#DB0000] transition-all">
                <img
                  src={work.thumbnailUrl}
                  alt={work.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-[#DB0000] text-[9px] font-medium font-body mb-1 uppercase w-full text-center block truncate px-1">
                  {work.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Static grid on larger screens */}
      <div className="hidden sm:grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-1">
        {works.map((work) => (
          <div
            key={work.id}
            className="relative aspect-square overflow-hidden group"
            onMouseEnter={handleHover}
            onMouseLeave={handleHoverEnd}
            onClick={() => setSelectedImage(work.fullImageUrl)}
          >
            <div className="w-full h-full p-3 border border-transparent group-hover:border-[#DB0000] transition-all">
              <img
                src={work.thumbnailUrl}
                alt={work.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-[#DB0000] text-[9px] font-medium font-body mb-1 uppercase w-full text-center block truncate px-1">
                {work.title}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-2"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-full max-h-full">
            <button
              className="absolute top-2 right-2 text-white text-sm bg-[#DB0000] rounded-full w-6 h-6 flex items-center justify-center"
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
              className="max-w-full max-h-[90vh] object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkCard;
