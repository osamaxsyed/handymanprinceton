import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CredentialsSection from "@/components/CredentialsSection";
import ServicesOverview from "@/components/ServicesOverview";
import FeaturedServices from "@/components/FeaturedServices";
import ServiceAreas from "@/components/ServiceAreas";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        canonical="/"
        keywords="handyman Princeton NJ, home repair Plainsboro, kitchen remodel West Windsor, bathroom remodel Lawrence Township, licensed contractor Central NJ, general repairs Mercer County"
      />
      <Header />
      <main>
        <Hero />
        <CredentialsSection />
        <Testimonials />
        <ServicesOverview />
        <FeaturedServices />
        <ServiceAreas />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
