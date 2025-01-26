import React from 'react';

function About() {
  return (
    <div className="about">
        {/* header */}
        <div className="link main color_orange">
            <div className="gotoHome">👋 sjaine.me/about</div>
            <div className="copyright main color_orange">© 2025 Yoonsoo Jaine Shin <br />
Hand-coded with ❤️ using React</div>
        </div>
        {/* sections */}
        <div className="about_container">
            <div className="about_left">
                <div className="about_profileImg"><img src="/assets/profile_img.jpeg" alt="Profile" /></div>
            </div>
            <div className="about_right">
                <div className="about_annyeong color_text">
                    <div className="about_title main">🐭 sjaine.me/about/annyeong!</div>
                    <div className="about_content body">Hey, there! I’m Yoonsoo(aka, Jaine!), a Korean native and Interaction Design student @ Sheridan College, Canada. I always do my best in designing, coding, hanging out with friends, and living my own life! I’m passionate about designing products that make users' lives convenient with visual aesthetics or creating my own extraordinary works⎯ I don’t stop modifying until I'm satisfied with my work. (And yeah, sometimes I overwork because of this desire :P)</div>
                </div>
                <div className="about_experience color_text">
                    <div className="about_title main">📍 sjaine.me/about/experience</div>
                    <table className="about_content body">
                        <tr className="about_table">
                            <div>
                                <td><img src="/assets/hackville.svg" alt="Hackville" className="company_icon" /></td>
                                <td><b>Hackville</b></td>
                                <td>Co-President</td>
                            </div>
                            <td>2024 March - 2025 April</td>
                        </tr>
                        <tr className="about_table">
                            <div>
                                <td><img src="/assets/hackville.svg" alt="Hackville" className="company_icon" /></td>
                                <td><b>Hackville</b></td>
                                <td>UI/UX Designer</td>
                            </div>
                            <td>2023 June - 2024 March</td>
                        </tr>
                    </table>
                </div>
                <div className="about_skills color_text">
                    <div className="about_title main">📝 sjaine.me/about/skills</div>
                    <table className="about_content body">
                        <tr className="about_table_2">
                            <td><b>[UI/UX DESIGN]</b></td>
                            <td>Figma, UI/UX Design, Prototyping, Web Accessibility, User Research, Information Architecture</td>
                        </tr>
                        <tr className="about_table_2">
                            <td><b>[DEVELOPMENT]</b></td>
                            <td>HTML, CSS, JavaScript, React.js, Node.js, REST APIs, GitHub, MySQL, MongoDB, System Thinking</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>
  );
}

export default About;
