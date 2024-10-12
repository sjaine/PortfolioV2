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
  { id: 1, title: 'ArtBook', thumbnail: artbook, info: "Designed to help art beginners and travelers who often feel overwhelmed by the vast collections at museums. By offering a curated selection of artworks from different departments, users can easily choose an artwork to start with. After selecting one, they are guided through categories such as year, department, period, and medium, allowing them to explore related pieces in a more structured and manageable way.", type: "Academic Project" },
  { id: 2, title: 'Pawlert', thumbnail: pawlert, info: "(*Award Winning Project) Pawlert is a tracking system that help owners spot potential risk of heat stroke that may occur to their dog, based on real-time data the collar and app gathers.", type: "Hackathon Project" },
  { id: 3, title: 'Instagram', thumbnail: instagram, info: "Instagram has become one of the essential photo-based platforms for people to follow trends, build communities, and bring the world closer together. For users with visual impairments, Instagram supports Alt text, which can be read aloud by screen readers. However, there are still many challenges that limit the accessibility of alternative text for users with visual difficulties.", type: "Academic Project" }
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
        const isMobile = screenWidth < 1024;

        const trigger = gsap.timeline({
          scrollTrigger: {
            id: `work-card-${index}`,
            trigger: card,
            start: 'top 60%',
            end: 'top 3%',
            scrub: 2,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          }
        })
          .fromTo(
            card,
            {
              scale: 0.8,
              position: 'absolute',
              zIndex: cards.length - index,
              top: isMobile ? `${40 + index * 40}%` : `${50 + index * 40}%`,
              left: '50%',
              transform: 'translate(-50%, -50%)'
            },
            {
              scale: 1,
              top: isMobile ? `${40 + index * 30}%` : `${50 + index * 30}%`,
              duration: 4,
              ease: 'sine.inOut'
            }
          )
          .to(
            card,
            {
              top: isMobile ? `${10 + index * 40}%` : `${20 + index * 30}%`,
              scale: 0.6,
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
