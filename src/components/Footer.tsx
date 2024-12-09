import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t py-3 text-center text-sm text-gray-500">
      © {new Date().getFullYear()} Iran Bourse App. All rights reserved.
    </footer>
  );
};

export default Footer;
