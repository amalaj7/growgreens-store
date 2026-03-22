import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { HelmetProvider } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import NotFound from "@/pages/not-found";

// Pages
import Home from "@/pages/Home";
import Story from "@/pages/Story";
import Products from "@/pages/Products";
import Training from "@/pages/Training";
import Subscription from "@/pages/Subscription";
import Gallery from "@/pages/Gallery";
import Featured from "@/pages/Featured";
import Contact from "@/pages/Contact";

function Router() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/story" component={Story} />
          <Route path="/products" component={Products} />
          <Route path="/training" component={Training} />
          <Route path="/subscription" component={Subscription} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/featured" component={Featured} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Router />
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
