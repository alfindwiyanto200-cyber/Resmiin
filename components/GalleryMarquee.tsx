'use client';

import React, { useRef } from 'react';

interface GalleryMarqueeProps {
  images: string[];
}

export default function GalleryMarquee({ images }: GalleryMarqueeProps) {
  const rowRef = useRef<HTMLDivElement>(null);

  const initDrag = (e: React.MouseEvent) => {
    const el = rowRef.current;
    if (!el) return;

    const inner = el.querySelector('.marquee-inner') as HTMLDivElement | null;
    if (inner) {
      inner.style.animationPlayState = 'paused';
    }

    const startX = e.pageX - el.offsetLeft;
    const scrollLeft = el.scrollLeft;
    
    const onMouseMove = (moveEvent: MouseEvent) => {
      const x = moveEvent.pageX - el.offsetLeft;
      const walk = (x - startX) * 1.5;
      el.scrollLeft = scrollLeft - walk;
    };

    const onMouseUp = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
      if (inner) {
        inner.style.animationPlayState = '';
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  };

  // Duplicate items for infinite scroll loop
  const duplicatedImages = [...images, ...images];

  return (
    <div className="marquee-container" style={{ marginTop: '20px' }}>
      <div
        ref={rowRef}
        className="marquee-row row-right-to-left"
        onMouseDown={initDrag}
        style={{ overflow: 'hidden' }}
      >
        <div className="marquee-inner">
          {duplicatedImages.map((src, idx) => (
            <div key={idx} className="gallery-card">
              <img src={src} alt="Foto bersama Klien Resmiin" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
