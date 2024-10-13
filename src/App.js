import { Route, Routes, useLocation } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop'; 
import React, { useEffect } from 'react';
import HomePage from './components/HomePage';
import ArtBookDetails from './components/work/project/ArtBookDetails';
import PawlertDetails from './components/work/project/PawlertDetails';

function App() {
  const location = useLocation();

  useEffect(() => {
    const navElement = document.querySelector('header'); 

    if (location.pathname === '/artbook') {
      navElement.style.display = 'none';
    } else {
      navElement.style.display = 'flex';
    }
  }, [location]);

  return (
    <>
      <ScrollToTop /> 
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/artbook" element={<ArtBookDetails />} />
        <Route path="/pawlert" element={<PawlertDetails />} />
      </Routes>
    </>
  );
}

export default App;
