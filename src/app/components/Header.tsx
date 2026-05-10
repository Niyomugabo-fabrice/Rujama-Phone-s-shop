import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = ['Home', 'Products', 'Services', 'Contact', 'Address'];

  return (
    <header className="sticky top-0 z-50 bg-[#b30000] h-25 shadow-md">
      <div className="container mx-auto px-4 py-4">

        <div className="flex items-center justify-between h-16">

          {/* LOGO */}
          <div className="flex items-center">
            <img
              src="/src/imports/image-1.png"
              alt="Rujama Phones Shop"
              className="h-24 w-auto"
            />
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden bg-black text-white p-2 rounded-lg"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-white hover:text-black transition-colors font-bold text-xl"
                style={{ fontFamily: 'Pacifico, cursive' }}
              >
                {link}
              </a>
            ))}
          </nav>

        </div>

        {/* MOBILE NAVBAR */}
        {isMenuOpen && (
          <nav className="md:hidden bg-black rounded-lg mt-3 p-4 shadow-lg">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className="block py-4 text-white hover:text-red-500 transition-colors font-bold text-2xl border-b border-white/10"
                style={{ fontFamily: 'Pacifico, cursive' }}
              >
                {link}
              </a>
            ))}
          </nav>
        )}

      </div>
    </header>
  );
}