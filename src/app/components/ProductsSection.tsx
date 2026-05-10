import ProductCard from './ProductCard';

const products = [
  { name: 'iPhone 14 Pro', price: '1,200,000 RWF', image: 'https://images.unsplash.com/photo-1678685888221-cda180f3a954?w=400&q=80' },
  { name: 'Samsung Galaxy S24', price: '950,000 RWF', image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&q=80' },
  { name: 'AirPods Pro', price: '180,000 RWF', image: 'https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=400&q=80' },
  { name: 'JBL Speaker', price: '85,000 RWF', image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&q=80' },
  { name: 'Smart Watch', price: '150,000 RWF', image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400&q=80' },
  { name: 'Redmi Note 13', price: '320,000 RWF', image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&q=80' },
  { name: 'Infinix Hot 40', price: '280,000 RWF', image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&q=80' },
  { name: 'Tecno Spark 20', price: '250,000 RWF', image: 'https://images.unsplash.com/photo-1592286927505-f462b66a93e2?w=400&q=80' },
  { name: 'Phone Charger', price: '15,000 RWF', image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400&q=80' },
  { name: 'Wireless Earbuds', price: '65,000 RWF', image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&q=80' },
  { name: 'Bluetooth Headphones', price: '95,000 RWF', image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=400&q=80' },
  { name: 'Power Bank 20000mAh', price: '45,000 RWF', image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&q=80' },
  { name: 'iPhone Case', price: '12,000 RWF', image: 'https://images.unsplash.com/photo-1585909695284-32d2985ac9c0?w=400&q=80' },
  { name: 'Samsung Fast Charger', price: '25,000 RWF', image: 'https://images.unsplash.com/photo-1625948515291-69613efd103f?w=400&q=80' },
  { name: 'USB-C Cable', price: '8,000 RWF', image: 'https://images.unsplash.com/photo-1601524909162-ae8725290836?w=400&q=80' },
  { name: 'Gaming Headset', price: '120,000 RWF', image: 'https://images.unsplash.com/photo-1599669454699-248893623440?w=400&q=80' },
  { name: 'Tablet Device', price: '450,000 RWF', image: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=400&q=80' },
  { name: 'Laptop Backpack', price: '35,000 RWF', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80' },
  { name: 'Portable Speaker', price: '55,000 RWF', image: 'https://images.unsplash.com/photo-1589492477829-5e65395b66cc?w=400&q=80' },
  { name: 'Screen Protector', price: '5,000 RWF', image: 'https://images.unsplash.com/photo-1601972599720-f3cd67c2a588?w=400&q=80' },
  { name: 'Phone Holder & Stand', price: '18,000 RWF', image: 'https://images.unsplash.com/photo-1622782914767-404fb9ab3f57?w=400&q=80' },
  { name: 'Wireless Charger Pad', price: '35,000 RWF', image: 'https://images.unsplash.com/photo-1591290619762-c588f8e4c42c?w=400&q=80' },
  { name: 'Selfie Ring Light', price: '28,000 RWF', image: 'https://images.unsplash.com/photo-1611532736553-2cc3991c0252?w=400&q=80' },
  { name: 'Car Phone Mount', price: '22,000 RWF', image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=400&q=80' },
  { name: 'Memory Card 128GB', price: '32,000 RWF', image: 'https://images.unsplash.com/photo-1624823183493-ed5832f48f18?w=400&q=80' },
  { name: 'Pop Socket Grip', price: '6,000 RWF', image: 'https://images.unsplash.com/photo-1605648916319-cf082f7524a1?w=400&q=80' },
  { name: 'Bluetooth Adapter', price: '15,000 RWF', image: 'https://images.unsplash.com/photo-1625948515291-69613efd103f?w=400&q=80' },
  { name: 'Tripod Stand', price: '45,000 RWF', image: 'https://images.unsplash.com/photo-1617005082133-548c4dd27f35?w=400&q=80' },
  { name: 'Aux Audio Cable', price: '7,000 RWF', image: 'https://images.unsplash.com/photo-1609086306937-a636b6ec75ab?w=400&q=80' },
  { name: 'Phone Camera Lens Kit', price: '55,000 RWF', image: 'https://images.unsplash.com/photo-1606489048674-e15c79d5d1b3?w=400&q=80' },
];

export default function ProductsSection() {
  return (
    <section id="products" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-red-600 mb-2">Our Products</h2>
          <p className="text-gray-600">Browse our latest collection of phones and accessories</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
