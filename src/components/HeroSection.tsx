

import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import "../hero.css"; // Import the CSS for animation

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const serviceCards = [
    { icon: "🎯", title: "Low Code", description: "Streamline application development with our Low Code services, enabling rapid, scalable solutions with minimal coding." },
    { icon: "📊", title: "BI & Data Analytics", description: "Combine technology with human intelligence and expand stakeholders' wisdom in decision-making potency" },
    { icon: "☁️", title: "Cloud Solutions", description: "Empower your business with secure and scalable cloud computing solutions tailored to your needs." },
    { icon: "🤖", title: "AI & Automation", description: "Leverage AI to automate workflows and optimize your processes for better efficiency and insights." }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 2) % serviceCards.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 2 + serviceCards.length) % serviceCards.length);

  const visibleCards = [
    serviceCards[currentSlide],
    serviceCards[(currentSlide + 1) % serviceCards.length]
  ];

  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-[#0A142A]">
      {/* Animated Cubes Background */}
      <div className="cube-bg">
        {[...Array(10)].map((_, i) => (
          <span key={i} className="cube"></span>
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Innovate with
            </h1>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-300 leading-tight">
              Technology
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl">
              Transform your business with our specialized technology and solutions!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="cta" size="lg" className="bg-primary hover:bg-primary-hover">
                Contact Us
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>

          {/* Right Service Cards */}
          <div className="relative">
            <div className="flex flex-col space-y-6">
              {visibleCards.map((card, index) => (
                <div key={index} className="bg-white rounded-2xl p-4 shadow-xl max-w-sm mx-auto">
                  <div className="flex items-start space-x-3 mb-3">
                    <div className="text-3xl">{card.icon}</div>
                    <div>
                      <h3 className="text-md font-semibold text-gray-900 mb-1">{card.title}</h3>
                      <p className="text-gray-600 text-xs leading-snug">{card.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center space-x-4 mt-6">
              <button onClick={prevSlide} className="bg-primary text-white p-3 rounded-full hover:bg-primary-hover transition-colors">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button onClick={nextSlide} className="bg-primary text-white p-3 rounded-full hover:bg-primary-hover transition-colors">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
