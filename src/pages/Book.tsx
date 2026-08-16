// Ported from EBH. Deliberately uses the SAME booking service and calendar
// (ebh-booking.vercel.app): one crew serves both brands, so one calendar must
// govern availability or the two sites would double-book the same day. The
// town field tells Osama which brand a request came through.
// Booking flow: intake first, slot second, and a
// booking is a REQUEST (never an instant confirmation). Photos are compressed
// client-side so jobs arrive pre-sized without blowing request limits.
import { useEffect, useMemo, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Phone, MessageSquare, ArrowRight, ArrowLeft, Camera, CheckCircle2, CalendarDays } from "lucide-react";

const API = "https://ebh-booking.vercel.app";

// "was" = Ace Handyman Services' published package rate for the same hours,
// checked August 2026 (see the homepage comparison). A labeled anchor.
const SERVICES = [
  { key: "visit", name: "Handyman Visit", price: "$295", was: "$350", sub: "Two hours of skilled work. The usual whole list." },
  { key: "halfday", name: "Half Day", price: "$495", was: "$600", sub: "Four hours on site when the list runs long." },
  { key: "fullday", name: "Full Day", price: "$895", was: "$1,100", sub: "A whole working day against the whole backlog." },
  { key: "consult", name: "Bathroom Consult", price: "Free", was: "", sub: "In-home look at a tub-to-shower, walk-in, or remodel." },
];

const TOWNS = ["Princeton", "Princeton Junction", "West Windsor", "Robbinsville", "Lawrence Township", "Plainsboro", "South Brunswick", "Somewhere else nearby"];

type Day = { date: string; windows: { key: string; label: string }[] };

async function compress(file: File): Promise<{ name: string; dataB64: string }> {
  const bitmap = await createImageBitmap(file);
  const scale = Math.min(1, 1280 / Math.max(bitmap.width, bitmap.height));
  const canvas = document.createElement("canvas");
  canvas.width = Math.round(bitmap.width * scale);
  canvas.height = Math.round(bitmap.height * scale);
  canvas.getContext("2d")!.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
  const dataUrl = canvas.toDataURL("image/jpeg", 0.7);
  return { name: file.name.replace(/\.[^.]+$/, ".jpg"), dataB64: dataUrl.split(",")[1] };
}

const fmtDate = (d: string) =>
  new Date(d + "T12:00:00").toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });

const Book = () => {
  const [step, setStep] = useState(0);
  const [service, setService] = useState("");
  const [tasks, setTasks] = useState("");
  const [photos, setPhotos] = useState<{ name: string; dataB64: string }[]>([]);
  const [busyPhotos, setBusyPhotos] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [town, setTown] = useState("");
  const [days, setDays] = useState<Day[] | null>(null);
  const [slot, setSlot] = useState<{ date: string; window: string } | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (step === 3 && service) {
      setDays(null);
      fetch(`${API}/api/slots?service=${service}`)
        .then((r) => r.json())
        .then((d) => setDays(d.days || []))
        .catch(() => setDays([]));
    }
  }, [step, service]);

  const nextAvailable = useMemo(() => (days && days[0] ? fmtDate(days[0].date) : null), [days]);
  const smsHref = `sms:6093750098?&body=${encodeURIComponent("Hi, I need a job done sooner than the online calendar shows. Here's what it is: ")}`;

  async function onFiles(list: FileList | null) {
    if (!list) return;
    setBusyPhotos(true);
    const next = [...photos];
    for (const f of Array.from(list).slice(0, 6 - next.length)) next.push(await compress(f));
    setPhotos(next.slice(0, 6));
    setBusyPhotos(false);
  }

  async function submit() {
    if (!slot) return;
    setSubmitting(true);
    setError("");
    try {
      const r = await fetch(`${API}/api/request`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ service, tasks, photos, name, phone, email, town, date: slot.date, window: slot.window }),
      });
      const d = await r.json();
      if (r.status === 409) {
        setError("That slot was just taken. Please pick another time.");
        setSlot(null);
        const rr = await fetch(`${API}/api/slots?service=${service}`).then((x) => x.json());
        setDays(rr.days || []);
      } else if (!r.ok) {
        setError(d.error || "Something went wrong. Call or text us instead.");
      } else {
        setDone(true);
      }
    } catch {
      setError("Could not reach the booking system. Call or text us instead.");
    }
    setSubmitting(false);
  }

  const canNext =
    step === 0 ? !!service :
    step === 1 ? tasks.trim().length >= 10 :
    step === 2 ? (service === "consult" || photos.length > 0) && name.trim() && phone.trim().length >= 10 :
    false;

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Book a Handyman Visit in Princeton NJ | Pick a Slot"
        description="Pick your flat-rate package, send your list and photos, and request a morning or afternoon slot. Confirmed within 24 hours. Princeton and Mercer County NJ."
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
                Your slot gets confirmed within 24 hours, and every price is settled before work starts.
              </p>
              <p className="font-body text-base text-muted-foreground">
                Need it sooner? <a href={smsHref} className="text-primary underline">Text us</a>; same-week gaps open up now and then.
              </p>
            </div>
          ) : (
            <>
              <p className="brutalist-section-eyebrow mb-2">Book a Visit</p>
              <h1 className="brutalist-headline text-3xl md:text-5xl text-foreground mb-2">
                {step === 0 && "Pick your package."}
                {step === 1 && "Tell us the list."}
                {step === 2 && "Photos, name, number."}
                {step === 3 && "Choose a slot."}
              </h1>
              <p className="font-body text-lg text-muted-foreground mb-8">
                {step === 0 && "Flat packages only. The figure you see is the figure you pay, settled up front."}
                {step === 1 && "Write down every item, large or small. Bundling is the whole value."}
                {step === 2 && "Photos size the job before the truck rolls, so the visit spends itself on work."}
                {step === 3 && "Morning or afternoon window. Your booking is a request until we confirm, within 24 hours."}
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
                        {s.was && (
                          <span className="font-body text-sm text-muted-foreground whitespace-nowrap">franchise rate <span className="line-through decoration-[1.5px]">{s.was}</span></span>
                        )}
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
                  placeholder={service === "consult"
                    ? "Describe the bathroom: what is there today, what you want instead, and anything already known to be wrong."
                    : "Everything goes on the list: the door that drags, the crack over the stairs, the drippy faucet, the bar that came off the wall..."}
                  className="w-full rounded-[14px] border-2 border-[#E0D5C2] bg-card p-4 font-body text-lg"
                />
              )}

              {step === 2 && (
                <div className="grid gap-5">
                  <label className="bento-card p-5 flex items-center gap-4 cursor-pointer">
                    <span className="inline-flex items-center justify-center w-12 h-12 rounded-[12px] bg-muted text-[#795B41] flex-none">
                      <Camera className="h-6 w-6" />
                    </span>
                    <span className="font-body text-lg text-foreground">
                      {busyPhotos ? "Processing photos..." : photos.length ? `${photos.length} photo${photos.length > 1 ? "s" : ""} added` : service === "consult" ? "Add photos (optional)" : "Add photos of the jobs (required)"}
                      <span className="block text-base text-muted-foreground">Up to 6. Phone photos are perfect.</span>
                    </span>
                    <input type="file" accept="image/*" multiple className="hidden" onChange={(e) => onFiles(e.target.files)} />
                  </label>
                  <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" className="min-h-[56px] rounded-[12px] border-2 border-[#E0D5C2] bg-card px-4 font-body text-lg" />
                  <input value={phone} onChange={(e) => setPhone(e.target.value)} type="tel" placeholder="Phone number" className="min-h-[56px] rounded-[12px] border-2 border-[#E0D5C2] bg-card px-4 font-body text-lg" />
                  <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email (for your confirmation)" className="min-h-[56px] rounded-[12px] border-2 border-[#E0D5C2] bg-card px-4 font-body text-lg" />
                  <select value={town} onChange={(e) => setTown(e.target.value)} className="min-h-[56px] rounded-[12px] border-2 border-[#E0D5C2] bg-card px-4 font-body text-lg">
                    <option value="">Your town</option>
                    {TOWNS.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
              )}

              {step === 3 && (
                <div>
                  {days === null && <p className="font-body text-lg text-muted-foreground">Loading available slots…</p>}
                  {days && days.length === 0 && (
                    <p className="font-body text-lg text-muted-foreground">
                      No online slots right now. <a href={smsHref} className="text-primary underline">Text us</a> and we will find a time together.
                    </p>
                  )}
                  {days && days.length > 0 && (
                    <>
                      <p className="font-body text-base text-muted-foreground mb-4 inline-flex items-center gap-2">
                        <CalendarDays className="h-5 w-5" /> Next available: <b className="text-foreground">{nextAvailable}</b>
                      </p>
                      <div className="grid gap-2.5 max-h-[420px] overflow-y-auto pr-1">
                        {days.map((d) =>
                          d.windows.map((w) => {
                            const sel = slot?.date === d.date && slot?.window === w.key;
                            return (
                              <button
                                key={d.date + w.key}
                                onClick={() => setSlot({ date: d.date, window: w.key })}
                                className={`bento-card px-5 py-4 text-left flex items-center justify-between ${sel ? "border-primary bg-[#FBF0EF]" : ""}`}
                              >
                                <span className="font-body text-lg text-foreground">{fmtDate(d.date)}</span>
                                <span className="font-body text-base text-muted-foreground">{w.label}</span>
                              </button>
                            );
                          })
                        )}
                      </div>
                    </>
                  )}
                  {error && <p className="font-body text-base text-primary mt-4">{error}</p>}
                </div>
              )}

              <div className="flex items-center justify-between gap-4 mt-8">
                {step > 0 ? (
                  <button onClick={() => setStep(step - 1)} className="brutalist-cta-secondary !min-h-[52px]">
                    <ArrowLeft className="h-5 w-5" /> Back
                  </button>
                ) : <span />}
                {step > 0 && step < 3 && (
                  <button disabled={!canNext} onClick={() => setStep(step + 1)} className="brutalist-cta !min-h-[52px] disabled:opacity-40">
                    Next <ArrowRight className="h-5 w-5" />
                  </button>
                )}
                {step === 3 && (
                  <button disabled={!slot || submitting} onClick={submit} className="brutalist-cta !min-h-[52px] disabled:opacity-40">
                    {submitting ? "Sending…" : "Request this slot"} <ArrowRight className="h-5 w-5" />
                  </button>
                )}
              </div>

              <div className="mt-10 bento-card p-5 flex flex-wrap items-center justify-between gap-3">
                <p className="font-body text-base text-foreground m-0">
                  In a hurry? Same-week gaps open up now and then.
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
