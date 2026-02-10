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
    <section id="skills" className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-black mb-6">
            Skills & Expertise
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Technologies and tools I work with to build exceptional digital experiences
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 text-sm font-normal transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-black text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {currentSkills.map((skill, index) => (
            <div
              key={index}
              className="group hover:translate-y-[-4px] transition-transform duration-300"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-base md:text-lg font-normal text-black">{skill.name}</span>
                <span className="text-sm text-gray-600">{skill.level}%</span>
              </div>
              <div className="h-2 bg-gray-200 overflow-hidden">
                <div
                  className="h-full bg-black transition-all duration-1000 ease-out"
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
