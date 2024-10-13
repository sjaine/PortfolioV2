import React, { useEffect, useRef, forwardRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Card = forwardRef(({ title, type, info, thumbnail, onMouseEnter, onMouseLeave, isHovered, onClick }, ref) => {
  const hoverRef = useRef(null);

  useEffect(() => {
    const isMobile = window.innerWidth <= 1024;

    if (hoverRef.current) {
      if (!isMobile) {
        if (isHovered) {
          gsap.fromTo(
            hoverRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 0.3, ease: "power3.out" }
          );
        } else {
          gsap.to(hoverRef.current, {
            opacity: 0,
            duration: 0.2,
            ease: "power3.in"
          });
        }
      } else if (isMobile) {
        ScrollTrigger.create({
          trigger: hoverRef.current,
          start: 'top 60%', 
          end: 'top 3%',
          onEnter: () => {
            gsap.to(hoverRef.current, {
              opacity: 1,
              duration: 0.5,
              ease: "sine.inOut"
            });
          },
          onLeave: () => {
            gsap.to(hoverRef.current, {
              opacity: 0,
              duration: 0.5,
              ease: "sine.inOut"
            });
          },
          onEnterBack: () => {
            gsap.to(hoverRef.current, {
              opacity: 1,
              duration: 0.5,
              ease: "sine.inOut"
            });
          },
          onLeaveBack: () => {
            gsap.to(hoverRef.current, {
              opacity: 0,
              duration: 0.5,
              ease: "sine.inOut"
            });
          }
        });
      }
    }
  }, [isHovered]);

  return (
    <div className="card" ref={ref} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={onClick}>
      <img src={thumbnail} alt={title} className="card_thumbnail" />
      <div className="hover_work" ref={hoverRef} style={{ opacity: 0 }}>
        <div className="card_type h3 main_light color_white">
          <div className="card_circle"></div>
          {type}
        </div>
        <div className="card_title title color_white">{title}</div>
        <p className="card_desc h4 body_text body color_white">{info}</p>
      </div>
    </div>
  );
});

export default Card;
