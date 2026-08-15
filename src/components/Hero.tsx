import { useState } from "react";
import { Phone, MessageSquare, CheckCircle2, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-osama.jpg";
import site from "@/data/site";

// Ported from EBH's dual-path hero (Call/Text left, 3-field quick form right).
// Princeton differences: the H1 leads with the head term ("princeton handyman",
// 617 impressions at pos 31 with zero clicks, is THE target), and there is no
// Google-rating badge because Princeton has no GBP yet. The trust chip credits
// the same licensed team honestly instead of implying a local rating.
const Hero = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [details, setDetails] = useState("");
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setState("sending");
    try {
      const r = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "estimate",
          name, phone, description: details,
          serviceType: "Hero quick form",
          sourcePage: "homepage-hero",
          submittedAt: new Date().toISOString(),
        }),
      });
      setState(r.ok ? "done" : "error");
    } catch {
      setState("error");
    }
  }

  return (
    <>
      <section className="py-10 md:py-16">
        <div className="w-full max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          <div>
            <p className="brutalist-section-eyebrow mb-3">Princeton & Mercer County, New Jersey</p>
            <h1 className="font-headline font-semibold text-4xl md:text-5xl leading-[1.14] tracking-[-0.015em] text-foreground mb-5">
              Licensed Handyman &amp; Home Repairs in Princeton, NJ
            </h1>
            <p className="font-body text-xl leading-relaxed text-muted-foreground max-w-xl mb-7">
              Owner-led, local, and priced flat before the work starts. The same licensed team
              behind East Brunswick Handyman, now serving Princeton, West Windsor, Robbinsville,
              and Lawrence. Never a stranger from an app.
            </p>

            <div className="flex flex-wrap gap-3.5 mb-4">
              <a href={site.phoneHref} className="brutalist-cta">
                <Phone className="h-5 w-5" />
                Call {site.phoneDisplay}
              </a>
              <a href={site.smsHref} className="brutalist-cta-secondary">
                <MessageSquare className="h-5 w-5" />
                Text a Photo of Your Job
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-5 mt-2 border-t border-border">
              <div className="font-body text-[17px] text-foreground/85">
                <span className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-[18px] w-[18px] text-[#2E4A3B]" />
                  Licensed &amp; Insured
                </span>
                <span className="block text-muted-foreground text-base">{site.license}</span>
              </div>
              <div className="font-body text-[17px] text-foreground/85">
                <span className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-[18px] w-[18px] text-[#2E4A3B]" />
                  {site.legalName}
                </span>
                <span className="block text-muted-foreground text-base">
                  The team behind East Brunswick Handyman
                </span>
              </div>
            </div>
          </div>

          <div className="bento-card overflow-hidden">
            <img src={heroImage} alt="Osama, owner of Princeton Handyman, on a job site"
              className="w-full h-48 md:h-56 object-cover object-[65%_30%]" />
            <p className="font-body text-[15px] text-muted-foreground px-6 md:px-8 pt-3 m-0">
              That's Osama, the owner. He answers the phone.
            </p>
            <div className="p-6 md:p-8 pt-4">
            {state === "done" ? (
              <div className="text-center py-8">
                <CheckCircle2 className="h-10 w-10 text-[#2E4A3B] mx-auto mb-3" />
                <p className="brutalist-headline text-2xl text-foreground mb-2">Got it, {name.split(" ")[0] || "thanks"}.</p>
                <p className="font-body text-lg text-muted-foreground">
                  We reply the same day during business hours. Faster answer:{" "}
                  <a href={site.phoneHref} className="text-primary underline">call now</a>.
                </p>
              </div>
            ) : (
              <form onSubmit={submit}>
                <p className="brutalist-headline text-2xl text-foreground mb-1">Get a free estimate</p>
                <p className="font-body text-base text-muted-foreground mb-5">
                  Fast, easy, no obligation. The price is agreed before any work begins.
                </p>
                <div className="grid gap-3.5">
                  <input value={name} onChange={(e) => setName(e.target.value)} required placeholder="Your name"
                    className="min-h-[54px] rounded-[12px] border-2 border-[#E0D5C2] bg-background px-4 font-body text-lg" />
                  <input value={phone} onChange={(e) => setPhone(e.target.value)} required type="tel" placeholder="Phone number"
                    className="min-h-[54px] rounded-[12px] border-2 border-[#E0D5C2] bg-background px-4 font-body text-lg" />
                  <textarea value={details} onChange={(e) => setDetails(e.target.value)} required rows={3}
                    placeholder="What needs doing? A sentence is plenty."
                    className="rounded-[12px] border-2 border-[#E0D5C2] bg-background p-4 font-body text-lg" />
                  <button type="submit" disabled={state === "sending"} className="brutalist-cta w-full disabled:opacity-50">
                    {state === "sending" ? "Sending…" : "Get my free estimate"} <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
                {state === "error" && (
                  <p className="font-body text-base text-primary mt-3">
                    Could not send. Call or text {site.phoneDisplay} instead.
                  </p>
                )}
                <p className="font-body text-sm text-muted-foreground mt-3 m-0">
                  By submitting, you agree we may text you about your request
                  (msg &amp; data rates may apply, reply STOP to opt out). Your
                  information is never shared.
                </p>
              </form>
            )}
            </div>
          </div>
        </div>
      </section>

      {/* Risk-reversal strip */}
      <section className="bg-foreground text-background py-3.5">
        <div className="w-full max-w-6xl mx-auto px-5 md:px-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-1.5 font-body text-[15.5px] text-background/90">
          <span className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4" />Price agreed before any work begins</span>
          <span className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4" />One-year labor warranty</span>
          <span className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4" />Licensed &amp; insured, {site.license}</span>
        </div>
      </section>
    </>
  );
};

export default Hero;
