import React, { useState, useMemo } from "react";
import { portfolioData } from "../data/mock";
import { ExternalLink, Github } from "lucide-react";

const ProjectCard = ({ project, index }) => {
  const technologies = project.technologies || [];
  
  return (
    <div
      className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 card-hover"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="p-8 space-y-4">
        <div className="flex items-start justify-between">
          <h3 className="text-xl md:text-2xl font-bold text-black group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-black group-hover:to-gray-600 transition-all duration-300">
            {project.title}
          </h3>
          {project.featured && (
            <span className="text-xs font-bold px-3 py-1 bg-gradient-to-r from-black to-gray-700 text-white rounded-full">
              Featured
            </span>
          )}
        </div>

        <p className="text-sm md:text-base text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="text-xs px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-50 text-gray-700 font-semibold rounded-full group-hover:bg-black group-hover:text-white transition-all duration-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 pt-4">
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-semibold text-black hover:text-gray-600 transition-all duration-300 hover:scale-110 group/link"
            >
              <ExternalLink size={18} className="group-hover/link:rotate-12 transition-transform" />
              Live Demo
            </a>
          )}
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-semibold text-black hover:text-gray-600 transition-all duration-300 hover:scale-110 group/link"
            >
              <Github size={18} className="group-hover/link:-rotate-12 transition-transform" />
              Source Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "Web Application", label: "Web Apps" },
    { id: "Backend Service", label: "Backend" },
    { id: "Mobile Apps", label: "Apps" }
  ];

  const allProjects = portfolioData.projects;
  
  const filteredProjects = useMemo(() => {
    if (filter === "all") {
      return allProjects;
    }
    const result = [];
    for (let i = 0; i < allProjects.length; i++) {
      if (allProjects[i].category === filter) {
        result.push(allProjects[i]);
      }
    }
    return result;
  }, [filter, allProjects]);

  return (
    <section id="projects" className="py-24 md:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black mb-6">
            Featured Projects
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto font-normal">
            A selection of my recent work and side projects
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-2 text-sm font-semibold transition-all duration-300 rounded-lg ${
                filter === category.id
                  ? "bg-black text-white shadow-lg hover:shadow-xl"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200 hover:border-gray-400"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
