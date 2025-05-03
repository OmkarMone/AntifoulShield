interface ApplicationStepProps {
  number: number;
  title: string;
  description: string;
}

const ApplicationStep = ({ number, title, description }: ApplicationStepProps) => {
  return (
    <div className="flex mb-8 last:mb-0">
      <div className="flex-shrink-0 mr-4">
        <div className="w-12 h-12 rounded-full bg-primary-blue text-white flex items-center justify-center font-heading font-bold text-xl">
          {number}
        </div>
      </div>
      <div>
        <h3 className="text-xl font-heading font-semibold mb-2 text-dark-blue">{title}</h3>
        <p className="text-anchor-gray">
          {description}
        </p>
      </div>
    </div>
  );
};

const ApplicationGuide = () => {
  const steps = [
    {
      title: "Surface Preparation",
      description: "Thoroughly clean the hull, removing all traces of marine growth, grease, and old flaking paint. Sand the surface for improved adhesion, and ensure it's completely dry before continuing."
    },
    {
      title: "Primer Application",
      description: "Apply appropriate primer if dealing with a new surface or changing antifouling types. Allow the primer to dry completely according to the specified drying time before proceeding."
    },
    {
      title: "Mixing The Paint",
      description: "Thoroughly stir the antifouling paint to ensure all ingredients are well-mixed. Continue stirring during application to prevent settling of active ingredients."
    },
    {
      title: "Paint Application",
      description: "Apply using a brush, roller, or spray equipment in thin, even coats. Apply at least 2 coats, with additional coats at high-wear areas like the waterline and leading edges."
    }
  ];

  return (
    <section id="application" className="py-16 bg-light-blue bg-wave-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-dark-blue">
            Application Guide
          </h2>
          <p className="mt-4 text-lg text-anchor-gray max-w-3xl mx-auto">
            Follow these steps for optimal application and performance of your Anchor antifouling paint.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            {steps.map((step, index) => (
              <ApplicationStep 
                key={index}
                number={index + 1}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
          <div className="relative">
            <img 
              src="https://5.imimg.com/data5/SELLER/Default/2023/7/332766400/OJ/YD/YV/3823480/marine-bottom-paint.jpg" 
              alt="Applying antifouling paint to a boat hull" 
              className="rounded-lg shadow-xl w-full h-full object-cover"
            />
            <div className="absolute -top-4 -left-4 bg-primary-red text-white p-4 rounded shadow-lg">
              <p className="text-sm font-heading font-bold">PROVEN RESULTS</p>
              <p className="text-xs">Easy application process</p>
            </div>
          </div>
        </div>

        <div className="mt-12 p-6 bg-white rounded-lg shadow border-l-4 border-primary-blue">
          <h3 className="font-heading font-semibold text-xl mb-2">Important Safety Information</h3>
          <ul className="list-disc list-inside text-anchor-gray space-y-2">
            <li>Always wear appropriate protective equipment, including gloves, eye protection, and respiratory protection.</li>
            <li>Apply in well-ventilated areas and avoid application in extreme temperatures or humidity.</li>
            <li>Allow sufficient drying time before launching the vessel (minimum 24 hours, ideally 48+ hours).</li>
            <li>Dispose of leftover paint and materials according to local regulations.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ApplicationGuide;
