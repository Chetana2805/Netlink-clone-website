import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import InnovationImage from "../assets/dt-tabs-sc.png";


const ServicesSection = () => {
  const [expandedService, setExpandedService] = useState<number | null>(null);

  const services = [
    {
      icon: "🔄",
      title: "Digital Transformation",
      color: "border-orange-300 bg-orange-50",
      selected: true
    },
    {
      icon: "💻",
      title: "Application Development", 
      color: "border-purple-300 bg-purple-50"
    },
    {
      icon: "⚡",
      title: "Low Code",
      color: "border-green-300 bg-green-50"
    },
    {
      icon: "📊",
      title: "BI and Analytics",
      color: "border-blue-300 bg-blue-50"
    },
    {
      icon: "☁️",
      title: "Cloud and Infrastructure",
      color: "border-pink-300 bg-pink-50"
    },
    {
      icon: "⚙️",
      title: "ERP Solutions",
      color: "border-blue-300 bg-blue-50"
    },
    {
      icon: "🏭",
      title: "SFaaS",
      color: "border-orange-300 bg-orange-50"
    },
    {
      icon: "👥",
      title: "Outsourcing Services",
      color: "border-purple-300 bg-purple-50"
    },
    {
      icon: "📱",
      title: "Enterprise Mobility",
      color: "border-green-300 bg-green-50"
    },
    {
      icon: "🤖",
      title: "Robotic Process Automation",
      color: "border-pink-300 bg-pink-50"
    },
    {
      icon: "🧠",
      title: "AI & Machine Learning",
      color: "border-blue-300 bg-blue-50"
    },
    {
      icon: "🌱",
      title: "ESG Management", 
      color: "border-green-300 bg-green-50"
    },
    {
      icon: "🔄",
      title: "Migration Services",
      color: "border-blue-300 bg-blue-50"
    }
  ];

  const serviceDetails = {
    title: "Digital Transformation Services",
    description: "Reimagine workflow optimization and growth opportunities with Netlink's all-in-one technological solutions portfolio. Our expertise, ranging from single business units to large global organizations offers businesses rapid growth while developing future competencies. Check out how Netlink would add value to your vision.",
    features: [
      "Agile & Sustainable Architecture",
      "Value-led Application Management", 
      "Flexible Workflow Model",
      "Resolute Data Experience",
      "Robust Network Infrastructure",
      "Cutting-edge technological practices"
    ]
  };

  return (
    <section className="py-20 bg-background relative">
      {/* Background with modal/popup overlay effect */}
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-8">
          {/* <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Services</h2> */}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Services List */}
          <div className="lg:col-span-1">
            <div className="space-y-3">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`${service.color} ${service.selected ? 'border-orange-400 shadow-md' : ''} 
                    border rounded-lg p-4 cursor-pointer hover:shadow-md transition-all duration-200 flex items-center space-x-3`}
                  onClick={() => setExpandedService(expandedService === index ? null : index)}
                >
                  <span className="text-xl">{service.icon}</span>
                  <span className="font-medium text-gray-800 flex-1">{service.title}</span>
                  <ChevronDown className="w-4 h-4 text-gray-600" />
                </div>
              ))}
            </div>
          </div>

          {/* Service Details */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="mb-6">
                <span className="text-primary text-sm font-medium uppercase tracking-wide">
                  OUR SERVICES
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2 mb-4">
                  {serviceDetails.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {serviceDetails.description}
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-3 mb-8">
                {serviceDetails.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <Button variant="cta" size="lg">
                Explore More
              </Button>

              {/* Illustration */}
              <div className="mt-8 flex justify-end">
              <img
                src={InnovationImage}
                alt="Digital Innovation"
                className="w-80 h-55 "
              />
            </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;