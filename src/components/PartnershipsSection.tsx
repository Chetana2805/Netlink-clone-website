import { useRef, useState, useEffect } from "react";


const PartnershipsSection = () => {
  const scrollRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);

  const testimonials = [
    {
      text: "When I talk to colleagues and they ask me about Netlink and they ask me why we were willing to go back if you will to bring in a net new partner, the answer is simple. Netlink delivers on what they promise, they deliver in a way that truly differentiate themselves from the competition.",
      author: "Devin Parsons",
      position: "VICE PRESIDENT | BSWIFT"
    },
    {
      text: "The Netlink team has more than exceeded my expectations. They are professional, very knowledgeable, collaborative and very easy to work with. They have truly gone the extra mile to understand our business and our goals.",
      author: "Jennifer L. Breeland",
      position: "ASSET ADMIN | GORDON TECHNOLOGIES"
    },
    {
      text: "I have very warm relationship with Netlink. For the last four years, we have delivered successfully every time.",
      author: "Madhu Iyer",
      position: "IT DIRECTOR | RAINFOREST ALLIANCE"
    },
    {
      text: "You guys all do awesome work and I’m so glad we have you on this huge complicated project. We wouldn’t be anywhere near as far along with anyone else!",
      author: "Tim Mease",
      position: "CORPORATE ONE"
    },
    {
      text: "Netlink provide us with a whole set of tools and resources. Netlink has truly partner with us on getting the solutions we are building in place. We really enjoy working with them.",
      author: "Mark Collins",
      position: "DEVELOPMENT TEAM MANAGER | TABORDA SOLUTIONS"
    },
    {
      text: "Netlink continues to deliver great results and value. We appreciate the collaboration and effort to make our projects successful every time.",
      author: "Sarah Johnson",
      position: "OPERATIONS MANAGER | XYZ CORPORATION"
    }
  ];

  const brands = ["CERAGON", "Government of Gujarat", "CSC", "Dainik Bhaskar"];

  const itemsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length/ itemsPerPage);

  const handleScroll = () => {
    const scrollLeft = scrollRef.current.scrollLeft;
    const cardWidth = 350 + 24; // card width + gap
    const newPage = Math.round(scrollLeft / (cardWidth * itemsPerPage));
    setCurrentPage(newPage);
  };

  const scrollToPage = (page) => {
    const cardWidth = 350 + 24;
    scrollRef.current.scrollTo({
      left: page * cardWidth * itemsPerPage,
      behavior: "smooth"
    });
    setCurrentPage(page);
  };

  useEffect(() => {
    const ref = scrollRef.current;
    ref.addEventListener("scroll", handleScroll);
    return () => ref.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="text-primary text-lg font-medium block mb-2">
              Testimonials
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Customer Delights
            </h2>
            <div className="text-6xl text-gray-300">"</div>
          </div>

          {/* Scrollable Testimonials */}
          <div
            ref={scrollRef}
            className="flex space-x-6 overflow-x-auto scrollbar-hide px-4 "
            style={{ scrollSnapType: "x mandatory" }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="w-[450px] flex-shrink-0 bg-white rounded-xl shadow-md p-6 scroll-snap-align-start"
              >
                <p className="text-gray-600 mb-6 text-base leading-relaxed">
                  “{testimonial.text}”
                </p>
                <div>
                  <div className="text-lg font-semibold text-gray-900">
                    {testimonial.author}
                  </div>
                  <div className="text-primary text-sm mt-1">
                    {testimonial.position}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToPage(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentPage ? "bg-blue-500" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Brand Partnerships */}
      {/* <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Brand We Stand Behind
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center max-w-4xl mx-auto">
            {brands.map((brand, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                  <div className="font-semibold text-gray-800">{brand}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Case Studies */}
     <section className="py-20 bg-white">
  <div className="container mx-auto px-4">
    <div className="grid lg:grid-cols-2 gap-16 items-flex">
      
      {/* Left Image with Background Block */}
      <div className="relative flex justify-center">
        {/* Background block */}
        <div className="absolute top-8 left-6 bottom-6 w-[350px] h-[260px] bg-[#E4F0FB] rounded-xl"></div>

        {/* Foreground image */}
        <img
          src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=450&fit=crop"
          alt="Manufacturing process"
          className="relative rounded-lg shadow-lg w-[350px] h-[230px] object-cover"
        />
      </div>

            {/* Right Content */}
            <div className="space-y-6">
              <span className="text-primary text-sm font-medium uppercase tracking-wide">
                Case Studies
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                Centralized textile operations with innovative apps and SAP
                integration
              </h3>
              <p className="text-gray-600 leading-relaxed">
                The client is a leading textile manufacturer, faced challenges
                with fragmented digital platforms. Netlink developed...
              </p>
              <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-hover transition-colors font-medium">
                Read More
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PartnershipsSection;
