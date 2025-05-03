
import React from 'react';

const GalleryImage = ({ src, alt, title, description }: {
  src: string;
  alt: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="relative group overflow-hidden rounded-lg shadow-lg">
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-64 object-cover transition duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition duration-300">
        <h3 className="font-heading font-semibold text-lg">{title}</h3>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};

const GallerySection = () => {
  const galleryImages = [
    {
      src: "/gallery/antifouling1.jpg",
      alt: "Premium Antifouling Paint",
      title: "Premium Antifouling",
      description: "High-performance coating for maximum protection"
    },
    {
      src: "/gallery/antifouling2.jpg",
      alt: "Marine Paint Application",
      title: "Application Process",
      description: "Professional application techniques"
    },
    {
      src: "/gallery/antifouling3.jpg",
      alt: "Underwater Hull Paint",
      title: "Hull Protection",
      description: "Complete underwater hull protection"
    },
    {
      src: "/gallery/antifouling4.jpg",
      alt: "Marine Antifouling Paint",
      title: "Marine Grade",
      description: "Specialized marine protection coating"
    },
    {
      src: "/gallery/antifouling5.jpg",
      alt: "Eco-friendly Paint",
      title: "Eco-Friendly Solution",
      description: "Environmental conscious formulation"
    },
    {
      src: "/gallery/antifouling6.jpg",
      alt: "Hull Paint Application",
      title: "Application Guide",
      description: "Step-by-step application process"
    }
  ];

  return (
    <section id="gallery" className="py-16 bg-light-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-dark-blue">
            Our <span className="text-primary-red">Gallery</span>
          </h2>
          <p className="mt-4 text-lg text-anchor-gray max-w-3xl mx-auto">
            Explore our premium antifouling solutions in action
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <GalleryImage 
              key={index}
              src={image.src}
              alt={image.alt}
              title={image.title}
              description={image.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
