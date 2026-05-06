import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import StructuredData from "./components/StructuredData";
import Index from "./pages/Index";
import HandymanServices from "./pages/HandymanServices";
import Remodels from "./pages/Remodels";
import GetEstimate from "./pages/GetEstimate";
import AboutPage from "./pages/AboutPage";
import Portfolio from "./pages/Portfolio";
import FAQPage from "./pages/FAQPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Sitemap from "./pages/Sitemap";
import BookRepair from "./pages/BookRepair";
import RackConfigurator from "./pages/RackConfigurator";
import BathroomRefresh from "./pages/BathroomRefresh";
import BathroomRemodel from "./pages/BathroomRemodel";
import BathroomRemodelCalculatorPage from "./pages/BathroomRemodelCalculatorPage";
import Pergolas from "./pages/Pergolas";
import CustomSheds from "./pages/CustomSheds";
import BackyardStudios from "./pages/BackyardStudios";
import NotFound from "./pages/NotFound";
import ServiceAreasPage from "./pages/ServiceAreasPage";
import LocationPage from "./pages/LocationPage";
import ServiceLocationPage from "./pages/ServiceLocationPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <StructuredData />
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/handyman-services" element={<HandymanServices />} />
          <Route path="/remodels" element={<Remodels />} />
          <Route path="/get-estimate" element={<GetEstimate />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/book-repair" element={<BookRepair />} />
          <Route path="/rack-configurator" element={<RackConfigurator />} />
          <Route path="/bathroom-refresh" element={<BathroomRefresh />} />
          <Route path="/bathroom-remodel" element={<BathroomRemodel />} />
          <Route path="/bathroom-remodel-calculator" element={<BathroomRemodelCalculatorPage />} />
          <Route path="/pergolas" element={<Pergolas />} />
          <Route path="/custom-sheds" element={<CustomSheds />} />
          <Route path="/backyard-studios" element={<BackyardStudios />} />
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
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
