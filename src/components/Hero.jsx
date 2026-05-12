import React from "react";
import { portfolioData } from "../data/mock";
import { Github, Linkedin, Twitter, Download } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#f6f4ef]">
      <div className="hero-mesh absolute inset-0"></div>
      <div className="hero-orb hero-orb-left"></div>
      <div className="hero-orb hero-orb-right"></div>
      <div className="hero-beam hero-beam-one"></div>
      <div className="hero-beam hero-beam-two"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/25 to-[#f6f4ef]"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-black leading-tight">
              {portfolioData.hero.name}
            </h1>
            <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-700 to-[#0f766e] tracking-tight">
              {portfolioData.hero.title}
            </p>
          </div>

          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto font-normal leading-relaxed">
            {portfolioData.hero.description}
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap pt-8">
            <button
              onClick={scrollToContact}
              className="px-8 py-3 bg-black text-white text-sm font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-md"
            >
              Get In Touch
            </button>
            <a
              href="https://drive.google.com/file/d/17unetw946ztxmc_yKUnFZoboGPENRGEP/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-white/80 backdrop-blur-sm border-2 border-black text-black text-sm font-semibold rounded-lg hover:bg-black hover:text-white transition-all duration-300 flex items-center gap-2 hover:shadow-lg"
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>

          <div className="flex items-center justify-center gap-6 pt-8">
            <a
              href={portfolioData.contact.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group text-gray-600 hover:text-black transition-all duration-300 hover:scale-125 p-2 rounded-full hover:bg-gray-100"
            >
              <Github size={28} className="group-hover:animate-float" />
            </a>
            <a
              href={portfolioData.contact.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group text-gray-600 hover:text-black transition-all duration-300 hover:scale-125 p-2 rounded-full hover:bg-gray-100"
            >
              <Linkedin size={28} className="group-hover:animate-float" />
            </a>
            <a
              href={portfolioData.contact.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="group text-gray-600 hover:text-black transition-all duration-300 hover:scale-125 p-2 rounded-full hover:bg-gray-100"
            >
              <Twitter size={28} className="group-hover:animate-float" />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer">
        <div className="w-6 h-10 border-2 border-black rounded-full flex items-start justify-center p-2 hover:border-gray-600 transition-colors">
          <div className="w-1 h-2 bg-black rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
