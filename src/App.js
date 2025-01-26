import { Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop'; 
import ArtBookDetails from './components/work/project/ArtBookDetails';
import PawlertDetails from './components/work/project/PawlertDetails';
import InstagramDetails from './components/work/project/InstagramDetails';

// new
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Archive from './pages/Archive';

import NavBar from './components/NavBar';


function App() {
  // const location = useLocation();

  // useEffect(() => {
  //   const navElement = document.querySelector('header'); 

  //   if (location.pathname === '/artbook' || location.pathname === '/pawlert' || location.pathname === '/instagram') {
  //     navElement.style.display = 'none';
  //   } else {
  //     navElement.style.display = 'flex';
  //   }
  // }, [location]);

  return (
    <>
      <ScrollToTop /> 
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/artbook" element={<ArtBookDetails />} />
        <Route path="/pawlert" element={<PawlertDetails />} />
        <Route path="/instagram" element={<InstagramDetails />} />
      </Routes>
    </>
  );
}

export default App;
