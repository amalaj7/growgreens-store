import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { Link } from "wouter";

export default function Training() {
  return (
    <div>
      <SEO 
        title="Microgreens Farming Training & Business Opportunities | Kochi, India" 
        description="Learn how to grow microgreens commercially with our training in Kochi, Kerala, India. Start your small farm and explore lucrative business opportunities globally."
        keywords="microgreens trainings, grow microgreens commercially, microgreens business opportunity, small farm setup, microgreens workshop kochi, learn microgreens farming kerala, commercial microgreens course india, urban farming workshop near me"
        path="/training"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Microgreens Farming Training & Workshops",
          "provider": {
            "@type": "Organization",
            "name": "Grow Greens"
          },
          "description": "Comprehensive workshops on home growing and commercial microgreens farming.",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Training Programs",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Course",
                  "name": "Home Growing Workshop",
                  "description": "Perfect for hobbyists who want to grow healthy greens for their family."
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Course",
                  "name": "Commercial Farming Masterclass",
                  "description": "For those looking to start a microgreens business."
                }
              }
            ]
          }
        }}
      />
      <PageHeader 
        title="Training & Workshops" 
        subtitle="In-Person Kochi Workshops & Live Online Global Masterclasses"
        image="/images/training_workshop.jpg"
      />

      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-6">Empowering New Farmers</h2>
            <p className="text-xl text-muted-foreground">
              We don't just grow greens; we grow farmers. Join our comprehensive workshops to learn how to cultivate your own superfoods at home or for business — available locally in Kochi and live online worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-border">
              <div className="mb-6 flex flex-wrap gap-2">
                <span className="bg-secondary text-primary font-bold px-3 py-1 rounded-full text-xs uppercase tracking-wide">Beginner Friendly</span>
                <span className="bg-white text-muted-foreground border border-border font-bold px-3 py-1 rounded-full text-xs uppercase tracking-wide">🌍 Global & Local</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Home Growing Workshop</h3>
              <p className="text-muted-foreground mb-6">
                Perfect for hobbyists who want to grow healthy greens for their family. Learn the basics of seeds, medium, and care — available as in-person sessions in Kochi or live online globally.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Introduction to Microgreens",
                  "Seed Selection & Soaking",
                  "Soil-less Mediums",
                  "Harvesting Techniques"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-3 mb-6">
                <p className="text-sm font-semibold text-primary mb-3">
                  Includes small farm model starting with trays and seeds.
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <img src="/images/Pics/home-installation-1.jpg" alt="Home Installation 1" className="rounded-lg object-cover aspect-square" />
                  <img src="/images/Pics/home-installation-2.jpg" alt="Home Installation 2" className="rounded-lg object-cover aspect-square" />
                  <img src="/images/Pics/home-installation-3.jpg" alt="Home Installation 3" className="rounded-lg object-cover aspect-square" />
                  <img src="/images/Pics/home-installation-4.jpg" alt="Home Installation 4" className="rounded-lg object-cover aspect-square" />
                </div>
              </div>
              <Link href="/contact?type=training">
                <Button className="w-full mt-4">Enquire Now</Button>
              </Link>
            </div>

            <div className="bg-primary text-primary-foreground p-8 rounded-2xl shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 p-32 bg-secondary/10 rounded-full blur-3xl transform translate-x-10 -translate-y-10"></div>
              <div className="mb-6 relative z-10 flex flex-wrap gap-2">
                <span className="bg-white text-primary font-bold px-3 py-1 rounded-full text-xs uppercase tracking-wide">Professional</span>
                <span className="bg-secondary text-primary font-bold px-3 py-1 rounded-full text-xs uppercase tracking-wide">🌍 Global & Local</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 relative z-10 text-white">Commercial Farming Masterclass</h3>
              <p className="text-primary-foreground/80 mb-6 relative z-10">
                For those looking to start a microgreens business. Includes business planning, scaling, and market strategies.
              </p>
              <ul className="space-y-3 mb-8 relative z-10">
                {[
                  "Advanced Growing Techniques",
                  "Infrastructure Setup",
                  "Pest & Disease Management",
                  "Marketing & Sales Strategies"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium">
                    <CheckCircle2 className="w-5 h-5 text-secondary" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link href="/contact?type=training">
                  <Button variant="secondary" className="w-full relative z-10 font-bold">Contact Us</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
