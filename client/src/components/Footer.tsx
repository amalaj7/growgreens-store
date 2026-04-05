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
              <a href="https://www.instagram.com/growgreensstore/?hl=en" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors" aria-label="Visit our Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.google.com/search?q=growgreens&amp;ie=UTF-8#lrd=0x3b080d621b7e15d5:0x1128aa5f6d060e6a,1,,,," target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors flex items-center justify-center gap-2" aria-label="Review us on Google">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" preserveAspectRatio="xMidYMid meet"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/></svg>
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
