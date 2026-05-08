import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { Calendar, Send, Phone, Mail } from "lucide-react";

const ContactForm = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", service: "", location: "", description: "", timeline: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "estimate",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          serviceType: formData.service,
          address: formData.location,
          description: formData.description,
          preferredDate: formData.timeline,
          submittedAt: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        toast({ title: "Estimate Request Sent", description: "We'll contact you within 24 hours." });
        setFormData({ name: "", email: "", phone: "", service: "", location: "", description: "", timeline: "" });
      } else {
        throw new Error("Failed to submit");
      }
    } catch {
      toast({
        title: "Submission Error",
        description: "There was a problem. Please try calling us directly.",
        variant: "destructive",
      });
    }
  };

  const handleChange = (name: string, value: string) =>
    setFormData((prev) => ({ ...prev, [name]: value }));

  return (
    <>
      {/* Hero */}
      <section className="bg-foreground text-background heavy-border-b py-20 md:py-28">
        <div className="w-full max-w-6xl mx-auto px-6 md:px-10">
          <div className="brutalist-section-eyebrow text-background/70">Free Estimate</div>
          <h1 className="brutalist-headline text-4xl md:text-7xl text-background mb-6 leading-[0.95]">
            Tell Us About
            <br />
            <span className="text-background/70">Your Project.</span>
          </h1>
          <p className="font-body text-lg md:text-xl text-background/85 max-w-2xl border-l-4 border-background pl-5">
            The more details you provide, the more accurate your estimate. We respond within 24 hours during business days.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 bg-background heavy-border-b">
        <div className="w-full max-w-6xl mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Sidebar */}
            <aside className="lg:col-span-1 lg:order-1 space-y-6">
              <div className="bento-card p-6">
                <div className="brutalist-section-eyebrow mb-3">Direct Contact</div>
                <a href="tel:6095160098" className="flex items-center gap-3 font-headline font-bold text-foreground hover:text-muted-foreground transition-colors mb-3">
                  <Phone className="h-5 w-5" />
                  (609) 516-0098
                </a>
                <a href="mailto:osama@handymanprinceton.com" className="flex items-center gap-3 font-body text-sm text-muted-foreground hover:text-foreground transition-colors break-all">
                  <Mail className="h-4 w-4 flex-shrink-0" />
                  osama@handymanprinceton.com
                </a>
              </div>

              <div className="bento-card p-6">
                <div className="brutalist-section-eyebrow mb-3">Service Areas</div>
                <ul className="space-y-1 font-body text-sm text-muted-foreground">
                  <li>Princeton, NJ</li>
                  <li>Plainsboro, NJ</li>
                  <li>West Windsor, NJ</li>
                  <li>Lawrence Township, NJ</li>
                  <li>Montgomery, NJ</li>
                  <li>...and 8+ more</li>
                </ul>
              </div>
            </aside>

            {/* Form */}
            <div className="lg:col-span-2 lg:order-2 bento-card bg-background p-6 md:p-10">
              <div className="mb-8 pb-4 heavy-border-b">
                <div className="brutalist-section-eyebrow">Project Details</div>
                <h2 className="brutalist-headline text-2xl md:text-3xl text-foreground">Send a Request</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="font-headline font-bold uppercase tracking-wider text-xs">Full Name *</Label>
                    <Input id="name" value={formData.name} onChange={(e) => handleChange("name", e.target.value)} required className="rounded-none border-2 border-foreground" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="font-headline font-bold uppercase tracking-wider text-xs">Phone *</Label>
                    <Input id="phone" type="tel" value={formData.phone} onChange={(e) => handleChange("phone", e.target.value)} required className="rounded-none border-2 border-foreground" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="font-headline font-bold uppercase tracking-wider text-xs">Email *</Label>
                  <Input id="email" type="email" value={formData.email} onChange={(e) => handleChange("email", e.target.value)} required className="rounded-none border-2 border-foreground" />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="font-headline font-bold uppercase tracking-wider text-xs">Service Type</Label>
                    <Select value={formData.service} onValueChange={(v) => handleChange("service", v)}>
                      <SelectTrigger className="rounded-none border-2 border-foreground">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent className="rounded-none border-2 border-foreground">
                        <SelectItem value="pergola">Pergola</SelectItem>
                        <SelectItem value="shed">Custom Shed</SelectItem>
                        <SelectItem value="studio">Backyard Studio</SelectItem>
                        <SelectItem value="kitchen">Kitchen Remodel</SelectItem>
                        <SelectItem value="bathroom">Bathroom Remodel</SelectItem>
                        <SelectItem value="repairs">General Repairs</SelectItem>
                        <SelectItem value="electrical">Electrical Work</SelectItem>
                        <SelectItem value="plumbing">Plumbing</SelectItem>
                        <SelectItem value="painting">Painting</SelectItem>
                        <SelectItem value="carpentry">Carpentry</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location" className="font-headline font-bold uppercase tracking-wider text-xs">Project Location</Label>
                    <Input id="location" placeholder="City, State" value={formData.location} onChange={(e) => handleChange("location", e.target.value)} className="rounded-none border-2 border-foreground" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="font-headline font-bold uppercase tracking-wider text-xs">Preferred Timeline</Label>
                  <Select value={formData.timeline} onValueChange={(v) => handleChange("timeline", v)}>
                    <SelectTrigger className="rounded-none border-2 border-foreground">
                      <SelectValue placeholder="When would you like to start?" />
                    </SelectTrigger>
                    <SelectContent className="rounded-none border-2 border-foreground">
                      <SelectItem value="asap">ASAP</SelectItem>
                      <SelectItem value="week">Within a week</SelectItem>
                      <SelectItem value="month">Within a month</SelectItem>
                      <SelectItem value="quarter">Next 3 months</SelectItem>
                      <SelectItem value="flexible">I'm flexible</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description" className="font-headline font-bold uppercase tracking-wider text-xs">Project Description *</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe your project in detail. Include specific requirements, materials, concerns."
                    className="min-h-[120px] rounded-none border-2 border-foreground"
                    value={formData.description}
                    onChange={(e) => handleChange("description", e.target.value)}
                    required
                  />
                </div>

                <button type="submit" className="brutalist-cta w-full">
                  <Send className="h-4 w-4" />
                  Send Estimate Request
                </button>

                <p className="font-body text-xs text-muted-foreground text-center">
                  We typically respond within 2–4 hours during business hours.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
