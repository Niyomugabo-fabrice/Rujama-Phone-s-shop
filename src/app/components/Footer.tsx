import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-blue-900 to-blue-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <img
              src="/src/imports/image-2.png"
              alt="Rujama Phones Shop"
              className="h-20 w-auto mb-4"
            />
            <p className="text-blue-100 mb-4">
              Your trusted partner for phones and accessories in Kigali, Rwanda.
            </p>
          </div>

          <div>
            <h3 className="mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-blue-100 hover:text-red-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#products" className="text-blue-100 hover:text-red-400 transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="#services" className="text-blue-100 hover:text-red-400 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-blue-100 hover:text-red-400 transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#address" className="text-blue-100 hover:text-red-400 transition-colors">
                  Address
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone size={18} className="text-red-400" />
                <a href="tel:+250788773754" className="text-blue-100 hover:text-red-400 transition-colors">
                  +250 788 773 754
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle size={18} className="text-red-400" />
                <a
                  href="https://wa.me/250788773754"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-100 hover:text-red-400 transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-red-400" />
                <a
                  href="mailto:rujamaphoneshop@gmail.com"
                  className="text-blue-100 hover:text-red-400 transition-colors break-all"
                >
                  rujamaphoneshop@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={18} className="text-red-400 mt-1" />
                <span className="text-blue-100">Kigali-Nyarugenge, Car-Free Zone</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-700 pt-6 text-center">
          <p className="text-blue-100">
            &copy; {currentYear} Rujama Phones Shop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
