
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CountriesPage from "./pages/CountriesPage";
import CountryDetailPage from "./pages/CountryDetailPage";
import DocumentationPage from "./pages/DocumentationPage";
import VideosPage from "./pages/VideosPage";
import FAQPage from "./pages/FAQPage";
import PassportRankingPage from "./pages/PassportRankingPage";
import PassportDetailPage from "./pages/PassportDetailPage";
import IndianPassportPage from "./pages/IndianPassportPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Toaster />
    <Sonner />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/countries" element={<CountriesPage />} />
        <Route path="/country/:countryId" element={<CountryDetailPage />} />
        <Route path="/documentation" element={<DocumentationPage />} />
        <Route path="/videos" element={<VideosPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/passport-ranking" element={<PassportRankingPage />} />
        <Route path="/passport-ranking/:passportId" element={<PassportDetailPage />} />
        <Route path="/indian-passport" element={<IndianPassportPage />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
