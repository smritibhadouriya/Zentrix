import React, { useEffect } from 'react'
import { FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
    useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);
     const faqs = [
        {
          question: "How quickly can you start working on my project?",
          answer: "We can typically begin working on your project within 1-2 business days after our initial consultation and contract signing. For urgent projects, we offer expedited onboarding."
        },
        {
          question: "What's included in your monthly reporting?",
          answer: "Our comprehensive monthly reports include campaign performance metrics, ROI analysis, audience insights, recommendations for optimization, and a detailed breakdown of all activities performed."
        },
         {
          question: "Do you work with businesses in my industry?",
          answer: "We have experience across diverse industries including e-commerce, healthcare, technology, fashion, real estate, and more. Our strategies are customized to fit your specific industry requirements."
        },
         {
          question: "What's your minimum contract length?",
          answer: "We typically recommend a minimum 6-month engagement to see meaningful results, though we offer flexible contract terms based on your specific needs and goals."
        }
      ];
  return (
   <div className="  flex flex-col items-center ">
          {/* Header */}
          <header className="text-center py-20 mt-20 md:mt-20 lg:mt-0 px-4 md:px-0 bg-opacity-10 bg-blue-50 w-full">
            <h1 className="text-5xl font-bold text-gray-800">Let's <span className='text-blue-500'>Grow Together</span></h1>
           <p className="text-gray-600 mt-2 text-md whitespace-pre-wrap  mx-auto text-md">
              Ready to transform your digital presence? Get in touch with our team of experts and{"\n"} let's discuss how we can help accelerate your business growth.
            </p>
          </header>

          {/* Main Content */}
          <main className="max-w-6xl  p-6 flex flex-col lg:flex-row gap-8 my-10 ">
            {/* Get in Touch */}
            <section className="w-full lg:w-1/3 ">
              <h2 className="text-3xl font-bold mb-4 ">Get in Touch</h2>
              <p className="text-gray-600 mb-6">We're here to help you succeed. Whether you have questions about our services, need a custom quote, or want to discuss your marketing goals, our team is ready to assist.</p>
              <div className="space-y-5">
                <div className="flex items-center">
                  <span className="bg-blue-500 text-white rounded-full p-2 mr-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M3 14h18"></path>
                    </svg>
                  </span>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p>+1 (555) 123-4567</p>
                    <p className="text-gray-500">Mon-Fri 9AM-6PM EST</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="bg-blue-500 text-white rounded-full p-2 mr-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </span>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p>hello@digitalpro.com</p>
                    <p className="text-gray-500">We'll respond within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="bg-blue-500 text-white rounded-full p-2 mr-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </span>
                  <div>
                    <p className="font-semibold">Office</p>
                    <p>123 Business Avenue</p>
                    <p className="text-gray-500">New York, NY 10001</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="bg-blue-500 text-white rounded-full p-2 mr-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </span>
                  <div>
                    <p className="font-semibold">Business Hours</p>
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-500">Saturday: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Contact Form */}
            <section className="w-full lg:w-2/3 bg-white p-8 rounded-lg shadow-2xl">
              <h2 className="text-2xl font-bold mb-4">Send us a Message</h2>
              <form className="space-y-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Full Name *</label>
                  <input 
  type="text" 
  className="mt-1 block w-full border-gray-300 rounded-md  outline-2 outline-gray-300 p-3 focus:outline-blue-500 focus:outline-2" 
  placeholder="Your full name" 
/>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Email Address *</label>
                    <input 
  type="text" 
  className="mt-1 block w-full border-gray-300 rounded-md  outline-2 outline-gray-300 p-3 focus:outline-blue-500 focus:outline-2"  placeholder="your@email.com" />
                  </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Company Name</label>
                    <input 
  type="text" 
  className="mt-1 block w-full border-gray-300 rounded-md  outline-2 outline-gray-300 p-3 focus:outline-blue-500 focus:outline-2"  placeholder="Your company name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                   <input 
  type="text" 
  className="mt-1 block w-full border-gray-300 rounded-md  outline-2 outline-gray-300 p-3 focus:outline-blue-500 focus:outline-2"  placeholder="(555) 123-4567" />
                  </div>
                </div>
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Service Interest</label>
                    <select className="mt-1 block w-full border-gray-300 rounded-md  outline-2 outline-gray-300 p-3 focus:outline-blue-500 focus:outline-2">
                      <option>Select a service</option>
                      <option>Display Advertising</option>
                      <option>Influencer Marketing</option>
                      <option>Mobile Marketing</option>
                      <option>Email Marketing</option>
                      <option>Video Advertising</option>
                      <option>ORM Solutions</option>
                      <option>SEO Optimization</option>
                      <option>Social Media Marketing</option>
                      <option>Content Marketing</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Monthly Budget</label>
                   <select className="mt-1 block w-full border-gray-300 rounded-md  outline-2 outline-gray-300 p-3 focus:outline-blue-500 focus:outline-2">
                      <option>Select budget range</option>
                      <option>Under $5,000/month</option>
                      <option>$5,000 - $10,000/month</option>
                      <option>$10,000 - $25,000/month</option>
                      <option>$25,000 - $50,000/month</option>
                      <option>$50,000+/month</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Message *</label>
                  <textarea className="mt-1 block w-full border-gray-300 rounded-md  outline-2 outline-gray-300 p-3 focus:outline-blue-500 focus:outline-2" rows="4" placeholder="Tell us about your project, goals, and how we can help..."></textarea>
                </div>
             <button 
  type="submit" 
  className="w-full bg-blue-500 text-white py-4 rounded-md  outline-2 outline-gray-300 focus:outline-blue-500 focus:outline-2 flex items-center justify-center"
>
  <FaPaperPlane className="mr-2" /> Send Message
</button>
              </form>
            </section>
          </main>

          {/* Frequently Asked Questions */}
          <section className=" bg-gray-50 w-full p-10">
            <h2 className="text-4xl font-bold mb-4 text-center">Frequently Asked Questions</h2>
            <p className="text-gray-600 mb-10 text-center text-lg">Quick answers to common questions about our services</p>
            <div className="space-y-6 mb-10">
              {faqs.map((faq, index) => (
           <div key={index} className="bg-white px-4 py-7 rounded-lg shadow-xl max-w-6xl mx-auto justify-center items-center">
    <h3 className="text-xl font-bold">{faq.question}</h3>
    <p className="text-gray-600 mt-2">{faq.answer}</p>
  </div>
              ))}
            </div>
          </section>

          {/* Visit Our Office */}
          <section className="w-full p-10 text-center">
            <h2 className="text-4xl font-bold mb-4">Visit Our Office</h2>
            <p className="text-gray-600 mb-10 text-lg ">Located in the heart of New York City</p>
            <div className="bg-gray-200  px-4 py-15 md:px-50 md:py-35 rounded-lg shadow lg:mx-60">
              <p className="text-center text-2xl font-bold">123 Business Avenue</p>
              <p className="text-center">New York, NY 10001</p>
              <p className="text-gray-500 mt-2">Interactive map would be integrated here</p>
            </div>
          </section>
        </div>
  )
}

export default Contact