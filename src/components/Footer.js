import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLocation } from 'react-router-dom';
import arrow from '../assets/img/Arrow.svg';

gsap.registerPlugin(ScrollTrigger);

const hyperlinks = [
    { id: 1, title: 'Resume', link: 'https://www.dropbox.com/scl/fi/u2qeg2kbhw6lfoslt14fy/Shin_Resume.pdf?rlkey=93j616q524y4o6v6y2bg1ermz&st=s3bglvto&dl=0' },
    { id: 2, title: 'LinkedIn', link: 'https://www.linkedin.com/in/jaineysshin/' },
    { id: 3, title: 'GitHub', link: 'https://github.com/sjaine' }
  ];

function Footer() {
  const footerRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const triggers = [];

    if (footerRef.current) {
      triggers.push(
        gsap.to(footerRef.current, {
          scrollTrigger: {
            id: 'footer',
            trigger: footerRef.current,
            start: 'top top',
            end: 'bottom bottom',
            pin: true,
            scrub: true,
            invalidateOnRefresh: true,
          },
        })
      );
    }

    ScrollTrigger.refresh();

    // 클린업 함수로 이 컴포넌트에서 생성한 트리거만 제거
    return () => {
      triggers.forEach(trigger => trigger.scrollTrigger.kill());
    };
  }, [location.pathname]);

  return (
    <div className="footer bc_blue" ref={footerRef}>
      <div className="footer_content">
        <div className="footer_left">
            <div className="left_content h3 color_white">
                <div className="main">Let's build something <span className="color_orange main_italic">amazing</span> together.</div>
                <div>
                    <img src={arrow} alt="Arrow" />
                    <a href="mailto:jaineysshin@gmail.com" className="mail main_light color_white">jaineysshin@gmail.com</a>
                </div>
            </div>
        </div>
        <div className="footer_right">
          <div className="footer_table">
            {hyperlinks.map((hyperlink) => (
                <a className="table" key={hyperlink.id} href={hyperlink.link} target="_blank" rel="noopener noreferrer">
                    <div className="table_menu">
                        <div className="h4 color_white main_light table_num">[0{hyperlink.id}]</div>
                        <div className="h3 color_white main_light">{hyperlink.title}</div>
                    </div>
                    <div><i className="fa-solid fa-arrow-down footer_arrow color_white"></i></div>
                </a>
            ))}
          </div>
        </div>
      </div>
      <div className="footer_bottom title color_green"></div>
    </div>
  );
}

export default Footer;
