import Header from "@/components/Header";
import About from "@/components/About";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="About | Princeton Handyman"
        description="Princeton Handyman is operated by Osama Syed under Central Jersey Home Services LLC. Licensed, insured, and locally accountable. NJ HIC #13VH13918800."
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