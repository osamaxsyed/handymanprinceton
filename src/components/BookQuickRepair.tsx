import { useState } from "react";
import { repairServices, RepairService } from "@/data/repairServices";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Clock, DollarSign, Wrench } from "lucide-react";
import { toast } from "sonner";

const BookQuickRepair = () => {
  const [selectedService, setSelectedService] = useState<RepairService | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    notes: ""
  });

  const handleBookService = (service: RepairService) => {
    setSelectedService(service);
    setIsDialogOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Send to serverless function
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formType: 'booking',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
          description: `${formData.notes}\n\nService: ${selectedService?.name}\nPrice: ${selectedService?.price}\nDuration: ${selectedService?.duration}`,
          submittedAt: new Date().toISOString()
        }),
      });

      if (response.ok) {
        toast.success("Booking request received! We'll contact you to process the $50 reservation fee and confirm your appointment.");
        setIsDialogOpen(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          address: "",
          notes: ""
        });
      } else {
        throw new Error('Failed to submit');
      }
    } catch (error) {
      toast.error("Submission failed. Please try calling us directly at (609) 516-0098.");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      {/* Brutalist Hero */}
      <section className="bg-foreground text-background heavy-border-b py-20 md:py-28">
        <div className="w-full max-w-6xl mx-auto px-6 md:px-10">
          <div className="brutalist-section-eyebrow text-background/70">
            <Wrench className="inline h-3 w-3 mr-2" />
            Fixed-Price Repairs
          </div>
          <h1 className="brutalist-headline text-4xl md:text-7xl text-background mb-6 leading-[0.95]">
            Book a Quick
            <br />
            <span className="text-background/70">Repair.</span>
          </h1>
          <p className="font-body text-lg md:text-xl text-background/85 max-w-2xl mb-8 border-l-4 border-background pl-5">
            Pre-priced repairs you can book directly to our calendar. Reserve with a $50 deposit (applied to the total).
          </p>
          <span className="font-headline font-bold uppercase tracking-wider text-[10px] text-background border-2 border-background px-4 py-2 inline-block">
            $50 Reservation Fee Required
          </span>
        </div>
      </section>

      <section id="book-repair" className="py-20 bg-background heavy-border-b">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-10">
          <div className="mb-12 pb-6 heavy-border-b">
            <div className="brutalist-section-eyebrow">Service Catalog</div>
            <h2 className="brutalist-headline text-3xl md:text-5xl text-foreground">Pick a Service</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {repairServices.map((service, index) => (
              <div key={index} className="bento-card p-6 flex flex-col">
                <h3 className="brutalist-headline text-lg md:text-xl text-foreground mb-3 line-clamp-2">{service.name}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="font-headline font-bold uppercase tracking-wider text-[10px] text-foreground border-2 border-foreground px-2 py-1 inline-flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {service.duration}
                  </span>
                  <span className="font-headline font-bold uppercase tracking-wider text-[10px] text-background bg-foreground px-2 py-1 inline-flex items-center gap-1">
                    <DollarSign className="w-3 h-3" />
                    {service.price}
                  </span>
                </div>
                <p className="font-body text-sm text-muted-foreground leading-relaxed line-clamp-4 mb-6 flex-grow">
                  {service.description}
                </p>
                <button
                  onClick={() => handleBookService(service)}
                  className="brutalist-cta w-full"
                >
                  <Wrench className="w-4 h-4" />
                  Book This Service
                </button>
              </div>
            ))}
          </div>
        </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Book: {selectedService?.name}</DialogTitle>
            <DialogDescription>
              {selectedService?.description}
            </DialogDescription>
          </DialogHeader>

          <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mb-4">
            <p className="text-sm text-muted-foreground">
              Fill out the form below to reserve this service. A $50 reservation fee is required.
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="John Doe"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone *</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  placeholder="(555) 123-4567"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Service Address *</Label>
                <Input
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  placeholder="123 Main St, Princeton, NJ"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes">Additional Notes</Label>
                <Textarea
                  id="notes"
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  placeholder="Any additional details about your repair needs..."
                  rows={3}
                />
              </div>

              <div className="bg-white border border-border p-4 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold">Service:</span>
                  <span className="text-foreground">{selectedService?.name}</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold">Total Price:</span>
                  <span className="text-lg font-bold text-primary">{selectedService?.price}</span>
                </div>
                <div className="flex justify-between items-center border-t pt-2 mt-2">
                  <span className="font-semibold">Reservation Fee:</span>
                  <span className="text-lg font-bold">$50</span>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  The $50 reservation fee will be deducted from the total service cost. Balance due upon completion.
                </p>
              </div>
            </div>

            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                Cancel
              </Button>
              <Button type="submit">
                Submit Booking Request
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
      </section>
    </>
  );
};

export default BookQuickRepair;
