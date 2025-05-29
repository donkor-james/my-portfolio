import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
      const [isMenuOpen, setIsMenuOpen] = useState(false);
      const [isScrolled, setIsScrolled] = useState(false);
    
      useEffect(() => {
        const handleScroll = () => {
          setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
      
        useEffect(() => {
          const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
          };
          window.addEventListener('scroll', handleScroll);
          return () => window.removeEventListener('scroll', handleScroll);
        }, []);
    
  return (
    <div>
          <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
            <div className="container mx-auto px-6 py-4">
              <nav className="flex justify-between items-center">
                <a href="#" className="text-2xl font-bold flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-gradient-to-r from-teal-500 to-indigo-500"></span>
                  Emmanuel Dey
                </a>
                
                <div className="hidden lg:flex items-center gap-8">
                  <ul className="flex gap-8">
                    <Link to="/">
                    <li><a href="" className="hover:text-teal-500 transition-colors">Home</a></li>
                    </Link>
                    <Link to="/experience">
                      <li><a href="" className="hover:text-teal-500 transition-colors">Experience</a></li>
                    </Link>
                    <Link to="/courses">
                        <li><a href="" className="hover:text-teal-500 transition-colors">Courses</a></li>
                    </Link>
                    {/* <li><a href="#skills" className="hover:text-teal-500 transition-colors">Skills</a></li> */}
                  </ul>
                  {/* <a href="#contact" className="bg-indigo-700 px-6 py-2 rounded-full text-white font-medium hover:shadow-lg hover:shadow-teal-500/20 transition-all transform hover:-translate-y-1">
                    Contact Me
                  </a> */}
                </div>

                <button className="lg:hidden text-2xl" onClick={() => setIsMenuOpen(true)}>
                  {/* <Menu /> */}
                </button>
              </nav>
            </div>
          </header>

            <div className={`fixed inset-0 bg-white z-50 transform transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="container mx-auto px-6 py-4">
              <div className="flex justify-between items-center">
                <a href="#" className="text-2xl font-bold flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-gradient-to-r from-teal-500 to-indigo-500"></span>
                  Emmanuel Dey
                </a>
                <button className="text-2xl" onClick={() => setIsMenuOpen(false)}>
                  {/* <X /> */}
                </button>
              </div>
              
              <div className="flex flex-col items-center justify-center h-[80vh]">
                <ul className="flex flex-col gap-8 text-center text-2xl">
                  <li><a href="#about" onClick={() => setIsMenuOpen(false)} className="hover:text-teal-500 transition-colors">About Me</a></li>
                  <li><a href="#Experience" onClick={() => setIsMenuOpen(false)} className="hover:text-teal-500 transition-colors">Experience</a></li>
                  <li><a href="#origin" onClick={() => setIsMenuOpen(false)} className="hover:text-teal-500 transition-colors">Courses</a></li>
                  {/* <li><a href="#skills" onClick={() => setIsMenuOpen(false)} className="hover:text-teal-500 transition-colors">Skills</a></li> */}
                  <li>
                    <a href="#contact" onClick={() => setIsMenuOpen(false)} className="bg-indigo-700 px-8 py-3 rounded-full text-white font-medium inline-block mt-4">
                      Contact Me
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

    </div>
  );
}

export default Navbar;