import React, { useRef, useState } from 'react';
import SwiperJS from './Swiper';

import instagram from '../../../assets/img/instagram.png';
// import placeholder from '../../../assets/img/instagram/placeholder.png';
import diagram from '../../../assets/img/instagram/diagram.svg';
import competitor from '../../../assets/img/instagram/competitor.svg';
import overview from '../../../assets/img/instagram/overview.gif';
import currentUserFlow from '../../../assets/img/instagram/currentUserFlow.svg';

import final1 from '../../../assets/img/instagram/final1.png';
import final2 from '../../../assets/img/instagram/final2.png';
import final3 from '../../../assets/img/instagram/final3.png';
import final4 from '../../../assets/img/instagram/final4.png';
import final5 from '../../../assets/img/instagram/final5.png';

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

function InstagramDetails() {
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
                <a href="https://jaineinstaaccessibility.netlify.app/" target="_blank" rel="noopener noreferrer">
                    <img src={livelink} alt="External link" />
                </a>
                <a href="https://github.com/sjaine/InstagramAccessibility"  target="_blank" rel="noopener noreferrer">
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
                        <div className="project_title title ">Instagram</div>
                    </div>
                    <div className="project_info_right">
                        <div>
                            <a href="https://jaineinstaaccessibility.netlify.app/" target="_blank" rel="noopener noreferrer" className="project_a"><i className="fa-solid fa-arrow-up-right-from-square project_arrow_up"></i></a>
                            <a href="https://github.com/sjaine/InstagramAccessibility"  target="_blank" rel="noopener noreferrer" className="project_a"><i className="fa-brands fa-github"></i></a>
                        </div>
                        <div className="project_role color_white">
                            <div className="project_role_detail body">
                                <div>ROLE</div>
                                <div>UI/UX Designer <br />Front-End Developer</div>
                            </div>
                            <div className="project_role_detail body">
                                <div>TIMELINE</div>
                                <div>August 2023 – <br /> December 2023</div>
                            </div>
                            <div className="project_role_detail body">
                                <div>TEAMMATES</div>
                                <div>Solo Project</div>
                            </div>
                            <div className="project_role_detail body">
                                <div>TOOLS</div>
                                <div className="project_tools">
                                    <div>Figma</div>
                                    <div>Vanilla Web Stack</div>
                                    <div>REST APIs</div>
                                    <div>Visual Studio Code</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="blackBackground"></div>
                <div className="photo"><img src={instagram} alt="artbook" /></div>
            </div>

            <div className="project_section bc_beige">

                <div className="project_detail project_overview">
                    <div className="ui_left">
                        <div className="project_detail_subtitle main_italic color_orange">Background</div>
                        <div className="project_detail_title title color_green title_ui">Hey, Whassup? <span>🫣</span></div>
                        <div className="project_detail_info ui_info">
                            <div className="project_detail_desc"><b>✸ Capture, Create & Share What You Love!
</b> <br />Instagram has become one of the essential photo-based platforms for people to follow trends, build communities, and bring the world closer together. For users with visual impairments, Instagram supports Alt text, which can be read aloud by screen readers. However, there are still many challenges that limit the accessibility of alternative text for users with visual difficulties.
                            </div>
                        </div>
                    </div>
                    <div className="instagram_img">
                    <img src={overview} alt="placeholder" />
                    </div>

                    <div className="project_banner_container main_italic color_white h3 ui_banner">
                        <div>
                    Vanila Web Stack • JSON • Visual Studio Code • GitHub • Vanila Web Stack • JSON • Visual Studio Code • GitHub • Vanila Web Stack • JSON • Visual Studio Code • GitHub • Vanila Web Stack • JSON • Visual Studio Code • GitHub • Vanila Web Stack • JSON • Visual Studio Code • GitHub • Vanila Web Stack • JSON • Visual Studio Code • GitHub • Vanila Web Stack • JSON • Visual Studio Code • GitHub • Vanila Web Stack • JSON • Visual Studio Code • GitHub • Vanila Web Stack • JSON • Visual Studio Code • GitHub • Vanila Web Stack • JSON • Visual Studio Code • GitHub • Vanila Web Stack • JSON • Visual Studio Code • GitHub • Vanila Web Stack • JSON • Visual Studio Code • GitHub • Vanila Web Stack • JSON • Visual Studio Code • GitHub • Vanila Web Stack • JSON • Visual Studio Code • GitHub • Vanila Web Stack • JSON • Visual Studio Code • GitHub • Vanila Web Stack • JSON • Visual Studio Code • GitHub • Vanila Web Stack • JSON • Visual Studio Code • GitHub • Vanila Web Stack • JSON • Visual Studio Code • GitHub • 
                        </div>
                    </div>
                </div>

                <div className="project_detail project_output">
                    <div className="project_detail_title title color_green title_ui">Output</div>
                </div>

                <div className="project_img ui_img" 
                    ref={scrollRef}
                    onMouseDown={handleMouseDown}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                    style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
                > 
                    <div className="project_img_container">
                        <div className="img_wrapper pawlert_img">
                            <img src={final1} alt="final1" onDragStart={(e) => e.preventDefault()} />
                        </div>
                        <div className="img_wrapper pawlert_img">
                            <img src={final2} alt="final2" onDragStart={(e) => e.preventDefault()} />
                        </div>
                        <div className="img_wrapper pawlert_img">
                            <img src={final3} alt="final3" onDragStart={(e) => e.preventDefault()} />
                        </div>
                        <div className="img_wrapper pawlert_img">
                            <img src={final4} alt="final4" onDragStart={(e) => e.preventDefault()} />
                        </div>
                        <div className="img_wrapper pawlert_img">
                            <img src={final5} alt="final5" onDragStart={(e) => e.preventDefault()} />
                        </div>
                    </div>
                </div>

                <div className="project_detail project_problem flex_column jusitfy_start">
                    <div>
                        <div className="project_detail_subtitle main_italic color_orange">Identify Problem</div>
                        <div className="project_detail_title title color_green title_ui">What's the problem?</div>
                    </div>
                        <div className="project_detail_info ui_info jusitfy_start">
                            <div className="project_detail_desc problem_table"><span>1. General User</span><br /><p>Users struggle to <strong>find the option</strong> to add Alt text, as it's hidden at the bottom of the advanced settings page, making it easy to miss.</p>
                            </div>
                            <div className="project_detail_desc problem_table"><span>2. Visually impaired users
</span> <br /><p>Users with visual impairments report that many posts <strong>lack sufficient Alt text</strong>, leaving them to rely entirely on whether others have provided it.</p>
                            </div>
                        </div>
                </div>

                <div className="project_hmw main_italic color_white">
                How might we simplify adding Alt text on Instagram <br />and improve its accessibility for visually impaired users?
                </div>

                <div className="diagram">
                    <img src={diagram} alt="diagram" />
                </div>

                <div className="project_detail project_discover flex_column jusitfy_start">
                    <div>
                        <div className="project_detail_subtitle main_italic color_orange">Discover</div>
                        <div className="project_detail_title title color_green title_ui">Let's deep dive!</div>
                    </div>
                    <div className="project_detail_info ui_info jusitfy_start">
                        <div className="project_detail_desc discover_table"><span>35%</span>35% of general users reported difficulty finding Instagram’s Alt Text button, and 15% said they were confused about how to properly write Alt Text. 
                        </div>
                        <div className="project_detail_desc discover_table"><span>23.1%
</span>23.1% of visually impaired users struggle with Instagram due to missing user-generated Alt Text, while 34.6% are dissatisfied with the inaccurate automatic Alt Text. 
                        </div>
                    </div>
                    <img src={competitor} alt="competitor analysis" className="fullImage competitor" />
                </div>

                <div className="project_detail project_define project_ui flex_column jusitfy_start">
                    <div>
                        <div className="project_detail_subtitle main_italic color_orange">Define</div>
                        <div className="project_detail_title title color_green title_ui">Instagram, for everyone!</div>
                    </div>
                        <img src={currentUserFlow} alt="current user flow" className="fullImage userFlow" />
                </div>


                <div className="project_detail project_develop project_ui flex_column jusitfy_start">
                    <div>
                        <div className="project_detail_subtitle main_italic color_orange">Develop</div>
                        <div className="project_detail_title title color_green title_ui">Start to develop</div>
                    </div>
                    
                    <SwiperJS />
                </div>

                <div className="project_detail project_deliver project_ui flex_column jusitfy_start">
                    <div>
                        <div className="project_detail_subtitle main_italic color_orange">Deliver</div>
                        <div className="project_detail_title title color_green title_ui">Main Features</div>
                    </div>
                    <div className="deliver_container">
                        <div className="project_detail_info ui_info jusitfy_start deliver_box">
                            <div className="project_detail_desc deliver_desc"><span>Main Feed
</span> <br /><br />In the main feed, the ALT text box is positioned below each photo. When a user clicks on a photo, VoiceOver reads the ALT text. Additionally, users in temporary or situational cases can conveniently view the ALT text directly in the box.
                            </div>
                            <div className="deliver_img">
                                <img src={final1} alt="final 1" />
                            </div>
                        </div>

                        <div className="project_detail_info ui_info jusitfy_start deliver_box">
                            <div className="project_detail_desc deliver_desc"><span>Pick a Photo
</span> <br /><br />Captions are generally generated by AI. While the iPhone screen reader provides the photo's date, AI suggestions describe the content of the photo, helping visually impaired users select images easily. Upon clicking a photo, VoiceOver reads the AI-generated ALT text, with an ALT text box available for temporary or situational use.

                            </div>
                            <div className="deliver_img">
                                <img src={final2} alt="final 2" />
                            </div>
                        </div>

                        <div className="project_detail_info ui_info jusitfy_start deliver_box">
                            <div className="project_detail_desc deliver_desc"><span>Add ALT Text
</span> <br /><br />The primary issue with Instagram's ALT text is its complexity. To simplify this, the ALT text button has been moved to the second page. An AI suggestion box is provided to ease the process of writing ALT text. If a user chooses not to edit, AI-generated ALT text is automatically applied.
                            </div>
                            <div className="deliver_img">
                                <img src={final3} alt="final 3" />
                            </div>
                        </div>

                        <div className="project_detail_info ui_info jusitfy_start deliver_box">
                            <div className="project_detail_desc deliver_desc"><span>Edit ALT Text
</span> <br /><br />Users can review their ALT text before uploading the photo. Since screen readers typically read from the top, the ALT text is placed below the caption for better accessibility.
                            </div>
                            <div className="deliver_img">
                                <img src={final5} alt="final 5" />
                            </div>
                        </div>
                    </div>
                </div>


                <div className="inProgress title color_green">In Progress!</div>

                {/* <div className="project_detail project_reflection project_ui flex_column jusitfy_start">
                    <div>
                        <div className="project_detail_subtitle main_italic color_orange">Reflection</div>
                        <div className="project_detail_title title color_green title_ui">Start to develop</div>
                    </div>
                        <div className="project_detail_info ui_info jusitfy_start">
                            <div className="project_detail_desc discover_table"><span>35%</span><br />35% of general users reported difficulty finding Instagram’s Alt Text button, and 15% said they were confused about how to properly write Alt Text.
                            </div>
                            <div className="project_detail_desc discover_table"><span>23.1%
</span> <br />23.1% of visually impaired users struggle with Instagram due to missing user-generated Alt Text, while 34.6% are dissatisfied with the inaccurate automatic Alt Text.
                            </div>
                        </div>
                </div> */}
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

export default InstagramDetails;


/* <table>
    <tr>
        <th></th>
        <th>Instagram</th>
        <th>Threads</th>
        <th>Twitter</th>
        <th>Facebook</th>
        <th>LinkedIn</th>
    </tr>
    <tr>
        <td>Can users easily find the &lsquo;Add Alt Text&rsquo; button?</td>
        <td>Limited Provide (Only for Post)</td>
        <td>Directly, ALT</td>
        <td>Description Button</td>
        <td>Edit &gt; Alternative Text</td>
        <td>ALT Button</td>
    </tr>
    <tr>
        <td>Are there any limitations when writing Alt Text?</td>
        <td>X</td>
        <td>X</td>
        <td>X</td>
        <td>X</td>
        <td>1000 character</td>
    </tr>
    <tr>
        <td>How is Alt Text provided for videos?</td>
        <td>Auto generated, hard to find</td>
        <td>Auto generated</td>
        <td>.SRT file</td>
        <td>Auto-generated + Editable</td>
        <td>.SRT file</td>
    </tr>
    <tr>
        <td>Does the platform provide auto-generated Alt Text?</td>
        <td>X</td>
        <td>X</td>
        <td>X</td>
        <td>O</td>
        <td>X</td>
    </tr>
</table> */