import React from 'react';
import info1 from '../assets/img/info1.png';
import info2 from '../assets/img/info2.png';
import bubble from '../assets/img/infoBubble.svg';
import bubble2 from '../assets/img/infoBubble2.svg';

function Info() {
  return (
    <div className="info_main">
      <div className="info_title title color_green">
        <div className="info_photo">
          <div className="info_photo1">
            <div className="info1">
              <img src={info1} alt="Jaine" />
            </div>
            <img className="bubble" src={bubble} alt="Bubble" />
          </div>
          <div className="info_photo2">
            <div className="info2">
              <img src={info2} alt="Jaine" />
            </div>
            <img className="bubble2" src={bubble2} alt="Bubble" />
          </div>
        </div>
      </div>
      <div className="body body_text color_text info_body">
        Hey there! I'm Yoonsoo <span>(aka Jaine!)</span>, currently studying Interaction Design at Sheridan College. I'm passionate about creating visually appealing products that enhance user convenience, always refining my work until it meets my standards.
        <br />
        <br />
        My interest in visual aesthetics and building my own website inspired me to pursue Interaction Design. I’ve gained valuable experience in <span>human-centered design</span> and developed the ability to bridge the gap between <span>design and development.</span> <i>(Fun fact: I fully hand-coded my portfolio site as well! Someone asked me, 'Which website did you use to create your portfolio?')</i>
        <br />
        <br />
        As a front-end developer, I focus on turning design into functional code with <span>HTML, CSS, JavaScript, and React,</span> ensuring a joyful user experience. I'm excited to keep learning and collaborate with more designers as I grow in this field!</div>  
    </div>
  );
}

export default Info;
