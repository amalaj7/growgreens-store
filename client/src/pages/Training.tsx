import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { Link } from "wouter";
import workshopImg from "/images/training_workshop.jpg";

export default function Training() {
  return (
    <div>
      <PageHeader 
        title="Training & Workshops" 
        subtitle="Learn the Art of Microgreens Farming"
        image={workshopImg}
      />

      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-6">Empowering New Farmers</h2>
            <p className="text-xl text-muted-foreground">
              We don't just grow greens; we grow farmers. Join our comprehensive workshops to learn how to cultivate your own superfoods at home or for business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-border">
              <div className="mb-6">
                <span className="bg-secondary text-primary font-bold px-3 py-1 rounded-full text-xs uppercase tracking-wide">Beginner Friendly</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Home Growing Workshop</h3>
              <p className="text-muted-foreground mb-6">
                Perfect for hobbyists who want to grow healthy greens for their family. Learn the basics of seeds, medium, and care.
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
                <p className="text-sm font-semibold text-primary">
                  Includes small farm model starting with trays and seeds.
                </p>
              </div>
              <div className="text-3xl font-bold text-primary mb-2">₹12,000</div>
              <Link href="/contact">
                <Button className="w-full mt-4">Enquire Now</Button>
              </Link>
            </div>

            <div className="bg-primary text-primary-foreground p-8 rounded-2xl shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 p-32 bg-secondary/10 rounded-full blur-3xl transform translate-x-10 -translate-y-10"></div>
              <div className="mb-6 relative z-10">
                <span className="bg-white text-primary font-bold px-3 py-1 rounded-full text-xs uppercase tracking-wide">Professional</span>
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
                <Link href="/contact">
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
