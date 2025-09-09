import React, { useState } from "react"

function Footer() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent("Customer Request from " + form.name)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nRequest:\n${form.message}`
    )
    window.location.href = `mailto:info@eurofoam.com?subject=${subject}&body=${body}`
  }

  return (
    <footer id="contact" className="w-full bg-black text-gray-300 py-12 left-0 right-0">
  {/* Full width grid, no px-6 */}
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:max-w-fit md:grid-cols-4 gap-8">
    {/* Logo + Company Info */}
    <div className="px-6 md:px-8">
      <div className="mb-4">
        <img
          src="./src/assets/Eurofoam_Logo.png"
          alt="Eurofoam Logo"
          className="w-20 h-20 object-contain"
        />
      </div>
      <h3 className="text-white text-xl font-bold mb-4">Eurofoam</h3>
      <p className="text-gray-400">
        Providing comfort and quality for over 20 years.  
        We are committed to excellence and community impact.
      </p>
    </div>

    {/* Quick Links */}
    <div className="px-6 md:px-8">
      <h4 className="text-white text-lg font-semibold mb-4">Quick Links</h4>
      <ul className="space-y-2">
        <li><a href="#about" className="hover:text-white">About Us</a></li>
        <li><a href="#products" className="hover:text-white">Our Products</a></li>
        <li><a href="#reviews" className="hover:text-white">Reviews</a></li>
        <li><a href="#projects" className="hover:text-white">Projects</a></li>
        <li><a href="#contact" className="hover:text-white">Contact</a></li>
      </ul>
    </div>

    {/* Contact Info */}
    <div className="px-6 md:px-8">
      <h4 className="text-white text-lg font-semibold mb-4">Contact Us</h4>
      <p>🗺️ 123 Main Street, Lagos, Nigeria</p>
      <p>📞 +234 800 123 4567</p>
      <p>✉️ info@eurofoam.com</p>
    </div>

    {/* Request Form */}
    <div className="px-6 md:px-8">
      <h4 className="text-white text-lg font-semibold mb-4">Request Box</h4>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none"
          required
        />
        <textarea
          name="message"
          placeholder="Your Request"
          value={form.message}
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none"
          rows="3"
          required
        />
        <button
          type="submit"
          className="w-full bg-white text-black font-semibold py-2 rounded hover:bg-gray-200"
        >
          Send Request
        </button>
      </form>
    </div>
  </div>

  {/* Bottom Line */}
  <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
    © {new Date().getFullYear()} Eurofoam. All Rights Reserved.
  </div>
</footer>

  )
}

export default Footer
