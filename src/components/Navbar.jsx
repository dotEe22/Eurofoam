import { useState } from "react"
import { useScrollDirection } from "../hooks/useScrollDirection"
import { Menu, X } from "lucide-react"

function Navbar() {
  const scrollDirection = useScrollDirection()
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Products", href: "#products" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-transform duration-300
        ${scrollDirection === "down" ? "-translate-y-full" : "translate-y-0"}
        bg-stone-50 shadow`}  // ✅ always bg-stone-50 on mobile & desktop
    >
      {/* wrapper */}
      <div className="relative w-full px-6 flex items-center justify-between py-3 lg:py-4">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <span className="inline-block w-12 h-12 rounded-full overflow-hidden shadow-md">
            <img
              src="./src/assets/Eurofoam_Logo.png"
              alt="Eurofoam Logo"
              className="w-full h-full object-cover rounded-full"
            />
          </span>
          <div className="leading-tight">
            <span className="block text-xl font-extrabold tracking-wide text-gray-800">
              <span className="text-3xl font-bold text-gray-800 mr-0.5">E</span>
              UROFOAM
            </span>
            <span className="block text-xs sm:text-sm text-red-600 font-medium">
              Sleep ...the way it should be
            </span>
          </div>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-gray-800 font-medium hover:text-red-600 
                after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] 
                after:bg-red-600 hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile burger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 focus:outline-none"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div
          className="md:hidden absolute left-0 right-0 top-full z-40 px-6 pb-4 rounded-b-xl shadow-lg"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.65)", // ✅ transparent white
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
          }}
        >
          <div className="flex flex-col space-y-4 mt-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-800 font-medium hover:text-red-600"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
