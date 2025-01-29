import { Route, Routes } from 'react-router-dom';
import Instagram from './pages/works/instagram.js';
import Artbook from './pages/works/artbook.js';

import { LoadingProvider } from "./components/LoadingContext";
import LoadingScreen from "./components/LoadingScreen";

// new
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Archive from './pages/Archive';

import NavBar from './components/NavBar';

function App() {
  return (
    <>
    <LoadingProvider>
      <LoadingScreen />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/instagram" element={<Instagram />} />
        <Route path="/artbook" element={<Artbook />} />
      </Routes>
      </LoadingProvider>
    </>
  );
}

export default App;
