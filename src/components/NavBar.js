import React from 'react';

function NavBar() {
  return (
    <div className="NavBar">
        <div className="common">
            <div><img src="/assets/navbar/home.svg" alt="home" /></div>
            <div><img src="/assets/navbar/person.svg" alt="about" /></div>
            <div><img src="/assets/navbar/folder.svg" alt="folder" /></div>
            <div><img src="/assets/navbar/archive.svg" alt="archive" /></div>
        </div>
        <div className="contact"><img src="/assets/navbar/contact.svg" alt="contact" /></div>
    </div>
  );
}

export default NavBar;
