import socialLinks from '@/lib/constants';
import React from 'react';

const Footer = ({ className = '' }) => {
  return (
    <footer className={`w-full bg-[#05045287] backdrop-blur-sm border-t border-white/20 text-[#8b29dc] py-6 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        
        {/* Social Icons */}
        <div className="flex space-x-6 text-2xl sm:text-3xl">
          {socialLinks.map(({ icon: Icon, url }, index) => (
            <a
              key={index}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Social Link ${index}`}
              className="text-white hover:text-white transition-all duration-300 transform hover:scale-125"
            >
              <Icon />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-sm sm:text-base text-white font-semibold">
          © {new Date().getFullYear()} Yash Kashyap
        </p>
      </div>
    </footer>
  );
};

export default Footer;
