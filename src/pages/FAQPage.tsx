import Header from "@/components/Header";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const FAQPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Frequently Asked Questions | Princeton Handyman"
        description="Got questions about our handyman services? Find answers about pricing, scheduling, service areas, and what to expect from Princeton Handyman in Central NJ."
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