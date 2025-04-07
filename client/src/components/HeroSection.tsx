import boatSvg from "@assets/boat-antifouling.svg";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-primary-blue to-dark-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold leading-tight">
              Superior <span className="text-primary-red">Antifouling</span> Protection
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-200 font-body">
              Designed for maximum performance and longevity, our premium antifouling paint keeps your vessel protected and efficient in all water conditions.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#features" className="px-6 py-3 bg-primary-red text-white font-heading font-medium rounded-md hover:bg-red-700 transition duration-150">
                Explore Features
              </a>
              <a href="#contact" className="px-6 py-3 bg-transparent border-2 border-white text-white font-heading font-medium rounded-md hover:bg-white hover:text-primary-blue transition duration-150">
                Get a Quote
              </a>
            </div>
          </div>
          <div className="relative">
            <img 
              src={boatSvg} 
              alt="Boat with antifouling paint" 
              className="rounded-lg shadow-2xl w-full bg-white/5 backdrop-blur-sm p-4"
            />
            <div className="absolute -bottom-4 -right-4 bg-primary-red text-white p-4 rounded shadow-lg">
              <p className="text-sm font-heading font-bold">PROVEN PROTECTION</p>
              <p className="text-xs">Up to 24 months</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-6 bg-wave-pattern"></div>
    </section>
  );
};

export default HeroSection;
