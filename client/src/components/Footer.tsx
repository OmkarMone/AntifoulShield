const Footer = () => {
  return (
    <footer className="bg-dark-blue text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4">
              <i className="fa-solid fa-anchor mr-2 text-primary-red"></i>
              <span className="font-heading font-bold text-xl">ANCHOR<span className="text-primary-red">PAINTS</span></span>
            </div>
            <p className="text-gray-300 text-sm">
              Premium antifouling protection for all marine vessels. Trusted by professionals worldwide.
            </p>
          </div>
          
          <div>
            <h4 className="font-heading font-medium text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-300 hover:text-white transition duration-150">Features</a></li>
              <li><a href="#application" className="text-gray-300 hover:text-white transition duration-150">Application Guide</a></li>
              <li><a href="#benefits" className="text-gray-300 hover:text-white transition duration-150">Benefits</a></li>
              <li><a href="#gallery" className="text-gray-300 hover:text-white transition duration-150">Gallery</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition duration-150">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading font-medium text-lg mb-4">Products</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition duration-150">Premium Antifouling</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition duration-150">Racing Formula</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition duration-150">Commercial Grade</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition duration-150">Eco-Friendly Line</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition duration-150">Primers & Sealers</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading font-medium text-lg mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition duration-150">Product Catalog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition duration-150">Technical Data Sheets</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition duration-150">Safety Information</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition duration-150">Dealer Locator</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition duration-150">FAQs</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Anchor Paints. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition duration-150">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-150">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-150">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
