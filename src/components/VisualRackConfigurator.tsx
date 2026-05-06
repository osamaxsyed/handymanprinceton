import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { AlertCircle, CheckCircle2 } from "lucide-react";

interface Selection {
  height: number;
  width: number;
}

type BundleOption = "turn-key" | "rack-only";

const VisualRackConfigurator = () => {
  const [hoveredCell, setHoveredCell] = useState<Selection | null>(null);
  const [selectedCell, setSelectedCell] = useState<Selection | null>(null);
  const [heavyDutyBase, setHeavyDutyBase] = useState(false);
  const [bundleOption, setBundleOption] = useState<BundleOption>("turn-key");

  const ROWS = 6;
  const COLS = 5;

  // Pricing logic
  const calculatePrice = (height: number, width: number, includeBase: boolean): number => {
    const bins = height * width;

    // Hardcoded overrides
    const overrides: Record<string, number> = {
      "2-2": 210,
      "3-2": 270,
      "4-2": 340,
    };

    const key = `${height}-${width}`;
    let basePrice: number;

    if (overrides[key]) {
      basePrice = overrides[key];
    } else {
      basePrice = 130 + 32 * bins;
    }

    return basePrice + (includeBase ? 80 : 0);
  };

  // Dimensions calculation
  const calculateDimensions = (height: number, width: number, includeBase: boolean) => {
    const depth = 29;
    const calculatedWidth = width * 22.25 + 1.5;

    const heightLookup: Record<number, number> = {
      2: 35.5,
      3: 51,
      4: 66.5,
      5: 82,
      6: 97.5,
    };

    const baseHeight = heightLookup[height] || 0;
    const totalHeight = baseHeight + (includeBase ? 5 : 0);

    return {
      width: calculatedWidth,
      depth,
      height: totalHeight,
    };
  };

  const activeSelection = hoveredCell || selectedCell;
  const totalBins = activeSelection
    ? activeSelection.height * activeSelection.width
    : 0;

  // Bundle pricing calculation
  const binBundleCost = bundleOption === "turn-key" ? totalBins * 15 : 0;

  const basePrice = activeSelection
    ? calculatePrice(activeSelection.height, activeSelection.width, heavyDutyBase)
    : 0;

  const totalPrice = basePrice + binBundleCost;

  const dimensions = activeSelection
    ? calculateDimensions(activeSelection.height, activeSelection.width, heavyDutyBase)
    : null;

  // Helper to determine if a cell should be highlighted
  const isCellHighlighted = (row: number, col: number): boolean => {
    if (!activeSelection) return false;
    return row < activeSelection.height && col < activeSelection.width;
  };

  const handleCellClick = (row: number, col: number) => {
    setSelectedCell({ height: row + 1, width: col + 1 });
  };

  const handleCellHover = (row: number, col: number) => {
    setHoveredCell({ height: row + 1, width: col + 1 });
  };

  const handleMouseLeave = () => {
    setHoveredCell(null);
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8">
      {/* Interactive Grid */}
      <Card>
        <CardHeader>
          <CardTitle>Select Your Rack Size</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center gap-4">
            <div
              className="inline-grid gap-1 p-4 bg-muted/30 rounded-lg"
              style={{
                gridTemplateColumns: `repeat(${COLS}, minmax(0, 1fr))`,
              }}
              onMouseLeave={handleMouseLeave}
            >
              {Array.from({ length: ROWS }).map((_, rowIndex) =>
                Array.from({ length: COLS }).map((_, colIndex) => {
                  const isHighlighted = isCellHighlighted(rowIndex, colIndex);
                  return (
                    <div
                      key={`${rowIndex}-${colIndex}`}
                      className={`
                        w-12 h-12 md:w-16 md:h-16 border-2 rounded cursor-pointer
                        transition-all duration-150
                        ${
                          isHighlighted
                            ? "bg-primary border-primary shadow-md scale-105"
                            : "bg-background border-muted-foreground/30 hover:border-primary/50"
                        }
                      `}
                      onClick={() => handleCellClick(rowIndex, colIndex)}
                      onMouseEnter={() => handleCellHover(rowIndex, colIndex)}
                    />
                  );
                })
              )}
            </div>

            {activeSelection && dimensions && (
              <div className="text-center space-y-2">
                <p className="text-lg font-semibold">
                  Currently Selected: {activeSelection.height} High x {activeSelection.width} Wide
                </p>
                <p className="text-muted-foreground">
                  ({totalBins} Bins)
                </p>
                <div className="bg-primary/10 px-4 py-2 rounded-lg inline-block">
                  <p className="text-sm font-medium text-primary">
                    Approximate Footprint: {dimensions.width}" Wide x {dimensions.depth}" Deep x {dimensions.height}" High
                  </p>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Bundle Selection */}
      <Card>
        <CardHeader>
          <CardTitle>Choose Your Package</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {/* Turn-Key Bundle Option */}
            <button
              onClick={() => setBundleOption("turn-key")}
              className={`relative p-6 rounded-lg border-2 text-left transition-all ${
                bundleOption === "turn-key"
                  ? "border-primary bg-primary/5"
                  : "border-muted hover:border-primary/50"
              }`}
            >
              <div className="absolute -top-3 left-4">
                <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  MOST POPULAR
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className={`mt-1 ${bundleOption === "turn-key" ? "text-primary" : "text-muted-foreground"}`}>
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-2">The Turn-Key Bundle</h3>
                  <p className="text-sm text-muted-foreground">
                    We handle the shopping. Includes brand-new Greenmade 27-Gallon Totes sourced from Costco, delivered with your rack.
                  </p>
                  {activeSelection && bundleOption === "turn-key" && (
                    <div className="mt-3 pt-3 border-t">
                      <p className="text-sm font-semibold text-primary">
                        Total Bins Included: {totalBins} Greenmade Totes
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        +${binBundleCost.toLocaleString()} for bins
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </button>

            {/* Rack Only Option */}
            <button
              onClick={() => setBundleOption("rack-only")}
              className={`relative p-6 rounded-lg border-2 text-left transition-all ${
                bundleOption === "rack-only"
                  ? "border-primary bg-primary/5"
                  : "border-muted hover:border-primary/50"
              }`}
            >
              <div className="flex items-start gap-3">
                <div className={`mt-1 ${bundleOption === "rack-only" ? "text-primary" : "text-muted-foreground"}`}>
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-2">Rack Only</h3>
                  <p className="text-sm text-muted-foreground">
                    You provide the totes. We build the storage.
                  </p>
                </div>
              </div>
            </button>
          </div>

          {/* Compatibility Warning for Rack Only */}
          {bundleOption === "rack-only" && (
            <div className="mt-4 flex gap-3 p-4 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900 rounded-lg">
              <AlertCircle className="h-5 w-5 text-amber-600 dark:text-amber-500 flex-shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-semibold text-amber-900 dark:text-amber-100 mb-1">
                  Compatibility Note
                </p>
                <p className="text-amber-800 dark:text-amber-200">
                  This rack is custom-fit for Greenmade 27-Gallon Totes (available at Costco). To ensure a perfect fit and safety, please ensure your own totes match these dimensions: <span className="font-medium">30.4"L x 20.4"W x 14.7"H</span>.
                </p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Add-on Option */}
      <Card>
        <CardHeader>
          <CardTitle>Add-ons</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="heavy-duty"
                checked={heavyDutyBase}
                onCheckedChange={(checked) => setHeavyDutyBase(checked === true)}
              />
              <Label
                htmlFor="heavy-duty"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
              >
                Heavy Duty 4x4 Base + Rolling Casters (+$80, adds 5" to height)
              </Label>
            </div>
            {heavyDutyBase && (
              <p className="text-xs text-muted-foreground ml-6">
                * The 5" height increase has been included in the measurements displayed above
              </p>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Pricing Display */}
      {activeSelection && dimensions && (
        <Card className="border-2 border-primary">
          <CardHeader>
            <CardTitle className="text-2xl">Total Project Cost</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-4xl font-bold text-primary">
              ${totalPrice.toLocaleString()}
            </div>

            {/* Dimensions Display */}
            <div className="bg-muted/50 p-4 rounded-lg">
              <h3 className="font-semibold text-base mb-2">Approximate Footprint:</h3>
              <p className="text-lg font-medium">
                {dimensions.width}" Wide x {dimensions.depth}" Deep x {dimensions.height}" High
              </p>
            </div>

            <div className="space-y-2 text-sm">
              <h3 className="font-semibold text-base">Final Breakdown:</h3>
              <div className="space-y-1 text-muted-foreground">
                <div className="flex justify-between">
                  <span>Configuration:</span>
                  <span className="font-medium text-foreground">
                    {activeSelection.height}H x {activeSelection.width}W ({totalBins} bins)
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Rack Base Price:</span>
                  <span className="font-medium text-foreground">
                    ${calculatePrice(activeSelection.height, activeSelection.width, false).toLocaleString()}
                  </span>
                </div>
                {heavyDutyBase && (
                  <div className="flex justify-between">
                    <span>Heavy Duty Base + Casters:</span>
                    <span className="font-medium text-foreground">+$80</span>
                  </div>
                )}
                {bundleOption === "turn-key" && (
                  <div className="flex justify-between">
                    <span>Greenmade Totes ({totalBins} bins):</span>
                    <span className="font-medium text-foreground">+${binBundleCost.toLocaleString()}</span>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {!activeSelection && (
        <Card className="border-dashed">
          <CardContent className="py-8 text-center text-muted-foreground">
            Hover or click on the grid above to see pricing
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default VisualRackConfigurator;
