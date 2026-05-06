import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookQuickRepair from "@/components/BookQuickRepair";
import SEO from "@/components/SEO";

const BookRepair = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Book a Quick Repair | Princeton Handyman"
        description="Schedule a quick home repair with Princeton Handyman. Fast, reliable service for plumbing fixes, electrical work, carpentry, and more in Central NJ. Licensed & insured."
        canonical="/book-repair"
      />
      <Header />
      <main>
        <BookQuickRepair />
      </main>
      <Footer />
    </div>
  );
};

export default BookRepair;
