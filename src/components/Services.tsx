import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Wrench,
  Hammer,
  PaintBucket,
  Drill,
  Home,
  Lightbulb,
  Droplets,
  DoorOpen,
  ArrowRight,
  Phone
} from "lucide-react";
import kitchenImage from "@/assets/kitchen-remodel.jpg";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();
  const services = [
    {
      icon: <Home className="h-8 w-8" />,
      title: "Kitchen Services",
      description: "Cabinet installations, faucet replacement, backsplash, appliance installation, and complete kitchen remodels.",
      features: [
        "Kitchen remodels & renovations",
        "Cabinet installation & adjustments", 
        "Countertop installation",
        "Faucet & sink replacement",
        "Garbage disposal installation",
        "Backsplash installation",
        "Hood vent replacement",
        "Appliance installation",
        "Caulking & grout repair"
      ]
    },
    {
      icon: <Droplets className="h-8 w-8" />,
      title: "Bathroom Services", 
      description: "Complete bathroom upgrades, vanity installation, tiling, fixture updates, and full renovations.",
      features: [
        "Bathroom renovations & upgrades",
        "Vanity installation",
        "Toilet replacement & repair",
        "Shower door installation",
        "Tub & shower installation",
        "Tile installation & repair",
        "Bathroom fan installation",
        "Plumbing fixture updates",
        "Accessibility modifications"
      ]
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "General Repairs & Maintenance",
      description: "Fix squeaky doors, patch holes, repair fixtures, and handle all your everyday home maintenance needs.",
      features: [
        "Drywall repair & patching",
        "Door & window adjustments",
        "Fixture installation & repair",
        "Squeaky floor repairs",
        "Weatherproofing & caulking",
        "Minor plumbing repairs",
        "Fence repairs & gates",
        "Deck maintenance & repairs",
        "Pressure washing services"
      ]
    },
    {
      icon: <Hammer className="h-8 w-8" />,
      title: "Carpentry & Custom Work",
      description: "Custom carpentry, built-ins, shelving, trim work, and specialized woodworking projects.",
      features: [
        "Custom built-in shelving",
        "Trim & molding installation",
        "Cabinet building & repair",
        "Closet organization systems",
        "Custom storage solutions",
        "Wood furniture repair",
        "Stair railing installation",
        "Crown molding installation",
        "Wainscoting installation"
      ]
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Electrical Services",
      description: "Light fixtures, ceiling fans, outlet installation, electrical repairs, and safety inspections.",
      features: [
        "Light fixture installation",
        "Ceiling fan installation", 
        "Outlet & switch installation",
        "GFCI outlet installation",
        "Circuit troubleshooting",
        "Electrical safety inspections",
        "Panel upgrades & repairs",
        "Outdoor lighting installation",
        "Smart home device installation"
      ]
    },
    {
      icon: <PaintBucket className="h-8 w-8" />,
      title: "Painting & Finishing",
      description: "Interior and exterior painting, staining, surface preparation, and specialty finishes.",
      features: [
        "Interior painting (rooms, trim)",
        "Exterior painting & staining",
        "Deck & fence staining",
        "Drywall texture repairs",
        "Surface preparation & priming",
        "Color consultation services",
        "Cabinet painting & refinishing",
        "Wallpaper removal",
        "Specialty finishes & textures"
      ]
    },
    {
      icon: <Drill className="h-8 w-8" />,
      title: "Flooring Services",
      description: "Hardwood installation, tile work, laminate flooring, and floor repairs for all areas of your home.",
      features: [
        "Hardwood floor installation",
        "Laminate & vinyl flooring",
        "Tile installation & repair",
        "Floor refinishing & sanding",
        "Baseboard & quarter round",
        "Transition strip installation",
        "Subfloor repairs",
        "Carpet removal & cleanup",
        "Floor leveling services"
      ]
    },
    {
      icon: <DoorOpen className="h-8 w-8" />,
      title: "Doors & Windows",
      description: "Door installation, window repairs, weatherstripping, and hardware upgrades for better security and efficiency.",
      features: [
        "Interior & exterior door installation",
        "Window installation & repair",
        "Door hardware upgrades",
        "Weatherstripping replacement",
        "Storm door installation",
        "Screen door repair",
        "Window caulking & sealing",
        "Lock installation & repair",
        "Sliding door adjustments"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-cream/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Comprehensive Handyman Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From simple repairs to complete remodels, we handle all your home improvement needs with 
            professional craftsmanship and reliable service.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-handyman transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    {service.icon}
                  </div>
                  <div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                </div>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Project */}
        <div className="bg-card rounded-2xl p-8 shadow-soft">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Recent Kitchen Remodel
              </h3>
              <p className="text-muted-foreground mb-6">
                This Princeton kitchen received a complete transformation including new cabinets,
                countertops, backsplash, and lighting. The result is a modern, functional space that 
                the family loves.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm">
                  <span className="font-medium w-24">Timeline:</span>
                  <span className="text-muted-foreground">2 weeks</span>
                </div>
                <div className="flex items-center text-sm">
                  <span className="font-medium w-24">Services:</span>
                  <span className="text-muted-foreground">Full kitchen renovation</span>
                </div>
                <div className="flex items-center text-sm">
                  <span className="font-medium w-24">Result:</span>
                  <span className="text-muted-foreground">Happy customers, increased home value</span>
                </div>
              </div>
              <Button variant="default" className="group" onClick={() => navigate('/portfolio')}>
                View Portfolio
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <div className="relative">
              <img 
                src={kitchenImage} 
                alt="Kitchen remodel project" 
                className="rounded-xl w-full h-80 object-cover shadow-soft"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get a detailed estimate for your home improvement project. We provide transparent pricing 
            and professional guidance every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" onClick={() => navigate('/get-estimate')}>
              Get Free Estimate
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="tel:6095160098">
                <Phone className="mr-2 h-5 w-5" />
                Call (609) 516-0098
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;