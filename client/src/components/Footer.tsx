import { Instagram, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "wouter";
import logoImage from "@assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img 
                src={logoImage} 
                alt="Grow Greens" 
                className="h-10 w-auto object-contain bg-white rounded-md px-2 py-1"
              />
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              India's leading microgreens farm founded by Ajay Gopinath. Bringing fresh, nutritious urban farming to your doorstep.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/growgreensstore/?hl=en" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-secondary">Explore</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/story" className="text-primary-foreground/80 hover:text-white transition-colors cursor-pointer">Our Story</Link></li>
              <li><Link href="/products" className="text-primary-foreground/80 hover:text-white transition-colors cursor-pointer">Our Products</Link></li>
              <li><Link href="/training" className="text-primary-foreground/80 hover:text-white transition-colors cursor-pointer">Training & Workshops</Link></li>
              <li><Link href="/subscription" className="text-primary-foreground/80 hover:text-white transition-colors cursor-pointer">Subscription</Link></li>
              <li><Link href="/gallery" className="text-primary-foreground/80 hover:text-white transition-colors cursor-pointer">Gallery</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-secondary">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <span>+91 73062 99044</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <span>growgreensstore@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <span>Chittoor, Ernakulam, Kerala</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
          <p>© {new Date().getFullYear()} Grow Greens. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
