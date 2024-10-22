import React, { useState } from 'react';
import { Github, Linkedin, Mail, Users, Code, Palette, Server, Database } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('about');

  const projects = [
    {
      title: "Community Hub",
      description: "A full-stack MERN application for developer communities with real-time chat, event management, and resource sharing.",
      tech: ["MongoDB", "Express", "React", "Node.js", "Socket.io"],
      type: "Full Stack"
    },
    {
      title: "Design System",
      description: "Created a comprehensive design system used by 1000+ developers, including components, icons, and documentation.",
      tech: ["React", "Tailwind CSS", "Storybook"],
      type: "UI/UX"
    },
    {
      title: "Tech Meetup Platform",
      description: "Platform connecting 5000+ developers through virtual and in-person events.",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      type: "Community"
    }
  ];

  const skills = {
    frontend: ["React", "Tailwind CSS", "Material UI", "Next.js", "TypeScript"],
    backend: ["Node.js", "Express", "MongoDB", "GraphQL", "REST APIs"],
    design: ["Figma", "Adobe XD", "SVG Animation", "UI/UX Design"],
    community: ["Event Planning", "Workshop Facilitation", "Community Management"]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header/Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">John Developer</h1>
          <div className="flex gap-4">
            <Github className="w-6 h-6 cursor-pointer hover:text-blue-200" />
            <Linkedin className="w-6 h-6 cursor-pointer hover:text-blue-200" />
            <Mail className="w-6 h-6 cursor-pointer hover:text-blue-200" />
          </div>
        </nav>
        
        <div className="container mx-auto px-6 py-20">
          <h2 className="text-5xl font-bold mb-4">MERN Stack Developer</h2>
          <p className="text-xl mb-8">Building beautiful experiences & fostering tech communities</p>
          <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors">
            Get in touch
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-16">
        {/* Skills Section */}
        <section className="mb-20">
          <h3 className="text-3xl font-bold mb-10 text-center">What I Do</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Code className="w-12 h-12 text-blue-600 mb-4" />
              <h4 className="text-xl font-bold mb-2">Frontend Development</h4>
              <p className="text-gray-600">Creating responsive and intuitive user interfaces</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Server className="w-12 h-12 text-blue-600 mb-4" />
              <h4 className="text-xl font-bold mb-2">Backend Development</h4>
              <p className="text-gray-600">Building scalable server-side applications</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Palette className="w-12 h-12 text-blue-600 mb-4" />
              <h4 className="text-xl font-bold mb-2">UI/UX Design</h4>
              <p className="text-gray-600">Designing beautiful and functional interfaces</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Users className="w-12 h-12 text-blue-600 mb-4" />
              <h4 className="text-xl font-bold mb-2">Community Building</h4>
              <p className="text-gray-600">Growing and nurturing tech communities</p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-20">
          <h3 className="text-3xl font-bold mb-10 text-center">Featured Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <span className="text-sm text-blue-600 font-medium">{project.type}</span>
                <h4 className="text-xl font-bold mt-2 mb-4">{project.title}</h4>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Details Section */}
        <section className="mb-20">
          <h3 className="text-3xl font-bold mb-10 text-center">Skills & Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-bold mb-4 capitalize">{category}</h4>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, index) => (
                    <span key={index} className="bg-gray-100 px-3 py-1 rounded-full text-gray-700">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center">
          <h3 className="text-3xl font-bold mb-6">Let's Work Together</h3>
          <p className="text-gray-600 mb-8">
            I'm always interested in hearing about new projects and opportunities.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
            Contact Me
          </button>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>© 2024 John Developer. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;