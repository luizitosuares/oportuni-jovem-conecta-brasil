
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import FeaturedOpportunities from "@/components/FeaturedOpportunities";
import HowItWorksSection from "@/components/HowItWorksSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Header />
      <HeroSection />
      <StatsSection />
      <FeaturedOpportunities />
      <HowItWorksSection />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default Index;
