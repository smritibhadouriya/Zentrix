import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaBullhorn, FaLightbulb, FaChartLine, FaUsers, FaCheckCircle} from 'react-icons/fa';
import ServiceImage from '../assets/service.png';
import { services } from '../Data/Services';
import { testimonials } from '../Data/Testimonials';
// Map string icon names to actual icon components
const iconMap = {
  FaBullhorn: FaBullhorn,
  FaLightbulb: FaLightbulb,
  FaChartLine: FaChartLine,
  FaUsers: FaUsers,
};
const Service = () => {
  const { service } = useParams();
  // Find the service by matching the path (case-insensitive and hyphen-normalized)
  const serviceInfo = services.find(
    (s) => s.path.toLowerCase().replace(/\s+/g, '-') === service
  )?.details || {
    title: 'Service Not Found',
    intro: 'Sorry, the service you requested is not available.',
    detailedIntro: 'Please explore our other services or contact us for more information.',
    features: [],
    process: [],
    benefits: [],
  };
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);
  return (
    <div>
      {/* Hero Section */}
      <header className="text-center py-10 lg:p-10 pt-30 md:pt-30 lg:pb-15 lg:pt-25 px-4 md:px-0 bg-opacity-10 bg-blue-50 w-full">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl sm:text-5xl font-bold mb-4">
            <span className="text-blue-500">{serviceInfo.title}</span>
          </h1>
          <p className="text-lg text-gray-600">{serviceInfo.intro}</p>
        </div>
      </header>

      {/* Introduction Section */}
      <section className="px-2 py-10 md:px-6 md:py-12 lg:px-36 lg:py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Why Choose Our {serviceInfo.title}?</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">{serviceInfo.detailedIntro}</p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We combine industry expertise, cutting-edge tools, and a client-centric approach to deliver solutions that not only meet your needs but exceed your expectations. Whether you're a startup or an established enterprise, our tailored strategies ensure your brand achieves its full potential.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <img src={ServiceImage} alt="Service Image" className="w-full h-auto rounded-lg" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-2 py-10 md:px-6 md:py-12 lg:px-36 lg:py-20  bg-gray-100 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Features</h2>
        <p className="text-gray-600 mt-2 text-sm sm:text-base mb-8">
          Explore the key features that make our service stand out
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceInfo.features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon] || FaCheckCircle; // Fallback to FaCheckCircle if icon not found
            return (
              <div
                key={index}
                className="bg-white p-4 sm:p-6 rounded-lg shadow-md flex flex-col justify-between text-left transition-all hover:shadow-xl sm:hover:translate-y-[-10px] sm:hover:scale-105"
              >
                <div>
                  <div className="flex justify-center items-center h-12 w-12 sm:h-14 sm:w-14 rounded-xl mr-4 mb-2 bg-gradient-to-l from-blue-600 to-blue-400">
                    <IconComponent className="text-xl sm:text-2xl text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold">{feature.text}</h3>
                  <p className="mt-2 text-gray-600 text-sm sm:text-base">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Process Section */}
      <section className="px-2 py-10 md:px-6 md:py-12 lg:px-36 lg:py-20  text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Our Process</h2>
        <p className="text-gray-600 mt-2 text-sm sm:text-base mb-10">
          How we deliver exceptional results for your business
        </p>
        <div className="flex flex-col md:flex-row justify-around items-center gap-6 lg:mb-10 ">
          {serviceInfo.process.map((step, index) => (
            <div key={index} className="text-center w-full md:w-auto">
              <div className="flex justify-center mb-2">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 text-white text-xl font-bold">
                  {index + 1}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{step.title}</h3>
              <p className="text-base text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <div className="px-2 py-10 md:px-6 md:py-12 lg:px-36 lg:py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900">What Our Clients Say</h2>
          <p className="mt-2 text-lg text-center text-gray-600 mb-10">Don't just take our word for it - hear from our satisfied clients</p>
          <div className="overflow-x-auto hide-scrollbar py-2">
            <div className="flex gap-6" style={{ minWidth: '1000px' }}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center flex-shrink-0 w-1/3">
                  <div className="flex justify-left">
                    <span className="inline-flex items-left rounded-full text-xl font-bold text-yellow-500">
                      ★★★★★
                    </span>
                  </div>
                  <div className="mt-4 text-left">
                    <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                  </div>
                  <div className="mt-6 flex items-left justify-left">
                    <img
                      className="h-12 w-12 rounded-full object-cover"
                      src={testimonial.image}
                      alt={testimonial.name}
                    />
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="flex flex-col md:justify-center md:items-center md:p-8 gap-6 bg-gray-900 text-gray-300 py-4 md:py-15 px-5 md:px-6">
        <h1 className="text-4xl font-bold mt-4">Ready to Get Started?</h1>
        <div className="text-lg">Contact us today to learn how our {serviceInfo.title} services can help your business thrive.</div>
        <a
          href="/contact"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-blue-700 transition-colors"
        >
          Contact Us <span className="ml-2">&rarr;</span>
        </a>
      </div>
    </div>
  );
};

export default Service;