import React from "react";
import { portfolioData } from "../data/mock";
import { CheckCircle2 } from "lucide-react";

const About = () => {
  const description = portfolioData.about.description;
  const highlights = portfolioData.about.highlights;

  return (
    <section id="about" className="py-24 md:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black">
              About Me
            </h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed font-normal">
              {description}
            </p>
          </div>

          <div className="space-y-4">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="group hover:translate-x-2 transition-all duration-300 p-4 rounded-lg border border-gray-200 hover:border-black hover:bg-gray-50 hover:shadow-md"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={24} className="text-black mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <p className="text-base md:text-lg text-gray-700 font-normal">{highlight}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
