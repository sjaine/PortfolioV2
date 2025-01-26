import React from 'react';

function NavBar() {
  return (
    <div className="NavBar">
        <div className="common">
            <a href="/"><img src="/assets/navbar/home.svg" alt="home" /></a>
            <a href="/about"><img src="/assets/navbar/person.svg" alt="about" /></a>
            <a href="/work"><img src="/assets/navbar/folder.svg" alt="folder" /></a>
            <a href="/archive"><img src="/assets/navbar/archive.svg" alt="archive" /></a>
        </div>
        <div className="contact"><img src="/assets/navbar/contact.svg" alt="contact" /></div>
    </div>
  );
}

export default NavBar;
