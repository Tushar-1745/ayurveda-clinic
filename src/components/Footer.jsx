import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-green-700 text-white text-center p-4">
      <p>&copy; {new Date().getFullYear()} Ayurveda Clinic. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
