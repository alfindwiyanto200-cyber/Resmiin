'use client';

import React, { useRef } from 'react';

interface Company {
  name: string;
  logo: string;
}

interface CompanyMarqueeProps {
  row1: Company[];
  row2: Company[];
}

export default function CompanyMarquee({ row1, row2 }: CompanyMarqueeProps) {
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  const initDrag = (ref: React.RefObject<HTMLDivElement | null>) => {
    return (e: React.MouseEvent) => {
      const el = ref.current;
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
  };

  const renderRow = (
    ref: React.RefObject<HTMLDivElement | null>,
    companies: Company[],
    directionClass: string
  ) => {
    // Duplicate list for infinite scroll loop
    const items = [...companies, ...companies];
    
    return (
      <div
        ref={ref}
        className={`marquee-row ${directionClass}`}
        onMouseDown={initDrag(ref)}
        style={{ overflow: 'hidden' }}
      >
        <div className="marquee-inner">
          {items.map((item, idx) => (
            <div key={idx} className="marquee-card">
              <span style={{ fontSize: '24px' }}>{item.logo}</span>
              <strong style={{ fontSize: '14px', color: '#2C4360' }}>{item.name}</strong>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="marquee-container">
      {renderRow(row1Ref, row1, 'row-left-to-right')}
      {renderRow(row2Ref, row2, 'row-right-to-left')}
    </div>
  );
}
