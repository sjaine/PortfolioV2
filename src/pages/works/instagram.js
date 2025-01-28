import React from 'react';

function Instagram() {
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
            <div className="project_intro">
                <div className="title color_blue" >Instagram.</div>
                <div className="project_content">
                    <div className="main color_text project_subject">&lt;overview&gt;</div> 
                    <div className="body project_desc">Instagram has become one of the essential photo-based platforms for people to follow trends, build communities, and bring the world closer together. For users with visual impairments, Instagram supports Alt text, which can be read aloud by screen readers. <br />
                    <br />
                    This project aimed to improve user’s accessibility through research.</div>
                </div>
            </div>

            {/* overview */}
            <div className="body project_overview">
                <div className="overview_container">
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
            </div>

            {/* problem statement */}
            <div className="project_problem">
                <div className="main color_text">&lt;problem statement&gt;</div>
                <div className="problem_content">
                    <div className="problem_table content_left body"><span>1. General User</span><p>Users struggle to <strong>find the option</strong> to add Alt text, as it's hidden at the bottom of the advanced settings page, making it easy to miss.</p>
                    </div>
                    <div className="problem_table content_right body"><span>2. Visually impaired users
</span><p>Users with visual impairments report that many posts <strong>lack sufficient Alt text</strong>, leaving them to rely entirely on whether others have provided it.</p>
                    </div>
                </div>
            </div>

            {/* observation */}
            <div className="project_body">
                <div>
                    <div className="body_title main color_text">📁 ../discover/observation</div>
                    <div className="body_content body">
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
                    <div className="body_content body">
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
                    <div className="body_content body">
                        I improved the UI based on the findings from the Define phase, cutting the steps to access the ALT text button in half.<br />
                        <br />
                        After testing the wireframe with potential users, feedback emphasized the importance of an AI-based ALT text generator for quick navigation and better handling of multiple photo uploads. Users also highlighted the need for improved GIF accessibility in replies and more consistency in the ALT text box UI. Incorporating these insights, I finalized the design, focusing on enhancing accessibility and user experience.
                    </div>
                </div>
                <div className="body_imgs"> 
                    <img src="/assets/img/instagram/lowfi.svg" alt="low fidelity wireframe" />
                    {/* user feedback */}
                    <table>
                        <tr>
                            <td className="project_table_left">
                                <div className="main color_text">[1]</div>
                                <div className="body project_table_bold">ALT Text Generation and Efficiency</div>
                            </td>
                            <td className="body project_table_right">ALT Text Generator: An AI-based ALT text generator saves time for users, especially those navigating Instagram quickly. <br />
                            <br />
                            Efficiency: ALT text improves user experience during poor internet connections by reducing delays.</td>
                        </tr>
                        <tr>
                            <td className="project_table_left">
                                <div className="main color_text">[2]</div>
                                <div className="body project_table_bold">Multimedia & Messaging Access</div>
                            </td>
                            <td className="body project_table_right">ALT Text for Replies: GIFs used in replies need improved GIF accessibility. <br />
                            <br />
                            Multiple Photos: Better handling of multiple photo uploads with ALT text is necessary, especially on the timeline. <br />
                            <br />
                            DM Accessibility: Many users rely on Direct Messaging (DM), so enhancing its accessibility is essential.</td>
                        </tr>
                        <tr>
                            <td className="project_table_left">
                                <div className="main color_text">[3]</div>
                                <div className="body project_table_bold">UI/UX Consistency</div>
                            </td>
                            <td className="body project_table_right">UI Consistency: The ALT text box UI is inconsistent with Instagram’s interface and needs refinement. <br />
                            <br />
                            Accessibility: The AI-powered ALT text generator can greatly enhance accessibility for visual impaired users.</td>
                        </tr>
                    </table>

                    <img src="/assets/img/instagram/midfi.svg" alt="mid fidelity wireframe" />
                </div>
            </div>

            {/* deliver */}
            <div className="project_body">
                <div>📁 ../deliver/final_solution</div>

                {/* Swiper here */}

                {/* explain details */}
                <div>

                </div>
            </div>

            {/* reflection */}
            <div className="project_body">
                <div>📁 ../reflection/takeaways</div>
                <div>

                </div>

                <div>📁 ../reflection/next_steps</div>
                <div>
                    {/* next steps */}
                </div>
            </div>
        </div>
    </div>
  );
}

export default Instagram;
