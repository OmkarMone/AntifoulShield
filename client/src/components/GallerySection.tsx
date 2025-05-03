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
      src: "https://5.imimg.com/data5/SELLER/Default/2021/3/KF/QC/XG/3823480/anti-fouling-paint.jpg",
      alt: "Premium Antifouling Paint",
      title: "Premium Antifouling",
      description: "High-performance coating for maximum protection"
    },
    {
      src: "https://5.imimg.com/data5/SELLER/Default/2022/9/VO/DN/ST/3823480/antifouling-marine-paint.jpg",
      alt: "Marine Paint Application",
      title: "Application Process",
      description: "Professional application techniques"
    },
    {
      src: "https://5.imimg.com/data5/SELLER/Default/2023/1/XK/XD/OX/3823480/bronze-antifouling-paint.jpg",
      alt: "Bronze Antifouling",
      title: "Bronze Series",
      description: "Premium bronze antifouling formulation"
    },
    {
      src: "https://5.imimg.com/data5/SELLER/Default/2023/7/332766400/UZ/YE/FS/3823480/underwater-hull-paint.jpg",
      alt: "Underwater Hull Paint",
      title: "Hull Protection",
      description: "Complete underwater hull protection"
    },
    {
      src: "https://5.imimg.com/data5/SELLER/Default/2023/7/332766400/ZD/QK/BU/3823480/marine-antifouling-paint.jpg",
      alt: "Maintenance Check",
      title: "Quality Check",
      description: "Regular maintenance inspection"
    },
    {
      src: "https://5.imimg.com/data5/SELLER/Default/2023/7/332766400/WX/YC/UM/3823480/tin-free-antifouling-paint.jpg",
      alt: "Eco-friendly Paint",
      title: "Eco-Friendly Solution",
      description: "Environmental conscious formulation"
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
