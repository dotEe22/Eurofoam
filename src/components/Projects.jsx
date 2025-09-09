import React from "react"
import sd from "../assets/School-donation-1.jpg";
import sd2 from "../assets/School-donation-2.jpg";
import sd3 from "../assets/School-donation-3.jpg";
import bd from "../assets/Borehole-donation-1.jpg";
import bd2 from "../assets/Borehole-donation-2.jpg";
import bd3 from "../assets/Borehole-donation-3.jpg";
import vo from "../assets/Valentine-Outreach-1.jpg";
import vo2 from "../assets/Valentine-Outreach-2.jpg";
import vo3 from "../assets/Valentine-Outreach-3.jpg";

function Projects() {
  const projects = [
    {
      title: "Educational Support",
      description:
        "We help underprivileged students with renovating old classrooms, scholarships, learning materials, and mentorship programs to secure a brighter future. We collaborate with local schools and volunteers to ensure resources reach those most in need. Our programs also include teacher training and after-school tutoring to improve long-term outcomes.",
      images: [
        sd,
        sd2,
        sd3,
      ],
    },
    {
      title: "Healthcare Outreach",
      description:
        "Provision of a clean and safe water source for the rural community. We coordinate with health professionals and provide education on hygiene and sanitation to reduce preventable illness. Projects include building handwashing stations and training local health workers to maintain facilities.",
      images: [
        bd,
        bd2,
        bd3,
      ],
    },
    {
      title: "Social Care",
      description:
        "Support for vulnerable groups, including the elderly and Orphans. We run outreach programs and partner with shelters to provide essential items and counseling. Volunteers help organize community events that foster resilience and social support.",
      images: [
        vo,
        vo2,
        vo3,
      ],
    },
  ]

  return (
    <section id="projects" className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-12 text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Community Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            We believe in giving back. Here are some of the initiatives we’ve carried out to make a lasting impact in our community.
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="grid grid-cols-3 gap-1">
                {project.images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`${project.title} ${idx + 1}`}
                    className="w-full h-32 object-cover"
                  />
                ))}
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
