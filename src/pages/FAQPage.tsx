import Header from "@/components/Header";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const FAQPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Handyman FAQ for Princeton NJ | Pricing, Towns, What We Fix"
        description="Straight answers on how the $345 flat-rate visit works, which Princeton and Mercer County towns we cover, what repairs we take on, deposits, and the one-year labor warranty from Princeton Handyman."
        canonical="/faq"
      />
      <Header />
      <main>
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default FAQPage;
