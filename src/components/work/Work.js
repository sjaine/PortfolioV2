import React, { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useNavigate, useLocation } from 'react-router-dom';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Card from './Card';

import artbook from '../../assets/img/artbook.png';
import pawlert from '../../assets/img/pawlart.png';
import instagram from '../../assets/img/instagram.png';

gsap.registerPlugin(ScrollTrigger);
const projects = [
  { id: 1, title: 'ArtBook', thumbnail: artbook, info: "Explore the MET's collection with ease, one artwork at a time!", type: "Academic Project", tag: "FRONT-END, COLLABORATION, REST APIs" },
  { id: 2, title: 'Instagram', thumbnail: instagram, info: "Capture, Create & Share What You Love! Improving Instagram's Accessibility for visual impairs.", type: "Academic Project", tag: "UI/UX, HTML, CSS, JAVASCRIPT" },
  { id: 3, title: 'Pawlert', thumbnail: pawlert, info: "(*Award Winning Project) Keep your dog cool and safe! Pawlert watches over them in real-time!", type: "Hackathon Project", tag: "FRONT-END, UI/UX, COLLABORATION, JSON" }
];

function Work() {
  const workRef = useRef(null);
  const [hoveredProject, setHoveredProject] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleCardClick = (title) => {
    const formattedTitle = title.toLowerCase().replace(/\s+/g, '-');
    navigate(`/${formattedTitle}`);
  };

  useLayoutEffect(() => {
    const triggers = [];
    const screenWidth = window.innerWidth;

    if (workRef.current) {
      const cards = workRef.current.querySelectorAll('.card');

      cards.forEach((card, index) => {
        const isMobile = screenWidth <= 425;
        const isTablet = screenWidth <= 1024;
        const isLaptop = screenWidth > 1024;
        const is2560 = screenWidth >= 2560;

        const trigger = gsap.timeline({
          scrollTrigger: {
            id: `work-card-${index}`,
            trigger: card,
            start:  is2560 ? 'top 70%' : 'top 60%',
            end: is2560 ? 'top 5%' : 'top 3%',
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          }
        })
          .fromTo(
            card,
            {
              scale: isMobile ? 0.9 : isTablet ? 0.8 : isLaptop ? 0.8 : 0.8,
              position: 'absolute',
              zIndex: cards.length - index,
              top: isMobile 
              ? `${30 + index * 40}%`
              : isTablet 
              ? `${40 + index * 65}%`
              : is2560 
              ? `${50 + index * 50}%`
              : `${50 + index * 40}%`,
              left: '50%',
              transform: 'translate(-50%, -50%)'
            },
            {
              scale: isMobile ? 1 : isTablet ? 0.9 : 1,
              top: isMobile 
              ? `${30 + index * 40}%` 
              : isTablet 
              ? `${40 + index * 65}%` 
              : isLaptop
              ? `${50 + index * 30}%`
              : is2560 
              ? `${50 + index * 40}%`
              : `${50 + index * 30}%`,
              duration: 4,
              ease: 'sine.inOut'
            }
          )
          .to(
            card,
            {
              top: isMobile 
              ? `${30 + index * 40}%` 
              : isTablet 
              ? `${40 + index * 65}%` 
              : isLaptop 
              ? `${20 + index * 30}%`
              : is2560 
              ? `${50 + index * 20}%`
              : `${20 + index * 30}%`,
              scale: isMobile ? 0.9 : isTablet ? 0.8 : 0.6,
              duration: 4,
              ease: 'sine.inOut'
            },
            '+=3'
          );

        triggers.push(trigger);
      });
    }

    ScrollTrigger.refresh();

    return () => {
      triggers.forEach(trigger => trigger.scrollTrigger.kill());
    };
  }, [location.pathname]);

  return (
    <div className="work" ref={workRef}>
      <div className="work_list" id="work_list">
        <div className="work_container">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              title={project.title}
              thumbnail={project.thumbnail}
              info={project.info}
              type={project.type}
              tag={project.tag}
              className="card"
              onMouseEnter={() => setHoveredProject(project)}
              onMouseLeave={() => setHoveredProject(null)}
              isHovered={hoveredProject && hoveredProject.id === project.id}
              onClick={() => handleCardClick(project.title)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Work;
