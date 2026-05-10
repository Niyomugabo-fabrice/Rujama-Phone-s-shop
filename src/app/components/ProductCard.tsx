import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  name: string;
  price: string;
  image: string;
}

export default function ProductCard({ name, price, image }: ProductCardProps) {
  const whatsappMessage = `Hi! I'm interested in ${name} (${price})`;
  const whatsappUrl = `https://wa.me/250788773754?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
      <div className="aspect-square overflow-hidden bg-gray-100">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <h3 className="mb-2 line-clamp-2">{name}</h3>
        <p className="text-blue-600 mb-3">{price}</p>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-[#b30000] hover:bg-[#8a0000] text-white px-4 py-2 rounded-lg transition-colors flex items-center justify-center gap-2"
        >
          <ShoppingCart size={18} />
          Buy on WhatsApp
        </a>
      </div>
    </div>
  );
}
