import React from "react";
import { portfolioData } from "../data/mock";
import { CheckCircle2 } from "lucide-react";

const About = () => {
  const description = portfolioData.about.description;
  const highlights = portfolioData.about.highlights;

  return (
    <section id="about" className="py-24 md:py-32 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-black">
              About Me
            </h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              {description}
            </p>
          </div>

          <div className="space-y-4">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="flex items-start gap-3 group hover:translate-x-2 transition-transform duration-300"
              >
                <CheckCircle2 size={20} className="text-black mt-1 flex-shrink-0" />
                <p className="text-base md:text-lg text-gray-700">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
