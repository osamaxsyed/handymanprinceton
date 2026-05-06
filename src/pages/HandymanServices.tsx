import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Check, X, Phone, ArrowRight } from "lucide-react";
import { handymanServices } from "@/data/handymanServices";
import { useNavigate } from "react-router-dom";
import SEO from "@/components/SEO";

const HandymanServices = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Handyman Services in Princeton & Central NJ | Princeton Handyman"
        description="Full list of handyman services: plumbing repairs, electrical work, carpentry, painting, drywall, and more. Licensed & insured. Serving Princeton, Plainsboro, West Windsor & surrounding Mercer County towns."
        canonical="/handyman-services"
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-foreground text-background heavy-border-b py-20 md:py-28">
          <div className="w-full max-w-6xl mx-auto px-6 md:px-10">
            <div className="brutalist-section-eyebrow text-background/70">Repairs & Small Projects</div>
            <h1 className="brutalist-headline text-4xl md:text-7xl text-background mb-6 leading-[0.95]">
              Handyman Services.
              <br />
              <span className="text-background/70">Central New Jersey.</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-background/85 max-w-2xl mb-10 border-l-4 border-background pl-5">
              Got a growing to-do list of repairs and home improvements? We handle minor fixes to major upgrades. Browse what we do — and what we don't — below.
            </p>
            <button onClick={() => navigate("/get-estimate")} className="brutalist-cta bg-background text-foreground border-background/30">
              Request a Custom Quote <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-background heavy-border-b">
          <div className="w-full max-w-7xl mx-auto px-6 md:px-10">
            <div className="mb-12 pb-6 heavy-border-b">
              <div className="brutalist-section-eyebrow">Service Catalog</div>
              <h2 className="brutalist-headline text-3xl md:text-5xl text-foreground">What We Do</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {handymanServices.map((service, idx) => (
                <div key={idx} className="bento-card p-6 md:p-8 flex flex-col">
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-foreground">
                    <span className="text-3xl">{service.icon}</span>
                    <h3 className="brutalist-headline text-xl md:text-2xl text-foreground">{service.title}</h3>
                  </div>

                  <div className="mb-6">
                    <div className="font-headline font-black uppercase tracking-wider text-[10px] text-foreground bg-muted inline-block px-2 py-1 mb-3">
                      ✓ We Do
                    </div>
                    <ul className="space-y-2">
                      {service.weDo.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 font-body text-sm">
                          <Check className="h-4 w-4 text-foreground flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto">
                    <div className="font-headline font-black uppercase tracking-wider text-[10px] text-muted-foreground bg-muted inline-block px-2 py-1 mb-3">
                      ✗ We Don't Do
                    </div>
                    <ul className="space-y-2">
                      {service.weDontDo.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 font-body text-sm">
                          <X className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-foreground text-background">
          <div className="w-full max-w-4xl mx-auto px-6 md:px-10 text-center">
            <h2 className="brutalist-headline text-3xl md:text-5xl text-background mb-4">Ready to Get Started?</h2>
            <p className="font-body text-lg text-background/80 mb-10">
              Free estimate. Transparent pricing. No surprise charges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => navigate("/get-estimate")} className="brutalist-cta bg-background text-foreground border-background/30">
                Get Free Estimate <ArrowRight className="h-4 w-4" />
              </button>
              <a
                href="tel:6095160098"
                className="inline-flex items-center justify-center gap-2 font-headline font-black uppercase tracking-wider text-sm px-8 py-4 bg-transparent text-background border-2 border-background hover:bg-background hover:text-foreground transition-all rounded-none"
              >
                <Phone className="h-4 w-4" />
                (609) 516-0098
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HandymanServices;
