import React, { useRef, useState } from 'react';
import * as motion from "motion/react-client"

import final1 from '../../assets/img/instagram/final1.png';
import final2 from '../../assets/img/instagram/final2.png';
import final3 from '../../assets/img/instagram/final3.png';
import final4 from '../../assets/img/instagram/final4.png';
import final5 from '../../assets/img/instagram/final5.png';

function Instagram() {
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
    <div className="project">
        {/* header */}
        <div className="link main color_orange">
            <div className="gotoHome">👋 sjaine.me/work/instagram</div>
            <div className="copyright main color_orange">© 2025 Yoonsoo Jaine Shin <br />
Hand-coded with ❤️ using React</div>
        </div>
        {/* sections */}
        <div className="project_container">
            <div className="project_thumbnail">
                <img src="/assets/img/instagram.png" alt="project thumbnail" />
            </div>

            {/* intro */}
            <motion.div
                className="project_intro"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div className="title color_blue" >Instagram.</div>
                <div className="project_content">
                    <div className="main color_text project_subject">&lt;overview&gt;</div> 
                    <div className="body project_desc line_height">Instagram has become one of the essential photo-based platforms for people to follow trends, build communities, and bring the world closer together. For users with visual impairments, Instagram supports Alt text, which can be read aloud by screen readers. <br />
                    <br />
                    This project aimed to improve user’s accessibility through research.</div>
                </div>
            </motion.div>

            {/* overview */}
            <motion.div
                className="body project_overview"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div className="overview_container line_height">
                    {/* role */}
                    <div>
                        <div className="main color_text overview_title">&lt;role&gt;</div>
                        <div>UI/UX Designer</div>
                        <div>Front-End Developer</div>
                    </div>
                    
                    {/* timeline */}
                    <div>
                        <div className="main color_text overview_title">&lt;timeline&gt;</div>
                        <div>From August 2023</div>
                        <div>To December 2023</div>
                    </div>

                    {/* team */}
                    <div>
                        <div className="main color_text overview_title">&lt;team&gt;</div>
                        <div>Alone!</div>
                    </div>

                    {/* team */}
                    <div>
                        <div className="main color_text overview_title">&lt;tools&gt;</div>
                        <div>Figma</div>
                        <div>HTML, CSS</div>
                        <div>REST APIs</div>
                        <div>Visual Studio Code</div>
                    </div>
                </div>
            </motion.div>

            {/* problem statement */}
            <motion.div
                className="project_problem"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div className="main color_text">&lt;problem statement&gt;</div>
                <div className="problem_content line_height">
                    <div className="problem_table content_left body"><span>1. General User</span><p>Users struggle to <strong>find the option</strong> to add Alt text, as it's hidden at the bottom of the advanced settings page, making it easy to miss.</p>
                    </div>
                    <div className="problem_table content_right body"><span>2. Visually impaired users
</span><p>Users with visual impairments report that many posts <strong>lack sufficient Alt text</strong>, leaving them to rely entirely on whether others have provided it.</p>
                    </div>
                </div>
            </motion.div>

            {/* observation */}
            <div className="project_body">
                <div>
                    <div className="body_title main color_text">📁 ../discover/observation</div>
                    <div className="body_content body line_height">
                    During the discovery phase of the Double Diamond process, I found that Instagram offers more limited access to ALT text compared to other platforms. By conducting a competitor analysis of five different brands, I identified key strengths that could be leveraged for improvement. <br />
                    <br />
                    As a result, I focused on two main areas for exploration: <br />
                    (1) making ALT text easier for users to find, <br />
                    (2) using auto-generated / AI-based ALT text to reduce the burden on general users.
                    </div>
                </div>

                <div className="observation_photo">
                    <div className="observation_container">
                        <img src="/assets/img/instagram/observation1.svg" alt="observation 1" />
                        <img src="/assets/img/instagram/observation2.svg" alt="observation 2" />
                    </div>
                    <div className="observation_container2">
                        <img src="/assets/img/instagram/competitor.svg" alt="competitor analysis" />
                    </div>
                </div>
            </div>

            {/* HMW Statement */}
            <div className="project_hmw body">How might we <b>simplify adding Alt text</b> on Instagram <br />
                and <b>improve its accessibility</b> for visually impaired users?</div>

            {/* define */}
            <div className="project_body">
                <div>
                    <div className="body_title main color_text">📁 ../define/user flow</div>
                    <div className="body_content body line_height">
                        Too Many Steps to Access ALT Text<br />
                        I found that users struggle to locate the ALT text feature due to too many steps involved, which discourages its use. <br />
                        <br />
                        Reducing Steps to Encourage ALT Text Usage<br />
                        To simplify the process and increase engagement, I focused on three areas:<br />
                        <br />
                        Main Feed: Position ALT text below each photo for direct access.<br />
                        Pick a Photo: Use AI to generate captions, making image selection easier for visually impaired users.<br />
                        Add & Edit ALT Text: Move the ALT text button to the Filter & Edit page, with AI-generated text as the default option and an edit feature.
                    </div>
                </div>
                <div className="body_imgs"> 
                    <img src="/assets/img/instagram/currentUserFlow.svg" alt="current user flow" />
                    <img src="/assets/img/instagram/persona1.svg" alt="current user flow" />
                    <img src="/assets/img/instagram/persona2.svg" alt="current user flow" />
                </div>
            </div>

            {/* develop */}
            <div className="project_body">
                <div>
                    <div className="body_title main color_text">📁 ../develop/creation</div>
                    <div className="body_content body line_height">
                        I improved the UI based on the findings from the Define phase, cutting the steps to access the ALT text button in half.<br />
                        <br />
                        After testing the wireframe with potential users, feedback emphasized the importance of an AI-based ALT text generator for quick navigation and better handling of multiple photo uploads. Users also highlighted the need for improved GIF accessibility in replies and more consistency in the ALT text box UI. Incorporating these insights, I finalized the design, focusing on enhancing accessibility and user experience.
                    </div>
                </div>
                <div className="body_imgs"> 
                    <img src="/assets/img/instagram/lowfi.svg" alt="low fidelity wireframe" />
                    {/* user feedback */}
                    <table className="project_table line_height">
                        <tr>
                            <td className="project_table_left">
                                <div className="main color_text">[1]</div>
                                <div className="body project_table_bold">ALT Text Generation and Efficiency</div>
                            </td>
                            <td className="body project_table_right"><b>ALT Text Generator:</b> An AI-based ALT text generator saves time for users, especially those navigating Instagram quickly. <br />
                            <br />
                            <b>Efficiency:</b> ALT text improves user experience during poor internet connections by reducing delays.</td>
                        </tr>
                        <tr>
                            <td className="project_table_left">
                                <div className="main color_text">[2]</div>
                                <div className="body project_table_bold">Multimedia & Messaging Access</div>
                            </td>
                            <td className="body project_table_right"><b>ALT Text for Replies:</b> GIFs used in replies need improved GIF accessibility. <br />
                            <br />
                            <b>Multiple Photos:</b> Better handling of multiple photo uploads with ALT text is necessary, especially on the timeline. <br />
                            <br />
                            <b>DM Accessibility:</b> Many users rely on Direct Messaging (DM), so enhancing its accessibility is essential.</td>
                        </tr>
                        <tr>
                            <td className="project_table_left">
                                <div className="main color_text">[3]</div>
                                <div className="body project_table_bold">UI/UX Consistency</div>
                            </td>
                            <td className="body project_table_right"><b>UI Consistency:</b> The ALT text box UI is inconsistent with Instagram’s interface and needs refinement. <br />
                            <br />
                            <b>Accessibility:</b> The AI-powered ALT text generator can greatly enhance accessibility for visual impaired users.</td>
                        </tr>
                    </table>

                    <img src="/assets/img/instagram/midfi.svg" alt="mid fidelity wireframe" />
                </div>
            </div>

            {/* deliver */}
            <div className="project_body">
                <div className="body_title main color_text">📁 ../deliver/final_solution</div>
            </div>

            <div className="project_deliver" 
                    ref={scrollRef}
                    onMouseDown={handleMouseDown}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                    style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
                > 
                    <div className="project_deliver_container">
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

                <div className="project_body">
                    <div className="deliver_container">
                        <div className="deliver_box line_height">
                            <div>
                                <div className="deliver_desc main color_text">[Main Feed]</div>
                                <div className="body ">In the main feed, the ALT text box is positioned below each photo. <br />When a user clicks on a photo, <strong>VoiceOver</strong> reads the ALT text.</div>
                            </div>
                            <div className="deliver_img">
                                <img src={final1} alt="final 1" />
                            </div>
                        </div>

                        <div className="deliver_box">
                            <div>
                                <div className="deliver_desc main color_text">[Pick a Photo]</div>
                                <div className="body">Captions are generally <strong>generated by AI</strong>. AI suggestions describe the content of the photo, helping visually impaired users <strong>select images easily.</strong> Upon clicking a photo, VoiceOver reads the AI-generated ALT text, with an ALT text box available for temporary or situational use.</div>
                            </div>
                            <div className="deliver_img">
                                <img src={final2} alt="final 2" />
                            </div>
                        </div>

                        <div className="deliver_box">
                            <div>
                                <div className="deliver_desc main color_text">[Add ALT Text]</div>
                                <div className="body">The primary issue with Instagram's ALT text is its complexity. To simplify this, the ALT text button has been <strong>moved to the Filter / Edit page.</strong> An AI suggestion box is provided to ease the process of writing ALT text. If a user chooses not to edit, AI-generated ALT text is automatically applied.
                            </div>
                            </div>
                            <div className="deliver_img">
                                <img src={final3} alt="final 3" />
                            </div>
                        </div>

                        <div className="deliver_box">
                            <div>
                                <div className="deliver_desc main color_text">[Edit ALT Text]</div>
                                <div className="body">Users can review their ALT text before uploading the photo. Since screen readers typically read from the top, the ALT text is placed <strong>below the caption</strong> for better accessibility.
                            </div>
                            </div>
                            <div className="deliver_img">
                                <img src={final5} alt="final 5" />
                            </div>
                        </div>
                    </div>
                </div>

            {/* reflection */}
            <div className="project_body">
                <div className="body_title main color_text">📁 ../reflection/takeaways</div>
                <div className="body_content body line_height">
                This project provided valuable experience and taught me the <b>importance of truly empathizing with users.</b> Previously, I often relied on my own experiences, which led to biases. However, I realized that the real issue was Instagram's accessibility, not users' improper use of ALT text. <br />
                <br />
                Additionally, I gained a deeper understanding of the <b>significance of feedback</b>, particularly regarding the direct messaging system. It prompted me to consider factors I hadn’t initially thought about, like how the system handles multiple photo selection. This insight played a key role in enhancing the overall quality of the project.<br />
                <br />
                Lastly, I developed skills in <b>using and connecting various APIs</b>, significantly enhancing my capabilities.
                </div>

                {/* <div className="body_title main color_text">📁 ../reflection/next_steps</div>
                <div className="body_content body">
                   
                </div> */}
            </div>
        </div>
    </div>
  );
}

export default Instagram;
