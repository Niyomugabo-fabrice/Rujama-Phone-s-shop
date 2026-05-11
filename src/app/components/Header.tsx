import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = ["Home", "Products", "Services", "Contact", "Address"];

  return (
    <header className="sticky top-0 z-50 bg-[#820210] shadow-lg">
      <div className="max-w-7xl mx-auto px-4">

        {/* MAIN BAR */}
        <div className="flex items-center justify-between h-20">

          {/* LOGO */}
          <div className="flex items-center">
            <img
              src="/image/image-1.png"
              alt="Rujama Phones Shop"
              className="h-20 w-auto transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex gap-10">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-white font-semibold text-lg relative group"
                style={{ fontFamily: "serif" }}
              >
                {link}

                {/* hover underline */}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden bg-black text-white p-2 rounded-lg hover:scale-105 transition"
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="bg-black rounded-xl mt-2 p-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className="block text-white text-xl font-semibold py-3 px-3 rounded-lg hover:bg-white/10 transition"
                style={{ fontFamily: "Pacifico, cursive" }}
              >
                {link}
              </a>
            ))}
          </nav>
        </div>

      </div>
    </header>
  );
}