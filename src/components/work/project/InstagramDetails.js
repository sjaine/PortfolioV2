import React from 'react';

import arrow from '../../../assets/img/icons/arrow-left.svg';
import livelink from '../../../assets/img/icons/external-link.svg';
import github from  '../../../assets/img/icons/github.svg';

import { useNavigate } from 'react-router-dom';


function InstagramDetails() {
  const navigate = useNavigate();
  
  return (
    <div>
      <header className="project_nav">
            <div className="project_button bc_orange" onClick = {() => navigate(-1)}>
                <img src={arrow} alt="Arrow" />
                <div className="main h4 previous_button"></div>
            </div>

            <div className="project_link">
                <a href="/">
                    <img src={livelink} alt="External link" />
                </a>
                <a href="/">
                    <img src={github} alt="GitHub" />
                </a>
            </div>
        </header>

        <div className="underconstrunction title">
          Underconstrunction! 
        </div>

    </div>
  );
}

export default InstagramDetails;
