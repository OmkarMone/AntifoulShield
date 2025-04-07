import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would submit to a backend
    console.log('Form submission:', formData);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    // Show success message or toast
    alert('Thank you for your message. We will get back to you soon!');
  };
  
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-dark-blue">
            Contact Us
          </h2>
          <p className="mt-4 text-lg text-anchor-gray max-w-3xl mx-auto">
            Have questions about our products or need a customized solution? Reach out to our team.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-dark-blue">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary-blue focus:border-primary-blue"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-dark-blue">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary-blue focus:border-primary-blue"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-dark-blue">Subject</label>
                <select 
                  id="subject" 
                  name="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary-blue focus:border-primary-blue"
                >
                  <option value="">Please select</option>
                  <option value="product">Product Information</option>
                  <option value="quote">Request a Quote</option>
                  <option value="technical">Technical Support</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-dark-blue">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={4} 
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary-blue focus:border-primary-blue"
                ></textarea>
              </div>
              
              <div>
                <button type="submit" className="w-full px-6 py-3 bg-primary-red text-white font-heading font-medium rounded-md hover:bg-red-700 transition duration-150">
                  Send Message
                </button>
              </div>
            </form>
          </div>
          
          <div>
            <div className="bg-light-blue p-8 rounded-lg shadow-md h-full">
              <h3 className="text-xl font-heading font-semibold mb-4 text-dark-blue">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <i className="fa-solid fa-location-dot text-primary-blue"></i>
                  </div>
                  <div className="ml-4">
                    <p className="font-medium text-dark-blue">Our Address</p>
                    <p className="text-anchor-gray">123 Harbor Way, Marina District<br />San Francisco, CA 94123</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <i className="fa-solid fa-phone text-primary-blue"></i>
                  </div>
                  <div className="ml-4">
                    <p className="font-medium text-dark-blue">Phone</p>
                    <p className="text-anchor-gray">+1 (800) 555-0123</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <i className="fa-solid fa-envelope text-primary-blue"></i>
                  </div>
                  <div className="ml-4">
                    <p className="font-medium text-dark-blue">Email</p>
                    <p className="text-anchor-gray">info@anchorpaints.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <i className="fa-solid fa-clock text-primary-blue"></i>
                  </div>
                  <div className="ml-4">
                    <p className="font-medium text-dark-blue">Business Hours</p>
                    <p className="text-anchor-gray">Monday - Friday: 8:00 AM - 5:00 PM<br />Saturday: 9:00 AM - 1:00 PM</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-medium text-dark-blue mb-2">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-primary-blue hover:text-primary-red transition duration-150">
                    <i className="fa-brands fa-facebook-f text-xl"></i>
                  </a>
                  <a href="#" className="text-primary-blue hover:text-primary-red transition duration-150">
                    <i className="fa-brands fa-twitter text-xl"></i>
                  </a>
                  <a href="#" className="text-primary-blue hover:text-primary-red transition duration-150">
                    <i className="fa-brands fa-instagram text-xl"></i>
                  </a>
                  <a href="#" className="text-primary-blue hover:text-primary-red transition duration-150">
                    <i className="fa-brands fa-linkedin-in text-xl"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
