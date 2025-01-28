import React from 'react';
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

function NavBar() {
  return (
    <div className="NavBar">
        <div className="common">
            <a href="/" data-tooltip-id="my-tooltip" data-tooltip-content="Home" data-tooltip-place="top"><img src="/assets/navbar/home.svg" alt="home" /></a>
            <a href="/about" data-tooltip-id="my-tooltip" data-tooltip-content="About" data-tooltip-place="top"><img src="/assets/navbar/person.svg" alt="about" /></a>
            <a href="/work" data-tooltip-id="my-tooltip" data-tooltip-content="Work" data-tooltip-place="top"><img src="/assets/navbar/folder.svg" alt="folder" /></a>
            <a href="/archive" data-tooltip-id="my-tooltip" data-tooltip-content="Archive" data-tooltip-place="top"><img src="/assets/navbar/archive.svg" alt="archive" /></a>
        </div>
        <div className="contact" data-tooltip-id="my-tooltip" data-tooltip-content="Contact" data-tooltip-place="top"><img src="/assets/navbar/contact.svg" alt="contact" /></div>

        {/* Tooltip */}
        <Tooltip id="my-tooltip" className="tooltip main" opacity={0.9} />
    </div>
  );
}

export default NavBar;
