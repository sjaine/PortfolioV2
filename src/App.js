import { Route, Routes } from 'react-router-dom';
import InstagramDetails from './pages/works/instagram.js';

// new
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Archive from './pages/Archive';

import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/instagram" element={<InstagramDetails />} />
      </Routes>
    </>
  );
}

export default App;
