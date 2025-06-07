// import { ArrowRight, BookOpen, Code, Briefcase, GraduationCap, User, ChevronRight, ChevronDown, ExternalLink, Github, Menu, X, Mail, MapPin, Phon, Twitter, Instagram, Send } from 'lucide-react';
import Mypic from '../assets/mypic.jpg';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
// import {Link}
import { ArrowRight, Twitter, Instagram, Mail, MapPin, Phone, Menu, X, Github, Linkedin, ChevronDown } from 'lucide-react';

// Main App Component
const Portfolio = () => {
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
    <div className="text-gray-800 font-sans">
          {/* Header */}

          <Navbar />
          {/* Hero Section */}
          <section className="relative min-h-screen flex items-center bg-gradient-to-br from-teal-50 to-indigo-50">
            <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-gradient-to-br from-teal-100/30 to-indigo-100/30 rounded-bl-full"></div>
      
            {/* Decorative circles */}
            <div className='hidden md:block'>
              <div className="absolute top-32 left-10 w-16 h-16 bg-teal-500/10 rounded-full"></div>
              <div className="absolute bottom-32 right-10 w-20 h-20 bg-indigo-500/10 rounded-full"></div>
              <div className="absolute top-1/2 left-1/3 w-8 h-8 bg-purple-500/10 rounded-full"></div>       
            </div>
            <div className="container mx-auto px-6 relative z-10">
              <div className="flex flex-col-reverse md:grid grid-cols-1 lg:grid-cols-2 md:gap-12 items-center">
                <div className="space-y-6">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                    Hello, I'm <span className='text-indigo-700'>Emmanuel</span>
                  </h1>
                  <p className="text-gray-600 text-lg border-l-4 border-indigo-500 pl-4">
                    A Computer Science major with a minor in Human-Centered Design. Passionate about creating technology that positively impacts people's lives.
                  </p>
                  <div className="flex flex-wrap gap-y-6">
                    {/* <a href="#about" className="bg-gradient-to-r from-teal-500 to-indigo-500 px-8 py-3 rounded-full font-medium flex items-center hover:shadow-lg hover:shadow-teal-500/20 transition-all transform hover:-translate-y-1">
                      Get to Know Me <ArrowRight size={18} />
                    </a> */}
                    <a href="#Experience" className="border hover:border-teal-500 border-indigo-700 px-8 py-3 rounded-full text-indigo-600 font-medium transition-all transform hover:-translate-y-1 hover:bg-indigo-50 mt-2 md:mt-6">
                      My Resume
                    </a>
                  </div>
                </div>
                <div className="lg:flex justify-center items-center my-12 md:mb-0 md:mt-0">
                  <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-teal-500/30 p-2">
                    <img 
                      src={Mypic} 
                      alt="Emmanuel Dey" 
                      className="w-full h-full object-cover rounded-full shadow-xl"
                    />
                    {/* <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-teal-500 to-indigo-500 px-4 py-2 rounded-full text-sm font-medium">
                      CS Student
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
      
            <div className="absolute bottom-0 md:bottom-20 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
              <span className="text-sm mb-2 text-slate-400 bg-gradient-to-r from-teal-500 to-indigo-500 bg-clip-text font-medium">Scroll Down</span>
              <ChevronDown size={20} className="text-indigo-500 animate-bounce" />
            </div>
          </section>

          {/* About Me Section */}
          <section id="about" className="bg-gradient-to-br from-indigo-50 to-teal-50 border py-20 md:py-24 md:pb-32 mt-8 md:mt-0">
            <div className=''>
              <div className="container mx-auto px-2">
                <div className="text-center mb-2">
                  <span className="text-indigo-600 uppercase tracking-wider font-medium">About Me</span>
                  <h2 className="text-3xl md:text-4xl font-bold mt-4 bg-gradient-to-r from-teal-600 to-indigo-600 bg-clip-text">
                    Who I Am
                  </h2>
                  {/* <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-indigo-500 mx-auto mt-4 rounded-full"></div> */}
                </div>
                
                <div className="grid grid-cols-1 items-center px-16">
                  <div className="relative order-2 lg:order-1">
                    <div className="space-y-6 relative z-10">
                      <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-teal-500 to-indigo-500 rounded-full"></div>
                      <h3 className="text-2xl font-bold text-gray-800">
                        Computer Science Major with Human-Centered Design Minor
                      </h3>
                      <p className="text-gray-600">
                        I'm a <span className="text-teal-600 font-medium">passionate computer science student</span> with a deep interest in creating technology that makes a positive impact. My journey in tech started when I was young, tinkering with computers and fascinated by how software works.
                      </p>
                      <p className="text-gray-600">
                        I believe that the best technology is designed with humans in mind - <span className="text-indigo-600 font-medium">intuitive, accessible, and focused on solving real problems</span>. That's why I'm combining my technical skills with human-centered design principles.
                      </p>
                      <p className="text-gray-600">
                        When I'm not coding or designing, you can find me exploring new ideas, reading about <span className="text-purple-600 font-medium">emerging technologies</span>, or collaborating with fellow students on innovative projects. I'm constantly curious and always eager to learn something new.
                      </p>
                      
                      <div className="flex flex-wrap gap-y-2 mt-6">
                        <span className="bg-gradient-to-r from-blue-500 to-blue-400 text-white px-4 py-2 rounded-full text-sm font-medium">Problem Solver</span>
                        <span className="bg-green-600 text-white border-green-600 px-4 py-2 rounded-full text-sm font-medium">Creative Thinker</span>
                        <span className="bg-gradient-to-r from-purple-500 to-purple-400 text-white px-4 py-2 rounded-full text-sm font-medium">Tech Enthusiast</span>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
        
              <div className="hidden md:block absolute top-20 left-0 w-24 h-24 bg-gradient-to-br from-teal-500/10 to-transparent rounded-full"></div>
              <div className="hidden md:block absolute bottom-20 right-0 w-32 h-32 bg-gradient-to-br from-indigo-500/10 to-transparent rounded-full"></div>
            </div>
          </section>

          <section id="Experience" className="py-20 md:py-32 relative ">
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <span className="text-purple-600 uppercase tracking-wider font-medium">My Passions</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-800">
                  What I Love Doing
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Interest 1 */}
                <div className="bg-purple-50 rounded-xl p-6 border border-purple-100 hover:border-purple-300 transition-all transform hover:-translate-y-2 group">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-all">
                    {/* <Code size={32} className="text-purple-600" /> */}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Coding & Development</h3>
                  <p className="text-gray-600">
                    I'm passionate about writing clean, efficient code and building applications that solve real-world problems. I especially enjoy frontend development and creating intuitive user interfaces.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    <span className="bg-white px-3 py-1 rounded-full text-xs text-purple-700 border border-purple-200">React</span>
                    <span className="bg-white px-3 py-1 rounded-full text-xs text-purple-700 border border-purple-200">JavaScript</span>
                    <span className="bg-white px-3 py-1 rounded-full text-xs text-purple-700 border border-purple-200">UI/UX</span>
                  </div>
                </div>
                
                {/* Interest 2 */}
                <div style={{backgroundColor: ""}} className="bg-teal-50 rounded-xl p-6 border border-teal-100 hover:border-teal-300 transition-all transform hover:-translate-y-2 group">
                  <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-teal-200 transition-all">
                    {/* <BookOpen size={32} className="text-teal-600" /> */}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Reading & Learning</h3>
                  <p className="text-gray-600">
                    I have an insatiable appetite for knowledge. Whether it's tech blogs, science fiction, or philosophy books, I love expanding my horizons through reading and continuous learning.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    <span className="bg-white px-3 py-1 rounded-full text-xs text-teal-700 border border-teal-200">Tech Books</span>
                    <span className="bg-white px-3 py-1 rounded-full text-xs text-teal-700 border border-teal-200">Science Fiction</span>
                    <span className="bg-white px-3 py-1 rounded-full text-xs text-teal-700 border border-teal-200">Online Courses</span>
                  </div>
                </div>
                
                {/* Interest 3 */}
                <div className="bg-blue-50 rounded-xl p-6 border border-blue-100 hover:border-blue-300 transition-all transform hover:-translate-y-2 group">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-all">
                    {/* <GraduationCap size={32} className="text-blue-600" /> */}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Mentoring & Teaching</h3>
                  <p className="text-gray-600">
                    I find great fulfillment in helping others learn and grow. Whether it's tutoring fellow students or explaining technology concepts to beginners, I enjoy sharing knowledge.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    <span className="bg-white px-3 py-1 rounded-full text-xs text-blue-700 border border-blue-200">Peer Tutoring</span>
                    <span className="bg-white px-3 py-1 rounded-full text-xs text-blue-700 border border-blue-200">Workshops</span>
                    <span className="bg-white px-3 py-1 rounded-full text-xs text-blue-700 border border-blue-200">Study Groups</span>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                {/* Interest 4 */}
                <div className="bg-amber-200 rounded-xl p-6 border border-amber-100 hover:border-amber-300 transition-all transform hover:-translate-y-2 group">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center group-hover:bg-amber-200 transition-all shrink-0">
                      {/* <User size={32} className="text-amber-600" /> */}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-3">Community Engagement</h3>
                      <p className="text-gray-600">
                        I'm actively involved in tech communities and local initiatives. I believe in the power of collaboration and community-driven projects to create meaningful impact and drive innovation.
                      </p>
                      <div className="mt-6 flex flex-wrap gap-2">
                        <span className="bg-white px-3 py-1 rounded-full text-xs text-amber-700 border border-amber-200">Tech Meetups</span>
                        <span className="bg-white px-3 py-1 rounded-full text-xs text-amber-700 border border-amber-200">Hackathons</span>
                        <span className="bg-white px-3 py-1 rounded-full text-xs text-amber-700 border border-amber-200">Volunteer Work</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Interest 5 */}
                <div className="bg-pink-50 rounded-xl p-6 border border-pink-100 hover:border-pink-300 transition-all transform hover:-translate-y-2 group">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center group-hover:bg-pink-200 transition-all shrink-0">
                      {/* <Briefcase size={32} className="text-pink-600" /> */}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-3">Entrepreneurship</h3>
                      <p className="text-gray-600">
                        I'm fascinated by startups and business innovation. I enjoy exploring how technology can solve business challenges and create new opportunities in various industries.
                      </p>
                      <div className="mt-6 flex flex-wrap gap-2">
                        <span className="bg-white px-3 py-1 rounded-full text-xs text-pink-700 border border-pink-200">Startups</span>
                        <span className="bg-white px-3 py-1 rounded-full text-xs text-pink-700 border border-pink-200">Business Models</span>
                        <span className="bg-white px-3 py-1 rounded-full text-xs text-pink-700 border border-pink-200">Tech Innovation</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Origin Section */}
          <section id="origin" className="py-20 md:py-32 relative bg-gradient-to-br from-indigo-50 to-teal-50">
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <span className="text-cyan-600 uppercase tracking-wider font-medium">My Background</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-800">
                  Where I'm From
                </h2>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 order-2 lg:order-1">
                  <h3 className="text-2xl font-bold text-gray-800">Roots in Ghana</h3>

                  <p className="text-gray-600">
                    Born and raised in Ghana, I grew up surrounded by a rich culture that values community, creativity, and resilience. These values have profoundly shaped my approach to both life and technology.
                  </p>
                  <p className="text-gray-600">
                    Growing up in Ghana gave me a unique perspective on how technology can bridge gaps and create opportunities. I witnessed firsthand how access to computers and the internet could transform communities and open doors to new possibilities.
                  </p>
                  <p className="text-gray-600">
                    My journey from Ghana to studying Computer Science at KNUST has been filled with challenges and growth. Each step has reinforced my belief that technology, when designed thoughtfully, can be a powerful force for positive change.
                  </p>
                  
                  <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-indigo-500 mt-6">
                    <p className="text-gray-700 italic">
                      "My heritage and background have given me a unique lens through which I view technology and its potential to connect and empower communities."
                    </p>
                  </div>
                </div>
              <div className="relative order-1 lg:order-2">
                <div className="bg-white p-6 rounded-2xl shadow-xl">
                  <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden bg-indigo-100">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345099966!2d-0.20544238468129265!3d5.614818295138353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdfb9e9a9c02a81%3A0x7e90b6f4b8c4b5b6!2sAccra%2C%20Ghana!5e0!3m2!1sen!2sus!4v1639982924676!5m2!1sen!2sus" 
                    width="600" 
                    height="450" 
                    // style="" 
                    allowfullscreen="" 
                    loading="lazy">
                  </iframe>
                  </div>
                  <div className="mt-6 space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Country:</span>
                      <span className="font-medium">Ghana</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">City:</span>
                      <span className="font-medium">Kumasi</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Languages:</span>
                      <span className="font-medium">English, Twi</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Favorite Ghanaian Dish:</span>
                      <span className="font-medium">Jollof Rice</span>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </section>

          {/* Footer Section */}
          <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-6">
            <div className="container mx-auto px-6">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                {/* Basic Info */}
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-teal-500 to-indigo-500"></span>
                  <span className="font-bold">Emmanuel Dey</span>
                  <span className="text-gray-400 text-sm hidden md:inline">•</span>
                  <span className="text-gray-400 text-sm hidden md:inline">Computer Science Student</span>
                </div>
                
                {/* Quick Links */}
                <div className="flex flex-wrap justify-center gap-4 text-sm">
                  <Link to='/'>
                    <div className="text-gray-400 hover:text-teal-400 transition-colors">Home</div>
                  </Link>
                  <Link to='/experience'>
                    <div className="text-gray-400 hover:text-teal-400 transition-colors">Experience</div>
                  </Link>
                  <Link to='/courses'>
                    <div className="text-gray-400 hover:text-teal-400 transition-colors">Courses</div>
                  </Link>
                  {/* <a href="#skills" className="text-gray-400 hover:text-teal-400 transition-colors">Skills</a> */}
                </div>
                
                {/* Social Links */}
                <div className="flex items-center gap-3">
                  <a href="https://github.com/emmanueldey" className="w-7 h-7 bg-gray-700 hover:bg-teal-500 rounded-full flex items-center justify-center transition-colors">
                    {/* <Github size={14} /> */}
                    <Github size={16} />
                  </a>
                  <a href="https://linkedin.com/in/emmanuel1010" className="w-7 h-7 bg-gray-700 hover:bg-teal-500 rounded-full flex items-center justify-center transition-colors">
                    <Linkedin size={16} />
                    {/* <Twitter size={14} /> */}
                  </a>
                  {/* <a href="#" className="w-7 h-7 bg-gray-700 hover:bg-teal-500 rounded-full flex items-center justify-center transition-colors">
                    <Instagram size={14} />
                  </a> */}
                  <a href="mailto:emmanuel.p.dey.28@dartmouth.edu" className="w-7 h-7 bg-gray-700 hover:bg-teal-500 rounded-full flex items-center justify-center transition-colors">
                    <Mail size={14} />
                  </a>
                </div>
              </div>
              
              <div className="border-t border-gray-700 mt-4 pt-4">
                <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
                  <div>© {new Date().getFullYear()} Emmanuel Dey. All rights reserved.</div>
                </div>
              </div>
            </div>
          </footer>    

        </div>
  );
};

export default Portfolio;




