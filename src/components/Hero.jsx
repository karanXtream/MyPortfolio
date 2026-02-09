import React, { useEffect, useRef } from "react";
import { portfolioData } from "../data/mock";
import { Github, Linkedin, Twitter, Download } from "lucide-react";

const Hero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 50;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.opacity = Math.random() * 0.5 + 0.2;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        ctx.fillStyle = `rgba(0, 0, 0, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });
      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadResume = () => {
    // Mock download - will be connected to backend later
    alert("Resume download will be available soon!");
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-extralight tracking-tighter text-black">
              {portfolioData.hero.name}
            </h1>
            <p className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-700 tracking-tight">
              {portfolioData.hero.title}
            </p>
          </div>

          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-light">
            {portfolioData.hero.description}
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap pt-8">
            <button
              onClick={scrollToContact}
              className="px-8 py-3 bg-black text-white text-sm font-normal rounded-none hover:bg-gray-800 transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </button>
            <a
              href="https://drive.google.com/file/d/17unetw946ztxmc_yKUnFZoboGPENRGEP/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-transparent border border-black text-black text-sm font-normal rounded-none hover:bg-black hover:text-white transition-all duration-300 flex items-center gap-2"
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
              className="text-gray-600 hover:text-black transition-all duration-200 hover:-translate-y-1"
            >
              <Github size={24} />
            </a>
            <a
              href={portfolioData.contact.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black transition-all duration-200 hover:-translate-y-1"
            >
              <Linkedin size={24} />
            </a>
            <a
              href={portfolioData.contact.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black transition-all duration-200 hover:-translate-y-1"
            >
              <Twitter size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-black rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-black rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
