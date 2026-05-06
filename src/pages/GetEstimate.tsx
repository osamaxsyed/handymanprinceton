import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import SEO from "@/components/SEO";

const GetEstimate = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Get a Free Estimate | Princeton Handyman"
        description="Request a free, no-obligation estimate for handyman services, kitchen remodels, bathroom remodels, and home repairs in Princeton and Central NJ. Call (609) 516-0098."
        canonical="/get-estimate"
      />
      <Header />
      <main>
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default GetEstimate;
