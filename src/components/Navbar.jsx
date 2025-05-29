import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Twitter, Instagram, Mail, MapPin, Phone, Menu, X, Github } from 'lucide-react';

// const Navbar = () => {
//       const [isMenuOpen, setIsMenuOpen] = useState(false);
//       const [isScrolled, setIsScrolled] = useState(false);
    
//       useEffect(() => {
//         const handleScroll = () => {
//           setIsScrolled(window.scrollY > 50);
//         };
//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//       }, []);
      
//         useEffect(() => {
//           const handleScroll = () => {
//             setIsScrolled(window.scrollY > 50);
//           };
//           window.addEventListener('scroll', handleScroll);
//           return () => window.removeEventListener('scroll', handleScroll);
//         }, []);
    
//   return (
//     <div>
//           <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
//             <div className="container mx-auto px-6 py-4">
//               <nav className="flex justify-between items-center">
//                 <a href="#" className="text-2xl font-bold flex items-center gap-2">
//                   <span className="w-3 h-3 rounded-full bg-gradient-to-r from-teal-500 to-indigo-500"></span>
//                   Emmanuel Dey
//                 </a>
                
//                 <div className="hidden lg:flex items-center gap-8">
//                   <ul className="flex gap-8">
//                     <Link to="/">
//                     <li><a href="" className="hover:text-teal-500 transition-colors">Home</a></li>
//                     </Link>
//                     <Link to="/experience">
//                       <li><a href="" className="hover:text-teal-500 transition-colors">Experience</a></li>
//                     </Link>
//                     <Link to="/courses">
//                         <li><a href="" className="hover:text-teal-500 transition-colors">Courses</a></li>
//                     </Link>
//                     {/* <li><a href="#skills" className="hover:text-teal-500 transition-colors">Skills</a></li> */}
//                   </ul>
//                   {/* <a href="#contact" className="bg-indigo-700 px-6 py-2 rounded-full text-white font-medium hover:shadow-lg hover:shadow-teal-500/20 transition-all transform hover:-translate-y-1">
//                     Contact Me
//                   </a> */}
//                 </div>

//                 <button className="lg:hidden text-2xl" onClick={() => setIsMenuOpen(true)}>
//                   {/* <Menu /> */}
//                 </button>
//               </nav>
//             </div>
//           </header>

//             <div className={`fixed inset-0 bg-white z-50 transform transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
//             <div className="container mx-auto px-6 py-4">
//               <div className="flex justify-between items-center">
//                 <a href="#" className="text-2xl font-bold flex items-center gap-2">
//                   <span className="w-3 h-3 rounded-full bg-gradient-to-r from-teal-500 to-indigo-500"></span>
//                   Emmanuel Dey
//                 </a>
//                 <button className="text-2xl" onClick={() => setIsMenuOpen(false)}>
//                   {/* <X /> */}
//                 </button>
//               </div>
              
//               <div className="flex flex-col items-center justify-center h-[80vh]">
//                 <ul className="flex flex-col gap-8 text-center text-2xl">
//                   <li><a href="#about" onClick={() => setIsMenuOpen(false)} className="hover:text-teal-500 transition-colors">About Me</a></li>
//                   <li><a href="#Experience" onClick={() => setIsMenuOpen(false)} className="hover:text-teal-500 transition-colors">Experience</a></li>
//                   <li><a href="#origin" onClick={() => setIsMenuOpen(false)} className="hover:text-teal-500 transition-colors">Courses</a></li>
//                   {/* <li><a href="#skills" onClick={() => setIsMenuOpen(false)} className="hover:text-teal-500 transition-colors">Skills</a></li> */}
//                   <li>
//                     <a href="#contact" onClick={() => setIsMenuOpen(false)} className="bg-indigo-700 px-8 py-3 rounded-full text-white font-medium inline-block mt-4">
//                       Contact Me
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>

//     </div>
//   );
// }

// export default Navbar;


// Navbar Component
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
                  <li><a href="/" className="hover:text-teal-500 transition-colors">Home</a></li>
                </Link>
                <Link to="/Experience">
                  <li><a href="" className="hover:text-teal-500 transition-colors">Experience</a></li>
                </Link>
                <Link to="/Courses">
                  <li><a href="/Courses" className="hover:text-teal-500 transition-colors">Origin</a></li>
                </Link>
              </ul>
            </div>

            {/* Custom Hamburger Button */}
            <button 
              className="lg:hidden flex flex-col justify-center items-center w-8 h-8 z-50 relative group" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-gray-800 mt-1 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-gray-800 mt-1 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Slide-in Panel */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {/* Close Button */}
    <div className="flex justify-end p-6">
      <button 
        className="flex flex-col justify-center items-center w-8 h-8 group relative" 
        onClick={() => setIsMenuOpen(false)}
        aria-label="Close menu"
      >
        <X size={24} className="text-gray-800 transition-colors duration-300 group-hover:text-teal-500" />
      </button>
    </div>
        
        {/* Menu Items */}
        <div className="px-6 pt-4">
          <ul className="space-y-8">
            <Link to="/">
              <li>
                <a 
                  href="" 
                  onClick={() => setIsMenuOpen(false)} 
                  className="block text-lg font-medium text-gray-800 hover:text-teal-500 transition-colors py-2 border-b border-gray-100"
                >
                  Home
                </a>
              </li>
            </Link>
          <Link to="/Experience">   
            <li>
              <a 
                href="/Experience" 
                onClick={() => setIsMenuOpen(false)} 
                className="block text-lg font-medium text-gray-800 hover:text-teal-500 transition-colors py-2 border-b border-gray-100"
              >
                Experience
              </a>
            </li>
          </Link>
          <Link to="/Courses">
            <li>
              <a 
                href="/courses" 
                onClick={() => setIsMenuOpen(false)} 
                className="block text-lg font-medium text-gray-800 hover:text-teal-500 transition-colors py-2 border-b border-gray-100"
              >
                Courses
              </a>
            </li>
          </Link>
          </ul>
          
          {/* Social Media Links */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm font-medium text-gray-600 mb-4">Connect with me</p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-100 hover:bg-teal-500 rounded-full flex items-center justify-center transition-colors group">
                <Github size={18} className="text-gray-600 group-hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-100 hover:bg-blue-500 rounded-full flex items-center justify-center transition-colors group">
                <Twitter size={18} className="text-gray-600 group-hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-100 hover:bg-pink-500 rounded-full flex items-center justify-center transition-colors group">
                <Instagram size={18} className="text-gray-600 group-hover:text-white" />
              </a>
              <a href="mailto:emmanuel.dey@example.com" className="w-10 h-10 bg-gray-100 hover:bg-indigo-500 rounded-full flex items-center justify-center transition-colors group">
                <Mail size={18} className="text-gray-600 group-hover:text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Backdrop Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </div>
  );
};


export default Navbar;