import React from "react";
import { portfolioData } from "../data/mock";
import { Github, Linkedin, Twitter, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-light tracking-tight mb-4">KS</h3>
          </div>

          <div>
            <h4 className="text-sm font-normal mb-4 text-gray-300">Quick Links</h4>
            <nav className="space-y-2">
              {["Home", "About", "Projects", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    const element = document.getElementById(item.toLowerCase());
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="block text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="text-sm font-normal mb-4 text-gray-300">Connect</h4>
            <div className="flex items-center gap-4">
              <a
                href={portfolioData.contact.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-all duration-200 hover:-translate-y-1"
              >
                <Github size={20} />
              </a>
              <a
                href={portfolioData.contact.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-all duration-200 hover:-translate-y-1"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={portfolioData.contact.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-all duration-200 hover:-translate-y-1"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm flex items-center gap-2">
              © {currentYear} {portfolioData.hero.name}. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-2">
              Made with <Heart size={14} className="text-red-500" /> using React & FastAPI
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
