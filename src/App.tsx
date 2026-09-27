import type { ReactNode } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import StickyCallBar from "./components/StickyCallBar";
import Index from "./pages/Index";
import Handyman from "./pages/Handyman";
import CommercialHandyman from "./pages/CommercialHandyman";
import PropertyManagers from "./pages/PropertyManagers";
import Carpentry from "./pages/Carpentry";
import DrywallRepair from "./pages/DrywallRepair";
import StorageSheds from "./pages/StorageSheds";
import Book from "./pages/Book";
import AboutPage from "./pages/AboutPage";
import FAQPage from "./pages/FAQPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Sitemap from "./pages/Sitemap";
import GrabBarInstallation from "./pages/GrabBarInstallation";
import ShowerDoors from "./pages/ShowerDoors";
import Backsplash from "./pages/Backsplash";
import Careers from "./pages/Careers";
import CoreServicePage from "./pages/CoreServicePage";
import NotFound from "./pages/NotFound";
import ServiceAreasPage from "./pages/ServiceAreasPage";
import LocationPage from "./pages/LocationPage";
import ServiceLocationPage from "./pages/ServiceLocationPage";

const queryClient = new QueryClient();

// Providers and routes are exported separately so the server entry
// (src/entry-server.tsx) can wrap AppRoutes in a StaticRouter while the
// client keeps BrowserRouter.
export const AppProviders = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      {/* Business/Organization/WebSite JSON-LD lives statically in index.html;
          injecting it here too created duplicate schema entities at runtime. */}
      <Toaster />
      <Sonner />
      {children}
    </TooltipProvider>
  </QueryClientProvider>
);

export const AppRoutes = () => (
  <>
    <ScrollToTop />
    <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/handyman" element={<Handyman />} />
          <Route path="/commercial-handyman" element={<CommercialHandyman />} />
          <Route path="/property-managers" element={<PropertyManagers />} />
          <Route path="/carpentry" element={<Carpentry />} />
          <Route path="/drywall-repair" element={<DrywallRepair />} />
          <Route path="/doors" element={<CoreServicePage slug="doors" />} />
          <Route path="/tv-mounting" element={<CoreServicePage slug="tv-mounting" />} />
          <Route path="/deck-fence-repair" element={<CoreServicePage slug="deck-fence-repair" />} />
          <Route path="/tile-grout-caulk" element={<CoreServicePage slug="tile-grout-caulk" />} />
          <Route path="/fixture-swaps" element={<CoreServicePage slug="fixture-swaps" />} />
          <Route path="/painting-touch-ups" element={<CoreServicePage slug="painting-touch-ups" />} />
          <Route path="/home-maintenance" element={<CoreServicePage slug="home-maintenance" />} />
          <Route path="/storage-sheds" element={<StorageSheds />} />
          <Route path="/grab-bar-installation" element={<GrabBarInstallation />} />
          <Route path="/shower-doors" element={<ShowerDoors />} />
          <Route path="/backsplash" element={<Backsplash />} />
          <Route path="/book" element={<Book />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/sitemap" element={<Sitemap />} />

          {/* Programmatic SEO Routes */}
          <Route path="/service-areas" element={<ServiceAreasPage />} />
          <Route path="/service-areas/:location" element={<LocationPage />} />
          <Route path="/:service/:location" element={<ServiceLocationPage />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
    <StickyCallBar />
  </>
);

const App = () => (
  <AppProviders>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </AppProviders>
);

export default App;
