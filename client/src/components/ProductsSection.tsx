import React from 'react';

const ProductsSection = () => {
  const products = [
    {
      name: 'Matrix Anti-Fouling Paint',
      description: 'Premium quality anti-fouling paint suitable for all types of vessels.',
      imageUrl: '/images/products/matrix-antifouling.jpg',
      pricingInfo: 'Available in standard sizes'
    },
    {
      name: 'SeaGuard Protection',
      description: 'Long-lasting protection against marine growth and corrosion.',
      imageUrl: '/images/products/seaguard-protection.jpg',
      pricingInfo: 'Available in standard sizes'
    },
    {
      name: 'Marine Shield Plus',
      description: 'Advanced formula for superior underwater hull protection.',
      imageUrl: '/images/products/marine-shield.jpg',
      pricingInfo: 'Available in standard sizes'
    },
    {
      name: 'Red Oxide Primer',
      description: 'High-quality primer for optimal paint adhesion.',
      imageUrl: '/images/products/red-oxide-primer.jpg',
      pricingInfo: 'Available in standard sizes'
    }
  ];

  return (
    <section id="products" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-blue">
            Our <span className="text-primary-red">Products</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our range of premium antifouling solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-w-4 aspect-h-3">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-heading font-bold text-primary-blue mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <p className="text-sm text-primary-red font-medium">{product.pricingInfo}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;