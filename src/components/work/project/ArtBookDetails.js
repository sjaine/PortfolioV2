import React, { useRef, useState } from 'react';

import artbook from '../../../assets/img/artbook.png';

import final1 from '../../../assets/img/artbook/final1.png';
import final2 from '../../../assets/img/artbook/final2.png';
import final3 from '../../../assets/img/artbook/final3.png';
import final4 from '../../../assets/img/artbook/final4.png';
import final5 from '../../../assets/img/artbook/final5.png';

import arrow from '../../../assets/img/icons/arrow-left.svg';
import livelink from '../../../assets/img/icons/external-link.svg';
import github from  '../../../assets/img/icons/github.svg';

import arrowRight from '../../../assets/img/icons/arrow-right.svg';
import footerArrow from '../../../assets/img/icons/arrow-up-right.svg';

import { useNavigate } from 'react-router-dom';

const hyperlinks = [
    { id: 1, title: 'Resume', link: 'https://www.dropbox.com/scl/fi/u2qeg2kbhw6lfoslt14fy/Shin_Resume.pdf?rlkey=93j616q524y4o6v6y2bg1ermz&st=s3bglvto&dl=0' },
    { id: 2, title: 'LinkedIn', link: 'https://www.linkedin.com/in/jaineysshin/' },
    { id: 3, title: 'GitHub', link: 'https://github.com/sjaine' }
  ];

function ArtBookDetails() {
    const scrollRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const navigate = useNavigate();
  
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

  return (
    <div>
        <header className="project_nav">
            <div className="project_button bc_orange" onClick = {() => navigate(-1)}>
                <img src={arrow} alt="Arrow" />
                <div className="main h4 previous_button"></div>
            </div>

            <div className="project_link">
                <a href="https://artbookproject.netlify.app/" target="_blank" rel="noopener noreferrer">
                    <img src={livelink} alt="External link" />
                </a>
                <a href="https://github.com/sjaine/ArtBook"  target="_blank" rel="noopener noreferrer">
                    <img src={github} alt="GitHub" />
                </a>
            </div>
        </header>
        <div className="project_page">
            <div className="project_header">
                <div className="project_info color_white">
                    <div className="project_info_left">
                        <div className="project_type">
                            <div></div>
                            <div className="main_lightitalic">Academic Project</div>
                        </div>
                        <div className="project_title title ">ArtBook</div>
                    </div>
                    <div className="project_info_right">
                        <div>
                            <a href="https://artbookproject.netlify.app/" target="_blank" rel="noopener noreferrer" className="project_a"><i class="fa-solid fa-arrow-up-right-from-square project_arrow_up"></i></a>
                            <a href="https://github.com/sjaine/ArtBook"  target="_blank" rel="noopener noreferrer" className="project_a"><i class="fa-brands fa-github"></i></a>
                        </div>
                        <div className="project_role color_white">
                            <div className="project_role_detail body">
                                <div>ROLE</div>
                                <div>Front-end Developer</div>
                            </div>
                            <div className="project_role_detail body">
                                <div>TIMELINE</div>
                                <div>October 2024 – <br /> Present</div>
                            </div>
                            <div className="project_role_detail body">
                                <div>TEAMMATES</div>
                                <div>Nayeong Cho (UI/UX Designer)</div>
                            </div>
                            <div className="project_role_detail body">
                                <div>TOOLS</div>
                                <div className="project_tools">
                                    <div>React</div>
                                    <div>REST APIs</div>
                                    <div>Visual Studio Code</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="blackBackground"></div>
                <div className="photo"><img src={artbook} alt="artbook" /></div>
            </div>

            <div className="project_section bc_beige">

                <div className="project_detail project_overview">
                    <div className="project_detail_title title color_green">Overview</div>
                    <div className="project_detail_info">
                        <div className="project_detail_sub color_green">✸ Explore the MET's collection with ease, one artwork at a time!</div>
                        <div className="project_detail_desc">We developed a website that recommends artworks tailored to users' preferences by integrating the <a href="https://metmuseum.github.io/?ref=public_apis">MET API. <i class="fa-solid fa-arrow-up-right-from-square"></i></a> I utilized React to manage and integrate the entire HTML/CSS structure seamlessly.</div>
                        <div className="project_detail_desc">Collaborating closely with my colleague, a UI/UX designer, provided me with valuable experience in teamwork and cross-functional collaboration.</div>
                    </div>

                    <div className="project_banner_container main_italic color_white h3">
                        <div>
                    React • Rest APIs • Visual Studio Code • React • Rest APIs • Visual Studio Code • React • Rest APIs • Visual Studio Code • React • Rest APIs • Visual Studio Code • React • Rest APIs • Visual Studio Code • React • Rest APIs • Visual Studio Code • React • Rest APIs • Visual Studio Code • React • Rest APIs • Visual Studio Code • React • Rest APIs • Visual Studio Code • React • Rest APIs • Visual Studio Code • React • Rest APIs • Visual Studio Code • React • Rest APIs • Visual Studio Code • React • Rest APIs • Visual Studio Code • React • Rest APIs • Visual Studio Code • React • Rest APIs • Visual Studio Code • React • Rest APIs • Visual Studio Code • React • Rest APIs • Visual Studio Code • React • Rest APIs • Visual Studio Code • React • Rest APIs • Visual Studio Code • React • Rest APIs • Visual Studio Code • React • Rest APIs • Visual Studio Code • React • Rest APIs • Visual Studio Code • React • Rest APIs • Visual Studio Code • React • Rest APIs • Visual Studio Code • 
                        </div>
                    </div>
                </div>

                <div className="project_detail project_output">
                    <div className="project_detail_title title color_green">Output</div>
                </div>

                <div className="project_img" 
                    ref={scrollRef}
                    onMouseDown={handleMouseDown}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                    style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
                > 
                    <div className="project_img_container">
                        <div className="img_wrapper">
                            <img src={final1} alt="final1" onDragStart={(e) => e.preventDefault()} />
                        </div>
                        <div className="img_wrapper">
                            <img src={final2} alt="final2" onDragStart={(e) => e.preventDefault()} />
                        </div>
                        <div className="img_wrapper">
                            <img src={final3} alt="final3" onDragStart={(e) => e.preventDefault()} />
                        </div>
                        <div className="img_wrapper">
                            <img src={final4} alt="final4" onDragStart={(e) => e.preventDefault()} />
                        </div>
                        <div className="img_wrapper">
                            <img src={final5} alt="final5" onDragStart={(e) => e.preventDefault()} />
                        </div>
                    </div>
                </div>
            </div>

        </div>
      
        <div className="footer bc_blue project_footer">
        <div className="footer_content project_content">
            <div className="footer_left">
                <div className="left_content h3 color_white">
                    <div className="main">Let's build something <span className="color_orange main_italic">amazing</span> together.</div>
                    <div>
                        <img src={arrowRight} alt="Arrow" />
                        <a href="mailto:jaineysshin@gmail.com" className="mail main_light color_white">jaineysshin@gmail.com</a>
                    </div>
                </div>
            </div>
            <div className="footer_right">
            <div className="footer_table">
                {hyperlinks.map((hyperlink) => (
                    <a className="table project_table" key={hyperlink.id} href={hyperlink.link} target="_blank" rel="noopener noreferrer">
                        <div className="table_menu">
                            <div className="h4 color_white main_light table_num">[0{hyperlink.id}]</div>
                            <div className="h3 color_white main_light">{hyperlink.title}</div>
                        </div>
                        <img src={footerArrow} alt="footer arrow" />
                    </a>
                ))}
            </div>
            </div>
        </div>
        <div className="footer_bottom title color_green project_footer_bottom">Reach out anytime!</div>
        </div>
    </div>
  );
}

export default ArtBookDetails;
