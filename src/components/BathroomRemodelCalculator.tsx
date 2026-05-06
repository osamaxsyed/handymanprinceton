import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { CheckCircle2, AlertCircle, Mail, Phone as PhoneIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type BathroomType = "powder-room" | "full-bath" | "master-bath" | null;
type RenovationScope = "cosmetic" | "standard" | "luxury" | null;
type MaterialTier = "standard" | "mid-range" | "luxury" | null;

interface AddOn {
  id: string;
  name: string;
  priceRange: { min: number; max: number };
}

const BathroomRemodelCalculator = () => {
  const [bathroomType, setBathroomType] = useState<BathroomType>(null);
  const [renovationScope, setRenovationScope] = useState<RenovationScope>(null);
  const [materialTier, setMaterialTier] = useState<MaterialTier>(null);
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [showLeadCapture, setShowLeadCapture] = useState(false);
  const { toast } = useToast();

  const bathroomTypes = [
    {
      id: "powder-room" as BathroomType,
      title: "Powder Room",
      subtitle: "Half Bath",
      priceRange: { min: 3000, max: 8000 },
      description: "Small guest bathroom, toilet and sink only",
    },
    {
      id: "full-bath" as BathroomType,
      title: "Full Bath",
      subtitle: "Tub/Shower",
      priceRange: { min: 8000, max: 18000 },
      description: "Complete bathroom with tub or shower",
    },
    {
      id: "master-bath" as BathroomType,
      title: "Master Bath",
      subtitle: "Luxury Suite",
      priceRange: { min: 15000, max: 35000 },
      description: "Premium master bathroom renovation",
      recommended: true,
    },
  ];

  const renovationScopes = [
    {
      id: "cosmetic" as RenovationScope,
      title: "Cosmetic Refresh",
      multiplier: 0.5,
      includes: ["Paint", "New fixtures & hardware", "Vanity refinishing", "Lighting updates"],
    },
    {
      id: "standard" as RenovationScope,
      title: "Standard Remodel",
      multiplier: 1.0,
      includes: ["Cosmetic refresh items", "New vanity installation", "Tile work (floor/shower)", "Toilet replacement", "Full plumbing updates"],
      recommended: true,
    },
    {
      id: "luxury" as RenovationScope,
      title: "Luxury Upgrade",
      multiplier: 1.5,
      includes: ["Standard remodel items", "Custom tile design", "High-end fixtures", "Designer lighting", "Premium finishes"],
    },
  ];

  const materialTiers = [
    {
      id: "standard" as MaterialTier,
      title: "Standard",
      subtitle: "Quality materials",
      multiplier: 1.0,
      description: "Home Depot/Lowe's selections",
    },
    {
      id: "mid-range" as MaterialTier,
      title: "Mid-Range",
      subtitle: "Upgraded finishes",
      multiplier: 1.3,
      description: "Specialty showroom materials",
      recommended: true,
    },
    {
      id: "luxury" as MaterialTier,
      title: "Luxury",
      subtitle: "Designer grade",
      multiplier: 1.6,
      description: "Custom/high-end selections",
    },
  ];

  const addOns: AddOn[] = [
    { id: "tile-shower", name: "Custom Tile Shower", priceRange: { min: 2500, max: 6000 } },
    { id: "tile-floor", name: "Tile Flooring Upgrade", priceRange: { min: 1200, max: 3000 } },
    { id: "double-vanity", name: "Double Vanity", priceRange: { min: 1500, max: 4000 } },
    { id: "heated-floor", name: "Heated Floor System", priceRange: { min: 1800, max: 3500 } },
    { id: "tub-to-shower", name: "Tub-to-Shower Conversion", priceRange: { min: 3000, max: 7000 } },
    { id: "lighting-package", name: "Premium Lighting Package", priceRange: { min: 800, max: 2500 } },
  ];

  const calculateEstimate = () => {
    if (!bathroomType || !renovationScope || !materialTier) return null;

    const baseType = bathroomTypes.find((t) => t.id === bathroomType)!;
    const scope = renovationScopes.find((s) => s.id === renovationScope)!;
    const material = materialTiers.find((m) => m.id === materialTier)!;

    let minPrice = baseType.priceRange.min * scope.multiplier * material.multiplier;
    let maxPrice = baseType.priceRange.max * scope.multiplier * material.multiplier;

    selectedAddOns.forEach((addonId) => {
      const addon = addOns.find((a) => a.id === addonId)!;
      minPrice += addon.priceRange.min;
      maxPrice += addon.priceRange.max;
    });

    return {
      min: Math.round(minPrice),
      max: Math.round(maxPrice),
    };
  };

  const toggleAddOn = (addonId: string) => {
    setSelectedAddOns((prev) =>
      prev.includes(addonId) ? prev.filter((id) => id !== addonId) : [...prev, addonId]
    );
  };

  const handleGetQuote = () => {
    setShowLeadCapture(true);
  };

  const handleSubmitLead = async (e: React.FormEvent) => {
    e.preventDefault();

    const estimate = calculateEstimate();
    if (!estimate) return;

    try {
      // Send to serverless function
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formType: 'bathroom-calculator',
          name: 'Bathroom Remodel Quote Request',
          email: email,
          phone: phone,
          serviceType: 'Bathroom Remodel',
          description: `Bathroom Calculator Quote Request:
- Bathroom Type: ${bathroomTypes.find(t => t.id === bathroomType)?.title}
- Renovation Scope: ${renovationScopes.find(s => s.id === renovationScope)?.title}
- Material Tier: ${materialTiers.find(m => m.id === materialTier)?.title}
- Add-ons: ${selectedAddOns.length > 0 ? selectedAddOns.map(id => addOns.find(a => a.id === id)?.name).join(', ') : 'None'}
- Estimated Range: $${estimate.min.toLocaleString()} - $${estimate.max.toLocaleString()}`,
          submittedAt: new Date().toISOString()
        }),
      });

      if (response.ok) {
        toast({
          title: "Quote Request Sent!",
          description: "We'll contact you within 24 hours to discuss your project.",
        });

        // Reset form
        setShowLeadCapture(false);
        setEmail("");
        setPhone("");
      } else {
        throw new Error('Failed to submit');
      }
    } catch (error) {
      toast({
        title: "Submission Error",
        description: "There was a problem submitting your request. Please try calling us at (609) 516-0098.",
        variant: "destructive"
      });
    }
  };

  const estimate = calculateEstimate();
  const canShowEstimate = bathroomType !== null && renovationScope !== null && materialTier !== null;

  return (
    <div className="w-full max-w-6xl mx-auto space-y-8">
      {/* Step 1: Bathroom Type */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <span className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
              1
            </span>
            <CardTitle>Select Bathroom Type</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            {bathroomTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setBathroomType(type.id)}
                className={`relative p-6 rounded-lg border-2 text-left transition-all ${
                  bathroomType === type.id
                    ? "border-primary bg-primary/5"
                    : "border-muted hover:border-primary/50"
                }`}
              >
                {type.recommended && (
                  <div className="absolute -top-3 left-4">
                    <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                <div className="flex items-start gap-3">
                  <div
                    className={`mt-1 ${
                      bathroomType === type.id ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-1">{type.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{type.subtitle}</p>
                    <p className="text-sm text-muted-foreground mb-3">{type.description}</p>
                    <p className="text-xl font-bold text-primary">
                      ${type.priceRange.min.toLocaleString()} - ${type.priceRange.max.toLocaleString()}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Step 2: Renovation Scope */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <span className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
              2
            </span>
            <CardTitle>Choose Renovation Scope</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            {renovationScopes.map((scope) => (
              <button
                key={scope.id}
                onClick={() => setRenovationScope(scope.id)}
                className={`relative p-6 rounded-lg border-2 text-left transition-all ${
                  renovationScope === scope.id
                    ? "border-primary bg-primary/5"
                    : "border-muted hover:border-primary/50"
                }`}
              >
                {scope.recommended && (
                  <div className="absolute -top-3 left-4">
                    <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      RECOMMENDED
                    </span>
                  </div>
                )}
                <h3 className="font-bold text-lg mb-3">{scope.title}</h3>
                <ul className="text-xs space-y-1 text-muted-foreground">
                  {scope.includes.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-1">
                      <span className="text-primary mt-0.5">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Step 3: Material Tier */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <span className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
              3
            </span>
            <CardTitle>Select Material Quality</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            {materialTiers.map((tier) => (
              <button
                key={tier.id}
                onClick={() => setMaterialTier(tier.id)}
                className={`relative p-4 rounded-lg border-2 text-left transition-all ${
                  materialTier === tier.id
                    ? "border-primary bg-primary/5"
                    : "border-muted hover:border-primary/50"
                }`}
              >
                {tier.recommended && (
                  <div className="absolute -top-3 left-4">
                    <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      BEST VALUE
                    </span>
                  </div>
                )}
                <h3 className="font-bold text-lg mb-1">{tier.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">{tier.subtitle}</p>
                <p className="text-xs text-muted-foreground">{tier.description}</p>
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Step 4: Add-Ons */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <span className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
              4
            </span>
            <CardTitle>Add Premium Features (Optional)</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-3">
            {addOns.map((addon) => (
              <div
                key={addon.id}
                className="flex items-start space-x-3 p-4 border rounded-lg hover:border-primary/50 transition-colors"
              >
                <Checkbox
                  id={addon.id}
                  checked={selectedAddOns.includes(addon.id)}
                  onCheckedChange={() => toggleAddOn(addon.id)}
                />
                <div className="flex-1">
                  <Label htmlFor={addon.id} className="font-semibold cursor-pointer">
                    {addon.name}
                  </Label>
                  <p className="text-sm text-primary font-medium mt-1">
                    +${addon.priceRange.min.toLocaleString()} - ${addon.priceRange.max.toLocaleString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Estimate Display */}
      {canShowEstimate && estimate && (
        <Card className="border-2 border-primary">
          <CardHeader>
            <CardTitle className="text-2xl">Your Estimated Project Cost</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">
                ${estimate.min.toLocaleString()} - ${estimate.max.toLocaleString()}
              </div>
              <p className="text-muted-foreground">Estimated total investment</p>
            </div>

            <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900 rounded-lg p-4">
              <div className="flex gap-2">
                <AlertCircle className="h-5 w-5 text-blue-600 dark:text-blue-500 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-blue-900 dark:text-blue-100">
                  <p className="font-semibold mb-1">This is a ballpark estimate</p>
                  <p>
                    Final pricing depends on your specific selections, site conditions, and project complexity.
                    Schedule a free consultation for an exact quote.
                  </p>
                </div>
              </div>
            </div>

            {!showLeadCapture ? (
              <Button size="lg" className="w-full text-lg" onClick={handleGetQuote}>
                Get Your Free Detailed Quote
              </Button>
            ) : (
              <form onSubmit={handleSubmitLead} className="space-y-4 bg-primary/5 p-6 rounded-lg">
                <h3 className="font-bold text-lg">Get Your Personalized Quote</h3>
                <p className="text-sm text-muted-foreground">
                  We'll send you a detailed breakdown and schedule your free consultation.
                </p>
                <div className="space-y-3">
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <div className="relative">
                      <PhoneIcon className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="(609) 555-1234"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    Request My Quote
                  </Button>
                </div>
              </form>
            )}
          </CardContent>
        </Card>
      )}

      {!canShowEstimate && (
        <Card className="border-dashed">
          <CardContent className="py-8 text-center text-muted-foreground">
            Complete steps 1, 2, and 3 to see your estimated price range
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default BathroomRemodelCalculator;
