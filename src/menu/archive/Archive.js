import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CardA from './CardA';
import { useLocation } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { id: 1, title: 'movie night', thumbnail: 'img/movienight.png' },
  { id: 2, title: 'arbor day', thumbnail: 'img/arborday.gif' },
  { id: 3, title: 'book redesign', thumbnail: 'img/book.png' },
  { id: 4, title: 'movie poster', thumbnail: 'img/movieposter.png' }
];

function Archive() {
    const archiveRef = useRef(null);
    const containerRef = useRef(null);
    const location = useLocation();
    const scrollRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
  
    const handleMouseDown = (e) => {
      setIsDragging(true);
      setStartX(e.pageX - scrollRef.current.offsetLeft);
      setScrollLeft(scrollRef.current.scrollLeft);
    };
  
    const handleMouseLeave = () => {
      setIsDragging(false);
    };
  
    const handleMouseUp = () => {
      setIsDragging(false);
    };
  
    const handleMouseMove = (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - scrollRef.current.offsetLeft;
      const walk = (x - startX) * 1.2;
      scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    useEffect(() => {
      const triggers = [];
  
      if (archiveRef.current && containerRef.current) {
        triggers.push(
          gsap.to(archiveRef.current, {
            scrollTrigger: {
              id: 'archive',
              trigger: archiveRef.current,
              start: 'top top',
              end: 'bottom bottom',
              pin: true,
              scrub: true,
            },
          })
        );
      }
  
      ScrollTrigger.refresh();
  
      return () => {
        triggers.forEach(trigger => trigger.scrollTrigger.kill());
      };
    }, [location.pathname]);

  return (
    <div className="archive" ref={archiveRef}>
      <div className="archive_sticky">
        <div className="title color_green archive_title h0">Archive</div>
      </div>

      <div className="archive_box" ref={containerRef}>
        <div className="archive_list">
          <div className="archive_container"
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            style={{ cursor: isDragging ? 'grabbing' : 'grab' }}>
            {projects.map((project) => (
              <CardA
                key={project.id}
                thumbnail={project.thumbnail}
                className="archive_card"  
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Archive;
