import React from "react";
import { Settings, Activity, Leaf } from "lucide-react"; // Lucide icons
import tech1 from "../assets/tech1.jpg"; 
import tech2 from "../assets/tech2.jpg"; 
import tech3 from "../assets/tech3.jpg"; 

function Aboutus() {
  return (
    <section id="about" className="py-18 md:py-30 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading - now aligned left */}
        <div className="mb-16 text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            About <span className="text-gray-800">Us</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl">
            At <span className="font-semibold text-gray-800">Euroform</span>, 
            technology meets craftsmanship. We combine modern innovation with 
            decades of expertise to redefine what it means to sleep better.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Image Collage */}
          <div className="grid grid-cols-2 gap-4">
            <img
              src={tech1}
              alt="Euroform Tech 1"
              className="rounded-2xl shadow-lg w-full h-64 object-cover col-span-2"
            />
            <img
              src={tech2}
              alt="Euroform Tech 2"
              className="rounded-2xl shadow-lg w-full h-48 object-cover"
            />
            <img
              src={tech3}
              alt="Euroform Tech 3"
              className="rounded-2xl shadow-lg w-full h-48 object-cover"
            />
          </div>

          {/* Right Side - Text Content */}
          <div>
            <header className="mb-8">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                Innovation at <span className="text-gray-800">Euroform</span>
              </h3>
              <p className="mt-4 font-medium text-gray-700">
                Every mattress we design is powered by cutting-edge technology.  
                From smart foams to adaptive support, our goal is to engineer 
                the future of comfort — where science and sleep meet.
              </p>
            </header>

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Our state-of-the-art facilities use precision machinery to cut, 
                layer, and assemble foams with unmatched accuracy, ensuring 
                consistency in every mattress.
              </p>
              <p>
                Temperature-regulating fabrics, body-adaptive support zones, and 
                eco-conscious production make <span className="text-gray-800">Euroform</span> 
                a leader in sleep innovation.
              </p>
            </div>

            {/* Tech Highlights with Icons */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center md:text-left">
              <div className="flex flex-col items-center md:items-start">
                <Settings className="w-8 h-8 text-red-500 mb-2" />
                <h4 className="text-lg font-bold text-red-500">Precision</h4>
                <p className="text-red-600 text-sm">Smart Foam Cutting</p>
              </div>
              <div className="flex flex-col items-center md:items-start">
                <Activity className="w-8 h-8 text-red-500 mb-2" />
                <h4 className="text-lg font-bold text-red-500">Adaptive</h4>
                <p className="text-red-600 text-sm">Body Support Zones</p>
              </div>
              <div className="flex flex-col items-center md:items-start">
                <Leaf className="w-8 h-8 text-red-500 mb-2" />
                <h4 className="text-lg font-bold text-red-500">Sustainable</h4>
                <p className="text-red-600 text-sm">Eco Materials</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Aboutus;
