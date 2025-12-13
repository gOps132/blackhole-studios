import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxProps {
  isOpen: boolean;
  imageSrc: string;
  title: string;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  hasNext: boolean;
  hasPrev: boolean;
}

const Lightbox: React.FC<LightboxProps> = ({
  isOpen,
  imageSrc,
  title,
  onClose,
  onNext,
  onPrev,
  hasNext,
  hasPrev,
}) => {
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!isOpen) return;
    
    switch (e.key) {
      case 'Escape':
        onClose();
        break;
      case 'ArrowRight':
        if (hasNext) onNext();
        break;
      case 'ArrowLeft':
        if (hasPrev) onPrev();
        break;
      default:
        break;
    }
  }, [isOpen, hasNext, hasPrev, onNext, onPrev, onClose]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    // Prevent scrolling when lightbox is open
    if (isOpen) {
        document.body.style.overflow = 'hidden';
    }
    return () => {
        window.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'unset';
    };
  }, [handleKeyDown, isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center transition-opacity duration-300">
      {/* Close Button */}
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 md:top-8 md:right-8 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-50 group"
        aria-label="Close preview"
      >
        <X className="w-6 h-6 md:w-8 md:h-8 group-hover:scale-110 transition-transform" />
      </button>

      {/* Navigation Buttons */}
      {hasPrev && (
        <button
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-3 bg-white/5 hover:bg-white/10 rounded-full text-white transition-all z-50 group border border-white/5 hover:border-white/20"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 group-hover:-translate-x-1 transition-transform" />
        </button>
      )}

      {hasNext && (
        <button
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-3 bg-white/5 hover:bg-white/10 rounded-full text-white transition-all z-50 group border border-white/5 hover:border-white/20"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6 md:w-8 md:h-8 group-hover:translate-x-1 transition-transform" />
        </button>
      )}

      {/* Image Container */}
      <div 
        className="relative w-full h-full flex flex-col items-center justify-center p-4 md:p-12"
        onClick={onClose} // Click outside image to close
      >
        <div 
            className="relative max-w-full max-h-full"
            onClick={(e) => e.stopPropagation()} // Prevent close when clicking image
        >
            <img 
            src={imageSrc} 
            alt={title} 
            className="max-w-full max-h-[85vh] object-contain shadow-2xl rounded-sm"
            />
            <div className="absolute bottom-[-3rem] left-0 w-full text-center">
                <p className="text-white/90 text-lg font-display tracking-wide">{title}</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Lightbox;