import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaBullhorn, FaLightbulb, FaChartLine, FaUsers, FaCheckCircle, FaStar, FaCircle } from 'react-icons/fa';

const serviceData = {
  "brand-strategy": {
    title: "Brand & Strategy",
    intro: "We help businesses define their brand identity and position it strategically for long-term success in a competitive market.",
    detailedIntro:
"Our Brand & Strategy services empower businesses to carve out a distinct identity in crowded markets. By combining in-depth market analysis, consumer insights, and creative vision, we craft strategies that resonate with your audience and drive sustainable growth. Our approach ensures long-term brand success by aligning every element of your identity with your business objectives and customer expectations.",
    features: [
      { 
        text: "Brand Identity Development", 
        icon: <FaBullhorn className="text-white w-6 h-6" />,
        description: "Craft a unique brand identity with logos, color schemes, and typography that resonate with your target audience."
      },
      { 
        text: "Market Research & Positioning", 
        icon: <FaChartLine className="text-white w-6 h-6" />,
        description: "Analyze market trends and consumer behavior to position your brand effectively against competitors."
      },
      { 
        text: "Brand Messaging & Voice", 
        icon: <FaLightbulb className="text-white w-6 h-6" />,
        description: "Develop a consistent brand voice and messaging strategy that communicates your values clearly."
      },
    ],
    process: [
      { 
        title: "Brand Audit & Discovery", 
        description: "We start by assessing your current brand presence, identifying strengths, weaknesses, and opportunities for growth through comprehensive audits and stakeholder interviews."
      },
      { 
        title: "Target Audience Research", 
        description: "Our team conducts detailed research to understand your audience’s needs, preferences, and behaviors, ensuring your brand resonates deeply."
      },
      { 
        title: "Strategy Formulation & Execution", 
        description: "We develop a tailored strategy and execute it with precision, aligning all brand touchpoints to create a cohesive and impactful presence."
      },
    ],
    benefits: [
      "Enhanced brand recognition and loyalty",
      "Improved market positioning against competitors",
      "Consistent messaging across all channels",
      "Stronger emotional connection with your audience",
      "Increased brand equity and long-term value"
    ]
  },
  "creative": {
    title: "Creative Services",
    intro: "Our creative team is dedicated to delivering captivating visuals and experiences that elevate your brand.",
  detailedIntro:
"Our Creative Services are designed to transform your brand’s vision into compelling visuals and experiences. From stunning graphic designs to immersive digital interfaces, we ensure your brand stands out with creativity that captivates and inspires. We focus on every touchpoint to create memorable, visually appealing assets that foster emotional connections with your audience.",
    features: [
      { 
        text: "Graphic Design & Illustration", 
        icon: <FaLightbulb className="text-white w-6 h-6" />,
        description: "Create visually stunning designs and illustrations that capture your brand’s essence."
      },
      { 
        text: "UI/UX Design", 
        icon: <FaUsers className="text-white w-6 h-6" />,
        description: "Design intuitive and user-friendly interfaces to enhance customer engagement and satisfaction."
      },
      { 
        text: "Creative Campaigns", 
        icon: <FaBullhorn className="text-white w-6 h-6" />,
        description: "Launch impactful creative campaigns that drive brand awareness and customer loyalty."
      },
    ],
    process: [
      { 
        title: "Concept Ideation", 
        description: "We brainstorm innovative concepts that align with your brand’s goals, ensuring creativity drives every decision."
      },
      { 
        title: "Design & Prototyping", 
        description: "Our team creates high-fidelity designs and prototypes, allowing you to visualize the final product early in the process."
      },
      { 
        title: "Feedback & Iteration", 
        description: "We refine designs based on your feedback, ensuring the final output is polished and perfectly aligned with your vision."
      },
    ],
    benefits: [
      "Visually compelling brand assets",
      "Enhanced user engagement through intuitive design",
      "Increased brand recall through creative campaigns",
      "Differentiated brand presence in competitive markets",
      "Improved customer satisfaction through aesthetic excellence"
    ]
  },
  "social": {
    title: "Social Media Marketing",
    intro: "We create and manage social media campaigns that engage your community and grow your brand's presence across all platforms.",
   detailedIntro:
"Our Social Media Marketing services are built to amplify your brand’s voice across platforms. We craft strategies that foster engagement, build communities, and drive measurable results through targeted content and analytics-driven campaigns. With a focus on community growth and sustained engagement, we ensure your brand stays top-of-mind among your target audience.",
    features: [
      { 
        text: "Social Media Content Creation", 
        icon: <FaBullhorn className="text-white w-6 h-6" />,
        description: "Produce engaging content tailored to each platform to maximize audience interaction."
      },
      { 
        text: "Community Management", 
        icon: <FaUsers className="text-white w-6 h-6" />,
        description: "Foster a vibrant online community through active engagement and responsive communication."
      },
      { 
        text: "Paid Advertising Campaigns", 
        icon: <FaChartLine className="text-white w-6 h-6" />,
        description: "Optimize ad spend with targeted campaigns that deliver measurable results."
      },
    ],
    process: [
      { 
        title: "Social Strategy Development", 
        description: "We create a customized social media strategy aligned with your brand goals and audience preferences."
      },
      { 
        title: "Content Creation & Curation", 
        description: "Our team produces high-quality, platform-specific content to engage your audience effectively."
      },
      { 
        title: "Engagement & Analytics", 
        description: "We monitor performance, engage with your community, and use analytics to optimize ongoing campaigns."
      },
    ],
    benefits: [
      "Increased audience engagement and loyalty",
      "Improved brand visibility across platforms",
      "Data-driven insights for continuous improvement",
      "Stronger community trust and advocacy",
      "Enhanced conversion rates through targeted content"
    ]
  },
  "pr": {
    title: "Public Relations (PR)",
    intro: "Our PR strategies help businesses maintain a positive public image, build media relationships, and generate brand awareness.",
   detailedIntro:
"Our Public Relations services are designed to elevate your brand’s reputation and visibility. We craft strategic communication plans that build trust, strengthen media relationships, and position your brand as a leader in your industry. Through proactive media outreach and timely crisis management, we help you stay in control of your public narrative.",
    features: [
      { 
        text: "Media Relations & Outreach", 
        icon: <FaBullhorn className="text-white w-6 h-6" />,
        description: "Build strong relationships with media outlets to amplify your brand’s story."
      },
      { 
        text: "Crisis Management", 
        icon: <FaChartLine className="text-white w-6 h-6" />,
        description: "Navigate challenges with strategic communication to protect your brand’s reputation."
      },
      { 
        text: "Press Release Writing & Distribution", 
        icon: <FaLightbulb className="text-white w-6 h-6" />,
        description: "Craft compelling press releases and distribute them to key media channels."
      },
    ],
    process: [
      { 
        title: "PR Strategy Development", 
        description: "We develop a tailored PR strategy that aligns with your brand’s goals and industry landscape."
      },
      { 
        title: "Media Outreach & Relationship Building", 
        description: "Our team connects with key media stakeholders to secure impactful coverage for your brand."
      },
      { 
        title: "Monitoring & Reporting", 
        description: "We track media coverage and provide detailed reports to measure the success of our PR efforts."
      },
    ],
    benefits: [
      "Strengthened brand reputation",
      "Increased media exposure",
      "Effective crisis management and communication",
      "Established thought leadership in your industry",
      "Greater stakeholder trust and confidence"
    ]
  },
  "digital": {
    title: "Digital Marketing",
    intro: "Our digital marketing services use data-driven strategies to improve your online visibility and drive traffic to your site.",
   detailedIntro:
"Our Digital Marketing services leverage cutting-edge tools and strategies to boost your online presence. From SEO to content marketing, we create campaigns that drive traffic, engagement, and conversions, ensuring your brand thrives in the digital landscape. By combining creativity with performance analytics, we make sure your digital efforts generate measurable business impact.",
    features: [
      { 
        text: "SEO & SEM", 
        icon: <FaChartLine className="text-white w-6 h-6" />,
        description: "Boost your website’s ranking with optimized SEO and targeted SEM campaigns."
      },
      { 
        text: "Content Marketing", 
        icon: <FaLightbulb className="text-white w-6 h-6" />,
        description: "Create valuable content that attracts and retains your target audience."
      },
      { 
        text: "Email Marketing", 
        icon: <FaBullhorn className="text-white w-6 h-6" />,
        description: "Engage customers with personalized email campaigns that drive conversions."
      },
    ],
    process: [
      { 
        title: "Website & SEO Audit", 
        description: "We analyze your website’s performance and SEO health to identify opportunities for improvement."
      },
      { 
        title: "Content Creation & Optimization", 
        description: "Our team develops and optimizes content to attract and engage your target audience."
      },
      { 
        title: "Conversion Rate Optimization (CRO)", 
        description: "We refine your digital assets to maximize conversions and improve user experience."
      },
    ],
    benefits: [
      "Higher search engine rankings",
      "Increased website traffic and engagement",
      "Improved conversion rates through optimized strategies",
      "Enhanced brand authority in digital spaces",
      "Cost-effective marketing with measurable ROI"
    ]
  },
  "performance-marketing": {
    title: "Performance Marketing",
    intro: "We optimize your marketing efforts for maximum ROI using performance-based strategies, ensuring every ad dollar works harder for your business.",
   detailedIntro:
"Our Performance Marketing services focus on delivering measurable results. By leveraging data-driven strategies and advanced analytics, we optimize campaigns to maximize ROI and drive tangible business outcomes. With a sharp focus on performance, we help you scale efficiently while keeping costs under control and ensuring maximum ad impact.",
    features: [
      { 
        text: "PPC Campaigns (Google Ads, Facebook Ads)", 
        icon: <FaChartLine className="text-white w-6 h-6" />,
        description: "Run highly targeted PPC campaigns to maximize clicks and conversions."
      },
      { 
        text: "Affiliate Marketing", 
        icon: <FaUsers className="text-white w-6 h-6" />,
        description: "Leverage partnerships to expand your reach and drive sales through affiliates."
      },
      { 
        text: "Conversion Tracking & Analytics", 
        icon: <FaLightbulb className="text-white w-6 h-6" />,
        description: "Track and analyze performance data to continually optimize campaign results."
      },
    ],
    process: [
      { 
        title: "Campaign Setup & Targeting", 
        description: "We design and launch targeted campaigns tailored to your audience and business goals."
      },
      { 
        title: "Ad Optimization & A/B Testing", 
        description: "Our team continuously optimizes ads through A/B testing to improve performance."
      },
      { 
        title: "Reporting & Continuous Improvement", 
        description: "We provide detailed reports and insights to refine campaigns for maximum ROI."
      },
    ],
    benefits: [
      "Maximized return on ad spend",
      "Scalable campaigns for sustained growth",
      "Transparent performance tracking and reporting",
      "Faster achievement of business goals",
      "Optimized budget allocation for efficiency"
    ]
  },
};

const Service = () => {
  const { service } = useParams();
  const serviceInfo = serviceData[service] || {
    title: "Service Not Found",
    intro: "Sorry, the service you requested is not available.",
    detailedIntro: "Please explore our other services or contact us for more information.",
    features: [],
    process: [],
    benefits: []
  };
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);

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

  return (
    <div >
      {/* Hero Section */}
      <header className="text-center py-10 lg:p-10 pt-30 md:pt-30 lg:pb-15 lg:pt-25 px-4 md:px-0 bg-opacity-10 bg-blue-50 w-full  " >
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl sm:text-5xl font-bold mb-4">
            <span className="text-blue-500">{serviceInfo.title}</span>
          </h1>
          <p className="text-lg text-gray-600">{serviceInfo.intro}</p>
        </div>
      </header>
        {/* Introduction Section */}
        <section className="px-2 py-10 md:px-6 md:py-12 lg:px-36 lg:py-20  ">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">Why Choose Our {serviceInfo.title}?</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">{serviceInfo.detailedIntro}</p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We combine industry expertise, cutting-edge tools, and a client-centric approach to deliver solutions that not only meet your needs but exceed your expectations. Whether you're a startup or an established enterprise, our tailored strategies ensure your brand achieves its full potential.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <img src="https://website2021-live-e3e78fbbd3cc41f2847799-7c49c59.divio-media.com/filer_public_thumbnails/filer_public/73/52/7352020b-b331-47f5-8405-3d114bf0f28a/types-of-meetings.png__1200x630_q90_crop_subject_location-420%2C304_subsampling-2_upscale.png" alt="Service Image" className="w-full h-auto rounded-lg" />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="px-2 py-10 md:px-6 md:py-12 lg:px-36 lg:py-20 bg-gray-100 text-center">
         
           <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold ">Features</h2>
        <p className="text-gray-600 mt-2 text-sm sm:text-base mb-8">
         Explore the key features that make our service stand out
        </p>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceInfo.features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-4 sm:p-6 rounded-lg shadow-md flex flex-col justify-between text-left transition-all hover:shadow-xl sm:hover:translate-y-[-10px] sm:hover:scale-105"
              >
                <div>
                  <div 
                    className="flex justify-center items-center h-12 w-12 sm:h-14 sm:w-14 rounded-xl mr-4 mb-2 bg-gradient-to-l from-blue-600 to-blue-400"
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold">{feature.text}</h3>
                  <p className="mt-2 text-gray-600 text-sm sm:text-base">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

            {/* Process Section */}
<section className="px-2 py-10 md:px-6 md:py-12 lg:px-36 lg:py-20 text-center  ">
  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold ">  Our Process</h2>
        <p className="text-gray-600 mt-2 text-sm sm:text-base mb-8">
    How we deliver exceptional results for your business
  </p>
  <div className="flex flex-col md:flex-row justify-around items-center gap-6 lg:mb-10">
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

        {/*Testimonials */}
  <div className=" px-2 py-10 md:px-6 md:py-12 lg:px-36 lg:py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900">What Our Clients Say</h2>
        <p className="mt-2 text-lg text-center text-gray-600 mb-10">Don't just take our word for it - hear from our satisfied clients</p>
      <div className="overflow-x-auto hide-scrollbar py-2">
  <div className="flex gap-6" style={{ minWidth: '1000px' }}>
    {testimonials.map((testimonial, index) => (
      <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center flex-shrink-0 w-1/3">
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