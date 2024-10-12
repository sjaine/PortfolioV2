import React from 'react';

function Info() {
  return (
    <div className="info_main">
      <div className="info_photo">
        <div className="info1">
          <img src="/img/info1.png" alt="Jaine" />
        </div>
        <div className="info2">
          <img src="/img/info2.png" alt="Jaine" />
        </div>
        <img className="bubble" src="/img/infoBubble.svg" alt="Bubble" />
        <img className="bubble2" src="/img/infoBubble2.svg" alt="Bubble" />
      </div>
      <div className="info_title title color_green">
        IT'S A ME, JAINE!
      </div>
      <div className="body body_text color_text info_body">
        Hey, there! I’m Yoonsoo(aka, Jaine!), a Korean native and Interaction Design student @ Sheridan College, Canada. I always do my best in designing, coding, hanging out with friends, and living my own life! I’m passionate about designing products that make users' lives convenient with visual aesthetics or creating my own extraordinary works⎯ I don’t stop modifying until I'm satisfied with my work. (And yeah, sometimes I overwork because of this desire :P)
        <br />
        <br />
        My curiosity for visual aesthetics and creating my own website led me to have a specific purpose in earning a degree in Interaction Design. It brought me to broaden my creative perspective and taught me how to empathize with humans through design. As a current goal, I want to gain more valuable experiences, collaborate with many designers, and improve my design journey in a wide range. I enjoy trying experimental and distinctive designs.</div>
    </div>
  );
}

export default Info;
