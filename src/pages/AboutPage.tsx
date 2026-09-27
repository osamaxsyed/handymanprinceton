import Header from "@/components/Header";
import About from "@/components/About";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="About Princeton Handyman | Osama Syed, Central Jersey Home Services LLC"
        description="Princeton Handyman is run by Osama Syed of Central Jersey Home Services LLC, a licensed and insured NJ home improvement contractor (NJ HIC #13VH13918800) doing flat-rate repairs across Princeton and Mercer County."
        canonical="/about"
      />
      <Header />
      <main>
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
