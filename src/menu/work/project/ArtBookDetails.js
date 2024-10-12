import React, { useRef, useState } from 'react';

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
                        <div className="project_role color_white">
                            <div className="project_role_detail body">
                                <div>ROLE</div>
                                <div>UI/UX Design</div>
                            </div>
                            <div className="project_role_detail body">
                                <div>TEAMMATES</div>
                                <div>Personal Work!</div>
                            </div>
                            <div className="project_role_detail body">
                                <div>TIMELINE</div>
                                <div>8 weeks</div>
                            </div>
                            <div className="project_role_detail body">
                                <div>TOOLS</div>
                                <div className="project_tools">
                                    <div>HTML</div>
                                    <div>CSS</div>
                                    <div>JavaScript</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="blackBackground"></div>
                <div className="photo"><img src="/img/artbook.png" alt="artbook" /></div>
            </div>

            <div className="project_section bc_beige">

                <div className="project_detail project_overview">
                    <div className="project_detail_title title color_green">Overview</div>
                    <div className="project_detail_info">
                        <div className="project_detail_sub">Capture, Create & Share What You Love!</div>
                        <div className="project_detail_desc">Instagram has become one of the essential photo-based platforms for people to follow trends, build communities, and bring the world closer together. For users with visual impairments, Instagram supports Alt text, which can be read aloud by screen readers. However, there are still many challenges that limit the accessibility of alternative text for users with visual difficulties.</div>
                    </div>

                    <div className="project_banner_container main_italic color_white h3">
                        <div>
                    React • Rest APIs • Visual Studio Code • React • Rest APIs • Visual Studio Code • React • Rest APIs • Visual Studio Code • React • Rest APIs • Visual Studio Code • React • Rest APIs • Visual Studio Code • React • Rest APIs • Visual Studio Code • React • Rest APIs • Visual Studio Code • React • Rest APIs • Visual Studio Code • React • Rest APIs • Visual Studio Code • React • Rest APIs • Visual Studio Code • React • Rest APIs • Visual Studio Code • React • Rest APIs • Visual Studio Code • React • Rest APIs • Visual Studio Code • React • Rest APIs • Visual Studio Code • React • Rest APIs • Visual Studio Code • React • Rest APIs • Visual Studio Code • React • Rest APIs • Visual Studio Code • React • Rest APIs • Visual Studio Code • React • Rest APIs • Visual Studio Code • React • Rest APIs • Visual Studio Code • React • Rest APIs • Visual Studio Code • React • Rest APIs • Visual Studio Code • React • Rest APIs • Visual Studio Code • React • Rest APIs • Visual Studio Code • 
                        </div>
                    </div>
                </div>

                <div className="project_detail project_output">
                    <div className="project_detail_title title color_green">Output</div>
                    <div className="project_detail_info">
                        <div className="project_detail_sub">Capture, Create & Share What You Love!</div>
                        <div className="project_detail_desc">Instagram has become one of the essential photo-based platforms for people to follow trends, build communities, and bring the world closer together. For users with visual impairments, Instagram supports Alt text, which can be read aloud by screen readers. However, there are still many challenges that limit the accessibility of alternative text for users with visual difficulties.</div>
                    </div>
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
                            <img src="/img/artbook/final1.png" alt="final1" onDragStart={(e) => e.preventDefault()} />
                        </div>
                        <div className="img_wrapper">
                            <img src="/img/artbook/final2.png" alt="final2" onDragStart={(e) => e.preventDefault()} />
                        </div>
                        <div className="img_wrapper">
                            <img src="/img/artbook/final3.png" alt="final3" onDragStart={(e) => e.preventDefault()} />
                        </div>
                        <div className="img_wrapper">
                            <img src="/img/artbook/final4.png" alt="final4" onDragStart={(e) => e.preventDefault()} />
                        </div>
                        <div className="img_wrapper">
                            <img src="/img/artbook/final5.png" alt="final5" onDragStart={(e) => e.preventDefault()} />
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
                        <img src="/img/Arrow.svg" alt="Arrow" />
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
                        <div><i className="fa-solid fa-arrow-down footer_arrow color_white"></i></div>
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
