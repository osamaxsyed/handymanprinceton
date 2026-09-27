import { MessageSquare, Receipt, Truck, ShieldCheck } from "lucide-react";
import { WARRANTY } from "@/data/coreServices";
import { site } from "@/data/site";

// The four things that actually happen, in order. No estimate-permit-build
// process here: flat menu, no permits.
const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Send the List",
      description: `A photo and a line per item, texted to ${site.phoneDisplay}. You hear back the same business day.`,
    },
    {
      number: "02",
      icon: <Receipt className="h-8 w-8" />,
      title: "Agree the Number",
      description: "We match the list to a Visit, a Half Day, or a Full Day and confirm the price before anything is scheduled.",
    },
    {
      number: "03",
      icon: <Truck className="h-8 w-8" />,
      title: "We Arrive",
      description: "A name, an on-my-way text, and a truck with the tools, ladder, and common parts already on it. We clean up after.",
    },
    {
      number: "04",
      icon: <ShieldCheck className="h-8 w-8" />,
      title: "Finished and Backed",
      description: `Half down holds the date, the rest is due at completion. ${WARRANTY.replace(" on every job", "")}.`,
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-muted heavy-border-t heavy-border-b">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <div className="brutalist-section-eyebrow">How It Works</div>
          <h2 className="brutalist-headline text-3xl md:text-5xl text-foreground">
            Four Steps, No Surprises
          </h2>
          <div className="w-24 h-1 bg-foreground mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 heavy-border bg-background">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`p-8 md:p-10 relative group hover:bg-muted transition-colors ${
                i < steps.length - 1 ? "border-b-2 md:border-b-0 md:border-r-2 border-foreground" : ""
              }`}
            >
              <div className="absolute top-4 right-4 font-headline font-black text-5xl md:text-6xl text-foreground/10 group-hover:text-foreground/30 transition-colors">
                {step.number}
              </div>
              <div className="text-foreground mb-6">{step.icon}</div>
              <h3 className="brutalist-headline text-xl md:text-2xl text-foreground mb-3">
                {step.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
