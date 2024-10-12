import React from 'react';

const hyperlinks = [
    { id: 1, title: 'Resume', link: 'https://www.dropbox.com/scl/fi/u2qeg2kbhw6lfoslt14fy/Shin_Resume.pdf?rlkey=93j616q524y4o6v6y2bg1ermz&st=s3bglvto&dl=0' },
    { id: 2, title: 'LinkedIn', link: 'https://www.linkedin.com/in/jaineysshin/' },
    { id: 3, title: 'GitHub', link: 'https://github.com/sjaine' }
  ];

function ArtBookDetails() {
  return (
    <div>
        <div className="project_page">
            <div className="project_header color_green">
                <div className="project_info">
                    <div className="project_type">
                        <div></div>
                        <div className="main_italic">Academic Project</div>
                    </div>
                    <div className="project_title body">Improve Instagram's Accessibility of ALT text function</div>
                    <div className="project_description body">Instagram has become one of the essential photo-based platforms for people to follow trends, build communities, and bring the world closer together. For users with visual impairments, Instagram supports Alt text, which can be read aloud by screen readers. However, there are still many challenges that limit the accessibility of alternative text for users with visual difficulties.</div>
                </div>
                <div className="photo"><img src="/img/artbook.png" alt="artbook" /></div>
            </div>

            <div className="project_role color_green">
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
                    <div>HTML</div>
                    <div>CSS</div>
                    <div>JavaScript</div>
                </div>
            </div>

            <div className="project_detail">
                <div className="project_detail_title">BACKGROUND</div>
                <div className="project_detail_sub">Capture, Create & Share What You Love!</div>
                <div className="project_detail_desc">Instagram has become one of the essential photo-based platforms for people to follow trends, build communities, and bring the world closer together. For users with visual impairments, Instagram supports Alt text, which can be read aloud by screen readers. However, there are still many challenges that limit the accessibility of alternative text for users with visual difficulties.</div>
            </div>

            <div className="project_detail">
                <div className="project_detail_title">project overview</div>
                <div className="project_detail_desc">Currently, Instagram's Alt text feature presents challenges from two perspectives: users aiming to upload photos with Alt text and users seeking sufficient Alt text provision.<br />
                <br />
                ① Users intending to upload photos with Alt text encounter challenged in finding the option to add Alt text. Currently, users need to navigate to the advanced settings, located at the bottom of the new post settings, and then locate the 'Write Alt text' button. This complex and inconvenient process often results in users overlooking the available options.<br />
                <br />
                ② Users with visual impairments reported insufficient provision of Alt text in various aspects. The process, including unnecessary steps like choosing a photo, consumes a significant amount of time. Additionally, they found themselves relying entirely on the fact that other users whether provided alternative text.<br />
                <br />
                + Advanced: Furthermore, Instagram does not offer Alt text for its primary functions, such as Stories, Reels, and Direct Messages (DMs).</div>
            </div>

            <div className="project_highlight">
                <div className="project_hightlight_text">How might we modify the process of adding Alt text on Instagram,‍and simultaneously enhance the provision of Alt text for users with visual impairments?</div>
            </div>

            <div className="project_detail">
                <div className="project_detail_title">project overview</div>
                <div className="project_detail_desc">Currently, Instagram's Alt text feature presents challenges from two perspectives: users aiming to upload photos with Alt text and users seeking sufficient Alt text provision.<br />
                <br />
                ① Users intending to upload photos with Alt text encounter challenged in finding the option to add Alt text. Currently, users need to navigate to the advanced settings, located at the bottom of the new post settings, and then locate the 'Write Alt text' button. This complex and inconvenient process often results in users overlooking the available options.<br />
                <br />
                ② Users with visual impairments reported insufficient provision of Alt text in various aspects. The process, including unnecessary steps like choosing a photo, consumes a significant amount of time. Additionally, they found themselves relying entirely on the fact that other users whether provided alternative text.<br />
                <br />
                + Advanced: Furthermore, Instagram does not offer Alt text for its primary functions, such as Stories, Reels, and Direct Messages (DMs).</div>
            </div>

            <div className="project_detail">
                <div className="project_detail_title">REFLECTION</div>
                <div className="project_detail_desc">This project proved to be a valuable source of new experiences that I can use in the future. It taught me the importance of correctly empathizing the user. Prior to this project, I've usually been to fall into prejudice which came from my own experiences. For instance, as mentioned in the reflection on my first project, I initially believed that the primary issue lay in users not utilizing alt text effectively. However, I discovered that the real problem was rooted in Instagram's accessibility.<br />
                <br />
                Additionally, I gained a deeper understanding of the significance of feedback. Through user testing with initial low-fidelity wireframes, I received valuable insights regarding the direct message system. This aspect had not been a focal point for me initially, as my attention was primarily on Instagram's layout, driven by research results highlighting its accessibility challenges. The feedback prompted me to consider more detailed aspects, such as how does it work if user choose multiple photos. This input played a crucial role in enhancing the overall quality of my work.<br />
                <br />
                Ultimately, I acquired skills in using various APIs and connecting them. As a result, my overall capability improved significantly.
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
