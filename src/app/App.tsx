import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProductsSection from './components/ProductsSection';
import ServicesSection from './components/ServicesSection';
import ContactSection from './components/ContactSection';
import AddressSection from './components/AddressSection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <ProductsSection />
        <ServicesSection />
        <ContactSection />
        <AddressSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}