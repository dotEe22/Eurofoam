import React, { useState, useEffect } from "react"
import sd from "../assets/School-donation-1.jpg"
import sd2 from "../assets/School-donation-2.jpg"
import sd3 from "../assets/School-donation-3.jpg"
import bd from "../assets/Borehole-donation-1.jpg"
import bd2 from "../assets/Borehole-donation-2.jpg"
import bd3 from "../assets/Borehole-donation-3.jpg"
import vo from "../assets/Valentine-Outreach-1.jpg"
import vo2 from "../assets/Valentine-Outreach-2.jpg"
import vo3 from "../assets/Valentine-Outreach-3.jpg"

function Projects() {
  const projects = [
    {
      title: "Educational Support",
      short:
        "We help underprivileged students with renovating classrooms, scholarships, and mentorship.",
      full: "We help underprivileged students with renovating old classrooms, scholarships, learning materials, and mentorship programs to secure a brighter future. We collaborate with local schools and volunteers to ensure resources reach those most in need. Our programs also include teacher training and after-school tutoring to improve long-term outcomes.",
      images: [sd, sd2, sd3],
    },
    {
      title: "Healthcare Outreach",
      short:
        "Provision of clean water and hygiene education for rural communities.",
      full: "Provision of a clean and safe water source for the rural community. We coordinate with health professionals and provide education on hygiene and sanitation to reduce preventable illness. Projects include building handwashing stations and training local health workers to maintain facilities.",
      images: [bd, bd2, bd3],
    },
    {
      title: "Social Care",
      short:
        "Support for vulnerable groups, including the elderly and orphans.",
      full: "Support for vulnerable groups, including the elderly and Orphans. We run outreach programs and partner with shelters to provide essential items and counseling. Volunteers help organize community events that foster resilience and social support.",
      images: [vo, vo2, vo3],
    },
  ]

  return (
    <section id="projects" className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-left">
            Our Community Projects
          </h2>
          <p className="text-lg text-gray-600 text-left">
            We believe in giving back. Here are some of the initiatives we’ve
            carried out to make a lasting impact in our community.
          </p>
        </header>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [expanded, setExpanded] = useState(false)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    let interval
    if (hovered) {
      interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % project.images.length)
      }, 3000)
    }
    return () => clearInterval(interval)
  }, [hovered, project.images.length])

  return (
   <div
  className="bg-white shadow-md overflow-hidden hover:shadow-xl transition-shadow 
             w-full md:w-3/4 lg:w-2/3 mx-auto"
  onMouseEnter={() => setHovered(true)}
  onMouseLeave={() => setHovered(false)}
>

      {/* Image Slideshow */}
     <div className="relative w-full h-96 md:h-160 overflow-hidden">
  {project.images.map((img, idx) => (
    <img
      key={idx}
      src={img}
      alt={`${project.title} ${idx + 1}`}
      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
        idx === activeIndex ? "opacity-100" : "opacity-0"
      }`}
    />
  ))}
</div>


      {/* Title & Description */}
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-gray-800 mb-3">
          {project.title}
        </h3>

        {/* Desktop: full description */}
        <p className="hidden md:block text-gray-600">{project.full}</p>

        {/* Mobile: short/full toggle */}
        <div className="block md:hidden">
          <p className="text-gray-600 mb-4">
            {expanded ? project.full : project.short}
          </p>
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-red-600 hover:underline font-medium"
          >
            {expanded ? "See Less ↑" : "See More →"}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Projects
