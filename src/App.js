import React from 'react';
import './App.css';
import Aboutus from './component/Aboutus';
import Contactus from './component/Contactus';
import Home from './component/Home';
import Gallery from './component/gellary';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Video from './component/Video';
import GalleryService from './component/service_gellary';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<Aboutus />} />
          
          
          <Route path="/Service" element={<GalleryService />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/video" element={<Video />} />

          <Route path="/contactus" element={<Contactus />} />
          
        </Routes>
      </div>
      <footer className="py-3 border-top footer ">
                <p>Made by Man...Patel <i class="fa-solid fa-heart" style={{color: "#f20d3a",}}></i> &copy; {new Date().getFullYear()} Nayan Studio</p>
            </footer>
    </Router>
  );
}

export default App;
