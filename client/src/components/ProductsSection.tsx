
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';

interface ProductProps {
  id: string;
  name: string;
  description: string;
  features: string[];
  imageUrl: string;
  pricingInfo?: string;
}

const initialProducts: ProductProps[] = [
  {
    id: 'product-1',
    name: 'Antifouling Regular Grade Paint',
    description: 'Standard antifouling protection for regular marine environments.',
    features: [
      'Suitable for all vessel types',
      'Long-lasting protection',
      'Easy application',
      'Cost-effective solution'
    ],
    imageUrl: '/products/regular-grade.jpg',
    pricingInfo: 'Available in 20L containers'
  },
  {
    id: 'product-2',
    name: 'Antifouling Fibergold Paint',
    description: 'Premium grade antifouling with enhanced protection properties.',
    features: [
      'Superior protection',
      'Extended longevity',
      'Advanced formula',
      'Professional grade'
    ],
    imageUrl: '/products/fibergold.jpg',
    pricingInfo: 'Available in 10L and 20L containers'
  },
  {
    id: 'product-3',
    name: 'Antifouling Captain Grade Paint',
    description: 'Top-tier antifouling solution for maximum vessel protection.',
    features: [
      'Maximum protection',
      'Premium quality',
      'Extended service life',
      'Professional results'
    ],
    imageUrl: '/products/captain-grade.jpg',
    pricingInfo: 'Available in 20L containers'
  },
  {
    id: 'product-4',
    name: 'Epoxy Red Oxide Primer',
    description: 'High-quality primer for optimal paint adhesion and protection.',
    features: [
      'Superior adhesion',
      'Corrosion protection',
      'Extended durability',
      'Professional finish'
    ],
    imageUrl: '/products/red-oxide.jpg',
    pricingInfo: 'Available in standard sizes'
  }
];

const ProductCard = ({ product }: { product: ProductProps }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 h-full flex flex-col">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>
        <h3 className="absolute bottom-4 left-4 text-white font-heading font-bold text-xl">{product.name}</h3>
      </div>
      
      <div className="p-4 flex-1 flex flex-col">
        <p className="text-gray-600 mb-4">{product.description}</p>
        
        <button 
          onClick={() => setShowDetails(!showDetails)}
          className="flex items-center text-primary-blue font-medium mb-2"
        >
          {showDetails ? 'Hide Features' : 'View Features'} 
          <Plus className={`ml-1 h-4 w-4 transition-transform ${showDetails ? 'rotate-45' : ''}`} />
        </button>
        
        {showDetails && (
          <div className="mt-2 mb-4">
            <ul className="list-disc pl-5 text-gray-600 space-y-1">
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        )}
        
        <div className="mt-auto pt-4 border-t border-gray-100">
          {product.pricingInfo && (
            <p className="text-gray-500 text-sm">{product.pricingInfo}</p>
          )}
        </div>
      </div>
    </div>
  );
};

const ProductsSection = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const productsPerPage = 2;
  const totalPages = Math.ceil(initialProducts.length / productsPerPage);
  
  const handlePrevious = () => {
    setCurrentPage(prev => (prev > 0 ? prev - 1 : prev));
  };
  
  const handleNext = () => {
    setCurrentPage(prev => (prev < totalPages - 1 ? prev + 1 : prev));
  };
  
  const currentProducts = initialProducts.slice(
    currentPage * productsPerPage, 
    (currentPage + 1) * productsPerPage
  );
  
  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-blue">
            Our <span className="text-primary-red">Products</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto font-body">
            Discover our premium range of antifouling paints designed to protect your vessel in all water conditions while ensuring optimal performance.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {currentProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-12 space-x-4">
            <button 
              onClick={handlePrevious}
              disabled={currentPage === 0}
              className={`p-2 rounded-full ${currentPage === 0 ? 'text-gray-400 cursor-not-allowed' : 'text-primary-blue hover:bg-blue-50'}`}
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <div className="text-gray-600">
              {currentPage + 1} of {totalPages}
            </div>
            
            <button 
              onClick={handleNext}
              disabled={currentPage === totalPages - 1}
              className={`p-2 rounded-full ${currentPage === totalPages - 1 ? 'text-gray-400 cursor-not-allowed' : 'text-primary-blue hover:bg-blue-50'}`}
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductsSection;
