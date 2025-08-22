import React, { useEffect } from "react";
import { FaFileSignature } from "react-icons/fa";
import { GiGlobe } from "react-icons/gi";
import { FiAlertTriangle } from "react-icons/fi";

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 flex items-center justify-center p-6 relative overflow-hidden">
      {/* Subtle floating blurred shapes */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-orange-100 rounded-full opacity-40 blur-3xl"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-[450px] h-[450px] bg-blue-100 rounded-full opacity-30 blur-3xl"></div>

      {/* Terms Card */}
      <div className="relative max-w-3xl w-full bg-white p-10 rounded-2xl shadow-xl border border-gray-100 z-10 hover:shadow-2xl transition-shadow duration-300">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6 text-center">
          Terms and Conditions
        </h1>
        <p className="text-gray-600 mb-10 text-lg text-center leading-relaxed">
          Welcome to <span className="font-semibold text-blue-600">Zentrix</span>.  
          By accessing or using our services, you agree to be bound by these Terms and Conditions.  
          Please read them carefully.
        </p>

        {/* Section 1 */}
        <div className="mb-8">
          <h2 className="flex items-center gap-2 text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-2">
            <FaFileSignature className="w-6 h-6 text-orange-500" />
            Acceptance of Terms
          </h2>
          <p className="text-gray-700 mt-3 text-base leading-loose">
            By using our website or services, you agree to comply with and be bound by these Terms.  
            If you do not agree, please refrain from using our services.
          </p>
        </div>

        {/* Section 2 */}
        <div className="mb-8">
          <h2 className="flex items-center gap-2 text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-2">
            <GiGlobe className="w-6 h-6 text-blue-500" />
            Service Usage
          </h2>
          <p className="text-gray-700 mt-3 text-base leading-loose">
            Our services are provided for your personal and business use.  
            You may not exploit them for any illegal, harmful, or unauthorized purposes.
          </p>
        </div>

        {/* Section 3 */}
        <div className="mb-8">
          <h2 className="flex items-center gap-2 text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-2">
            <FiAlertTriangle className="w-6 h-6 text-red-500" />
            Limitation of Liability
          </h2>
          <p className="text-gray-700 mt-3 text-base leading-loose">
            Zentrix shall not be held liable for any indirect, incidental, or consequential damages  
            that may arise from the use or inability to use our services.
          </p>
        </div>

        {/* Footer note */}
        <p className="text-gray-500 mt-10 text-center text-sm italic">
          📅 Last updated: <span className="font-medium">August 22, 2025</span>.  
          For any questions, contact us at{" "}
          <a
            href="mailto:support@zentrix.com"
            className="text-blue-600 hover:text-blue-800 underline transition-colors duration-200"
          >
            support@zentrix.com
          </a>.
        </p>
      </div>
    </div>
  );
};

export default Terms;
