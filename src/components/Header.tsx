import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const navigate = useNavigate();

  const servicesMenu = [
    { name: "Pergolas", href: "/pergolas" },
    { name: "Custom Sheds", href: "/custom-sheds" },
    { name: "Backyard Studios", href: "/backyard-studios" },
    { name: "Handyman Services", href: "/handyman-services" },
    { name: "Remodels", href: "/remodels" },
    { name: "Bathroom Refresh", href: "/bathroom-refresh" },
    { name: "Bathroom Calculator", href: "/bathroom-remodel-calculator" },
    { name: "Book Quick Repair", href: "/book-repair" },
  ];

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Service Areas", href: "/service-areas" },
    { name: "FAQ", href: "/faq" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background heavy-border-b" role="banner">
      <div className="w-full px-6 md:px-10 py-5 flex justify-between items-center">
        {/* Logo wordmark */}
        <Link
          to="/"
          className="font-headline font-black italic tracking-tighter text-xl md:text-2xl uppercase text-foreground"
        >
          Princeton<span className="text-muted-foreground"> /</span> Handyman
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-2" aria-label="Main navigation">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 font-headline font-bold uppercase tracking-wider text-xs px-4 py-2 hover:bg-foreground hover:text-background transition-colors duration-75 active:translate-y-0.5 outline-none">
              Services
              <ChevronDown className="h-3 w-3" />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              className="w-64 rounded-none border-2 border-foreground bg-background shadow-none"
            >
              {servicesMenu.map((item) => (
                <DropdownMenuItem
                  key={item.name}
                  onClick={() => navigate(item.href)}
                  className="cursor-pointer font-headline font-bold uppercase tracking-wider text-xs rounded-none focus:bg-foreground focus:text-background"
                >
                  {item.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="font-headline font-bold uppercase tracking-wider text-xs px-4 py-2 hover:bg-foreground hover:text-background transition-colors duration-75 active:translate-y-0.5"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate("/get-estimate")}
            className="hidden md:inline-flex brutalist-cta px-6 py-3"
          >
            Get Estimate
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 border-2 border-foreground"
            aria-label="Toggle mobile menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {isMenuOpen && (
        <nav
          className="lg:hidden border-t-2 border-foreground bg-background"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col">
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="w-full flex items-center justify-between px-6 py-4 font-headline font-bold uppercase tracking-wider text-sm border-b border-border hover:bg-foreground hover:text-background transition-colors"
            >
              <span>Services</span>
              <ChevronDown className={`h-4 w-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
            </button>
            {isServicesOpen && (
              <div className="bg-muted border-b border-border">
                {servicesMenu.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsServicesOpen(false);
                    }}
                    className="block pl-10 pr-6 py-3 font-headline font-semibold uppercase tracking-wider text-xs border-b border-border last:border-b-0 hover:bg-foreground hover:text-background transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}

            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="px-6 py-4 font-headline font-bold uppercase tracking-wider text-sm border-b border-border hover:bg-foreground hover:text-background transition-colors"
              >
                {link.name}
              </Link>
            ))}

            <div className="p-6">
              <button
                onClick={() => {
                  navigate("/get-estimate");
                  setIsMenuOpen(false);
                }}
                className="brutalist-cta w-full"
              >
                Get Estimate
              </button>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
