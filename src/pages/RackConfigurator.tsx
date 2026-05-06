import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import VisualRackConfigurator from "@/components/VisualRackConfigurator";
import shelfWorkBench from "@/assets/shelfWorkBench.jpg";
import image4by5 from "@/assets/4by5.jpg";
import image5by4wheels from "@/assets/5by4wheels.jpg";

const RackConfigurator = () => {
  const exampleImages = [
    { src: shelfWorkBench, alt: "Custom garage storage rack with workbench", caption: "Workbench Companion" },
    { src: image4by5, alt: "4x5 garage storage rack configuration", caption: "4 Wide × 5 High" },
    { src: image5by4wheels, alt: "5x4 garage storage rack with wheels", caption: "5 Wide × 4 High + Casters" },
  ];

  const steps = [
    { num: "01", body: "Hover the grid to preview different rack sizes. The highlighted area shows your selection." },
    { num: "02", body: "Click to lock in your configuration. You'll see exact dimensions and total bin count." },
    { num: "03", body: "Toggle the heavy-duty base option if you need enhanced mobility and stability." },
    { num: "04", body: "View your complete pricing breakdown, including any add-ons you've selected." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Custom Garage Storage Rack Builder"
        description="Build your perfect garage storage solution in seconds. Pick your size, see your price instantly, and transform your cluttered garage into an organized workspace."
        canonical="/rack-configurator"
        keywords="garage storage rack, custom storage rack, garage organization, storage configurator, garage shelving, storage solution builder"
      />
      <Header />

      <main>
        {/* Hero */}
        <section className="bg-foreground text-background heavy-border-b py-20 md:py-28">
          <div className="w-full max-w-6xl mx-auto px-6 md:px-10">
            <div className="brutalist-section-eyebrow text-background/70">Specialty Build</div>
            <h1 className="brutalist-headline text-4xl md:text-7xl text-background mb-6 leading-[0.95]">
              Custom Garage
              <br />
              <span className="text-background/70">Storage Rack Builder.</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-background/85 max-w-2xl border-l-4 border-background pl-5">
              Build your perfect garage storage solution in seconds. Pick your size, see real-time pricing, customize with add-ons.
            </p>
          </div>
        </section>

        {/* Configurator */}
        <section className="py-16 bg-background heavy-border-b">
          <div className="w-full max-w-6xl mx-auto px-6 md:px-10">
            <div className="mb-8">
              <div className="brutalist-section-eyebrow">Configure Your Rack</div>
              <h2 className="brutalist-headline text-2xl md:text-4xl text-foreground">Build Your Configuration</h2>
            </div>
            <VisualRackConfigurator />
          </div>
        </section>

        {/* Examples */}
        <section className="py-20 bg-muted heavy-border-b">
          <div className="w-full max-w-7xl mx-auto px-6 md:px-10">
            <div className="mb-12 pb-6 heavy-border-b">
              <div className="brutalist-section-eyebrow">Real Builds</div>
              <h2 className="brutalist-headline text-3xl md:text-5xl text-foreground">Customer Examples</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-4 md:gap-6">
              {exampleImages.map((img) => (
                <div key={img.caption} className="bento-card bg-background overflow-hidden">
                  <div className="aspect-square overflow-hidden border-b-2 border-foreground">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <p className="font-headline font-bold uppercase tracking-wider text-sm text-foreground">{img.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-20 bg-background heavy-border-b">
          <div className="w-full max-w-7xl mx-auto px-6 md:px-10">
            <div className="text-center mb-16">
              <div className="brutalist-section-eyebrow">How It Works</div>
              <h2 className="brutalist-headline text-3xl md:text-5xl text-foreground">Four Steps</h2>
              <div className="w-24 h-1 bg-foreground mx-auto mt-6"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 heavy-border bg-background">
              {steps.map((s, i) => (
                <div
                  key={s.num}
                  className={`p-8 md:p-10 relative group hover:bg-muted transition-colors ${
                    i < steps.length - 1 ? "border-b-2 md:border-b-0 md:border-r-2 border-foreground" : ""
                  }`}
                >
                  <div className="absolute top-4 right-4 font-headline font-black text-5xl md:text-6xl text-foreground/10 group-hover:text-foreground/30 transition-colors">
                    {s.num}
                  </div>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed mt-2 pr-12">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default RackConfigurator;
