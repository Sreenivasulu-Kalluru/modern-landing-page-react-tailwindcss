import './App.css';
import CompanyLogo from './components/CompanyLogo';
import FeaturesSection from './components/FeaturesSection';
import Footer from './components/Footer';
import Hero from './components/Hero';
import MonitorSection from './components/MonitorSection';
import Navbar from './components/Navbar';
import NewsLetterSection from './components/NewsLetterSection';
import PricingSection from './components/PricingSection';
import PurposeSection from './components/PurposeSection';
import ScheduleSection from './components/ScheduleSection';
import ServicesSection from './components/ServicesSection';
import TestimonialsSection from './components/TestimonialsSection';

function App() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500/20 to-pink-500/20 rounded-full blur-[80px] -z-10"></div>
      <div className="overflow-hidden">
        <Navbar />
        <Hero />
        <CompanyLogo />
        <PurposeSection />
        <FeaturesSection />
        <ScheduleSection />
        <MonitorSection />
        <PricingSection />
        <ServicesSection />
        <TestimonialsSection />
        <NewsLetterSection />
        <Footer />
      </div>
    </main>
  );
}

export default App;
