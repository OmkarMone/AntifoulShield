interface BenefitRowProps {
  feature: string;
  premium: string | React.ReactNode;
  standard: string | React.ReactNode;
}

const BenefitRow = ({ feature, premium, standard }: BenefitRowProps) => {
  return (
    <tr className="border-b border-gray-200">
      <td className="p-4 font-medium text-dark-blue">{feature}</td>
      <td className="p-4 text-center bg-blue-50">
        {premium}
      </td>
      <td className="p-4 text-center">{standard}</td>
    </tr>
  );
};

const BenefitsSection = () => {
  const benefitRows = [
    {
      feature: "Protection Duration",
      premium: <span className="text-primary-blue font-semibold">Up to 24 months</span>,
      standard: "12-18 months"
    },
    {
      feature: "Effective in All Waters",
      premium: <i className="fa-solid fa-check text-primary-blue"></i>,
      standard: <i className="fa-solid fa-xmark text-red-500"></i>
    },
    {
      feature: "Self-Polishing Technology",
      premium: <i className="fa-solid fa-check text-primary-blue"></i>,
      standard: <span className="text-anchor-gray">Varies by product</span>
    },
    {
      feature: "Hull Efficiency",
      premium: <span className="text-primary-blue font-semibold">Excellent</span>,
      standard: "Good"
    },
    {
      feature: "Environmentally Optimized",
      premium: <i className="fa-solid fa-check text-primary-blue"></i>,
      standard: <i className="fa-solid fa-xmark text-red-500"></i>
    },
    {
      feature: "Application Temperature Range",
      premium: <span className="text-primary-blue font-semibold">41°F - 95°F</span>,
      standard: "50°F - 86°F"
    }
  ];

  return (
    <section id="benefits" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-dark-blue">
            Why Choose Anchor Antifouling Paint?
          </h2>
          <p className="mt-4 text-lg text-anchor-gray max-w-3xl mx-auto">
            See how our premium formula compares to standard antifouling paints on the market.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="p-4 text-left bg-light-blue text-dark-blue font-heading">Feature</th>
                <th className="p-4 text-center bg-primary-blue text-white font-heading">Anchor Premium</th>
                <th className="p-4 text-center bg-anchor-gray text-white font-heading">Standard Antifouling</th>
              </tr>
            </thead>
            <tbody>
              {benefitRows.map((row, index) => (
                <BenefitRow 
                  key={index}
                  feature={row.feature}
                  premium={row.premium}
                  standard={row.standard}
                />
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
};

export default BenefitsSection;
