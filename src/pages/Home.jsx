import React, { useEffect } from 'react';
import Banner from '../partials/components/Banner';
import { FaBullhorn, FaChartBar, FaChartLine, FaCheckCircle, FaEnvelope, FaMobileAlt, FaNewspaper, FaPaintBrush, FaPaperPlane, FaShieldAlt, FaUser, FaUsers, FaVideo } from 'react-icons/fa';
import { FaMegaport } from 'react-icons/fa6';
import { Link, useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate=useNavigate();
    useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);
const services = [
  {
    id: 1,
    name: 'Brand & Strategy',
    path:'brand-strategy',
    description: 'Crafting tailored strategies to boost your brand\'s visibility through high-impact, targeted marketing across both standard and rich media formats, ensuring maximum exposure to the right audience.',
    icon: FaBullhorn,  // Icon representing strategy and marketing
  },
  {
    id: 2,
    name: 'Creative',
    path: 'Creative',
    description: 'Collaborating with top-tier creative professionals to deliver innovative campaigns that drive engagement and connect with your audience in meaningful ways, blending creativity with strategic thinking.',
    icon: FaPaintBrush,  // Icon representing creativity and design
  },
  {
    id: 3,
    name: 'Social',
    path:'Social',
    description: 'Building a robust social media presence to connect with audiences on their smartphones, tablets, and mobile devices, leveraging platforms to enhance brand visibility and engagement.',
    icon: FaUsers,  // Icon representing social media and community
  },
  {
    id: 4,
    name: 'PR',
    path:'PR',
    description: 'Tailored public relations strategies to build and maintain a strong brand reputation, using segmentation and profiling techniques to enhance email campaign performance and maximize reach.',
    icon: FaNewspaper,  // Icon representing PR and communications
  },
  {
    id: 5,
    name: 'Digital',
    path:'Digital',
    description: 'Leveraging the power of online video content to engage and educate your audience, driving brand awareness and customer loyalty through creative and concise digital video campaigns.',
    icon: FaVideo,  // Icon representing digital video content
  },
  {
    id: 6,
    name: 'Performance Marketing',
    path:'Performance Marketing',
    description: 'Implementing data-driven performance marketing strategies that ensure measurable results, helping brands manage online reputations and increase digital presence through targeted campaigns and performance analysis.',
    icon: FaChartLine,  // Icon representing performance and analytics
  },
];

 const testimonials = [
    {
      quote: "DigitalPro transformed our online presence completely. Our ROI increased by 300% within the first quarter!",
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      image: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1JvWhC.img?w=1400&h=700&m=4&q=79",
    },
    {
      quote: "Their influencer marketing strategy helped us reach millions of potential customers. Absolutely phenomenal results!",
      name: "Michael Chen",
      company: "E-commerce Plus",
      image: "https://tse2.mm.bing.net/th/id/OIP.PCVcH9De5ghgXuGa2pORHAHaJ4?rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      quote: "The team's expertise in mobile marketing doubled our app downloads in just two months. Highly recommended!",
      name: "Emily Rodriguez",
      company: "Fashion Forward",
      image: "https://tse4.mm.bing.net/th/id/OIP.EPu4rPPSxdZKGv-jrEHPewHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      quote: "Outstanding service! Our brand visibility skyrocketed thanks to their SEO expertise. Highly recommended!",
      name: "David Lee",
      company: "Innovate Tech",
      image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/203ba178-a255-472c-b858-7a949d9cbd50/dc5akgn-c7d5d9f2-6e95-4180-9183-4d33a735073c.jpg/v1/fill/w_900,h_1297,q_75,strp/luna_lovegood1_by_maria_hideki_dc5akgn-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI5NyIsInBhdGgiOiJcL2ZcLzIwM2JhMTc4LWEyNTUtNDcyYy1iODU4LTdhOTQ5ZDljYmQ1MFwvZGM1YWtnbi1jN2Q1ZDlmMi02ZTk1LTQxODAtOTE4My00ZDMzYTczNTA3M2MuanBnIiwid2lkdGgiOiI8PTkwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.gd157Kq8EEgKt-u_6GripJDJ7Q00qn3MyhWI1mFWeYI",
    },
   
  ];
// Define an array of gradient styles
const gradients = [
  'linear-gradient(135deg, #f97316, #f59e0b)', // blue to Amber
  'linear-gradient(135deg, #6b21a8, #9d4edd)', // Purple to Dark Pink
  'linear-gradient(135deg, #2563eb, #3b82f6)', // Blue to Light Blue
  'linear-gradient(135deg, #16a34a, #22c55e)', // Yellowish Green to Green
  'linear-gradient(135deg, #dc2626, #f87171)', // Red to Light Red (similar to blue to yellow)
  'linear-gradient(135deg, #4c51bf, #6b46c1)', // Blue to Purple
];


  return (
    <div>
    <Banner />
    {/*Our Digital Services */}
  <div className="px-2 py-10 md:px-6 md:py-12 lg:px-38 lg:py-16 bg-gray-50">
      <div className="max-w-lg mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Our Digital Services</h2>
        <p className="text-gray-600 mt-2 text-sm sm:text-base">
          Comprehensive digital marketing solutions designed to accelerate your business growth and maximize your online presence.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto mt-4 sm:mt-6">
        {services.map((service, index) => (
          <div
            key={service.id}
         onClick={() => navigate(`/service/${service.path.toLowerCase().replace(/\s+/g, '-')}`)}  // Use navigate function
            className="bg-white p-4 sm:p-6 rounded-lg shadow-md flex flex-col justify-between text-left transition-all hover:shadow-xl hover:cursor-pointer sm:hover:translate-y-[-10px] sm:hover:scale-105"
          >
            <div>
              <div 
                className="flex justify-center items-center h-12 w-12 sm:h-14 sm:w-14 rounded-xl mr-4 mb-2"
                style={{ background: gradients[index % gradients.length], flexShrink: 0 }}
              >
                <service.icon className="text-xl sm:text-2xl text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold">{service.name}</h3>
              <p className="mt-2 text-gray-600 text-sm sm:text-base">{service.description}</p>
            </div>
            <Link
              to={`/service/${service.path.toLowerCase().replace(/\s+/g, '-')}`} 
              className="mt-3 sm:mt-4 inline-block text-blue-500 self-start text-sm sm:text-base"
            >
              Learn More 
            </Link>
          </div>
        ))}
      </div>
    </div>
{/*Why choose us*/}
 <div className="flex flex-col md:flex-row items-center justify-center px-1 py-10 md:px-6 md:py-12 lg:px-36 lg:py-16 bg-white">
          <div className="w-full md:w-1/2 p-6">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Zentrix?</h1>
            <p className="text-gray-600 mb-6 text-xl">
              We combine cutting-edge technology with proven strategies to deliver exceptional results for your business.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 mr-2"><FaCheckCircle className='text-green-500' /></span>
                <span className="text-gray-600 "><span className='font-semibold'>Data-Driven Approach</span><br />Every campaign is backed by comprehensive analytics and real-time performance tracking.</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 mr-2"><FaCheckCircle className='text-green-500' /></span>
                <span className="text-gray-600"><span className='font-semibold'>Expert Team</span><br />Our certified professionals have years of experience across all digital marketing channels.</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 mr-2"><FaCheckCircle className='text-green-500' /></span>
                <span className="text-gray-600"><span className='font-semibold'>Proven Results</span><br />Track record of delivering measurable ROI improvements for businesses of all sizes.</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 mr-2"><FaCheckCircle className='text-green-500' /></span>
                <span className="text-gray-600"><span className='font-semibold'>24/7 Support</span><br />Round-the-clock support to ensure your campaigns run smoothly at all times.</span>
              </li>
            </ul>
          </div>
      <div className="w-full md:w-1/2 p-2 md:p-6">
  <div className="relative">
    <img
      src="https://tse2.mm.bing.net/th/id/OIP.shNTxms8RDdb1Po60Ywa-QHaEs?rs=1&pid=ImgDetMain&o=7&rm=3"
      alt="Handshake"
      className="rounded-lg shadow-lg"
    />
    <div className="absolute bottom-[-15px] left-[-1px] md:left-[-15px]  bg-white px-4 py-2 rounded-lg shadow-md z-10">
      <div className="text-2xl font-bold text-blue-500">500+</div>
      <div>Successful Projects</div>
    </div>
  </div>
</div>

</div>
{/*Testimonials */}
  <div className=" px-2 py-10 md:px-6 md:py-12 lg:px-36 lg:py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900">What Our Clients Say</h2>
        <p className="mt-2 text-lg text-center text-gray-600 mb-10">Don't just take our word for it - hear from our satisfied clients</p>
      <div className="overflow-x-auto hide-scrollbar">
  <div className="flex gap-6" style={{ minWidth: '1000px' }}>
    {testimonials.map((testimonial, index) => (
      <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center flex-shrink-0 w-1/3">
        <div className="flex justify-left">
          <span className="inline-flex items-left rounded-full text-xl font-bold text-yellow-500 ">
            ★★★★★
          </span>
        </div>
        <div className="mt-4 text-left">
          <p className="text-gray-600 italic">"{testimonial.quote}"</p>
        </div>
        <div className="mt-6 flex items-left justify-left">
          <img className="h-12 w-12 rounded-full object-cover" src={testimonial.image} alt={testimonial.name} />
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
{/*States */}
   <div className="flex flex-col md:flex-row justify-around items-center bg-blue-500 text-white py-4 md:py-15 px-6 ">
          <div className="text-center mb-4 md:mb-0">
            <h3 className="text-4xl font-bold">500+</h3>
            <p className="text-sm">Successful Campaigns</p>
          </div>
          <div className="text-center mb-4 md:mb-0">
            <h3 className="text-4xl font-bold">98%</h3>
            <p className="text-sm">Client Satisfaction</p>
          </div>
          <div className="text-center mb-4 md:mb-0">
            <h3 className="text-4xl font-bold">250M+</h3>
            <p className="text-sm">Impressions Generated</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold">24/7</h3>
            <p className="text-sm">Support Available</p>
          </div>
        </div>

        <div className="flex flex-col md:justify-center md:items-center md:p-8  gap-6 bg-gray-900  text-gray-300  py-4 md:py-15 px-5 md:px-6">
  <h1 className="text-4xl font-bold mt-4">Ready to Transform Your Digital Presence?</h1>
  <div className="text-lg">Join hundreds of successful businesses that trust us with their digital marketing needs.</div>
  <a
                href="/contact"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-blue-700 transition-colors"
              >
    Get Started Today <span className="ml-2">&rarr;</span>
  </a>
</div>
    </div>
  );
};

export default Home;