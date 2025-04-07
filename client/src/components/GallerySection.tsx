interface GalleryImageProps {
  src: string;
  alt: string;
  title: string;
  description: string;
}

const GalleryImage = ({ src, alt, title, description }: GalleryImageProps) => {
  return (
    <div className="relative group overflow-hidden rounded-lg shadow-lg">
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-64 object-cover transition duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-dark-blue to-transparent opacity-0 group-hover:opacity-60 transition duration-300"></div>
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
      src: "https://images.unsplash.com/photo-1540946485063-a40da27545f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80",
      alt: "Sailboat with clean hull",
      title: "Racing Sailboat",
      description: "Protected with Anchor Premium Antifouling"
    },
    {
      src: "https://images.unsplash.com/photo-1575468130797-aa90248b1c41?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80",
      alt: "Yacht hull being painted",
      title: "Application Process",
      description: "Professional application on luxury yacht"
    },
    {
      src: "https://images.unsplash.com/photo-1564126935444-6684da556765?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80",
      alt: "Fishing boat in harbor",
      title: "Commercial Vessel",
      description: "18 months after application - still clean"
    },
    {
      src: "https://images.unsplash.com/photo-1526761122248-c31c93f8b2b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80",
      alt: "Luxury yacht at sea",
      title: "Luxury Motor Yacht",
      description: "Protected with Anchor Premium Antifouling"
    },
    {
      src: "https://images.unsplash.com/photo-1614113076002-59e8c25e1b3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80",
      alt: "Boat hull being cleaned",
      title: "Maintenance Check",
      description: "Minimal cleaning required with our formula"
    },
    {
      src: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80",
      alt: "Small fishing boat",
      title: "Small Craft",
      description: "Perfect protection for vessels of all sizes"
    }
  ];

  return (
    <section id="gallery" className="py-16 bg-light-blue bg-wave-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-dark-blue">
            Gallery
          </h2>
          <p className="mt-4 text-lg text-anchor-gray max-w-3xl mx-auto">
            See our antifouling paint in action, protecting vessels of all sizes.
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
