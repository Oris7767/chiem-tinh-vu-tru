
import { useState, useEffect } from 'react';
import { cn } from '../lib/utils';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12",
        scrolled ? "py-3 bg-white/90 backdrop-blur-md shadow-sm" : "py-5 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a 
          href="/" 
          className="flex items-center space-x-3 animate-fade-in"
        >
          <img 
            src="/lovable-uploads/97fa6e16-3fd9-42cd-887d-d6d1d4d3ee6b.png" 
            alt="Votive Logo" 
            className="h-10"
          />
          <span className="text-xl md:text-2xl font-serif font-semibold text-gray-900">
            Số học Vệ Đà
          </span>
        </a>
        
        <div className="flex items-center space-x-8">
          <ul className="hidden md:flex items-center space-x-8">
            <li>
              <a href="#calculator" className="text-gray-600 hover:text-gray-900 subtle-underline animate-fade-in">
                Tính toán
              </a>
            </li>
            <li>
              <a href="#about" className="text-gray-600 hover:text-gray-900 subtle-underline animate-fade-in-delay">
                Giới thiệu
              </a>
            </li>
            <li>
              <a href="#meanings" className="text-gray-600 hover:text-gray-900 subtle-underline animate-fade-in-delay">
                Ý nghĩa
              </a>
            </li>
          </ul>
          
          <a 
            href="#calculator" 
            className="btn-primary animate-fade-in-delay"
          >
            Bắt đầu
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
