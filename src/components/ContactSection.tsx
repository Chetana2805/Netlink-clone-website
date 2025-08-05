import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dialCode: "+1",
    mobile: "",
    enquiry: "",
    message: "",
    recaptcha: false
  });

  const dialCodes = [
    { code: "+1", country: "US/CA" },
    { code: "+44", country: "UK" },
    { code: "+91", country: "IN" },
    { code: "+971", country: "UAE" }
  ];

  const enquiryTypes = [
    "Digital Transformation",
    "Application Development", 
    "Cloud Services",
    "AI & Machine Learning",
    "Partnership Opportunities",
    "Other"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="py-20 bg-header text-header-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)',
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="flex flex-col items-left ">
             
                <div className="text-header bg-header text-header-foreground font-bold text-6xl">N</div>
  <div className="flex flex-col items-left">
    <h1 className="text-md  text-header-foreground">netlink</h1>
    <p className="text-xs text-header-foreground/40">Innovate with Passion</p>
  </div>
            </div>

            <div className="space-y-4">
              <p className="text-lg text-header-foreground leading-relaxed">
                Netlink, with its global footprints, is renowned as one of the top firms 
                among 200 organizations in Michigan Detroit and is ranked 21 for its 
                technology and service partnerships with industry-leading global 
                entities such as Oracle, SAP, Microsoft, Vertica, etc.
              </p>
            </div>
          </div>

          {/* Right Contact Form */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold text-header-foreground mb-4">Contact Us</h3>
              <p className="text-header-foreground/80">
                Talk to us about your project details and get expedited 
                technology consultations or business quotations.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  type="text"
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="bg-header-foreground/10 border-header-foreground/20 text-header-foreground placeholder:text-header-foreground/60"
                  required
                />
                <Input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="bg-header-foreground/10 border-header-foreground/20 text-header-foreground placeholder:text-header-foreground/60"
                  required
                />
              </div>

             <div className="grid grid-cols-3 gap-4">
  <Select 
    value={formData.dialCode} 
    onValueChange={(value) => setFormData({...formData, dialCode: value})}
  >
    <SelectTrigger className="bg-header-foreground/10 border-header-foreground/20 text-header-foreground">
      <SelectValue />
    </SelectTrigger>
    <SelectContent className="bg-header-foreground">
      {dialCodes.map((item) => (
        <SelectItem key={item.code} value={item.code} className="text-black">
          {item.code} {item.country}
        </SelectItem>
      ))}
    </SelectContent>
  </Select>
  <div className="col-span-2">
    <Input
      type="tel"
      placeholder="Mobile"
      value={formData.mobile}
      onChange={(e) => setFormData({...formData, mobile: e.target.value})}
      className="bg-header-foreground/10 border-header-foreground/20 text-header-foreground placeholder:text-header-foreground/60"
      required
    />
  </div>
</div>


             <Select 
  value={formData.enquiry} 
  onValueChange={(value) => setFormData({...formData, enquiry: value})}
>
  <SelectTrigger className="bg-header-foreground/10 border-header-foreground/20 text-header-foreground">
    <SelectValue placeholder="Enquiring For" />
  </SelectTrigger>
  <SelectContent className="bg-header-foreground">
    {enquiryTypes.map((type) => (
      <SelectItem key={type} value={type} className="text-black">
        {type}
      </SelectItem>
    ))}
  </SelectContent>
</Select>


              <Textarea
                placeholder="Message"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="bg-header-foreground/10 border-header-foreground/20 text-header-foreground placeholder:text-header-foreground/60 min-h-[120px]"
                rows={4}
              />

              <div className="flex items-center space-x-3">
                <Checkbox
                  id="recaptcha"
                  checked={formData.recaptcha}
                  onCheckedChange={(checked) => setFormData({...formData, recaptcha: checked as boolean})}
                />
                <label htmlFor="recaptcha" className="text-sm text-header-foreground/80">
                  I'm not a robot
                </label>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary-hover text-white font-semibold py-3"
                disabled={!formData.recaptcha}
              >
                Send
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;