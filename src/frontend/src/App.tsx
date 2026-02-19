import Hero from './components/Hero';
import BusinessDetails from './components/BusinessDetails';
import MenuSection from './components/MenuSection';
import ReservationSection from './components/ReservationSection';
import ExtraCharges from './components/ExtraCharges';
import ReviewsSection from './components/ReviewsSection';
import Footer from './components/Footer';
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <BusinessDetails />
      <MenuSection />
      <ReservationSection />
      <ExtraCharges />
      <ReviewsSection />
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
}

export default App;
