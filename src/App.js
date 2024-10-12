import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './menu/ScrollToTop'; 
import React from 'react';
import Home from './menu/Home';
import Info from './menu/Info';
import Work from './menu/work/Work';
import Archive from './menu/archive/Archive';
import Footer from './menu/Footer';
import Banner from './menu/Banner';
import ArtBookDetails from './menu/work/project/ArtBookDetails';
import PawlertDetails from './menu/work/project/PawlertDetails';


function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route 
          path="/" 
          element={
            <div>
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
          } 
        />
        <Route path="/artbook" element={<ArtBookDetails />} />
        <Route path="/pawlert" element={<PawlertDetails />} />
      </Routes>
    </Router>    
  );
}

export default App;
