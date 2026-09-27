import { ChevronDown, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useNavigate } from "react-router-dom";
import { site } from "@/data/site";

// EBH header structure with the Princeton lockup: same services dropdown,
// same nav row, same call button. The brand word above the wordmark is the town.
type MenuEntry = { group: string } | { name: string; href: string; external?: boolean };

const Header = () => {
  const navigate = useNavigate();

  const servicesMenu: MenuEntry[] = [
    { group: "Core Services" },
    { name: "Handyman Visit", href: "/handyman" },
    { name: "Drywall Repair", href: "/drywall-repair" },
    { name: "Doors & Locks", href: "/doors" },
    { name: "Carpentry & Trim", href: "/carpentry" },
    { name: "TV Mounting & Assembly", href: "/tv-mounting" },
    { name: "Deck & Fence Repair", href: "/deck-fence-repair" },
    { name: "Tile, Grout & Caulk", href: "/tile-grout-caulk" },
    { name: "Fixture & Faucet Swaps", href: "/fixture-swaps" },
    { name: "Painting Touch-Ups", href: "/painting-touch-ups" },
    { name: "Home Maintenance", href: "/home-maintenance" },
    { group: "Bigger Jobs" },
    { name: "Backsplash", href: "/backsplash" },
    { name: "Storage Sheds", href: "/storage-sheds" },
    { name: "Grab Bars & Shower Doors", href: "/grab-bar-installation" },
    { group: "" },
    { name: "All services", href: "/#services" },
  ];

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Towns Served", href: "/service-areas" },
    { name: "FAQ", href: "/faq" },
    { name: "Book a Visit", href: "/book" },
    { name: "Careers", href: "/careers" },
  ];

  return (
    <header className="sticky top-0 z-[60] bg-background/95 backdrop-blur border-b border-border" role="banner">
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-3 flex justify-between items-center gap-4">
        <Link to="/" className="flex items-center gap-3">
          <img src="/mark-truck-red.png" alt="" className="w-[64px] md:w-[74px] h-auto flex-none" />
          <span className="flex flex-col items-start gap-0">
          <span className="font-body text-[12.5px] tracking-[0.2em] uppercase text-[#795B41] font-semibold">
            Princeton
          </span>
          <span className="font-headline font-bold text-2xl leading-none tracking-[-0.01em] text-foreground">
            Handyman<span className="text-primary">.</span>
          </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1.5 font-body font-medium text-lg px-3.5 py-3 rounded-[10px] text-foreground hover:bg-muted transition-colors outline-none">
              Services
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              className="w-72 rounded-[14px] border border-border bg-card shadow-[0_12px_30px_rgba(60,45,25,.12)]"
            >
              {servicesMenu.map((item, i) =>
                "group" in item ? (
                  <div key={item.group || "sep-" + i}>
                    {i > 0 && <DropdownMenuSeparator />}
                    {item.group && (
                      <DropdownMenuLabel className="font-body text-[13px] uppercase tracking-[0.12em] text-[#795B41]">
                        {item.group}
                      </DropdownMenuLabel>
                    )}
                  </div>
                ) : (
                  <DropdownMenuItem
                    key={item.name}
                    onClick={() => {
                      if (item.external) window.open(item.href, "_blank", "noopener,noreferrer");
                      else navigate(item.href);
                    }}
                    className="font-body text-[17px] py-2.5 px-3 rounded-[8px] cursor-pointer"
                  >
                    {item.name}
                  </DropdownMenuItem>
                )
              )}
            </DropdownMenuContent>
          </DropdownMenu>
          {navLinks.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              className="font-body font-medium text-lg px-3.5 py-3 rounded-[10px] text-foreground hover:bg-muted transition-colors"
            >
              {l.name}
            </Link>
          ))}
        </nav>

        <a
          href={site.phoneHref}
          className="inline-flex items-center gap-2 min-h-[52px] px-4 md:px-5 py-3 rounded-[12px] bg-primary text-primary-foreground font-body font-semibold text-lg whitespace-nowrap shadow-[0_2px_0_rgba(122,18,21,.5)] hover:bg-[#8E1418] transition-colors"
        >
          <Phone className="h-[19px] w-[19px]" />
          <span className="hidden sm:inline">{site.phoneDisplay}</span>
          <span className="sm:hidden">Call</span>
        </a>
      </div>

      {/* Mobile: always-visible scrollable nav row */}
      <div className="lg:hidden flex gap-1 overflow-x-auto px-3 pb-2.5 border-t border-border/60 [scrollbar-width:none]">
        {[{ name: "Home", href: "/" }, { name: "Handyman Visit", href: "/handyman" }, { name: "Drywall", href: "/drywall-repair" }, { name: "Doors", href: "/doors" }, { name: "TV Mounting", href: "/tv-mounting" }, { name: "Decks & Fences", href: "/deck-fence-repair" }, { name: "Fixtures", href: "/fixture-swaps" }, ...navLinks].map((l) => (
          <Link
            key={l.href}
            to={l.href}
            className="flex-none font-body font-medium text-[17px] px-3 py-2.5 text-muted-foreground whitespace-nowrap"
          >
            {l.name}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Header;
