import React from 'react'
import { FaArrowRight, FaDotCircle, FaPlay } from 'react-icons/fa';

const Banner = () => {
  return (
    <div className="px-4 py-10 md:px-6 md:py-12 lg:px-38 lg:py-16 mb-8 bg-gradient-to-t from-white to-gray-50 rounded-lg flex flex-col md:flex-row ">
      <div className="md:w-1/2 flex flex-col justify-center pr-0 md:pr-8">
        <div className="bg-orange-100 font-semibold mt-15 lg:mt-0 lg:mb-10 p-2 rounded-2xl text-orange-400 w-fit flex items-center ">
          <FaDotCircle className='mr-2' /> Affiliate Tracking CRM Solution
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
          We provide the <span className="text-orange-500">best digital </span>services
        </h1>
        <p className="mt-4 text-gray-600 text-base sm:text-lg lg:text-xl">
          Transform your business with our comprehensive digital marketing solutions. From display ads to influencer marketing, we deliver results that matter.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 flex items-center justify-center">
            Start Your Journey <FaArrowRight className='ml-2' />
          </button>
          <button className="border border-gray-400 text-gray-700 px-6 py-3 rounded-full hover:border-orange-600 hover:text-orange-600 flex items-center justify-center">
            <FaPlay className='mr-2' /> Watch Demo
          </button>
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-2">
          <div className="flex">
            <img src="https://i.ytimg.com/vi/FS_L6iKoA9E/maxres2.jpg?sqp=-oaymwEoCIAKENAF8quKqQMcGADwAQH4Ac4FgALCB4oCDAgAEAEYZSBlKE0wDw==&rs=AOn4CLBxOU89U1OHMGgh8sr0uXvhfNlk6g" alt="Client avatar 1" className="h-8 w-8 rounded-full -mr-2" />
            <img src="https://tse3.mm.bing.net/th/id/OIP.nuZCgt-bWy4U5w3FWWBvCQAAAA?w=283&h=313&rs=1&pid=ImgDetMain&o=7&rm=3" alt="Client avatar 2" className="h-8 w-8 rounded-full -mr-2" />
            <img src="https://i.ytimg.com/vi/m3NcRjn_iRo/oar2.jpg?sqp=-oaymwEkCLkDENAFSFqQAgHyq4qpAxMIARUAAAAAJQAAyEI9AICiQ3gB&rs=AOn4CLCNPsO6IDxfi6RTYv_w6Ts7EBaP2w" alt="Client avatar 3" className="h-8 w-8 rounded-full" />
          </div>
          <span className="text-gray-600 text-sm sm:text-base">500+ Happy Clients</span>
          <span className="text-yellow-700">★★★★☆</span>
          <span className="text-gray-600 text-sm sm:text-base">(4.9/5 Rating)</span>
        </div>
      </div>
      <div className="md:w-1/2 mt-6 md:mt-0 relative lg:p-10">
        <div className="absolute top-0 left-3 md:top-17 md:left-5 lg:top-8 lg:left-15 bg-gradient-to-l   from-orange-700 to-orange-400 z-0 w-full h-full md:h-105 md:w-95 lg:h-125 lg:w-134 transform rotate-[5deg] origin-top rounded-2xl"></div>
        <div className="bg-white rounded-2xl shadow-xl p-4 md:p-6 md:mt-20 lg:mt-0 relative z-10">
          <img
            src="https://tse3.mm.bing.net/th/id/OIP.NwHlFkr2nHn64-Zm9ASXKQHaE7?rs=1&pid=ImgDetMain&o=7&rm=3"
            alt="Chart showing campaign performance metrics"
            className="rounded-2xl mb-4 w-full"
          />
          <div className='flex items-center'>
            <h3 className="text-sm sm:text-md">Campaign Performance</h3>
            <span className="text-green-600 font-bold ml-auto text-sm sm:text-base">+247%</span>
          </div>
          <div className="flex items-center justify-between mt-2">
            <div className="w-full bg-gray-300 rounded-full h-2 mx-2">
              <div className="bg-orange-500 h-2 rounded-full" style={{ width: '98%' }}></div>
            </div>
          </div>
          <div className="flex justify-between mt-4">
            <div className="text-gray-700 flex flex-col items-center">
              <span className="text-base sm:text-lg font-semibold">98%</span>
              <span className="font-medium text-sm sm:text-base">Success Rate</span>
            </div>
            <div className="text-gray-700 flex flex-col items-center">
              <span className="text-base sm:text-lg font-semibold">24/7</span>  
              <span className="font-medium text-sm sm:text-base">Support</span>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Banner