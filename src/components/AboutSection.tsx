import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import RedHatLogo from "../assets/aws2.jpg";
import AWSLogo from "../assets/path.jpg";
import UiPathLogo from "../assets/dt-tabs-sc.png";
import CSMLogo from "../assets/sap.jpg";
import SAPLogo from "../assets/redhat.jpg";
import CSPOLogo from "../assets/path (1).jpg";


const AboutSection = () => {
  const stats = [
    { value: 27, suffix: "+", label: "YEARS OF EXPERIENCE", color: "bg-indigo-50", border: "border-b-4 border-indigo-400" },
    { value: 3, suffix: "K+", label: "GLOBAL WORKFORCE", color: "bg-cyan-50", border: "border-b-4 border-cyan-400" },
    { value: 1000, suffix: "+", label: "PROJECT DELIVERED", color: "bg-amber-50", border: "border-b-4 border-amber-400" },
    { value: 15, suffix: "+", label: "INNOVATION AWARDS", color: "bg-pink-50", border: "border-b-4 border-pink-400" }
  ];

  const [counters, setCounters] = useState(stats.map(() => 0));

  useEffect(() => {
    stats.forEach((stat, index) => {
      let start = 0;
      const end = stat.value;
      const duration = 1500; // 1.5 seconds
      const stepTime = Math.max(Math.floor(duration / end), 20);

      const timer = setInterval(() => {
        start += 1;
        setCounters((prev) => {
          const newCounters = [...prev];
          if (start <= end) {
            newCounters[index] = start;
          }
          return newCounters;
        });
        if (start >= end) clearInterval(timer);
      }, stepTime);
    });
  }, []);

  return (
    <>
      {/* About Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <span className="text-primary text-sm font-medium uppercase tracking-wide mb-4 block">
                  About Us
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Who we are</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Netlink is a group of passionate technology professionals, delivering
                  customer-centric solutions for over two decades. With technology at our
                  core and customers in our hearts, we believe in achieving organizational
                  scalability with innovation, workflow optimization, and digital transformation.
                </p>
              </div>

              <Button variant="cta" size="lg" className="bg-primary hover:bg-primary-hover">
                Learn More
              </Button>
            </div>

            {/* Right Stats Grid */}
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`rounded-xl p-10 shadow-md text-center ${stat.color} ${stat.border} transition-transform hover:scale-105`}
                >
                  <div className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
                    {counters[index]}{stat.suffix}
                  </div>
                  <p className="text-sm text-gray-700 font-medium uppercase">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Section (Unchanged) */}
      {/* Pillars Section */}
<section className="py-20 bg-gray-50">
  <div className="container mx-auto px-4">
    {/* Heading */}
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
      Pillars of Netlink’s Foundation
    </h2>

    {/* Two Pillars */}
    <div className="grid md:grid-cols-2 gap-0 max-w-5xl mx-auto">
      {/* Mission */}
      <div className="bg-white shadow-md p-8 flex flex-col">
        <div className="text-5xl mb-4">🎯</div>
        <h3 className="text-xl font-semibold mb-3">Mission</h3>
        <p className="text-gray-600">
          Accelerate customer’s experience using innovative technology and awesome people
        </p>
      </div>

      {/* Vision */}
      <div className="bg-white shadow-md p-8 flex flex-col">
        <div className="text-5xl mb-4">💡</div>
        <h3 className="text-xl font-semibold mb-3">Vision</h3>
        <p className="text-gray-600">
          To be the place of choice for our customers and employees, consistently delivering amazing experiences
        </p>
      </div>
    </div>
  </div>
</section>


{/* Our Core Values Section */}
<section className="py-20 bg-gray-50 font-sans">
  <div className="container mx-auto px-4">
    {/* Heading */}
    <h2 className="text-center text-[24px] md:text-[28px]  text-primary mb-12">
      Our Core Values
    </h2>

    {/* Four Values */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Innovation */}
      <div className="p-12 border flex flex-col items-start">
        <div className="text-6xl mb-6">💡</div>
        <h3 className="text-[20px] font-semibold mb-3">Innovation</h3>
        <p className="text-[16px] text-gray-600 leading-relaxed">
          We empower organizations with cutting-edge technology for a competitive advantage
        </p>
      </div>

      {/* Collaboration */}
      <div className="p-12 border flex flex-col items-start">
        <div className="text-6xl mb-6">🤝</div>
        <h3 className="text-[20px] font-semibold mb-3">Collaboration</h3>
        <p className="text-[16px] text-gray-600 leading-relaxed">
          We work closely with customers’ team for long-term success and derive mutual growth
        </p>
      </div>

      {/* Agility */}
      <div className="p-12 border flex flex-col items-start">
        <div className="text-6xl mb-6">📈</div>
        <h3 className="text-[20px] font-semibold mb-3">Agility</h3>
        <p className="text-[16px] text-gray-600 leading-relaxed">
          We continually drive growth and efficiency through dynamic adaptation and forward-thinking solutions
        </p>
      </div>

      {/* Cooperation */}
      <div className="p-12 border flex flex-col items-start">
        <div className="text-6xl mb-6">🤲</div>
        <h3 className="text-[20px] font-semibold mb-3">Cooperation</h3>
        <p className="text-[16px] text-gray-600 leading-relaxed">
          We emphasis on cultivating a culture of ambition, creativity, and recognition to foster a top-tier workforce
        </p>
      </div>
    </div>
  </div>
</section>




      {/* Certifications Section (Unchanged) */}
      {/* Certifications Section */}
<section className="py-20 bg-gray-50">
  <div className="container mx-auto px-4">
    <div className="bg-white rounded-2xl shadow-lg p-10 max-w-6xl mx-auto">
      {/* Heading */}
      <h3 className="text-center text-[22px] md:text-[26px] font-semibold text-primary mb-10">
        Our Certifications
      </h3>

      {/* Certification Logos */}
      <div className="flex flex-wrap justify-center gap-16">
        <img src={RedHatLogo} alt="Red Hat Certified" className="h-16 object-contain" />
        <img src={AWSLogo} alt="AWS Certified" className="h-16 object-contain" />
        <img src={UiPathLogo} alt="UiPath Certified" className="h-16 object-contain" />
        <img src={CSMLogo} alt="CSM Certified" className="h-16 object-contain" />
        <img src={SAPLogo} alt="SAP Certified" className="h-16 object-contain" />
        <img src={CSPOLogo} alt="CSPO Certified" className="h-16 object-contain" />
      </div>
    </div>
  </div>
</section>

    </>
  );
};

export default AboutSection;
