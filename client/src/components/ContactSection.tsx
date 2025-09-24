const ResourcesSection = () => {
  return (
    <section id="resources" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-dark-blue">
            Resources & Support
          </h2>
          <p className="mt-4 text-lg text-anchor-gray max-w-3xl mx-auto">
            Everything you need to know about antifouling paint application and maintenance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-light-blue p-8 rounded-lg shadow-md">
            <div className="text-primary-blue mb-4">
              <i className="fa-solid fa-book-open text-3xl"></i>
            </div>
            <h3 className="text-xl font-heading font-semibold mb-4 text-dark-blue">Application Guidelines</h3>
            <ul className="space-y-3 text-anchor-gray">
              <li>• Surface preparation techniques</li>
              <li>• Application methods</li>
              <li>• Coverage calculations</li>
              <li>• Drying time requirements</li>
            </ul>
          </div>

          <div className="bg-light-blue p-8 rounded-lg shadow-md">
            <div className="text-primary-blue mb-4">
              <i className="fa-solid fa-clipboard-list text-3xl"></i>
            </div>
            <h3 className="text-xl font-heading font-semibold mb-4 text-dark-blue">Maintenance Tips</h3>
            <ul className="space-y-3 text-anchor-gray">
              <li>• Regular inspection guides</li>
              <li>• Cleaning recommendations</li>
              <li>• Performance monitoring</li>
              <li>• Reapplication timing</li>
            </ul>
          </div>

          <div className="bg-light-blue p-8 rounded-lg shadow-md">
            <div className="text-primary-blue mb-4">
              <i className="fa-solid fa-shield-halved text-3xl"></i>
            </div>
            <h3 className="text-xl font-heading font-semibold mb-4 text-dark-blue">Technical Information</h3>
            <ul className="space-y-3 text-anchor-gray">
              <li>• Product specifications</li>
              <li>• Safety data sheets</li>
              <li>• Environmental compliance</li>
              <li>• Performance ratings</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ResourcesSection;