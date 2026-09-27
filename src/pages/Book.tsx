// Booking flow (EBH structure): intake first, and a booking is a REQUEST,
// never an instant confirmation.
//
// No slot picker. Scheduling lives in Housecall Pro; offering calendar windows
// here would let a customer "book" a time nobody is holding. The request goes
// through the same /api/send-email path as the estimate form (formType
// "booking"); we reply by text with a time. Photos are asked for by that reply.
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Phone, MessageSquare, ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";
import { CORE_TOWNS, EXTENDED_TOWNS, WARRANTY } from "@/data/coreServices";
import { site } from "@/data/site";

const SERVICES = [
  { key: "visit", name: "Handyman Visit", price: "$345", sub: "Up to two hours of general repairs. Most lists land here; specialty installs are quoted per job." },
  { key: "halfday", name: "Half Day", price: "$595", sub: "Up to four hours on site for the longer list." },
  { key: "fullday", name: "Full Day", price: "$1,095", sub: "A full working day. The whole backlog in one go." },
];

const TOWNS = [...CORE_TOWNS.map((t) => t.name), ...EXTENDED_TOWNS.map((t) => t.name), "Another nearby town"];

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

  const smsHref = `sms:${site.phoneRaw}?&body=${encodeURIComponent("Hi, I'd like to request a visit. Here's my list: ")}`;
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
        setError(d.error || "That didn't go through. Call or text us instead.");
      } else {
        setDone(true);
      }
    } catch {
      setError("We couldn't send your request. Call or text us instead.");
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
        title="Request a Handyman Visit in Princeton NJ | Flat-Rate, Reply by Text"
        description="Choose a flat-rate block, send your list, and tell us which days work. We text you a time, usually the same business day. Princeton, West Windsor, Plainsboro, Lawrence and Mercer County."
        canonical="/book"
      />
      <Header />

      <main className="py-10 md:py-14">
        <div className="w-full max-w-3xl mx-auto px-5 md:px-8">
          {done ? (
            <div className="bento-card p-8 md:p-10 text-center">
              <CheckCircle2 className="h-12 w-12 text-[#2E4A3B] mx-auto mb-4" />
              <h1 className="brutalist-headline text-3xl md:text-4xl text-foreground mb-3">Got your request.</h1>
              <p className="font-body text-lg text-muted-foreground mb-2">
                We text back with a time, normally the same business day. The labor price is fixed before any work begins; anything we supply is quoted with it, at cost.
              </p>
              <p className="font-body text-base text-muted-foreground mb-2">
                Have photos of the jobs? Reply to that text with them, it helps us size the visit. {WARRANTY}.
              </p>
              <p className="font-body text-base text-muted-foreground">
                In a hurry? <a href={smsHref} className="text-primary underline">Text us</a>. Same-week openings do come up.
              </p>
            </div>
          ) : (
            <>
              <p className="brutalist-section-eyebrow mb-2">Request a Visit</p>
              <h1 className="brutalist-headline text-3xl md:text-5xl text-foreground mb-2">
                {step === 0 && "Which block fits?"}
                {step === 1 && "What needs doing?"}
                {step === 2 && "Where, and when works?"}
              </h1>
              <p className="font-body text-lg text-muted-foreground mb-8">
                {step === 0 && "Flat blocks of time. The labor price is fixed before any work begins; materials are quoted with it, at cost."}
                {step === 1 && "Put down every item. The full list is what makes a flat block worth it."}
                {step === 2 && "Give us a few days or times that suit you. This is a request; we reply by text with a confirmed time, usually the same day."}
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
                  placeholder="One line per item: the bedroom door that catches, the hole behind the bathroom door, the kitchen faucet that drips, the shelf that needs to go up..."
                  className="w-full rounded-[14px] border-2 border-[#E0D5C2] bg-card p-4 font-body text-lg"
                />
              )}

              {step === 2 && (
                <div className="grid gap-5">
                  <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" className="min-h-[56px] rounded-[12px] border-2 border-[#E0D5C2] bg-card px-4 font-body text-lg" />
                  <input value={phone} onChange={(e) => setPhone(e.target.value)} type="tel" inputMode="tel" autoComplete="tel" placeholder="Mobile number (we confirm the time by text)" className="min-h-[56px] rounded-[12px] border-2 border-[#E0D5C2] bg-card px-4 font-body text-lg" />
                  <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email (optional, for a written copy)" className="min-h-[56px] rounded-[12px] border-2 border-[#E0D5C2] bg-card px-4 font-body text-lg" />
                  <select value={town} onChange={(e) => setTown(e.target.value)} className="min-h-[56px] rounded-[12px] border-2 border-[#E0D5C2] bg-card px-4 font-body text-lg">
                    <option value="">Your town</option>
                    {TOWNS.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                  <input value={when} onChange={(e) => setWhen(e.target.value)} placeholder="Days or times that suit you (weekday mornings, next Saturday...)" className="min-h-[56px] rounded-[12px] border-2 border-[#E0D5C2] bg-card px-4 font-body text-lg" />
                  <p className="font-body text-sm text-muted-foreground m-0">
                    We use this number to confirm a time and send a reminder the day before. Msg &amp; data rates may apply; reply STOP to opt out. Your details are never shared.
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
                    {submitting ? "Sending…" : "Send the request"} <ArrowRight className="h-5 w-5" />
                  </button>
                )}
              </div>

              <div className="mt-10 bento-card p-5 flex flex-wrap items-center justify-between gap-3">
                <p className="font-body text-base text-foreground m-0">
                  Need it this week? Openings do come up.
                </p>
                <div className="flex gap-2.5">
                  <a href={smsHref} className="brutalist-cta-secondary !min-h-[48px] !px-4 !text-base"><MessageSquare className="h-4 w-4" /> Text us</a>
                  <a href={site.phoneHref} className="brutalist-cta !min-h-[48px] !px-4 !text-base"><Phone className="h-4 w-4" /> Call</a>
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
