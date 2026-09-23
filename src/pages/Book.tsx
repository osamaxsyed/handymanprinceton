// Booking flow per docs/OPERATING_BRIEF.md: intake first, and a booking is a REQUEST
// (never an instant confirmation).
//
// 2026-09-17: the slot picker is gone. Scheduling lives in Housecall Pro now, so the
// ebh-booking slot feed and "EBH Jobs" calendar this page used to read (retired 2026-09-22) is no longer the schedule; offering
// its windows would let a customer "book" a time nobody is holding. The request goes
// through the same /api/send-email path as the estimate form; we reply by text with a
// time. Photos are asked for by that reply (the auto-text), not uploaded here.
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Phone, MessageSquare, ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";

const SERVICES = [
  { key: "visit", name: "Handyman Visit", price: "$295", was: "$350", sub: "Two hours of skilled work. The usual whole list." },
  { key: "halfday", name: "Half Day", price: "$495", was: "$600", sub: "Four hours on site when the list runs long." },
  { key: "fullday", name: "Full Day", price: "$895", was: "$1,100", sub: "A whole working day against the whole backlog." },
  { key: "consult", name: "Bathroom Consult", price: "Free", was: "", sub: "In-home look at a tub-to-shower, walk-in, or remodel." },
];

const TOWNS = ["Princeton", "Princeton Junction", "West Windsor", "Robbinsville", "Lawrence Township", "Plainsboro", "South Brunswick", "Somewhere else nearby"];

const Book = () => {
  const [step, setStep] = useState(0);
  const [service, setService] = useState("");
  const [tasks, setTasks] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [town, setTown] = useState("");
  const [when, setWhen] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  const smsHref = `sms:6093750098?&body=${encodeURIComponent("Hi, I'd like to book a visit. Here's what I need done: ")}`;
  const pkg = SERVICES.find((s) => s.key === service);

  async function submit() {
    setSubmitting(true);
    setError("");
    try {
      const r = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "booking",
          name,
          email,
          phone,
          address: town,
          serviceType: pkg ? `${pkg.name} (${pkg.price})` : service,
          description: tasks,
          preferredDate: when,
          submittedAt: new Date().toISOString(),
          sourcePage: "/book",
        }),
      });
      if (!r.ok) {
        const d = await r.json().catch(() => ({}));
        setError(d.error || "Something went wrong. Call or text us instead.");
      } else {
        setDone(true);
      }
    } catch {
      setError("Could not send your request. Call or text us instead.");
    }
    setSubmitting(false);
  }

  const canNext =
    step === 0 ? !!service :
    step === 1 ? tasks.trim().length >= 10 :
    false;
  const canSubmit = name.trim().length > 0 && phone.replace(/\D/g, "").length >= 10;

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Book a Handyman Visit in Princeton NJ | Request a Time"
        description="Pick your flat-rate package, send your list, and tell us when works. We text you back with a time, usually the same day. Princeton and Mercer County NJ."
        canonical="/book"
      />
      <Header />

      <main className="py-10 md:py-14">
        <div className="w-full max-w-3xl mx-auto px-5 md:px-8">
          {done ? (
            <div className="bento-card p-8 md:p-10 text-center">
              <CheckCircle2 className="h-12 w-12 text-[#2E4A3B] mx-auto mb-4" />
              <h1 className="brutalist-headline text-3xl md:text-4xl text-foreground mb-3">Request received.</h1>
              <p className="font-body text-lg text-muted-foreground mb-2">
                We text you back with a time, usually the same business day. Your labor price is agreed before any work begins; any materials are quoted with it, at cost.
              </p>
              <p className="font-body text-base text-muted-foreground mb-2">
                If you have photos of the jobs, reply to that text with them — it helps us size the visit.
              </p>
              <p className="font-body text-base text-muted-foreground">
                Need it sooner? <a href={smsHref} className="text-primary underline">Text us</a>. We occasionally fit same-week jobs.
              </p>
            </div>
          ) : (
            <>
              <p className="brutalist-section-eyebrow mb-2">Book a Visit</p>
              <h1 className="brutalist-headline text-3xl md:text-5xl text-foreground mb-2">
                {step === 0 && "What do you need?"}
                {step === 1 && "What's on the list?"}
                {step === 2 && "Where and when?"}
              </h1>
              <p className="font-body text-lg text-muted-foreground mb-8">
                {step === 0 && "Flat packages. The labor price is the price, agreed before any work begins. Materials at cost, quoted with it."}
                {step === 1 && "Everything you want done. The whole list is the point."}
                {step === 2 && "Tell us what days work. A booking is a request; we text you a time, usually the same day."}
              </p>

              {step === 0 && (
                <div className="grid gap-3">
                  {SERVICES.map((s) => (
                    <button
                      key={s.key}
                      onClick={() => { setService(s.key); setStep(1); }}
                      className={`bento-card p-5 text-left flex items-center justify-between gap-4 ${service === s.key ? "border-primary" : ""}`}
                    >
                      <span>
                        <span className="brutalist-headline text-xl text-foreground block">{s.name}</span>
                        <span className="font-body text-base text-muted-foreground">{s.sub}</span>
                      </span>
                      <span className="flex flex-col items-end flex-none">
                        <span className="font-headline font-bold text-2xl text-primary whitespace-nowrap">{s.price}</span>
                      </span>
                    </button>
                  ))}
                </div>
              )}

              {step === 1 && (
                <textarea
                  rows={7}
                  value={tasks}
                  onChange={(e) => setTasks(e.target.value)}
                  placeholder="List everything: the sticking door, the drywall hole by the garage, the faucet that drips, the towel bar that fell..."
                  className="w-full rounded-[14px] border-2 border-[#E0D5C2] bg-card p-4 font-body text-lg"
                />
              )}

              {step === 2 && (
                <div className="grid gap-5">
                  <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" className="min-h-[56px] rounded-[12px] border-2 border-[#E0D5C2] bg-card px-4 font-body text-lg" />
                  <input value={phone} onChange={(e) => setPhone(e.target.value)} type="tel" inputMode="tel" autoComplete="tel" placeholder="Mobile number (we text you a time)" className="min-h-[56px] rounded-[12px] border-2 border-[#E0D5C2] bg-card px-4 font-body text-lg" />
                  <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email (optional, for your confirmation)" className="min-h-[56px] rounded-[12px] border-2 border-[#E0D5C2] bg-card px-4 font-body text-lg" />
                  <select value={town} onChange={(e) => setTown(e.target.value)} className="min-h-[56px] rounded-[12px] border-2 border-[#E0D5C2] bg-card px-4 font-body text-lg">
                    <option value="">Your town</option>
                    {TOWNS.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                  <input value={when} onChange={(e) => setWhen(e.target.value)} placeholder="Days or times that work (e.g. weekday mornings, any Saturday)" className="min-h-[56px] rounded-[12px] border-2 border-[#E0D5C2] bg-card px-4 font-body text-lg" />
                  <p className="font-body text-sm text-muted-foreground m-0">
                    We text this number to set a time and with a reminder the day before. Msg &amp; data rates may apply, reply STOP to opt out. We never share your information.
                  </p>
                  {error && <p className="font-body text-base text-primary m-0">{error}</p>}
                </div>
              )}

              <div className="flex items-center justify-between gap-4 mt-8">
                {step > 0 ? (
                  <button onClick={() => setStep(step - 1)} className="brutalist-cta-secondary !min-h-[52px]">
                    <ArrowLeft className="h-5 w-5" /> Back
                  </button>
                ) : <span />}
                {step > 0 && step < 2 && (
                  <button disabled={!canNext} onClick={() => setStep(step + 1)} className="brutalist-cta !min-h-[52px] disabled:opacity-40">
                    Next <ArrowRight className="h-5 w-5" />
                  </button>
                )}
                {step === 2 && (
                  <button disabled={!canSubmit || submitting} onClick={submit} className="brutalist-cta !min-h-[52px] disabled:opacity-40">
                    {submitting ? "Sending…" : "Request a visit"} <ArrowRight className="h-5 w-5" />
                  </button>
                )}
              </div>

              <div className="mt-10 bento-card p-5 flex flex-wrap items-center justify-between gap-3">
                <p className="font-body text-base text-foreground m-0">
                  Need it sooner? We occasionally fit same-week jobs.
                </p>
                <div className="flex gap-2.5">
                  <a href={smsHref} className="brutalist-cta-secondary !min-h-[48px] !px-4 !text-base"><MessageSquare className="h-4 w-4" /> Text us</a>
                  <a href="tel:6093750098" className="brutalist-cta !min-h-[48px] !px-4 !text-base"><Phone className="h-4 w-4" /> Call</a>
                </div>
              </div>
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Book;
