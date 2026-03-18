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
  { href: "/contact", label: "Contact" },
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
          ? "bg-white/90 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link 
          href="/" 
          className={`flex items-center group cursor-pointer transition-all duration-300 rounded-2xl ${
            !isSolid ? "bg-white/90 backdrop-blur-md px-3 py-1.5 shadow-lg" : ""
          }`}
        >
          <img 
            src={logoImage} 
            alt="Grow Greens" 
            className="h-12 md:h-16 w-auto object-contain hover:scale-105 transition-transform"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="cursor-pointer">
              <span
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location === link.href
                    ? "text-primary font-bold"
                    : isSolid
                    ? "text-muted-foreground"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
              </span>
            </Link>
          ))}
          <Link href="/contact" className="cursor-pointer">
            <Button
              variant={isSolid ? "default" : "secondary"}
              className="rounded-full px-6 font-semibold"
            >
              Get in Touch
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-primary"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {links.map((link) => (
                <Link key={link.href} href={link.href} className="cursor-pointer">
                  <span
                    className={`block py-2 text-lg font-medium ${
                      location === link.href ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    {link.label}
                  </span>
                </Link>
              ))}
              <Link href="/contact" className="cursor-pointer">
                <Button className="w-full rounded-xl">Get in Touch</Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
