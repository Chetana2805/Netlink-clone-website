import { ChevronDown, ChevronUp } from "lucide-react";

const Footer = () => {
  const usefulLinks = [
    "Home", "About Us", "Certifications", "Careers", 
    "Our Presence", "Privacy Policy", "Security Reporting", "Our Blog"
  ];

  const presence = {
    "North America": ["Detroit, MI, United States", "Toronto, ON, Canada"],
    "India": ["Bangalore, Karnataka", "Mumbai, Maharashtra", "Hyderabad, Telangana"],
    "Middle East": ["Dubai, UAE", "Riyadh, Saudi Arabia"]
  };

  const products = ["Lumenore", "IntelliPi", "Bank Up", "Roadcast"];

  return (
    <footer className="bg-header text-header-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Useful Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Useful Links</h3>
            <ul className="space-y-3">
              {usefulLinks.map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-header-foreground/70 hover:text-primary transition-colors text-sm flex items-center"
                  >
                    <span className="mr-2">›</span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Presence */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Presence</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-header-foreground/5 rounded border border-header-foreground/10">
                <div className="flex items-center space-x-3">
                  <span className="text-sm">🇺🇸</span>
                  <span className="font-medium">North America</span>
                </div>
                <ChevronDown className="w-4 h-4" />
              </div>
              <div className="ml-6 space-y-1">
                <div className="text-sm text-header-foreground/70 flex items-center">
                  <span className="mr-2">›</span>
                  Detroit, MI, United States
                </div>
                <div className="text-sm text-header-foreground/70 flex items-center">
                  <span className="mr-2">›</span>
                  Toronto, ON, Canada
                </div>
              </div>

              <div className="flex items-center justify-between p-3 bg-header-foreground/5 rounded border border-header-foreground/10">
                <div className="flex items-center space-x-3">
                  <span className="text-sm">🇮🇳</span>
                  <span className="font-medium">India</span>
                </div>
                <ChevronDown className="w-4 h-4" />
              </div>

              <div className="flex items-center justify-between p-3 bg-header-foreground/5 rounded border border-header-foreground/10">
                <div className="flex items-center space-x-3">
                  <span className="text-sm">🇦🇪</span>
                  <span className="font-medium">Middle East</span>
                </div>
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Platform & Products */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Platform & Products</h3>
            <ul className="space-y-3">
              {products.map((product) => (
                <li key={product}>
                  <a 
                    href="#" 
                    className="text-header-foreground/70 hover:text-primary transition-colors text-sm flex items-center"
                  >
                    <span className="mr-2">›</span>
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-header-foreground/20 mt-12 pt-8 text-center">
          <p className="text-header-foreground/60 text-sm">
            Copyright © 2025 Netlink
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;