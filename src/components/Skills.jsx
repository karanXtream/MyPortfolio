import React, { useState, useMemo } from "react";
import { portfolioData } from "../data/mock";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");

  const categories = [
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "databases", label: "Databases" },
    { id: "tools", label: "Tools" }
  ];

  const currentSkills = useMemo(() => {
    if (activeCategory === "frontend") return portfolioData.skills.frontend;
    if (activeCategory === "backend") return portfolioData.skills.backend;
    if (activeCategory === "databases") return portfolioData.skills.databases;
    if (activeCategory === "tools") return portfolioData.skills.tools;
    return [];
  }, [activeCategory]);

  return (
    <section id="skills" className="py-24 md:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black mb-6">
            Skills & Expertise
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto font-normal">
            Technologies and tools I work with to build exceptional digital experiences
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 text-sm font-semibold transition-all duration-300 rounded-lg ${
                activeCategory === category.id
                  ? "bg-black text-white shadow-lg hover:shadow-xl"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200 hover:border-gray-400"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {currentSkills.map((skill, index) => (
            <div
              key={index}
              className="group hover:translate-y-[-4px] transition-all duration-300 p-6 rounded-xl bg-white border border-gray-200 hover:border-gray-400 hover:shadow-lg"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-base md:text-lg font-semibold text-black group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-black group-hover:to-gray-600 transition-all">{skill.name}</span>
                <span className="text-sm font-bold text-gray-700 bg-gray-100 px-3 py-1 rounded-full group-hover:bg-black group-hover:text-white transition-all">{skill.level}%</span>
              </div>
              <div className="h-3 bg-gray-200 overflow-hidden rounded-full">
                <div
                  className="h-full bg-gradient-to-r from-black to-gray-700 transition-all duration-1000 ease-out rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
