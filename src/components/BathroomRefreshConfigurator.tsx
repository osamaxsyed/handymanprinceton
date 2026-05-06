import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { CheckCircle2, AlertCircle, MessageSquare } from "lucide-react";

type ServiceLevel = "facelift" | "designer" | "full-day" | null;
type VanitySize = "small" | "medium" | "large" | null;

const BathroomRefreshConfigurator = () => {
  const [serviceLevel, setServiceLevel] = useState<ServiceLevel>(null);
  const [vanitySize, setVanitySize] = useState<VanitySize>(null);
  const [lowesPickup, setLowesPickup] = useState(false);
  const [showEstimate, setShowEstimate] = useState(false);

  // Professional shop materials is always included
  const shopMaterials = true;

  // Pricing logic
  const serviceLevelPrices: Record<Exclude<ServiceLevel, null>, number> = {
    facelift: 350,
    designer: 550,
    "full-day": 850,
  };

  const vanitySizePrices: Record<Exclude<VanitySize, null>, number> = {
    small: 0,
    medium: 100,
    large: 250,
  };

  const calculateTotal = (): number => {
    let total = 0;

    if (serviceLevel) {
      total += serviceLevelPrices[serviceLevel];
    }

    if (vanitySize) {
      total += vanitySizePrices[vanitySize];
    }

    if (lowesPickup) {
      total += 75;
    }

    if (shopMaterials) {
      total += 45;
    }

    return total;
  };

  const totalEstimate = calculateTotal();
  const canGetEstimate = serviceLevel !== null && vanitySize !== null;

  const serviceLevels = [
    {
      id: "facelift" as ServiceLevel,
      title: "The Facelift",
      price: 350,
      description: "Hardware, Faucet, Caulk",
      includes: ["New faucet installation", "Hardware replacement (towel bars, toilet paper holder, robe hooks)", "Professional caulking"],
    },
    {
      id: "designer" as ServiceLevel,
      title: "The Designer",
      price: 550,
      description: "Level 1 + Light & Mirror",
      includes: [
        "Everything in The Facelift",
        "Light fixture installation",
        "Mirror mounting",
      ],
    },
    {
      id: "full-day" as ServiceLevel,
      title: "The Full Day",
      price: 850,
      description: "Level 2 + Toilet & Vanity Swap",
      includes: [
        "Everything in The Designer",
        "Complete toilet replacement",
        "Full vanity swap",
      ],
      recommended: true,
    },
  ];

  const vanitySizes = [
    {
      id: "small" as VanitySize,
      label: 'Small (24"-30")',
      price: 0,
    },
    {
      id: "medium" as VanitySize,
      label: 'Medium (36"-48")',
      price: 100,
    },
    {
      id: "large" as VanitySize,
      label: 'Large (60" Single)',
      price: 250,
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto space-y-8">
      {/* Step 1: Service Level */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <span className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
              1
            </span>
            <CardTitle>Choose Your Service Level</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            {serviceLevels.map((level) => (
              <button
                key={level.id}
                onClick={() => setServiceLevel(level.id)}
                className={`relative p-6 rounded-lg border-2 text-left transition-all ${
                  serviceLevel === level.id
                    ? "border-primary bg-primary/5"
                    : "border-muted hover:border-primary/50"
                }`}
              >
                {level.recommended && (
                  <div className="absolute -top-3 left-4">
                    <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      RECOMMENDED
                    </span>
                  </div>
                )}
                <div className="flex items-start gap-3">
                  <div
                    className={`mt-1 ${
                      serviceLevel === level.id ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-1">{level.title}</h3>
                    <p className="text-2xl font-bold text-primary mb-2">${level.price}</p>
                    <p className="text-sm text-muted-foreground mb-3">{level.description}</p>
                    <ul className="text-xs space-y-1 text-muted-foreground">
                      {level.includes.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-1">
                          <span className="text-primary mt-0.5">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Step 2: Vanity Size */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <span className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
              2
            </span>
            <CardTitle>Select Vanity Size</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid md:grid-cols-3 gap-4">
              {vanitySizes.map((size) => (
                <button
                  key={size.id}
                  onClick={() => setVanitySize(size.id)}
                  className={`p-4 rounded-lg border-2 text-left transition-all ${
                    vanitySize === size.id
                      ? "border-primary bg-primary/5"
                      : "border-muted hover:border-primary/50"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold mb-1">{size.label}</h3>
                      <p className="text-lg font-bold text-primary">
                        {size.price === 0 ? "Included" : `+$${size.price}`}
                      </p>
                    </div>
                    <CheckCircle2
                      className={`h-6 w-6 ${
                        vanitySize === size.id ? "text-primary" : "text-muted-foreground"
                      }`}
                    />
                  </div>
                </button>
              ))}
            </div>
            <div className="flex gap-2 p-3 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900 rounded-lg">
              <AlertCircle className="h-5 w-5 text-blue-600 dark:text-blue-500 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-blue-900 dark:text-blue-100">
                <span className="font-semibold">Single Sink Specialty:</span> We specialize in
                single sinks only. No double-sink configurations.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Step 3: Logistics & Materials */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <span className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
              3
            </span>
            <CardTitle>Add Logistics & Materials</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-start space-x-3 p-4 border rounded-lg">
                <Checkbox
                  id="lowes-pickup"
                  checked={lowesPickup}
                  onCheckedChange={(checked) => setLowesPickup(checked === true)}
                />
                <div className="flex-1">
                  <Label htmlFor="lowes-pickup" className="font-semibold cursor-pointer">
                    Lowe's Concierge Pickup (+$75)
                  </Label>
                  <p className="text-sm text-muted-foreground mt-1">
                    We pick up your items, inspect for damage, and transport them to your home.
                    Zero-hassle for you.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-4 border-2 border-primary bg-primary/5 rounded-lg">
                <Checkbox
                  id="shop-materials"
                  checked={true}
                  disabled={true}
                />
                <div className="flex-1">
                  <Label htmlFor="shop-materials" className="font-semibold">
                    Professional Shop Materials (Included - $45)
                  </Label>
                  <p className="text-sm text-muted-foreground mt-1">
                    High-grade sealants, valves, and connectors supplied by us. We use the{" "}
                    <span className="font-medium">right</span> materials to prevent leaks. This is mandatory for all jobs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Estimate Summary */}
      {canGetEstimate && (
        <Card className="border-2 border-primary">
          <CardHeader>
            <CardTitle className="text-2xl">Your Labor & Logistics Estimate</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-4xl font-bold text-primary">${totalEstimate.toLocaleString()}</div>

            <div className="space-y-2 text-sm">
              <h3 className="font-semibold text-base">Breakdown:</h3>
              <div className="space-y-1 text-muted-foreground">
                {serviceLevel && (
                  <div className="flex justify-between">
                    <span>
                      Service Level: {serviceLevels.find((s) => s.id === serviceLevel)?.title}
                    </span>
                    <span className="font-medium text-foreground">
                      ${serviceLevelPrices[serviceLevel].toLocaleString()}
                    </span>
                  </div>
                )}
                {vanitySize && vanitySizePrices[vanitySize] > 0 && (
                  <div className="flex justify-between">
                    <span>Vanity Size Upgrade</span>
                    <span className="font-medium text-foreground">
                      +${vanitySizePrices[vanitySize].toLocaleString()}
                    </span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Professional Shop Materials (Required)</span>
                  <span className="font-medium text-foreground">+$45</span>
                </div>
                {lowesPickup && (
                  <div className="flex justify-between">
                    <span>Lowe's Concierge Pickup</span>
                    <span className="font-medium text-foreground">+$75</span>
                  </div>
                )}
              </div>
            </div>

            <div className="pt-4 border-t space-y-4">
              <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900 rounded-lg p-4">
                <p className="text-sm text-amber-900 dark:text-amber-100">
                  <span className="font-semibold">Note:</span> Fixture costs (Vanity, Faucet, etc.)
                  are billed at actual Lowe's retail price + tax on your final invoice.
                </p>
              </div>

              <Button
                size="lg"
                className="w-full text-lg"
                onClick={() => setShowEstimate(true)}
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                Get Your Estimate
              </Button>

              {showEstimate && (
                <div className="bg-primary/10 border-2 border-primary rounded-lg p-6 space-y-3">
                  <h3 className="font-bold text-lg">Next Steps - Text to Finalize</h3>
                  <p className="text-sm">
                    To finalize your date and share your selections, text a screenshot of your
                    Lowe's cart to:
                  </p>
                  <div className="bg-background p-4 rounded border-2 border-primary">
                    <p className="text-2xl font-bold text-center text-primary">
                      (609) 516-0098
                    </p>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    We will manually add the fixture costs to your final invoice and confirm your
                    appointment.
                  </p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      )}

      {!canGetEstimate && (
        <Card className="border-dashed">
          <CardContent className="py-8 text-center text-muted-foreground">
            Complete steps 1 & 2 to see your estimate
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default BathroomRefreshConfigurator;
