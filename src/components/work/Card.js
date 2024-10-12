import React, { useEffect, useRef, forwardRef } from 'react';
import { gsap } from 'gsap';

const Card = forwardRef(({ title, type, info, thumbnail, onMouseEnter, onMouseLeave, isHovered, onClick }, ref) => {
  const hoverRef = useRef(null);

  useEffect(() => {
    const isMobile = window.innerWidth <= 1024;

    if (!isMobile && hoverRef.current) {
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
    } else {
      gsap.set(hoverRef.current, { display: "none" });
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
