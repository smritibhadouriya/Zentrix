import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaMailBulk, FaMailchimp, FaTwitter } from 'react-icons/fa'
import { FaLetterboxd, FaLocationDot, FaPhone, FaSquareLetterboxd } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
            <footer className="bg-gray-900 text-gray-300 px-4 py-10 md:px-6 md:py-12 lg:px-36 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <h3 className="text-blue-500 text-lg font-semibold mb-2">Zentrix</h3>
                <p className="text-sm">
                  Leading digital marketing agency providing comprehensive solutions for modern businesses. We help brands grow through innovative digital strategies.
                </p>
                <div className="flex space-x-4 mt-4">
                  <a href="#" className="text-gray-400 hover:text-white"><FaFacebook /></a>
                  <a href="#" className="text-gray-400 hover:text-white"><FaInstagram /></a>
                  <a href="#" className="text-gray-400 hover:text-white"><FaLinkedin /></a>
                  <a href="#" className="text-gray-400 hover:text-white"><FaTwitter /></a>
                </div>
              </div>
              <div>
                <h3 className="text-white text-lg font-semibold mb-2">Services</h3>
              

<ul className="text-sm space-y-2">
  <li>
    <Link to="/service/brand-strategy" className="hover:text-blue-500">Brand & Strategy</Link>
  </li>
  <li>
    <Link to="/service/creative" className="hover:text-blue-500">Creative</Link>
  </li>
  <li>
    <Link to="/service/social-media-marketing" className="hover:text-blue-500">Social</Link>
  </li>
  <li>
    <Link to="/service/pr" className="hover:text-blue-500">PR</Link>
  </li>
  <li>
    <Link to="/service/digital-marketing" className="hover:text-blue-500">Digital</Link>
  </li>
  <li>
    <Link to="/service/performance-marketing" className="hover:text-blue-500">Performance Marketing</Link>
  </li>
</ul>

              </div>
              <div>
                <h3 className="text-white text-lg font-semibold mb-2">Company</h3>
                <ul className="text-sm space-y-2">
                  <li><a href="#" className="hover:text-blue-500">About Us</a></li>
                  
                  <li><a href="#" className="hover:text-blue-500">Contact</a></li>
                 
                  <li><a href="#" className="hover:text-blue-500">Privacy Policy</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-white text-lg font-semibold mb-2">Contact Info</h3>
              <ul className="text-sm space-y-2">
  <li className="flex items-center">
    <span className="text-blue-500 mr-2"><FaLocationDot /></span>
    123 Business Avenue, New York, NY 10001
  </li>
  <li className="flex items-center">
    <span className="text-blue-500 mr-2"><FaPhone /></span>
    +1 (555) 123-4567
  </li>
  <li className="flex items-center">
    <span className="text-blue-500 mr-2"><FaMailBulk /></span>
    hello@Zentrix.com
  </li>
</ul>

              </div>
            </div>
     <div className="mt-15 text-center text-xs text-gray-500 border-t pt-6 md:flex justify-between items-center">
  <div className="md:text-left text-lg md:order-1">© 2025 Zentrix. All rights reserved.</div>
  <div className="md:text-right md:order-2 md:flex space-x-4">
    <a href="#" className="hover:text-blue-500 text-lg">Terms of Service</a>
    <a href="#" className="hover:text-blue-500 text-lg">Privacy Policy</a>
    <a href="#" className="hover:text-blue-500 text-lg">Cookie Policy</a>
  </div>
</div>


          </div>
        </footer>
  )
}

export default Footer