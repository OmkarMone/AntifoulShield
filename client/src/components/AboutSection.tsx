import { User, Building, Award, Anchor } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-blue">
            About <span className="text-primary-red">Anchor Paints</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto font-body">
            Trusted by marine professionals and boat owners for over 20 years, providing the highest quality antifouling solutions for vessels of all sizes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-primary-red">
              <h3 className="text-2xl font-heading font-bold text-primary-blue mb-4">Our Company</h3>
              <p className="text-gray-600 mb-6">
                Founded in 2005, Anchor Paints has been dedicated to developing superior marine coatings that protect vessels from the harsh marine environment while enhancing performance and efficiency for the Indian market.
              </p>

              <p className="text-gray-600 mb-6">
                Our specialized antifouling paints are formulated with advanced polymer technology to ensure long-lasting protection against barnacles, algae, and other marine growth.
              </p>

              <div className="flex items-center gap-3 mb-3">
                <Building className="text-primary-red h-5 w-5 flex-shrink-0" />
                <span className="text-gray-700 font-semibold">Headquarters: Maharashtra, India</span>
              </div>

              <div className="flex items-center gap-3 mb-3">
                <Anchor className="text-primary-red h-5 w-5 flex-shrink-0" />
                <span className="text-gray-700 font-semibold">Serving customers across India</span>
              </div>

              <div className="flex items-center gap-3">
                <Award className="text-primary-red h-5 w-5 flex-shrink-0" />
                <span className="text-gray-700 font-semibold">ISO 9001 certified manufacturing</span>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-primary-blue">
              <h3 className="text-2xl font-heading font-bold text-primary-blue mb-4">Meet the Owner</h3>

              <div className="flex flex-col sm:flex-row items-center gap-6 mb-6">
                <div className="flex-shrink-0">
                  <img 
                  src="./images/mukesh-mone-profile.png" 
                  alt="Mr. Mukesh Mone - Founder & CEO" 
                  className="w-32 h-32 rounded-full object-cover"
                />
                </div>

                <div>
                  <h4 className="text-xl font-heading font-bold text-primary-blue">Mr. Mukesh Mone</h4>
                  <p className="text-gray-500 font-medium">Founder & CEO</p>
                </div>
              </div>

              <p className="text-gray-600 mb-4">
                With extensive experience in the maritime industry, Mr. Mone founded Anchor Paints after identifying the need for more effective and environmentally responsible antifouling solutions for the Indian market.
              </p>

              <p className="text-gray-600">
                "My mission has always been to create products that not only protect vessels but also enhance their performance while minimizing environmental impact. Every formula we develop is tested rigorously to ensure it meets the highest standards of quality and durability."
              </p>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <h5 className="font-heading font-semibold text-primary-blue mb-2">Contact the Owner:</h5>
                <p className="text-gray-600">Email: mukesh.mone@gmail.com</p>
                <p className="text-gray-600">Phone: +91 9420481040</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;