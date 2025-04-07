interface FeatureProps {
  icon: string;
  title: string;
  description: string;
  accentColor: string;
}

const Feature = ({ icon, title, description, accentColor }: FeatureProps) => {
  return (
    <div className={`bg-light-blue rounded-lg p-6 shadow-md hover:shadow-lg transition duration-150 border-t-4 ${accentColor}`}>
      <div className={`${accentColor === 'border-primary-blue' ? 'text-primary-blue' : 'text-primary-red'} mb-4`}>
        <i className={`fa-solid ${icon} text-4xl`}></i>
      </div>
      <h3 className="text-xl font-heading font-semibold mb-2">{title}</h3>
      <p className="text-anchor-gray">
        {description}
      </p>
    </div>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      icon: "fa-shield-halved",
      title: "Advanced Biocide Technology",
      description: "Cutting-edge formula that combats even the most persistent marine growth while minimizing environmental impact.",
      accentColor: "border-primary-blue"
    },
    {
      icon: "fa-clock",
      title: "Long-Lasting Protection",
      description: "Provides up to 24 months of reliable protection, reducing maintenance costs and downtime for your vessel.",
      accentColor: "border-primary-red"
    },
    {
      icon: "fa-droplet",
      title: "Self-Polishing Formula",
      description: "Continuously renews its surface, maintaining optimal performance and minimizing drag throughout its lifespan.",
      accentColor: "border-primary-blue"
    },
    {
      icon: "fa-paint-roller",
      title: "Easy Application",
      description: "Designed for smooth, consistent application with excellent coverage, saving time during preparation and application.",
      accentColor: "border-primary-red"
    },
    {
      icon: "fa-water",
      title: "All-Water Formula",
      description: "Effective in fresh, salt, and brackish waters, making it the perfect choice for boats in various environments.",
      accentColor: "border-primary-blue"
    },
    {
      icon: "fa-leaf",
      title: "Eco-Conscious Design",
      description: "Formulated to minimize environmental impact while maintaining superior protection against marine growth.",
      accentColor: "border-primary-red"
    }
  ];

  return (
    <section id="features" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-dark-blue">
            Advanced Protection Features
          </h2>
          <p className="mt-4 text-lg text-anchor-gray max-w-3xl mx-auto">
            Our innovative formula provides superior performance against fouling organisms while remaining environmentally responsible.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Feature 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              accentColor={feature.accentColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
