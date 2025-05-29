import React from 'react';
import Navbar from '../components/Navbar';
// import { Briefcase, Calendar, MapPin, ExternalLink, Github, Code, Users, Award } from 'lucide-react';

const ExperiencePage = () => {
  const workExperience = [
    {
      id: 1,
      title: "Frontend Developer Intern",
      company: "TechCorp Ghana",
      location: "Accra, Ghana",
      duration: "Jun 2024 - Aug 2024",
      type: "Internship",
      description: "Developed responsive web applications using React and Tailwind CSS. Collaborated with design team to implement user-centered interfaces that improved user engagement by 30%.",
      technologies: ["React", "JavaScript", "Tailwind CSS", "Git", "Figma"],
      achievements: [
        "Built 3 major feature components for the main product",
        "Improved page load speed by 25% through optimization",
        "Mentored 2 junior interns on best practices"
      ]
    },
    {
      id: 2,
      title: "UI/UX Design Assistant",
      company: "Design Studio Kumasi",
      location: "Kumasi, Ghana",
      duration: "Jan 2024 - May 2024",
      type: "Part-time",
      description: "Assisted in creating user-centered designs for mobile and web applications. Conducted user research and usability testing to inform design decisions.",
      technologies: ["Figma", "Adobe XD", "Sketch", "InVision", "Miro"],
      achievements: [
        "Designed wireframes for 5+ client projects",
        "Conducted usability tests with 50+ users",
        "Created design system components library"
      ]
    },
    {
      id: 3,
      title: "Tech Community Volunteer",
      company: "Ghana Tech Hub",
      location: "Kumasi, Ghana", 
      duration: "Sep 2023 - Present",
      type: "Volunteer",
      description: "Organize tech meetups and workshops for students and professionals. Help bridge the gap between academia and industry by facilitating knowledge sharing sessions.",
      technologies: ["Community Building", "Event Management", "Mentoring"],
      achievements: [
        "Organized 12+ tech meetups with 200+ attendees",
        "Mentored 25+ students in career development",
        "Built partnerships with 8 local tech companies"
      ]
    },
    {
      id: 3,
      title: "Tech Community Volunteer",
      company: "Ghana Tech Hub",
      location: "Kumasi, Ghana", 
      duration: "Sep 2023 - Present",
      type: "Volunteer",
      description: "Organize tech meetups and workshops for students and professionals. Help bridge the gap between academia and industry by facilitating knowledge sharing sessions.",
      technologies: ["Community Building", "Event Management", "Mentoring"],
      achievements: [
        "Organized 12+ tech meetups with 200+ attendees",
        "Mentored 25+ students in career development",
        "Built partnerships with 8 local tech companies"
      ]
    }
  ];

  const personalProjects = [
    {
      id: 1,
      title: "EduConnect Platform",
      description: "A comprehensive learning management system designed to connect students with quality educational resources. Features include interactive courses, progress tracking, and peer collaboration tools.",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io", "Tailwind CSS"],
      features: [
        "Real-time chat and collaboration",
        "Progress tracking and analytics",
        "Mobile-responsive design",
        "Payment integration for premium courses"
      ],
      links: {
        github: "https://github.com/emmanuel-dey/educonnect",
        live: "https://educonnect-demo.vercel.app"
      },
      status: "In Development",
      image: "/api/placeholder/400/250"
    },
    {
      id: 2,
      title: "Local Business Directory",
      description: "A web application helping local businesses in Kumasi get discovered online. Features business listings, reviews, and location-based search functionality.",
      technologies: ["React", "Firebase", "Google Maps API", "Stripe"],
      features: [
        "Location-based business search",
        "User reviews and ratings",
        "Business owner dashboard",
        "Mobile-first design approach"
      ],
      links: {
        github: "https://github.com/emmanuel-dey/kumasi-directory",
        live: "https://kumasi-biz.netlify.app"
      },
      status: "Completed",
      image: "/api/placeholder/400/250"
    },
    {
      id: 3,
      title: "Student Finance Tracker",
      description: "A budgeting app specifically designed for university students to track expenses, set savings goals, and manage their financial health throughout their academic journey.",
      technologies: ["React Native", "SQLite", "Chart.js", "AsyncStorage"],
      features: [
        "Expense categorization",
        "Budget planning and alerts",
        "Visual spending analytics",
        "Goal setting and tracking"
      ],
      links: {
        github: "https://github.com/emmanuel-dey/student-finance"
      },
      status: "Completed",
      image: "/api/placeholder/400/250"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      {/* Header */}
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Page Title */}
        <div className="text-center mb-12 mt-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Experience</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            My journey in technology through professional experiences and personal projects
          </p>
        </div>

        {/* Work Experience Section */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            {/* <Briefcase className="w-8 h-8 text-purple-600 mr-3" /> */}
            <h2 className="text-3xl font-bold text-gray-900">Work Experience</h2>
          </div>
          
          <div className="space-y-8">
            {workExperience.map((job) => (
              <div key={job.id} className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-shadow">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h3>
                    <h4 className="text-xl text-purple-600 font-semibold mb-3">{job.company}</h4>
                    <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-4">
                      <div className="flex items-center">
                        {/* <MapPin className="w-4 h-4 mr-1" /> */}
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center">
                        {/* <Calendar className="w-4 h-4 mr-1" /> */}
                        <span>{job.duration}</span>
                      </div>
                      <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                        {job.type}
                      </span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed">{job.description}</p>
                
                <div className="mb-6">
                  <h5 className="font-semibold text-gray-900 mb-3 flex items-center">
                    {/* <Award className="w-4 h-4 mr-2" /> */}
                    Key Achievements
                  </h5>
                  <ul className="space-y-2">
                    {job.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-700">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h5 className="font-semibold text-gray-900 mb-3">Technologies Used</h5>
                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map((tech, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Personal Projects Section */}
        <section>
          <div className="flex items-center mb-8">
            {/* <Code className="w-8 h-8 text-purple-600 mr-3" /> */}
            <h2 className="text-3xl font-bold text-gray-900">Personal Projects</h2>
          </div>
          
          <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-1">
            {personalProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          project.status === 'Completed' 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-blue-100 text-blue-700'
                        }`}>
                          {project.status}
                        </span>
                      </div>
                      <p className="text-gray-700 mb-6 leading-relaxed">{project.description}</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h5 className="font-semibold text-gray-900 mb-3">Key Features</h5>
                    <ul className="space-y-2">
                      {project.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h5 className="font-semibold text-gray-900 mb-3">Technologies Used</h5>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex space-x-4">
                    {project.links.github && (
                      <a 
                        href={project.links.github}
                        className="flex items-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                      >
                        {/* <Github className="w-4 h-4 mr-2" /> */}
                        View Code
                      </a>
                    )}
                    {project.links.live && (
                      <a 
                        href={project.links.live}
                        className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                      >
                        {/* <ExternalLink className="w-4 h-4 mr-2" /> */}
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
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
                  <a href="#about" className="text-gray-400 hover:text-teal-400 transition-colors">About</a>
                  <a href="#Experience" className="text-gray-400 hover:text-teal-400 transition-colors">Experience</a>
                  <a href="#origin" className="text-gray-400 hover:text-teal-400 transition-colors">Courses</a>
                  {/* <a href="#skills" className="text-gray-400 hover:text-teal-400 transition-colors">Skills</a> */}
                </div>
                
                {/* Social Links */}
                <div className="flex items-center gap-3">
                  <a href="#" className="w-7 h-7 bg-gray-700 hover:bg-teal-500 rounded-full flex items-center justify-center transition-colors">
                    {/* <Github size={14} /> */}
                  </a>
                  <a href="#" className="w-7 h-7 bg-gray-700 hover:bg-teal-500 rounded-full flex items-center justify-center transition-colors">
                    {/* <Twitter size={14} /> */}
                  </a>
                  <a href="#" className="w-7 h-7 bg-gray-700 hover:bg-teal-500 rounded-full flex items-center justify-center transition-colors">
                    {/* <Instagram size={14} /> */}
                  </a>
                  <a href="mailto:emmanuel.dey@example.com" className="w-7 h-7 bg-gray-700 hover:bg-teal-500 rounded-full flex items-center justify-center transition-colors">
                    {/* <Mail size={14} /> */}
                  </a>
                </div>
              </div>
              
              <div className="border-t border-gray-700 mt-4 pt-4">
                <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
                  <div>© {new Date().getFullYear()} Emmanuel Dey. All rights reserved.</div>
                  <div>Designed with <span className="text-red-500">♥</span></div>
                </div>
              </div>
            </div>
          </footer>    
    </div>
  );
};

export default ExperiencePage;