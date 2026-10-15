import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HomeOffers from "@/components/HomeOffers";
import PriceCompare from "@/components/PriceCompare";
import CredentialsSection from "@/components/CredentialsSection";
import HomeServices from "@/components/home/HomeServices";
import HousingNumbers from "@/components/home/HousingNumbers";
import RulesAndCosts from "@/components/home/RulesAndCosts";
import HomeFaq from "@/components/home/HomeFaq";
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
        <HomeServices />
        <PriceCompare />
        <Testimonials />
        <HowItWorks />
        <CredentialsSection />
        <HousingNumbers />
        <RulesAndCosts />
        <ServiceAreas />
        <HomeFaq />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
