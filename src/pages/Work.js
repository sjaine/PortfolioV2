import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate } from 'react-router-dom'; // React Router
import * as motion from "motion/react-client"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

const projects = [
    { id: 'artbook', title: "ArtBook", thumbnail: "/assets/img/artbook.png", role: "front-end developer", start: "from September 2024", end: "to December 2024", team: "Nayeong Cho, UI/UX Designer", tools: ["Visual Studio Code", "React", "Figma", "MongoDB", "REST APIs"] },
    { id: 'instagram', title: "Instagram", thumbnail: "/assets/img/instagram.png", role: "UI/UX Designer", start: "from September 2023", end: "to December 2023", team: "Alone", tools: ["Visual Studio Code", "HTML, CSS", "Figma", "REST APIs"] },
    { id: 'pawlert', title: "Pawlert", thumbnail: "/assets/img/pawlart.png", role: "front-end developer", start: "from September 2024", end: "to December 2024", team: "Nayeong Cho, UI/UX Designer", tools: ["Visual Studio Code", "React", "Figma", "MongoDB", "REST APIs"] },
  ];

function Work() {
    const navigate = useNavigate(); // Hook for navigation

    const handleThumbnailClick = (project) => {
        navigate(`/${project.id}`, { state: { project } }); // Pass project data
    };

    return (
    <div className="work">
        {/* header */}
        <div className="link main color_orange">
            <div className="gotoHome">👋 sjaine.me/work</div>
            <div className="copyright main color_orange">© 2025 Yoonsoo Jaine Shin <br />
    Hand-coded with ❤️ using React</div>
        </div>
        {/* sections */}
        <Swiper
            pagination={true} 
            navigation={true}
            modules={[Pagination, Navigation, Autoplay]} 
            loop={true}
            className="mySwiper"
            grabCursor={true} 
            speed={500}
            slidesPerView={1}
            centeredSlides={true}
            threshold={0} 
            resistanceRatio={0} 
            touchRatio={1.5} 
        >
            {projects.map((project, index) => (
                <SwiperSlide key={index} className="work_container">
                    <motion.div 
                        animate={{ y: 0 }}
                        // Animate the component when its layout changes:
                        layout
                        // Style now supports indepedent transforms:
                        style={{ y: 80, cursor: 'pointer' }}
                        transition={{ type: "spring", stiffness: 80 }} 
                        className="work_thumb" 
                        onClick={() => handleThumbnailClick(project)} // Add click handler
                    >
                        <div className="gradient"></div>
                        <div className="view_case main">view case study 👆</div>
                        <img src={project.thumbnail} alt={`${project.title} thumbnail`} />
                    </motion.div>

                    <motion.div 
                        animate={{ y: 0 }}
                        // Animate the component when its layout changes:
                        layout
                        // Style now supports indepedent transforms:
                        style={{ y: 140 }}
                        transition={{ type: "spring", stiffness: 100 }}  
                        className="work_preview"
                    >
                        <div className="work_folderName color_blue body"><b>📁 {project.title}/</b></div>
                        <div className="work_folderContent color_text body">
                            {/* role */}
                            <div className="work_section">
                                <div className="work_line"></div>
                                <div className="work_line_1"></div>
                                <div className="work_sectionName color_blue">role/</div>
                                <div className="work_sectionDetail">
                                    <div className="work_detail_line"></div>
                                    <p>{project.role}</p>
                                </div>
                            </div>

                            {/* timeline */}
                            <div className="work_section">
                                <div className="work_line"></div>
                                <div className="work_line_2"></div>
                                <div className="work_sectionName color_blue">timeline/</div>
                                <div className="work_sectionDetail">
                                    <div className="work_detail_line"></div>
                                    <p>{project.start}</p>
                                </div>
                                <div className="work_sectionDetail">
                                    <div className="work_detail_line"></div>
                                    <p>{project.end}</p>
                                </div>
                            </div>

                            {/* team */}
                            <div className="work_section">
                                <div className="work_line"></div>
                                <div className="work_line_1"></div>
                                <div className="work_sectionName color_blue">team/</div>
                                <div className="work_sectionDetail">
                                    <div className="work_detail_line"></div>
                                    <p>{project.team}</p>
                                </div>
                            </div>

                            {/* tools */}
                            <div className="work_section">
                                <div className="work_line"></div>
                                <div className="work_line_d" style={{height: `${project.tools.length * 23.5}px`}}></div>
                                <div className="work_sectionName color_blue">tools/</div>
                                {project.tools.map((tool, index) => (
                                    <div className="work_sectionDetail" key={index}>
                                        <div className="work_detail_line"></div>
                                        <p>{tool}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
    );
}

export default Work;
