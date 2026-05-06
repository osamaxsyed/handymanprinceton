import { Award, Shield, Users, Clock, CheckCircle, ArrowRight, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const stats = [
    { number: "15+", label: "Years Combined" },
    { number: "5.0", label: "Google Rating" },
    { number: "23+", label: "Cities Served" },
    { number: "100%", label: "Insured" },
  ];

  const values = [
    { icon: Award, title: "Quality Craftsmanship", description: "Every project meets our standards of excellence and attention to detail." },
    { icon: Clock, title: "Reliable Service", description: "We show up on time and complete projects when promised." },
    { icon: Shield, title: "Licensed & Insured", description: "Fully licensed, bonded, and insured for your complete peace of mind." },
    { icon: Users, title: "Customer Focused", description: "Your satisfaction is our priority. We work with you every step of the way." },
  ];

  const certifications = [
    "Licensed General Contractor (NJ HIC #13VH13918800)",
    "Bonded & Insured",
    "Better Business Bureau A+ Rating",
    "Angie's List Super Service Award",
    "HomeAdvisor Elite Service",
    "Google 5-Star Rating",
  ];

  const process = [
    { num: "01", title: "Request Estimate", body: "Tell us about your project online or by phone. The more details, the better." },
    { num: "02", title: "Receive Quote", body: "Detailed quote sent via email. Accept and pay retainer to schedule." },
    { num: "03", title: "We Build", body: "Skilled technicians arrive on time, confirm scope, and complete the work." },
    { num: "04", title: "1-Year Warranty", body: "Project completed with our 1-year labor warranty. Cross it off your list." },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-foreground text-background heavy-border-b py-20 md:py-28">
        <div className="w-full max-w-6xl mx-auto px-6 md:px-10">
          <div className="brutalist-section-eyebrow text-background/70">About Us</div>
          <h1 className="brutalist-headline text-4xl md:text-7xl text-background mb-6 leading-[0.95]">
            Family-Owned.
            <br />
            <span className="text-background/70">Built by the Syed Brothers.</span>
          </h1>
          <p className="font-body text-lg md:text-xl text-background/85 max-w-2xl border-l-4 border-background pl-5">
            Family-owned and operated with over 15 years of construction and carpentry experience. Quality work, honest communication, prompt service.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-background heavy-border-b">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 heavy-border-b">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`p-8 md:p-12 text-center ${
                  i < stats.length - 1 ? "border-r-2 border-foreground" : ""
                } ${i < 2 ? "border-b-2 md:border-b-0 border-foreground" : ""}`}
              >
                <div className="brutalist-headline text-4xl md:text-6xl text-foreground mb-2">{s.number}</div>
                <div className="font-headline font-bold uppercase tracking-wider text-xs text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-background heavy-border-b">
        <div className="w-full max-w-5xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-12">
          <div>
            <div className="brutalist-section-eyebrow">Our Story</div>
            <h2 className="brutalist-headline text-3xl md:text-4xl text-foreground mb-6">
              Owner-Operated. Licensed. Local.
            </h2>
            <div className="space-y-4 font-body text-base text-muted-foreground leading-relaxed">
              <p>
                Princeton Handyman is owned and operated by experienced craftsmen with a combined 15+ years of experience in home repairs, remodeling, and construction throughout New Jersey.
              </p>
              <p>
                Life is hectic. You shouldn't need to search all over the internet for someone to help with the odds and ends you don't have time for — and you definitely shouldn't have to deal with tradesmen who don't respond.
              </p>
              <p>
                The biggest complaint we hear from homeowners is a lack of communication. We go the extra mile to make sure you understand what we're doing and what the job entails from start to finish.
              </p>
            </div>
          </div>
          <div>
            <div className="brutalist-section-eyebrow">Certifications & Awards</div>
            <h3 className="brutalist-headline text-xl md:text-2xl text-foreground mb-6">What Backs Us Up</h3>
            <ul className="space-y-3">
              {certifications.map((c) => (
                <li key={c} className="flex items-start gap-3 font-body text-sm md:text-base text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-foreground flex-shrink-0 mt-0.5" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted heavy-border-b">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-10">
          <div className="mb-12 pb-6 heavy-border-b">
            <div className="brutalist-section-eyebrow">What We Stand For</div>
            <h2 className="brutalist-headline text-3xl md:text-5xl text-foreground">Our Values</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="bento-card bg-background p-6 md:p-8">
                  <Icon className="h-8 w-8 text-foreground mb-5" />
                  <h3 className="brutalist-headline text-lg text-foreground mb-3">{v.title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{v.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-20 bg-foreground text-background heavy-border-b">
        <div className="w-full max-w-3xl mx-auto px-6 md:px-10 text-center">
          <Star
            className="h-10 w-10 mx-auto mb-6"
            fill="#fbbc04"
            color="#fbbc04"
            strokeWidth={1}
          />
          <blockquote className="font-headline font-semibold italic text-xl md:text-3xl text-background leading-snug mb-6">
            "We have used Osama's services several times in the last year. He is reliable and knows what is needed to fix the problem. I will confidently call him for future services."
          </blockquote>
          <cite className="font-headline font-bold uppercase tracking-wider text-sm text-background/70 not-italic">
            — Mazhar Habib, Repeat Customer
          </cite>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-background heavy-border-b">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <div className="brutalist-section-eyebrow">How We Work</div>
            <h2 className="brutalist-headline text-3xl md:text-5xl text-foreground">Four Steps</h2>
            <div className="w-24 h-1 bg-foreground mx-auto mt-6"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 heavy-border bg-background">
            {process.map((p, i) => (
              <div
                key={p.num}
                className={`p-8 md:p-10 relative group hover:bg-muted transition-colors ${
                  i < process.length - 1 ? "border-b-2 md:border-b-0 md:border-r-2 border-foreground" : ""
                }`}
              >
                <div className="absolute top-4 right-4 font-headline font-black text-5xl md:text-6xl text-foreground/10 group-hover:text-foreground/30 transition-colors">
                  {p.num}
                </div>
                <h3 className="brutalist-headline text-xl text-foreground mb-3 mt-2">{p.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-foreground text-background">
        <div className="w-full max-w-4xl mx-auto px-6 md:px-10 text-center">
          <h2 className="brutalist-headline text-3xl md:text-5xl text-background mb-4">
            Ready to Work With Us?
          </h2>
          <p className="font-body text-lg text-background/80 mb-10">
            Join hundreds of satisfied customers across Central NJ.
          </p>
          <button onClick={() => navigate("/get-estimate")} className="brutalist-cta bg-background text-foreground border-background/30">
            Get Your Free Estimate <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>
    </>
  );
};

export default About;
