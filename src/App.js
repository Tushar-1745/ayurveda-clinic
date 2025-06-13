import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Doctors from './pages/Doctors';
import BookAppointment from './pages/BookAppointment';
import Treatments from './pages/Treatments';
import HerbalProducts from './pages/HerbalProducts';
import FAQ from './pages/FAQ';

function App() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <Router>
      {/* Full-height flex column layout */}
      <div className="flex flex-col min-h-screen">
        <Header />
        
        {/* Content area should grow to fill space */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/herbal-products" element={<HerbalProducts />} />
            <Route path="/treatments" element={<Treatments />} />
            <Route path="/book" element={<BookAppointment />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/faq" element={<FAQ/>}/>
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
