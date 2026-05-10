import { MapPin, Navigation } from 'lucide-react';

export default function AddressSection() {
  return (
    <section id="address" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-blue-600 mb-2">Visit Our Store</h2>
          <p className="text-gray-600">Find us in the heart of Kigali</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-red-50 rounded-xl overflow-hidden shadow-xl">
            <div className="aspect-video bg-gray-200 relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.4982104953456!2d30.059328!3d-1.956389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwNTcnMjMuMCJTIDMwwrAwMyczMy42IkU!5e0!3m2!1sen!2srw!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              />
            </div>

            <div className="p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-red-600 p-3 rounded-full">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-blue-900 mb-2">Our Location</h3>
                  <p className="text-gray-700">
                    Kigali-Nyarugenge, Car-Free Zone
                    <br />
                    Rujama Phones Shop
                  </p>
                </div>
              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Kigali+Nyarugenge+Car+Free+Zone"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
              >
                <Navigation size={20} />
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
