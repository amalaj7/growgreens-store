import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import logoImage from "@assets/logo.png";

const links = [
  { href: "/", label: "Home" },
  { href: "/story", label: "Our Story" },
  { href: "/products", label: "Our Products" },
  { href: "/training", label: "Training" },
  { href: "/subscription", label: "Subscription" },
  { href: "/gallery", label: "Gallery" },
  { href: "/featured", label: "Featured" },
  { href: "/contact", label: "Get in Touch" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Pages that have a full-screen dark hero (navbar starts transparent + white text)
  // All other pages should always show the solid navbar
  const heroPages = ["/", "/story", "/gallery"];
  const hasHero = heroPages.includes(location);

  // Navbar is "solid" when scrolled OR when the current page has no dark hero
  const isSolid = scrolled || !hasHero;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isSolid
          ? "bg-white/95 backdrop-blur-md shadow-md py-2.5 sm:py-3"
          : "bg-transparent py-4 sm:py-6"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link 
          href="/" 
          className={`flex items-center group cursor-pointer transition-all duration-300 rounded-2xl ${
            !isSolid ? "bg-white/90 backdrop-blur-md px-2.5 py-1.5 shadow-lg" : ""
          }`}
        >
          <img 
            src={logoImage} 
            alt="Grow Greens" 
            className="h-10 sm:h-12 md:h-14 xl:h-16 w-auto object-contain hover:scale-105 transition-transform"
          />
        </Link>

        {/* Desktop & Laptop Menu (lg and above) */}
        <div className="hidden lg:flex items-center gap-3 xl:gap-6 2xl:gap-8">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="cursor-pointer">
              {link.label === "Get in Touch" ? (
                <span className={`px-4 xl:px-5 py-2 xl:py-2.5 rounded-full font-bold text-xs xl:text-sm transition-all hover:scale-105 shadow-md ${!isSolid ? "bg-white text-primary hover:bg-white/90" : "bg-primary text-white hover:shadow-lg"}`}>
                  {link.label}
                </span>
              ) : (
                <span
                  className={`text-xs xl:text-sm font-medium transition-colors hover:text-primary whitespace-nowrap ${
                    location === link.href
                      ? "text-primary font-bold"
                      : isSolid
                      ? "text-muted-foreground"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {link.label}
                </span>
              )}
            </Link>
          ))}
        </div>

        {/* Mobile & Tablet Toggle (below lg) */}
        <button
          className={`lg:hidden p-2 rounded-xl transition-all shadow-sm ${
            isSolid 
              ? "bg-primary/10 text-primary hover:bg-primary/20" 
              : "bg-black/40 text-white backdrop-blur-md border border-white/20 hover:bg-black/60"
          }`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile & Tablet Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden bg-white/98 backdrop-blur-xl border-t shadow-2xl overflow-hidden max-h-[85vh] overflow-y-auto"
          >
            <div className="container mx-auto px-5 py-6 flex flex-col gap-3">
              {links.map((link) => (
                <Link key={link.href} href={link.href} className="cursor-pointer">
                  {link.label === "Get in Touch" ? (
                    <span className="block w-full text-center py-3.5 bg-primary text-white font-bold rounded-xl shadow-md mt-3 hover:bg-primary/90 transition-colors">
                      {link.label}
                    </span>
                  ) : (
                    <span
                      className={`block py-2.5 px-3 rounded-lg text-base font-medium transition-colors ${
                        location === link.href 
                          ? "bg-primary/10 text-primary font-bold" 
                          : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                      }`}
                    >
                      {link.label}
                    </span>
                  )}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
