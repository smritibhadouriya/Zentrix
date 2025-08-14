import React, { useEffect } from 'react';
import { FaCheckCircle} from 'react-icons/fa';
import ImgHandshake from '../assets/OIP.webp';
import Meeting from '../assets/Meeting.webp';
import {AboutData} from '../Data/AboutData'
import { useNavigate } from 'react-router-dom';
const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);
  const navigate =useNavigate();
  return (
    <div>
      <header className="text-center py-10 lg:py-16 px-4 md:px-6 bg-opacity-10 bg-blue-50 w-full pt-35 lg:pt-20">
        <h1 className="text-5xl font-bold text-gray-800">
          About <span className="text-blue-500">DigitalPro</span>
        </h1>
        <p className="text-gray-600 mt-2 text-md max-w-2xl mx-auto">
          We're a team of passionate digital marketing experts dedicated to helping businesses thrive in the digital landscape through innovative strategies and proven results.
        </p>

        <div className="flex flex-col md:flex-row items-start justify-start md:px-6 md:py-12 lg:px-36 lg:py-16">
          <div className="w-full md:w-1/2 p-6 text-left">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Story</h2>
            <p className="mb-4 text-md text-gray-600">
              Founded in 2018, DigitalPro emerged from a simple belief: every business deserves access to world-class digital marketing expertise. What started as a small team of passionate marketers has grown into a full-service digital agency.
            </p>
            <p className="mb-4 text-md text-gray-600">
              Today, we've helped over 500 businesses transform their digital presence, generating millions in additional revenue and building lasting relationships with their customers.
            </p>
            <p className="mb-4 text-md text-gray-600">
              Our approach combines cutting-edge technology with human creativity, ensuring that every campaign not only reaches its target audience but truly resonates with them.
            </p>
          </div>

          <div className="w-full md:w-1/2 md:p-6 text-left">
            <div className="relative">
              <img
                src={ImgHandshake}
                alt="Team collaborating on a project"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute bottom-[-15px] md:right-[-15px] bg-white px-4 py-2 rounded-lg shadow-md z-10">
                <div className="text-2xl font-bold text-blue-500">7+</div>
                <div className="text-gray-600">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="md:flex gap-7 max-w-6xl justify-center items-stretch mx-auto px-4 py-12 md:px-6 lg:px-0">
        <div className="bg-gradient-to-l from-blue-600 to-blue-400 rounded-lg text-white p-8 md:w-1/2">
          <h1 className="text-3xl font-semibold">Our Mission</h1>
          <p className="text-lg mt-5">
            To empower businesses with digital marketing solutions that drive measurable growth, enhance brand visibility, and create meaningful connections with their target audiences.
          </p>
        </div>
        <div className="bg-gray-900 rounded-lg text-white p-8 mt-4 md:mt-0 md:w-1/2">
          <h1 className="text-3xl font-semibold">Our Vision</h1>
          <p className="text-lg mt-5">
            To be the leading digital marketing agency that transforms businesses, setting new standards for creativity, results, and client satisfaction in the digital space.
          </p>
        </div>
      </div>

      <div className="bg-gray-50 p-4 md:p-12">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Our Core Values</h2>
          <p className="text-gray-600 mt-2 text-sm sm:text-base">
            The principles that guide everything we do
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto mt-4 sm:mt-6">
          {AboutData.corevalues.map((service) => (
            <div
              key={service.id}
              className="bg-white p-4 sm:p-6 rounded-lg shadow-md flex flex-col justify-between text-left transition-all hover:shadow-xl sm:hover:-translate-y-2 sm:hover:scale-105"
            >
              <div>
                <div className="flex justify-center items-center h-12 w-12 sm:h-14 sm:w-14 rounded-xl mb-2 bg-gradient-to-l from-blue-600 to-blue-400">
                  <service.icon className="text-xl sm:text-2xl text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold">{service.name}</h3>
                <p className="mt-2 text-gray-600 text-sm sm:text-base">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-10 md:py-12 lg:px-36 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900">Meet Our Team</h2>
          <p className="mt-2 text-lg text-center text-gray-600 mb-10">The experts behind your success</p>

          <div className="overflow-x-auto p-4 md:p-0 lg:p-10">
            <div className="flex gap-6 flex-wrap justify-center">
              {AboutData.team.map((team, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg text-center flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
                >
                  <div className="mt-6 flex flex-col items-center justify-center text-center">
                    <img
                      className="h-20 w-20 rounded-full object-cover"
                      src={team.image}
                      alt={`${team.name}, ${team.designation}`}
                    />
                    <p className="text-sm font-medium text-gray-900 mt-2">{team.name}</p>
                    <p className="text-blue-400 text-lg font-bold">{team.designation}</p>
                    <div className="mt-4">
                      <p className="text-gray-600">{team.exp}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-500 text-white py-12 md:py-16 px-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center">Our Achievements</h2>
          <p className="mt-2 text-lg text-center mb-10">Numbers that speak for themselves</p>
        </div>
        <div className="flex flex-col md:flex-row justify-around items-center">
          <div className="text-center mb-4 md:mb-0">
            <h3 className="text-4xl font-bold">500+</h3>
            <p className="text-sm">Happy Clients</p>
          </div>
          <div className="text-center mb-4 md:mb-0">
            <h3 className="text-4xl font-bold">1000+</h3>
            <p className="text-sm">Projects Completed</p>
          </div>
          <div className="text-center mb-4 md:mb-0">
            <h3 className="text-4xl font-bold">250M+</h3>
            <p className="text-sm">Impressions Generated</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold">98%</h3>
            <p className="text-sm">Client Retention Rate</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center px-4 py-10 md:px-6 md:py-12 lg:px-36 lg:py-16 bg-white">
        <div className="w-full md:w-1/2 p-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">Why Businesses Choose Us</h1>
          <ul className="space-y-7">
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 mr-2">
                <FaCheckCircle className="text-green-500" />
              </span>
              <span className="text-gray-600">
                <span className="font-semibold">Proven Track Record</span>
                <br />
                7+ years of delivering exceptional results across various industries.
              </span>
            </li>
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 mr-2">
                <FaCheckCircle className="text-green-500" />
              </span>
              <span className="text-gray-600">
                <span className="font-semibold">Transparent Reporting</span>
                <br />
                Real-time dashboards and detailed monthly reports keep you informed.
              </span>
            </li>
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 mr-2">
                <FaCheckCircle className="text-green-500" />
              </span>
              <span className="text-gray-600">
                <span className="font-semibold">Dedicated Account Management</span>
                <br />
                Personal account managers who understand your business inside and out.
              </span>
            </li>
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 mr-2">
                <FaCheckCircle className="text-green-500" />
              </span>
              <span className="text-gray-600">
                <span className="font-semibold">Cutting-Edge Technology</span>
                <br />
                Latest tools and platforms to maximize your marketing effectiveness.
              </span>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 p-2 md:p-6">
          <div className="relative">
            <img
              src={Meeting}
              alt="Team meeting to discuss strategies"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center p-8 gap-6 bg-gray-900 text-gray-300 py-12 md:py-16 px-6">
        <h1 className="text-4xl font-bold">Ready to Work With Us?</h1>
        <div className="text-lg text-center">
          Let's discuss how we can help transform your digital presence and drive real results for your business.
        </div>
  <button
  className="bg-blue-500 hover:bg-blue-600 px-5 py-4 rounded-full"
  onClick={() => navigate("/contact")}
>
          Start Your Journey <span className="ml-2">&rarr;</span>
        </button>
      </div>
    </div>
  );
};

export default About;