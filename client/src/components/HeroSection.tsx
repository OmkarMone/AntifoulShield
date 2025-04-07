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
              src="https://images.unsplash.com/photo-1600177897995-e67c73ed44e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Boat with antifouling paint" 
              className="rounded-lg shadow-2xl w-full h-[400px] object-cover"
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
