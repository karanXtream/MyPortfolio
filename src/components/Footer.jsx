import React from "react";
import { portfolioData } from "../data/mock";
import { Github, Linkedin, Twitter, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-black to-gray-900 text-white py-16 border-t-2 border-gray-800">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-3xl font-bold tracking-tight mb-4 hover:text-gray-300 transition-colors cursor-pointer">KS</h3>
            <p className="text-gray-400 text-sm font-normal">Building beautiful digital experiences</p>
          </div>

          <div>
            <h4 className="text-sm font-bold mb-4 text-gray-200 uppercase tracking-wider">Quick Links</h4>
            <nav className="space-y-3">
              {["Home", "About", "Projects", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    const element = document.getElementById(item.toLowerCase());
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="block text-gray-400 hover:text-white transition-all duration-300 text-sm font-normal hover:translate-x-1"
                >
                  → {item}
                </button>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="text-sm font-bold mb-4 text-gray-200 uppercase tracking-wider">Connect</h4>
            <div className="flex items-center gap-4">
              <a
                href={portfolioData.contact.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group text-gray-400 hover:text-white transition-all duration-300 hover:scale-125 p-2 rounded-full hover:bg-gray-800"
              >
                <Github size={22} className="group-hover:animate-float" />
              </a>
              <a
                href={portfolioData.contact.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group text-gray-400 hover:text-white transition-all duration-300 hover:scale-125 p-2 rounded-full hover:bg-gray-800"
              >
                <Linkedin size={22} className="group-hover:animate-float" />
              </a>
              <a
                href={portfolioData.contact.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="group text-gray-400 hover:text-white transition-all duration-300 hover:scale-125 p-2 rounded-full hover:bg-gray-800"
              >
                <Twitter size={22} className="group-hover:animate-float" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm font-normal">
              © {currentYear} {portfolioData.hero.name}. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-2 font-normal">
              Made with <Heart size={16} className="text-red-500 animate-pulse" /> by Karan Shrivastava
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
