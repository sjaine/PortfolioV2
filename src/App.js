import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop'; 
import React from 'react';
import Home from './components/Home';
import Info from './components/Info';
import Work from './components/work/Work';
import Archive from './components/archive/Archive';
import Footer from './components/Footer';
import Banner from './components/Banner';
import ArtBookDetails from './components/work/project/ArtBookDetails';
import PawlertDetails from './components/work/project/PawlertDetails';


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
