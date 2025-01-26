import React from 'react';

function Work() {
  return (
    <div className="work">
        {/* header */}
        <div className="link main color_orange">
            <div className="gotoHome">👋 sjaine.me/work</div>
            <div className="copyright main color_orange">© 2025 Yoonsoo Jaine Shin <br />
Hand-coded with ❤️ using React</div>
        </div>
        {/* sections */}
        <div className="work_container">
            <div className="work_thumb">
                <img src="/assets/img/artbook.png" alt="thumb" />
            </div>
            <div className="work_preview">
                <div className="work_folderName color_blue body"><b>📁 ArtBook/</b></div>
                <div className="work_folderContent color_text body">
                    <div className="work_section">
                        <div className="work_line"></div>
                        <div className="work_line_1"></div>
                        <div className="work_sectionName color_blue">role/</div>
                        <div className="work_sectionDetail">
                            <div className="work_detail_line"></div>
                            <p>front-end developer</p>
                        </div>
                    </div>
                    <div className="work_section">
                        <div className="work_line"></div>
                        <div className="work_line_2"></div>
                        <div className="work_sectionName color_blue">timeline/</div>
                        <div className="work_sectionDetail">
                            <div className="work_detail_line"></div>
                            <p>from September 2024</p>
                        </div>
                        <div className="work_sectionDetail">
                            <div className="work_detail_line"></div>
                            <p>to December 2024</p>
                        </div>
                    </div>
                    <div className="work_section">
                        <div className="work_line"></div>
                        <div className="work_line_1"></div>
                        <div className="work_sectionName color_blue">team/</div>
                        <div className="work_sectionDetail">
                            <div className="work_detail_line"></div>
                            <p>Nayeong Cho, UI/UX Designer</p>
                        </div>
                    </div>
                    <div className="work_section">
                        <div className="work_line"></div>
                        <div className="work_line_5"></div>
                        <div className="work_sectionName color_blue">tools/</div>
                        <div className="work_sectionDetail">
                            <div className="work_detail_line"></div>
                            <p>Visual Studio Code</p>
                        </div>
                        <div className="work_sectionDetail">
                            <div className="work_detail_line"></div>
                            <p>React</p>
                        </div>
                        <div className="work_sectionDetail">
                            <div className="work_detail_line"></div>
                            <p>Figma</p>
                        </div>
                        <div className="work_sectionDetail">
                            <div className="work_detail_line"></div>
                            <p>MongoDB</p>
                        </div>
                        <div className="work_sectionDetail">
                            <div className="work_detail_line"></div>
                            <p>REST APIs</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Work;
