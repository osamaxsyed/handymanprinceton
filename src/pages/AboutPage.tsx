import Header from "@/components/Header";
import About from "@/components/About";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="About Us | Princeton Handyman"
        description="Meet the team behind Princeton Handyman. Licensed, bonded & insured with 15+ years of experience serving Central NJ with quality home repair and remodeling services."
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