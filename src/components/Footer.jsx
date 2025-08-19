import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaPhone, FaMailBulk } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { footerData } from '../Data/FooterData'; // Ensure the path and file name are correct

const Footer = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log('Subscribed:', e.target.email.value);
    e.target.reset();
  };

  const handleUnsubscribe =(e) =>{
    console.log('unsubscribe')
  }
  return (
    <footer className="bg-gray-900 text-gray-300 px-4 py-10 md:px-6 md:py-12 lg:px-36 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Company Section */}
          <div>
            <h3 className="text-blue-500 text-lg font-semibold mb-2">{footerData.company.name}</h3>
            <p className="text-sm">{footerData.company.description}</p>
            <div className="flex space-x-4 mt-4">
              {footerData.company.socialLinks.map((link, index) => {
                const Icon = link.icon; // Assign the icon component
                return (
                  <a
                    key={index}
                    href={link.href}
                    className="text-gray-400 hover:text-white"
                    aria-label={link.label}
                    role="link"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-2">Services</h3>
            <ul className="text-sm space-y-2">
              {footerData.services.map((service, index) => (
                <li key={index}>
                  <Link to={service.to} className="hover:text-blue-500">
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-2">Company</h3>
            <ul className="text-sm space-y-2">
              {footerData.companyLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-blue-500">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            
          </div>

          {/* Contact Info Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-2">Contact Info</h3>
            <ul className="text-sm space-y-2">
              {footerData.contactInfo.map((info, index) => {
                const Icon = info.icon; // Assign the icon component
                return (
                  <li key={index} className="flex items-center">
                    <span className="text-blue-500 mr-2">
                      <Icon />
                    </span>
                    {info.text}
                  </li>
                );
              })}
            </ul>
           
          </div>

          {/* Subscribe Section */}
<div>
  <h3 className="text-white text-lg font-semibold mb-6">Subscribe</h3>
  <div className="flex mb-1">
    <input
      type="email"
      name="email"
      placeholder="Enter your email"
      className="flex-1 px-4 py-2 bg-gray-800 h-auto text-gray-300 border-l border-gray-700 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500"
      required
    />
    <button
      onClick={handleSubscribe}
      className="px-4 py-2 bg-blue-500 text-white rounded-r hover:bg-blue-600 transition-colors"
    >
      Subscribe
    </button>
  </div>

  {/* Unsubscribe Link */}
  <div className="text-sm text-gray-400 ">
    Click Here to 
    <a
      href="#"
      onClick={handleUnsubscribe}
      className="text-white/80 hover:text-gray-300 transition-colors"> Unsubscribe
    </a>
  </div>
</div>

        </div>

        {/* Footer Bottom */}
        <div className="mt-10 text-center text-xs text-gray-500 border-t pt-6 md:flex justify-between items-center">
          <div className="md:text-left text-lg md:order-1">
            © 2025 {footerData.company.name}. All rights reserved.
          </div>
          <div className="md:text-right md:order-2 md:flex space-x-4">
            {footerData.footerLinks.map((link, index) => (
              <a key={index} href={link.href} className="hover:text-blue-500 text-lg">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;