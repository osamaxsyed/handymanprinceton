import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HomeOffers from "@/components/HomeOffers";
import PriceCompare from "@/components/PriceCompare";
import CredentialsSection from "@/components/CredentialsSection";
import ServicesOverview from "@/components/ServicesOverview";
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
        keywords="handyman Princeton NJ, drywall repair Mercer County, door repair West Windsor, TV mounting Plainsboro, flat rate handyman Princeton"
      />
      <Header />
      <main>
        <Hero />
        <HomeOffers />
        <ServicesOverview />
        <PriceCompare />
        <Testimonials />
        <HowItWorks />
        <CredentialsSection />
        <ServiceAreas />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
