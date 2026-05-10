import { Wrench, Smartphone, Download, Unlock, ShoppingBag, Truck, MessageCircle } from 'lucide-react';

const services = [
  {
    icon: Wrench,
    title: 'Phone Repair',
    description: 'Expert repair services for all phone brands',
  },
  {
    icon: Smartphone,
    title: 'Screen Replacement',
    description: 'High-quality screen replacement with warranty',
  },
  {
    icon: Download,
    title: 'Software Installation',
    description: 'OS updates and app installation services',
  },
  {
    icon: Unlock,
    title: 'Phone Unlocking',
    description: 'Professional unlocking for all carriers',
  },
  {
    icon: ShoppingBag,
    title: 'Accessory Sales',
    description: 'Wide range of phone accessories',
  },
  {
    icon: Truck,
    title: 'Delivery Services',
    description: 'Fast delivery across Kigali',
  },
];

const getWhatsAppLink = (service: string) => {
  const message = `Hi! I need help with ${service}`;
  return `https://wa.me/250788773754?text=${encodeURIComponent(message)}`;
};

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-blue-600 mb-2">Our Services</h2>
          <p className="text-gray-600">Professional services you can trust</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-red-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="bg-red-600 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <Icon className="text-white" size={28} />
                </div>
                <h3 className="mb-2 text-blue-900">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <a
                  href={getWhatsAppLink(service.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors text-sm"
                >
                  <MessageCircle size={16} />
                  Contact Us
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
