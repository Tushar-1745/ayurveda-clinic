import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-green-700 text-white text-sm">
      {/* Grid Container */}
      <div className="max-w-screen-xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-between">
          {/* Column 1: Quick Links */}
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <Link to="/faq" className="hover:text-yellow-300 transition duration-300">FAQ</Link>
            <Link to="/terms" className="hover:text-yellow-300 transition duration-300">Terms & Conditions</Link>
            <Link to="/privacy" className="hover:text-yellow-300 transition duration-300">Privacy Policy</Link>
          </div>

          {/* Column 2: Contact Info */}
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <span>Ayurveda Clinic</span>
            <span>123 Herbal Road, Wellness City</span>
            <span>+91 98765 43210</span>
            <span>info@ayurvedaclinic.com</span>
          </div>

          {/* Column 3: Social Media */}
          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-yellow-300 transition duration-300"
            >
              <Facebook size={18} /> Facebook
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-yellow-300 transition duration-300"
            >
              <Instagram size={18} /> Instagram
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-yellow-300 transition duration-300"
            >
              <Youtube size={18} /> YouTube
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-green-800 text-center py-4 text-xs">
        &copy; {new Date().getFullYear()} Ayurveda Clinic. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
