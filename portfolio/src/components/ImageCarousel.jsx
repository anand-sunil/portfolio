import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ImageCarousel({ images = [] }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const goTo = useCallback((index) => {
        setDirection(index > currentIndex ? 1 : -1);
        setCurrentIndex(index);
    }, [currentIndex]);

    const goNext = useCallback(() => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % images.length);
    }, [images.length]);

    const goPrev = useCallback(() => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    }, [images.length]);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowRight') goNext();
            if (e.key === 'ArrowLeft') goPrev();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [goNext, goPrev]);

    if (!images.length) return null;

    const slideVariants = {
        enter: (dir) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
        center: { x: 0, opacity: 1 },
        exit: (dir) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
    };

    return (
        <div className="w-full">
            {/* Main Image Display */}
            <div className="relative group rounded-2xl overflow-hidden bg-slate-900/60 border border-white/5 aspect-video">
                {/* Image Container */}
                <AnimatePresence initial={false} custom={direction} mode="wait">
                    <motion.img
                        key={currentIndex}
                        src={images[currentIndex]?.src}
                        alt={images[currentIndex]?.caption || ''}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="w-full h-full object-cover object-top"
                        draggable={false}
                    />
                </AnimatePresence>

                {/* Caption Overlay */}
                {images[currentIndex]?.caption && (
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent pt-12 pb-5 px-6 pointer-events-none">
                        <p className="text-white text-sm md:text-base font-medium tracking-wide">
                            {images[currentIndex].caption}
                        </p>
                        <p className="text-slate-400 text-xs mt-1">
                            {currentIndex + 1} / {images.length}
                        </p>
                    </div>
                )}

                {/* Navigation Arrows */}
                {images.length > 1 && (
                    <>
                        <button
                            onClick={goPrev}
                            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black/60 hover:border-white/20 hover:scale-110 active:scale-95 z-20"
                            aria-label="Previous image"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            onClick={goNext}
                            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black/60 hover:border-white/20 hover:scale-110 active:scale-95 z-20"
                            aria-label="Next image"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </>
                )}
            </div>

            {/* Thumbnail Strip */}
            {images.length > 1 && (
                <div className="mt-4 flex gap-2 overflow-x-auto pb-2 scrollbar-thin">
                    {images.map((img, index) => (
                        <button
                            key={index}
                            onClick={() => goTo(index)}
                            className={`relative flex-shrink-0 w-20 h-14 md:w-24 md:h-16 rounded-xl overflow-hidden border-2 transition-all duration-300 hover:scale-105 ${
                                index === currentIndex
                                    ? 'border-indigo-500 shadow-lg shadow-indigo-500/30 ring-1 ring-indigo-400/50'
                                    : 'border-white/5 hover:border-white/20 opacity-50 hover:opacity-80'
                            }`}
                            aria-label={`View ${img.caption || `image ${index + 1}`}`}
                        >
                            <img
                                src={img.src}
                                alt={img.caption || ''}
                                className="w-full h-full object-cover object-top"
                                draggable={false}
                            />
                            {index === currentIndex && (
                                <div className="absolute inset-0 bg-indigo-500/10"></div>
                            )}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
