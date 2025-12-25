import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import OnTap from "./pages/OnTap";
import FoodTrucks from "./pages/FoodTrucks";
import WeeklyEvents from "./pages/WeeklyEvents";
import Bachelor from "./pages/Bachelor";
import OpenMicNight from "./pages/OpenMicNight";
import PrivateParties from "./pages/PrivateParties";
import OurStory from "./pages/OurStory";
import Careers from "./pages/Careers";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/on-tap" element={<OnTap />} />
          <Route path="/food-trucks" element={<FoodTrucks />} />
          <Route path="/weekly-events" element={<WeeklyEvents />} />
          <Route path="/bachelor" element={<Bachelor />} />
          <Route path="/open-mic" element={<OpenMicNight />} />
          <Route path="/private-parties" element={<PrivateParties />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
