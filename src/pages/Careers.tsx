import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Send, Phone, Wrench, MapPin, Clock } from "lucide-react";

const HELPER_SCALE = [
  { rate: "$20", level: "Helper / No Experience", detail: "Turn up ready to work: haul material, swing a demo hammer, leave the site clean." },
  { rate: "$25", level: "General Labor", detail: "At home on tools. Takes a task in the morning and hands it back done." },
  { rate: "$30", level: "Carpenter", detail: "Framing, trim, door hanging. Cuts land accurate without supervision." },
];

const TRACKS = [
  "I run my own handyman or trade business",
  "Skilled on tools, looking for hourly work",
  "Helper — ready to work and learn",
];

const TOOL_BRANDS = ["Milwaukee", "DeWalt", "Makita", "Ryobi", "Other"];

const TRADES = [
  "Carpentry", "Drywall", "Tile", "Doors & Windows", "Flooring",
  "Bathroom Remodeling", "Painting", "Decks & Fencing", "General Handyman",
];

const Careers = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", town: "", yearsExperience: "",
    payLevel: "", ownsTools: "", toolBrand: "", toolBrandOther: "",
    hasVehicle: "", hasLicense: "", hasHIC: "", hasInsurance: "",
    trades: [] as string[],
    availability: "", portfolio: "", about: "",
  });

  const isBusinessTrack = formData.payLevel === TRACKS[0];

  const handleChange = (name: string, value: string) =>
    setFormData((prev) => ({ ...prev, [name]: value }));

  const toggleTrade = (trade: string) =>
    setFormData((prev) => ({
      ...prev,
      trades: prev.trades.includes(trade)
        ? prev.trades.filter((t) => t !== trade)
        : [...prev.trades, trade],
    }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const brand = formData.toolBrand === "Other"
      ? `Other: ${formData.toolBrandOther || "not specified"}`
      : formData.toolBrand;

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "application",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          address: formData.town,
          serviceType: formData.trades.join(", ") || "Not specified",
          description: formData.about,
          application: {
            yearsExperience: formData.yearsExperience,
            payLevel: formData.payLevel,
            ownsTools: formData.ownsTools,
            toolBrand: brand,
            hasVehicle: formData.hasVehicle,
            hasLicense: formData.hasLicense,
            hasHIC: formData.hasHIC,
            hasInsurance: formData.hasInsurance,
            availability: formData.availability,
            portfolio: formData.portfolio,
          },
          submittedAt: new Date().toISOString(),
        }),
      });

      if (!response.ok) throw new Error("Failed to submit");

      toast({
        title: "Application Received",
        description: "Thanks. If it looks like a fit, you'll hear from Osama directly.",
      });
      setFormData({
        name: "", email: "", phone: "", town: "", yearsExperience: "",
        payLevel: "", ownsTools: "", toolBrand: "", toolBrandOther: "",
        hasVehicle: "", hasLicense: "", hasHIC: "", hasInsurance: "",
        trades: [],
        availability: "", portfolio: "", about: "",
      });
    } catch {
      toast({
        title: "Submission Error",
        description: "Something went wrong. Call or text (609) 375-0098 instead.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const labelClass = "font-headline font-bold uppercase tracking-wider text-xs";
  const inputClass = "rounded-none border-2 border-foreground";

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Now Hiring Carpenters & Handymen | Princeton Handyman"
        description="Hiring skilled craftsmen and helpers around Princeton and Mercer County NJ. Booked flat-rate jobs for established handymen, hourly work for helpers. Bring your own tools. Apply online."
        canonical="/careers"
      />
      <Header />

      <main>
        {/* Hero */}
        <section className="bg-foreground text-background heavy-border-b py-20 md:py-28">
          <div className="w-full max-w-6xl mx-auto px-6 md:px-10">
            <div className="brutalist-section-eyebrow text-background/70">Now Hiring</div>
            <h1 className="brutalist-headline text-4xl md:text-7xl text-background mb-6 leading-[0.95]">
              Good Work
              <br />
              <span className="text-background/70">Pays Well.</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-background/85 max-w-2xl border-l-4 border-background pl-5">
              A licensed shop working Princeton and Mercer County with a calendar fuller than
              our crew. If you run your own trade or handyman operation, we hand you jobs already
              photographed, scoped, and booked, with a dollar figure attached before you accept.
              Still building your skills? Helpers join the crew on the bigger jobs.
            </p>
          </div>
        </section>

        {/* The deal */}
        <section className="py-16 bg-background heavy-border-b">
          <div className="w-full max-w-6xl mx-auto px-6 md:px-10">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bento-card p-6">
                <Clock className="h-6 w-6 mb-3" />
                <div className="brutalist-section-eyebrow mb-2">The Work</div>
                <p className="font-body text-base text-muted-foreground">
                  Flat-rate visits, each sized from customer photos before your boots hit
                  the driveway. Scope and materials are settled in advance. You work the
                  calendar; the weekend stays yours.
                </p>
              </div>
              <div className="bento-card p-6">
                <Wrench className="h-6 w-6 mb-3" />
                <div className="brutalist-section-eyebrow mb-2">Bring Your Tools</div>
                <p className="font-body text-base text-muted-foreground">
                  Your truck, your hand and power tools. Materials and any specialty
                  gear a job calls for come from us.
                </p>
              </div>
              <div className="bento-card p-6">
                <MapPin className="h-6 w-6 mb-3" />
                <div className="brutalist-section-eyebrow mb-2">Where</div>
                <p className="font-body text-base text-muted-foreground">
                  Princeton and Mercer County. West Windsor, Robbinsville,
                  Lawrence Township, Plainsboro, Hightstown.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pay scale */}
        <section className="py-20 bg-muted heavy-border-b">
          <div className="w-full max-w-6xl mx-auto px-6 md:px-10">
            <div className="mb-10 pb-4 heavy-border-b">
              <div className="brutalist-section-eyebrow">No Guessing</div>
              <h2 className="brutalist-headline text-3xl md:text-5xl text-foreground">
                How Pay Works
              </h2>
              <p className="font-body text-lg text-muted-foreground mt-4 max-w-2xl">
                Two doors in, depending on where you stand today. Both pay out every
                Friday without fail.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              <div className="bento-card bg-background p-6 md:p-8">
                <div className="brutalist-section-eyebrow mb-3">Run Your Own Shop</div>
                <h3 className="font-headline font-bold uppercase tracking-wide text-xl md:text-2xl text-foreground mb-4">
                  Fixed Pay Per Job
                </h3>
                <p className="font-body text-base text-muted-foreground">
                  You are registered, insured, and equipped. What we add is the part
                  you hate: booked customers, jobs scoped from photos, and a fixed number
                  shown before you commit. Deliver clean work and Friday pays you. Nobody
                  charges you for leads, nobody makes you invoice, nobody lines you up
                  against four other bids.
                </p>
                <p className="font-body text-base text-muted-foreground mt-4">
                  Real jobs carry real numbers, so the examples come out when we talk.
                  Open with photos of your work.
                </p>
              </div>

              <div className="bento-card bg-background p-6 md:p-8">
                <div className="brutalist-section-eyebrow mb-3">Not There Yet?</div>
                <h3 className="font-headline font-bold uppercase tracking-wide text-xl md:text-2xl text-foreground mb-4">
                  Hourly, On the Crew
                </h3>
                <p className="font-body text-base text-muted-foreground mb-5">
                  The crew takes helpers when the job is big enough. Pay follows what
                  your hands can do, not your resume. Prove it on job one and climb.
                </p>
                <div className="space-y-0 border-2 border-foreground">
                  {HELPER_SCALE.map((tier, i) => (
                    <div
                      key={tier.rate}
                      className={`flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-5 p-4 ${
                        i !== HELPER_SCALE.length - 1 ? "border-b-2 border-foreground" : ""
                      }`}
                    >
                      <div className="font-headline font-bold text-2xl md:text-3xl text-foreground sm:w-20 flex-shrink-0">
                        {tier.rate}
                      </div>
                      <div className="flex-1">
                        <div className="font-headline font-bold uppercase tracking-wide text-sm md:text-base text-foreground">
                          {tier.level}
                        </div>
                        <div className="font-body text-sm text-muted-foreground mt-0.5">
                          {tier.detail}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <p className="font-body text-sm text-muted-foreground mt-5 max-w-2xl">
              We check backgrounds, insurance, and workmanship before anyone represents this
              brand. Great reviews that name you earn a bonus. We'll go over pay details and
              paperwork before your first job.
            </p>
          </div>
        </section>

        {/* Application form */}
        <section className="py-20 bg-background heavy-border-b">
          <div className="w-full max-w-6xl mx-auto px-6 md:px-10">
            <div className="grid lg:grid-cols-3 gap-6">
              <aside className="lg:col-span-1 space-y-6">
                <div className="bento-card p-6">
                  <div className="brutalist-section-eyebrow mb-3">Rather Just Call?</div>
                  <a
                    href="tel:6093750098"
                    className="flex items-center gap-3 font-headline font-bold text-foreground hover:text-muted-foreground transition-colors"
                  >
                    <Phone className="h-5 w-5" />
                    (609) 375-0098
                  </a>
                  <p className="font-body text-sm text-muted-foreground mt-3">
                    Text is fine. Send a couple photos of your work and tell me what you do.
                  </p>
                </div>

                <div className="bento-card p-6">
                  <div className="brutalist-section-eyebrow mb-3">What Matters</div>
                  <ul className="space-y-2 font-body text-sm text-muted-foreground">
                    <li>You show up when you said you would.</li>
                    <li>You own your tools and know them.</li>
                    <li>You tell me when something is wrong.</li>
                    <li>You clean up before you leave.</li>
                  </ul>
                </div>
              </aside>

              <div className="lg:col-span-2 bento-card bg-background p-6 md:p-10">
                <div className="mb-8 pb-4 heavy-border-b">
                  <div className="brutalist-section-eyebrow">Application</div>
                  <h2 className="brutalist-headline text-2xl md:text-3xl text-foreground">
                    Tell Me About You
                  </h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Basics */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className={labelClass}>Full Name *</Label>
                      <Input id="name" value={formData.name} required className={inputClass}
                        onChange={(e) => handleChange("name", e.target.value)} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className={labelClass}>Phone *</Label>
                      <Input id="phone" type="tel" value={formData.phone} required className={inputClass}
                        onChange={(e) => handleChange("phone", e.target.value)} />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email" className={labelClass}>Email *</Label>
                      <Input id="email" type="email" value={formData.email} required className={inputClass}
                        onChange={(e) => handleChange("email", e.target.value)} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="town" className={labelClass}>What Town Are You In? *</Label>
                      <Input id="town" placeholder="Town, NJ" value={formData.town} required className={inputClass}
                        onChange={(e) => handleChange("town", e.target.value)} />
                    </div>
                  </div>

                  {/* Experience */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className={labelClass}>Years in the Trades *</Label>
                      <Select value={formData.yearsExperience} onValueChange={(v) => handleChange("yearsExperience", v)} required>
                        <SelectTrigger className={inputClass}>
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent className="rounded-none border-2 border-foreground">
                          <SelectItem value="none">None, but I work hard</SelectItem>
                          <SelectItem value="under-1">Less than 1 year</SelectItem>
                          <SelectItem value="1-3">1 to 3 years</SelectItem>
                          <SelectItem value="3-5">3 to 5 years</SelectItem>
                          <SelectItem value="5-10">5 to 10 years</SelectItem>
                          <SelectItem value="10-plus">10+ years</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label className={labelClass}>Which Describes You? *</Label>
                      <Select value={formData.payLevel} onValueChange={(v) => handleChange("payLevel", v)} required>
                        <SelectTrigger className={inputClass}>
                          <SelectValue placeholder="Be honest" />
                        </SelectTrigger>
                        <SelectContent className="rounded-none border-2 border-foreground">
                          {TRACKS.map((t) => (
                            <SelectItem key={t} value={t}>
                              {t}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Business credentials — own-shop track only */}
                  {isBusinessTrack && (
                    <div className="grid md:grid-cols-2 gap-4 p-4 border-2 border-foreground bg-muted">
                      <div className="space-y-3">
                        <Label className={labelClass}>NJ Home Improvement Contractor Registration? *</Label>
                        <RadioGroup
                          value={formData.hasHIC}
                          onValueChange={(v) => handleChange("hasHIC", v)}
                          className="flex flex-wrap gap-4"
                          required
                        >
                          {[
                            { v: "yes", l: "Yes, active" },
                            { v: "applying", l: "Applying now" },
                            { v: "no", l: "Not yet" },
                          ].map((opt) => (
                            <label key={opt.v} className="flex items-center gap-2 cursor-pointer">
                              <RadioGroupItem value={opt.v} className="border-2 border-foreground h-5 w-5" />
                              <span className="font-body text-base text-foreground">{opt.l}</span>
                            </label>
                          ))}
                        </RadioGroup>
                      </div>
                      <div className="space-y-3">
                        <Label className={labelClass}>Liability Insurance? *</Label>
                        <RadioGroup
                          value={formData.hasInsurance}
                          onValueChange={(v) => handleChange("hasInsurance", v)}
                          className="flex flex-wrap gap-4"
                          required
                        >
                          {[
                            { v: "yes", l: "Yes, current" },
                            { v: "no", l: "Not yet" },
                          ].map((opt) => (
                            <label key={opt.v} className="flex items-center gap-2 cursor-pointer">
                              <RadioGroupItem value={opt.v} className="border-2 border-foreground h-5 w-5" />
                              <span className="font-body text-base text-foreground">{opt.l}</span>
                            </label>
                          ))}
                        </RadioGroup>
                      </div>
                      <p className="font-body text-xs text-muted-foreground md:col-span-2">
                        Not there yet on either? Apply anyway — plenty of good craftsmen start
                        on the hourly side while they get set up.
                      </p>
                    </div>
                  )}

                  {/* Trades */}
                  <div className="space-y-3">
                    <Label className={labelClass}>What Can You Do? (check all)</Label>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {TRADES.map((trade) => (
                        <label key={trade} className="flex items-center gap-3 cursor-pointer">
                          <Checkbox
                            checked={formData.trades.includes(trade)}
                            onCheckedChange={() => toggleTrade(trade)}
                            className="rounded-none border-2 border-foreground h-5 w-5"
                          />
                          <span className="font-body text-base text-foreground">{trade}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Tools */}
                  <div className="space-y-3 pt-2 border-t-2 border-foreground">
                    <Label className={`${labelClass} block pt-4`}>Do You Own Your Own Tools? *</Label>
                    <RadioGroup
                      value={formData.ownsTools}
                      onValueChange={(v) => handleChange("ownsTools", v)}
                      className="flex flex-col sm:flex-row gap-4"
                      required
                    >
                      {[
                        { v: "full", l: "Yes, full set" },
                        { v: "some", l: "Some, not everything" },
                        { v: "hand-only", l: "Hand tools only" },
                        { v: "none", l: "No tools yet" },
                      ].map((opt) => (
                        <label key={opt.v} className="flex items-center gap-2 cursor-pointer">
                          <RadioGroupItem value={opt.v} className="border-2 border-foreground h-5 w-5" />
                          <span className="font-body text-base text-foreground">{opt.l}</span>
                        </label>
                      ))}
                    </RadioGroup>
                  </div>

                  <div className="space-y-3">
                    <Label className={labelClass}>What Battery Line Do You Run?</Label>
                    <RadioGroup
                      value={formData.toolBrand}
                      onValueChange={(v) => handleChange("toolBrand", v)}
                      className="flex flex-wrap gap-4"
                    >
                      {TOOL_BRANDS.map((brand) => (
                        <label key={brand} className="flex items-center gap-2 cursor-pointer">
                          <RadioGroupItem value={brand} className="border-2 border-foreground h-5 w-5" />
                          <span className="font-body text-base text-foreground">{brand}</span>
                        </label>
                      ))}
                    </RadioGroup>
                    {formData.toolBrand === "Other" && (
                      <Input
                        placeholder="Which brand?"
                        value={formData.toolBrandOther}
                        onChange={(e) => handleChange("toolBrandOther", e.target.value)}
                        className={`${inputClass} mt-2 max-w-sm`}
                      />
                    )}
                  </div>

                  {/* Logistics */}
                  <div className="grid md:grid-cols-2 gap-4 pt-2 border-t-2 border-foreground">
                    <div className="space-y-3 pt-4">
                      <Label className={labelClass}>Own Vehicle to Haul Tools? *</Label>
                      <RadioGroup
                        value={formData.hasVehicle}
                        onValueChange={(v) => handleChange("hasVehicle", v)}
                        className="flex gap-4"
                        required
                      >
                        {[{ v: "truck-van", l: "Truck or van" }, { v: "car", l: "Car" }, { v: "no", l: "No" }].map((opt) => (
                          <label key={opt.v} className="flex items-center gap-2 cursor-pointer">
                            <RadioGroupItem value={opt.v} className="border-2 border-foreground h-5 w-5" />
                            <span className="font-body text-base text-foreground">{opt.l}</span>
                          </label>
                        ))}
                      </RadioGroup>
                    </div>
                    <div className="space-y-3 pt-4">
                      <Label className={labelClass}>Valid Driver's License? *</Label>
                      <RadioGroup
                        value={formData.hasLicense}
                        onValueChange={(v) => handleChange("hasLicense", v)}
                        className="flex gap-4"
                        required
                      >
                        {[{ v: "yes", l: "Yes" }, { v: "no", l: "No" }].map((opt) => (
                          <label key={opt.v} className="flex items-center gap-2 cursor-pointer">
                            <RadioGroupItem value={opt.v} className="border-2 border-foreground h-5 w-5" />
                            <span className="font-body text-base text-foreground">{opt.l}</span>
                          </label>
                        ))}
                      </RadioGroup>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className={labelClass}>How Much Work Are You Looking For?</Label>
                    <Select value={formData.availability} onValueChange={(v) => handleChange("availability", v)}>
                      <SelectTrigger className={inputClass}>
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent className="rounded-none border-2 border-foreground">
                        <SelectItem value="occasional">Occasional side work</SelectItem>
                        <SelectItem value="1-2-days">1 to 2 days a week</SelectItem>
                        <SelectItem value="3-4-days">3 to 4 days a week</SelectItem>
                        <SelectItem value="full">As much as you've got</SelectItem>
                        <SelectItem value="weekends">Weekends only</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="portfolio" className={labelClass}>Photos of Your Work</Label>
                    <Input
                      id="portfolio"
                      placeholder="Instagram, website, or Google Drive link"
                      value={formData.portfolio}
                      onChange={(e) => handleChange("portfolio", e.target.value)}
                      className={inputClass}
                    />
                    <p className="font-body text-xs text-muted-foreground">
                      Optional, but it helps. You can also text photos to (609) 375-0098.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="about" className={labelClass}>
                      Tell Me About a Job You're Proud Of *
                    </Label>
                    <Textarea
                      id="about"
                      placeholder="What was it, what did you do, how did it come out? A few sentences is plenty."
                      className={`min-h-[120px] ${inputClass}`}
                      value={formData.about}
                      required
                      onChange={(e) => handleChange("about", e.target.value)}
                    />
                  </div>

                  <button type="submit" className="brutalist-cta w-full" disabled={submitting}>
                    <Send className="h-4 w-4" />
                    {submitting ? "Sending..." : "Send Application"}
                  </button>

                  <p className="font-body text-xs text-muted-foreground text-center">
                    For hourly positions, Princeton Handyman is an equal opportunity
                    employer. We consider all applicants without regard to race, color,
                    religion, sex, national origin, age, disability, or any other protected
                    status.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Careers;
