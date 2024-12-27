import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CardA from './CardA';
import { useLocation } from 'react-router-dom';

import movienight from '../../assets/img/movienight.png';
import arborday from '../../assets/img/arborday.gif';
import book from '../../assets/img/book.png';
import movieposter from '../../assets/img/movieposter.png';
import movieticket from '../../assets/img/movieticket.png';
import watering from '../../assets/img/watering.png';
import leftArrow from '../../assets/img/archive_arrow.svg';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { id: 1, title: 'arbor day', thumbnail: arborday },
  { id: 2, title: 'movie ticket', thumbnail: movieticket },
  { id: 3, title: 'planting app', thumbnail: watering },
  { id: 4, title: 'book redesign', thumbnail: book },
  { id: 5, title: 'movie night', thumbnail: movienight },
  { id: 6, title: 'movie poster', thumbnail: movieposter }
];

function Archive() {
    const archiveRef = useRef(null);
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

      const isMobile = window.innerWidth <= 1024;
  
      if (!isMobile && archiveRef.current) {
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

      <div className="archive_banner project_banner_container main_italic color_white h3">
          <div>
            Archive • Archive • Archive • Archive • Archive • Archive • Archive • Archive • Archive • Archive • Archive • Archive • Archive • Archive • Archive • Archive • Archive • Archive • Archive • Archive • Archive • Archive • Archive • Archive • Archive • Archive • Archive • Archive • Archive • Archive • Archive • Archive • Archive • Archive • Archive • Archive • Archive • Archive • Archive • Archive • Archive • Archive • Archive • Archive • Archive • Archive • Archive • Archive • Archive • Archive • Archive • Archive • Archive • Archive • Archive • Archive • Archive • Archive • Archive • Archive • Archive • Archive • Archive • Archive • Archive • Archive • Archive • Archive • Archive • Archive • Archive • Archive • Archive • Archive • Archive • Archive • Archive • Archive • Archive • Archive • Archive • Archive • Archive • Archive • Archive • Archive • Archive • Archive • Archive • Archive • Archive • Archive • Archive • Archive • Archive • Archive
          </div>
      </div>

      <div className="archive_box">
        <div className="archive_list">
          <div className="archive_container"
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            style={{ cursor: isDragging ? 'grabbing' : 'grab' }}>
            <div className="archive_arrow"><img src={leftArrow} alt="left arrow" /></div>
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
