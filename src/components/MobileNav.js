import React, { useState } from 'react';

function MobileNav() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="main_light mobile_nav">
            <div className={`dropdown color_orange ${isOpen ? 'dropdown_open' : ''}`} onClick={toggleDropdown}>
                [ <i className={`bi bi-plus ${isOpen ? 'rotate' : ''}`}></i> ]
            </div>

            {isOpen && (
                <nav className={`mobile_nav_drop title ${isOpen ? 'open' : ''}`}>
                    <ul className="mobile_nav_list">
                        <li><a href="#work" className="nav color_white"><div className="mobile_nav_menu" onClick={() => setIsOpen(false)}>WORK</div></a></li>
                        <li><a href="#info" className="nav color_white"><div className="mobile_nav_menu" onClick={() => setIsOpen(false)}>INFO</div></a></li>
                        <li><a href="#archive" className="nav color_white"><div className="mobile_nav_menu" onClick={() => setIsOpen(false)}>ARCHIVE</div></a></li>
                        <li><a href="#footer" className="nav color_white"><div className="mobile_nav_menu" onClick={() => setIsOpen(false)}>CONTACT</div></a></li>
                    </ul>
                </nav>
            )}

            <a href="/" className="main nav_menu color_orange mobile_nav_menu_title">YOONSOO JAINE SHIN</a>
        </header>
    );
}

export default MobileNav;
