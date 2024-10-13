import React from 'react';

import Home from './Home';
import Info from './Info';
import Work from './work/Work';
import Archive from './archive/Archive';
import Footer from './Footer';
import Banner from './Banner';

import MobileNav from './MobileNav';

function HomePage() {
    return (
        <div>
          <MobileNav />
          <section id="home">
            <Home />
          </section>
          <div>
            <Banner />
          </div>
          <section id="work">
            <Work />
          </section>
          <section id="info">
            <Info />
          </section>
          <section id="archive">
            <Archive />
          </section>
          <section id="footer">
            <Footer />
          </section>
        </div>
      );
};

export default HomePage;
