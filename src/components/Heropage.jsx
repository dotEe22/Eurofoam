import React from "react";
import heroImg from "../assets/womanSleeping2.jpg"; // replace with your mattress image
export default function Heropage() {
  return (
    <section id="home" className="relative bg-gray-50">
      {/* Hero Background */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Euroform premium mattress"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
      </div>

      {/* Hero Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-32 md:py-40 flex flex-col md:flex-row items-center">
        {/* Left Text */}
        <div className="md:w-1/2 text-white space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Sleep Better with{" "}
            <span className="text-red-500">Euroform</span>
          </h1>
          <p className="text-lg md:text-xl">
            At <span className="font-semibold text-red-500">Euroform</span>, we
            design premium mattresses that combine comfort, durability, and
            perfect sleep support. Trusted by families for over 20 years.
          </p>

          {/* Why Choose Euroform */}
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold">
              Why Choose <span className="text-red-500">Euroform?</span>
            </h2>
            <ul className="space-y-2 text-base md:text-lg">
              <li>✔ Premium quality materials for long-lasting comfort</li>
              <li>✔ Orthopedic support for healthy posture</li>
              <li>✔ Affordable prices with unmatched value</li>
              <li>✔ Free delivery & after-sales support</li>
            </ul>
          </div>

          {/* Buttons */}
          <div className="flex space-x-4 pt-4">
            <a
              href="#products"
              role="button"
              className="bg-red-500 text-white font-semibold px-6 py-3 rounded-2xl shadow hover:bg-red-600 transition inline-flex items-center justify-center"
            >
              Shop Now
            </a>
            <a
              href="#about"
              role="button"
              className="bg-white/20 border border-white px-6 py-3 rounded-2xl font-semibold hover:bg-white/30 transition inline-flex items-center justify-center"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Right Side (What We Offer) */}
        <div className="md:w-1/2 mt-12 md:mt-0 md:pl-12 text-white space-y-6">
          <h2 className="text-2xl font-semibold">
            What <span className="text-red-500">Euroform</span> Offers
          </h2>
          <ul className="space-y-3 text-base md:text-lg">
            <li>🛏️ Luxury spring & foam mattresses</li>
            <li>🛋️ Customized pillows & bedding sets</li>
            <li>🏥 Hospital & therapeutic mattresses</li>
            <li>🌍 Eco-friendly & sustainable products</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

