import React, { useState } from "react"
import tm from "../assets/therapeutic-mattress.jpeg"
import pm from "../assets/Prestige-mattress.jpg"
import om from "../assets/Orthopedic_mattress.jpg"
import sm from "../assets/Standard_mattress.jpg"
import sm2 from "../assets/Student_mattress.jpg"
import spm from "../assets/Spring-mattress.jpeg"
import dm from "../assets/diamong-mattress.jpeg"
import fp from "../assets/Fibre_pillow.jpg"
import lp from "../assets/Latex_pillow.jpg"
import lp2 from "../assets/Luxury_pillow.jpg"

function ProductCard({ image, title, description }) {
  const [expanded, setExpanded] = useState(false)

  const limit = 150
  const isLong = description.length > limit
  const displayText = !isLong ? description : description.slice(0, limit) + "..."

  return (
    <div className="relative flex flex-col bg-white rounded-xl shadow-sm hover:shadow-md transition">
      {/* Image container */}
      <div className="overflow-hidden rounded-t-xl">
        <img
          src={image}
          alt={title}
          className="w-full h-44 object-cover transform hover:scale-105 transition duration-300"
        />
      </div>

      <div className="p-2">
        <h4 className="mt-4 text-lg font-bold text-gray-900">{title}</h4>
        <p className="text-gray-600 flex-grow">{displayText}</p>
        {isLong && (
          <button
            onClick={() => setExpanded(true)}
            className="mt-2 text-red-600 font-medium hover:underline"
          >
            See more
          </button>
        )}
      </div>

      {/* Overlay (only inside this card) */}
      {expanded && (
        <div className="absolute inset-0 bg-white bg-opacity-95 p-4 rounded-xl shadow-lg flex flex-col">
          <h4 className="text-lg font-bold text-gray-900">{title}</h4>
          <p className="text-gray-700 mt-2 overflow-y-auto">{description}</p>
          <button
            onClick={() => setExpanded(false)}
            className="mt-4 self-end px-3 py-1 bg-red-500 text-white text-sm rounded-lg hover:bg-red-600"
          >
            Close
          </button>
        </div>
      )}
    </div>
  )
}


function Products() {
  return (
    <section id="products" className="pt-12 md:pt-7 pb-20 md:pb-7 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
          Our Products
        </h2>

        <div className="mt-12 space-y-20">
          {/* Mattresses */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-8 border-l-4 border-indigo-500 pl-3">
              Mattresses
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              <ProductCard
                image={pm}
                title="Prestige Mattress"
                description="You can only get quality sleep when you sleep on the right mattress waking up the way it should be. Our EUROFOAM prestige mattress, the first of its kind in Nigeria market is carefully designed to take off your worries, taking you to your dream land. After a full working hour at work and spending some quality time sitting in traffic you still have to cultivate a healthy sleep routine which can only be achieved by laying on the right mattress. EUROFOAM prestige mattress is made with foam that provides the best body support for you and is covered with a breathable cotton fabric."
              />

              <ProductCard
                image={om}
                title="Orthopaedic Mattress"
                description="An orthopaedic mattress is specially designed to offer a solid sleep surface and give you maximum support to help your back and joints. It evenly spreads your body weight, ensures correct spinal alignment, and reduces back pain. Over the years, orthopaedic mattresses have been designed not just for back pain but also for excellent comfort, promoting healthier blood circulation and helping you wake refreshed."
              />

              <ProductCard
                image={sm}
                title="Standard Mattress"
                description="EUROFOAM standard mattress is known for quality and durability. It comes in three series: plain, Majestic, and super. Each one features breathable fabric designs and pocket-friendly options, making it one of the most trusted choices for everyday comfort."
              />

              <ProductCard
                image={dm}
                title="Diamond Mattress"
                description="The Diamond mattress is one of the pillars of comfort that we made for you. The comfort your body needs to unwind and reboot with certified technology to softly embrace your body movement suitable for home use."
              />

              <ProductCard
                image={spm}
                title="Spring Mattress"
                description="Spring mattresses are made with coils like an innerspring that bounce. They help improve circulation and provide a cool sleep with better edge support. Since coils extend all the way to the edge, you can even sit on the side comfortably while getting dressed."
              />

              <ProductCard
                image={tm}
                title="Hospital Mattress"
                description="A hospital mattress, also called therapeutic or medical mattress, is specially designed to accommodate the patient’s head, foot, and weight adjustments. EUROFOAM hospital mattresses come in various sizes, with waterproof and washable covers, and work perfectly with hospital beds where the head and feet can be elevated."
              />

              <ProductCard
                image={sm2}
                title="Student Mattress"
                description="Your child’s sleep posture determines the type of mattress needed for healthy rest. A firm student mattress supports back or stomach sleepers, while softer ones suit side sleepers. Don’t let your child depend on thin, overused dorm mattresses. EUROFOAM student mattresses ensure comfort, hygiene, and restful nights for every student."
              />
            </div>
          </div>

          {/* Pillows */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-8 border-l-4 border-indigo-500 pl-3">
              Pillows
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProductCard
                image={lp2}
                title="Luxury Pillow"
                description="Luxury pillows are made with breathable, durable materials that prevent heat retention, keep sleepers cool, and last longer than average pillows. They retain shape and provide long-lasting comfort for restful nights."
              />

              <ProductCard
                image={fp}
                title="Fibre Pillow"
                description="Our fibre pillow is made with highly porous, non-irritating fibre that removes vaporized water during sleep, keeping it dry and comfortable. It offers soft, lightweight support and is machine washable for easy care"
              />

              <ProductCard
                image={lp}
                title="Latex Pillow"
                description="Our Latex Pillow with a washable zip cover is made from pure 100% natural latex. It offers resilient, supportive bounce and cradling comfort, ideal for people with head, neck, back, or spinal pain. It relieves pressure better than most other pillow types."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Products
