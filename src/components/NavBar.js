import React from "react";
import * as motion from "motion/react-client"
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

function NavBar() {
  return (
    <motion.div
      className="NavBar"
    >
      <div className="common">
        <a
          href="/"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Home"
          data-tooltip-place="top"
        >
          <div className="nav_content homeNav"></div>
        </a>
        <a
          href="/about"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="About"
          data-tooltip-place="top"
        >
          <div className="nav_content aboutNav"></div>
        </a>
        <a
          href="/work"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Work"
          data-tooltip-place="top"
        >
          <div className="nav_content workNav"></div>
        </a>
        <a
          href="/archive"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Archive"
          data-tooltip-place="top"
        >
          <div className="nav_content archiveNav"></div>
        </a>
      </div>
      <div
        className="contact"
        data-tooltip-id="my-tooltip"
        data-tooltip-content="Resume"
        data-tooltip-place="top"
      >
        <div className="nav_content contactNav"></div>
      </div>

      {/* Tooltip */}
      <Tooltip id="my-tooltip" className="tooltip main" opacity={0.9} />
    </motion.div>
  );
}

export default NavBar;
