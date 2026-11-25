import { useState } from "react";
import { CheckCircle2, ArrowRight, MessageSquare } from "lucide-react";
import { site } from "@/data/site";

// The quick form, shared by the homepage hero and the service and town pages
// (SYS-16). It posts to /api/lead, which hands it to CNJ Dash so the Housecall
// Pro lead is tagged "Handyman Princeton". If Dash doesn't take it, the
// function falls back to the owner email.

// Layer 1 bot filter: the API drops submissions that arrive under 3s after the
// page loaded (and skips the check when ts is missing). Set once per bundle load.
const PAGE_LOADED_AT = Date.now();

const newClientRef = () =>
  typeof crypto !== "undefined" && typeof crypto.randomUUID === "function"
    ? crypto.randomUUID()
    : `${Date.now()}-${Math.random().toString(36).slice(2, 12)}`;

// sourcePage defaults to the path the visitor is on, so the lead records the
// page it was sent from.
const QuoteForm = ({ sourcePage }: { sourcePage?: string }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [details, setDetails] = useState("");
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");
  // One clientRef per form makes a double click or retry land as the same
  // lead. A form on another page is a new request and gets its own.
  const [clientRef] = useState(newClientRef);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setState("sending");
    try {
      const r = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "estimate",
          name, phone, description: details,
          serviceType: "Hero quick form",
          sourcePage: sourcePage ?? window.location.pathname,
          submittedAt: new Date().toISOString(),
          ts: PAGE_LOADED_AT,
          clientRef,
        }),
      });
      setState(r.ok ? "done" : "error");
    } catch {
      setState("error");
    }
  }

  if (state === "done") {
    return (
      <div className="text-center py-6">
        <CheckCircle2 className="h-10 w-10 text-[#2E4A3B] mx-auto mb-3" />
        <p className="brutalist-headline text-2xl text-foreground mb-2">
          Thanks, {name.trim().split(/\s+/)[0] || "got it"}. Check your texts.
        </p>
        <p className="font-body text-lg text-muted-foreground mb-5">
          A text from {site.phoneDisplay} just went out to you. Reply to it with 1–2 photos (a wide one
          and a close-up) and your address. Your written price follows, usually within one business day.
        </p>
        <a href={site.smsHref} className="brutalist-cta w-full">
          <MessageSquare className="h-5 w-5" />
          Text photos now
        </a>
        <p className="font-body text-base text-muted-foreground mt-4 m-0">
          No text within 2 minutes?{" "}
          <a href={site.smsHref} className="text-primary underline">Text</a> or{" "}
          <a href={site.phoneHref} className="text-primary underline whitespace-nowrap">call {site.phoneDisplay}</a>.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit}>
      <p className="brutalist-headline text-2xl text-foreground mb-1">Get a flat price</p>
      <p className="font-body text-base text-muted-foreground mb-5">
        Quick and no strings. The labor price is settled before anyone starts; materials are part of the quote.
      </p>
      <div className="grid gap-3.5">
        <input value={name} onChange={(e) => setName(e.target.value)} required placeholder="Your name"
          className="min-h-[54px] rounded-[12px] border-2 border-[#E0D5C2] bg-background px-4 font-body text-lg" />
        <input value={phone} onChange={(e) => setPhone(e.target.value)} required type="tel" inputMode="tel" autoComplete="tel" placeholder="Mobile number (we reply by text)"
          className="min-h-[54px] rounded-[12px] border-2 border-[#E0D5C2] bg-background px-4 font-body text-lg" />
        <textarea value={details} onChange={(e) => setDetails(e.target.value)} required rows={3}
          placeholder="What needs fixing? One line per item is fine."
          className="rounded-[12px] border-2 border-[#E0D5C2] bg-background p-4 font-body text-lg" />
        <button type="submit" disabled={state === "sending"} className="brutalist-cta w-full disabled:opacity-50">
          {state === "sending" ? "Sending…" : "Get my price"} <ArrowRight className="h-5 w-5" />
        </button>
      </div>
      <p className="font-body text-base text-foreground/85 mt-3 m-0">
        Expect a text in about a minute asking for photos. Free, no obligation.
      </p>
      {state === "error" && (
        <p className="font-body text-base text-primary mt-3">
          That didn't go through.{" "}
          <a href={site.phoneHref} className="underline whitespace-nowrap">Call {site.phoneDisplay}</a> or{" "}
          <a href={site.smsHref} className="underline">text us</a> instead.
        </p>
      )}
      <p className="font-body text-sm text-muted-foreground mt-3 m-0">
        Submitting means we may text you about this request (msg &amp; data
        rates may apply, reply STOP to opt out). We never share your details.
      </p>
    </form>
  );
};

// The form as its own section on service and town pages. id="quote" makes the
// page's own "Get a Quote" links (#quote) stop here rather than on the homepage.
export const QuoteSection = () => (
  <section id="quote" className="py-16 md:py-20 bg-background heavy-border-b scroll-mt-24">
    <div className="w-full max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-8 md:gap-12 items-start">
      <div>
        <div className="brutalist-section-eyebrow">Free Photo Quote</div>
        <h2 className="brutalist-headline text-3xl md:text-5xl text-foreground mb-4">Price It Without Leaving the Page.</h2>
        <p className="font-body text-lg text-muted-foreground mb-6 max-w-xl">
          Asking is free. Nothing gets scheduled until you have approved one written price.
        </p>
        <ol className="space-y-3 font-body text-base md:text-lg text-foreground list-none p-0 m-0 mb-6">
          {[
            "Send the form. Three fields, half a minute.",
            "A text from us arrives right away asking for 1–2 photos and your address.",
            "Your written price follows, usually within one business day.",
          ].map((step, i) => (
            <li key={step} className="flex items-start gap-3">
              <span className="flex-none inline-flex items-center justify-center h-7 w-7 rounded-full bg-foreground text-background font-body font-semibold text-sm mt-0.5">{i + 1}</span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
        <p className="font-body text-base text-muted-foreground m-0">
          Would rather text?{" "}
          <a href={site.smsHref} className="text-primary underline underline-offset-4 font-semibold">
            Send photos to {site.phoneDisplay}
          </a>
          .
        </p>
      </div>
      <div className="bento-card p-6 md:p-8">
        <QuoteForm />
      </div>
    </div>
  </section>
);

export default QuoteForm;
