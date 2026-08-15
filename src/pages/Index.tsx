import Header from "@/components/Header";
import Hero from "@/components/Hero";
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
      {/* Head-term consolidation (REBUILD_SPEC §1): "princeton handyman" carries
          617 impressions at position 31 with zero clicks, and /handyman-services
          held another 583 impressions at position 38.7. That page now 301s here,
          so this title has to own the term outright. Lead with the exact query,
          then the price anchor which is the differentiator in the SERP. */}
      <SEO
        title="Princeton Handyman | Licensed Home Repairs, $295 Visit"
        description="Licensed handyman in Princeton, NJ. Flat pricing: $295 visit covers up to 2 hours of skilled work, no hourly meters. Drywall, doors, carpentry, cabinets, and bathroom work across Princeton, West Windsor, and Robbinsville. NJ HIC #13VH13918800."
        canonical="/"
        keywords="handyman Princeton NJ, princeton handyman, local handyman Princeton, home repair services Princeton, drywall repair Princeton, cabinet repair Princeton, licensed contractor Mercer County"
      />
      <Header />
      <main>
        <Hero />
        <Testimonials />
        <CredentialsSection />
        <ServicesOverview />
        <ServiceAreas />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
