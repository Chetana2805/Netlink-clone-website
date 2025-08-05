import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", hasDropdown: false },
    { name: "Services", hasDropdown: true },
    { name: "Platform And Products", hasDropdown: true },
    { name: "Partnerships", hasDropdown: true },
    { name: "About Us", hasDropdown: true },
    { name: "Careers", hasDropdown: true }
  ];

  return (
    <header className="bg-header text-header-foreground shadow-[var(--shadow-header)] sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            <div className="flex flex-col items-center space-y-2">
  
    <div className="text-header bg-header text-header-foreground font-bold text-6xl">N</div>
  <div className="flex flex-col items-center">
    <h1 className="text-md  text-header-foreground">netlink</h1>
    <p className="text-xs text-header-foreground/40">Innovate with Passion</p>
  </div>
</div>

            <div className="hidden md:block bg-red-600 text-white px-3 py-2 rounded text-xs font-bold">
              <div className="text-center">
                <div className="text-xs">Great</div>
                <div className="text-xs">Place</div>
                <div className="text-xs">To</div>
                <div className="text-xs">Work</div>
                {/* <div className="text-xs">Certified</div> */}
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <a
                  href="#"
                  className="text-header-foreground hover:text-primary transition-colors duration-200 text-sm font-medium flex items-center space-x-1"
                >
                  <span>{item.name}</span>
                  {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </a>
              </div>
            ))}
          </nav>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button variant="cta" size="lg" className="hidden md:inline-flex bg-primary hover:bg-primary-hover">
              Let's Talk
            </Button>
            
            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden text-header-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pt-4 border-t border-header-foreground/20">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href="#"
                  className="text-header-foreground hover:text-primary transition-colors duration-200 py-2"
                >
                  {item.name}
                </a>
              ))}
              <Button variant="cta" className="mt-4 w-full">
                Let's Talk
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;