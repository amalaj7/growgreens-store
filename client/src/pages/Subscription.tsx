import React from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";

const subscriptionFeatures = [
  {
    icon: "🚚",
    title: "Weekly Delivery",
    description: "Fresh microgreens delivered to your doorstep every week",
  },
  {
    icon: "📦",
    title: "4 Boxes per Month",
    description: "Consistent supply throughout the month",
  },
  {
    icon: "🚗",
    title: "Free Home Delivery",
    description: "No additional shipping charges",
  },
];

const includedFeatures = [
  "One box feeds one person for a full week",
  "11 microgreens varieties to choose from",
  "Fresh produce available (pulp, sprouts, millets, exotic flowers & vegetables)",
  "Fully customizable plan based on your needs",
  "Always fresh, never frozen",
  "Grown with care and expertise",
  "Convenient weekly schedule",
];

const whyChoose = [
  { 
    icon: "🍃", 
    title: "100% Natural", 
    desc: "Grown naturally without any harmful chemicals or artificial additives" 
  },
  { 
    icon: "📅", 
    title: "7 Years Experience", 
    desc: "Trusted expertise in cultivating premium quality microgreens" 
  },
  { 
    icon: "🛡️", 
    title: "No Pesticides, No Fertilisers", 
    desc: "Pure and safe microgreens for you and your family" 
  },
  { 
    icon: "🌾", 
    title: "Non-GMO Seeds", 
    desc: "Non-hybrid, non-treated, open pollinated (OP) seeds ensuring natural growth and authentic flavors" 
  },
  { 
    icon: "💰", 
    title: "Affordable Rates", 
    desc: "Premium quality starting from ₹599/month" 
  },
  { 
    icon: "💧", 
    title: "Filtered RO Water", 
    desc: "Grown using purified water for maximum purity and safety" 
  },
  { 
    icon: "🍱", 
    title: "Food Grade Trays", 
    desc: "Cultivated in safe, food-grade trays maintaining highest hygiene standards" 
  },
  { 
    icon: "🚚", 
    title: "Free Home Delivery", 
    desc: "Farm to home - fresh delivery at no extra cost" 
  },
  { 
    icon: "♻️", 
    title: "100% Decomposable Medium", 
    desc: "Environmentally friendly growing medium that's fully biodegradable" 
  },
  { 
    icon: "🪪", 
    title: "FSSAI Certified", 
    desc: "Certified by Food Safety and Standards Authority of India" 
  },
  { 
    icon: "📍", 
    title: "Locally Grown", 
    desc: "Supporting local agriculture while reducing carbon footprint" 
  },
];

const importance = [
  {
    icon: "⭐",
    title: "40x More Nutrients",
    desc: "Studies have proved that microgreens contain up to 40 times more nutrients than their mature counterparts",
  },
  {
    icon: "❤️",
    title: "Rich in Essential Minerals",
    desc: "Packed with Potassium, Iron, and Fiber to support your overall health and wellness",
  },
  {
    icon: "⚡",
    title: "Vitamins & Antioxidants",
    desc: "Excellent source of vitamins, minerals, and powerful antioxidants for daily nutrition",
  },
  {
    icon: "💪",
    title: "Perfect for Fitness Enthusiasts",
    desc: "Ideal for gym-goers and athletes seeking nutrient-dense, low-calorie superfoods for optimal performance",
  },
];

const varieties = [
  { 
    name: "Pakchoi", 
    desc: "Mild cabbage-like flavor",
    image: "/images/varieties/pakchoi.jpg"
  },
  { 
    name: "Sunflower", 
    desc: "Nutty and crunchy texture",
    image: "/images/varieties/sunflower.jpg"
  },
  { 
    name: "Turnip", 
    desc: "Fresh and mildly sweet",
    image: "/images/varieties/turnip.webp"
  },
  { 
    name: "Radish White", 
    desc: "Crisp and mildly peppery flavor",
    image: "/images/varieties/radish-white.jpg"
  },
  { 
    name: "Radish Red", 
    desc: "Bold color with spicy kick",
    image: "/images/varieties/radish-red.webp"
  },
  { 
    name: "Radish Pink", 
    desc: "Delicate taste with vibrant color",
    image: "/images/varieties/radish-pink.jpeg"
  },
  { 
    name: "Radish China Rose", 
    desc: "Sweet and slightly spicy",
    image: "/images/varieties/radish-china-rose.jpg"
  },
  { 
    name: "Mustard Green", 
    desc: "Sharp, tangy mustard flavor",
    image: "/images/varieties/mustard-green.jpg"
  },
  { 
    name: "Yellow Mustard", 
    desc: "Mild and slightly nutty",
    image: "/images/varieties/yellow-mustard.jpg"
  },
  { 
    name: "Mix Microgreens", 
    desc: "Variety of flavors and colors",
    image: "/images/varieties/mix-microgreens.webp"
  },
  { 
    name: "Health Mix Microgreens", 
    desc: "Nutrient-packed superfood blend",
    image: "/images/varieties/health-mix-microgreens.avif"
  },
  { 
    name: "Exotic Flowers", 
    desc: "Beautiful and flavorful edible blooms",
    image: "/images/Pics/flowers%20(1).jpg"
  },
  { 
    name: "Fresh Sprouts", 
    desc: "Crisp and healthy daily sprouts",
    image: "/images/Pics/sprouts%20(1).jpg"
  },
  { 
    name: "Millets", 
    desc: "Wholesome, nutrient-dense ancient grains",
    image: "/images/Pics/pearl-millet.jpg"
  },
];

export default function Subscription() {
  return (
    <div className="w-full bg-background pt-20 sm:pt-24">
      <SEO 
        title="Microgreens Subscription | Fresh Greens Delivery in Kochi, India" 
        description="Subscribe for fresh, organic microgreens delivery near me in Kochi, Kerala, India. Weekly delivery of 11 nutrient-rich varieties for your health."
        keywords="microgreens subscription india, microgreens delivery kochi, fresh greens delivery kerala, microgreens home delivery near me, buy organic microgreens weekly"
        path="/subscription"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Microgreens Weekly Subscription",
          "provider": {
            "@type": "Organization",
            "name": "Grow Greens"
          },
          "description": "Weekly delivery of fresh, organic microgreens directly from the farm to your home.",
          "offers": {
            "@type": "Offer",
            "price": "599",
            "priceCurrency": "INR",
            "description": "Monthly plan starting from ₹599/month"
          }
        }}
      />
      {/* Subscription Model Section */}
      <div className="max-w-6xl mx-auto px-4 py-10 sm:py-16">
        <h1 className="text-3xl sm:text-5xl font-serif font-bold text-center mb-3 text-primary">Subscription Model</h1>
        <p className="text-center text-muted-foreground text-sm sm:text-base mb-8 sm:mb-12 max-w-xl mx-auto">Fresh microgreens & fresh produce delivered weekly at an affordable price</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Monthly Plan Card */}
          <div className="bg-white rounded-2xl shadow-lg p-5 sm:p-8 border border-border/50 flex flex-col justify-between">
            <div>
              <div className="mb-6">
                <h3 className="text-2.5xl sm:text-3xl font-bold mb-2 text-foreground font-serif">Monthly Plan</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-primary text-3xl sm:text-4xl font-extrabold">From ₹599</span>
                  <span className="text-muted-foreground text-sm sm:text-base">per month</span>
                </div>
              </div>
              
              <p className="text-foreground font-medium text-sm sm:text-base mb-6">Everything you need for a healthy lifestyle</p>
              
              <div className="space-y-4 mb-8">
                {subscriptionFeatures.map((f) => (
                  <div key={f.title} className="flex items-start gap-3">
                    <div className="bg-secondary/40 rounded-full p-2 text-base sm:text-lg shrink-0">{f.icon}</div>
                    <div>
                      <div className="font-semibold text-foreground text-sm sm:text-base">{f.title}</div>
                      <div className="text-muted-foreground text-xs sm:text-sm">{f.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <Link href="/contact?type=subscription">
              <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-6 text-base sm:text-lg rounded-xl transition-all shadow-md">
                Subscribe Now
              </Button>
            </Link>
          </div>

          {/* What's Included Card */}
          <div className="bg-white rounded-2xl shadow-lg p-5 sm:p-8 border border-border/50 flex flex-col justify-between">
            <div>
              <h4 className="text-xl sm:text-2xl font-bold mb-6 font-serif text-foreground">What's Included</h4>
              
              <ul className="space-y-3 mb-8">
                {includedFeatures.map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <span className="text-primary text-lg font-bold">✔</span>
                    <span className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-primary text-white rounded-2xl p-6 sm:p-8 text-center shadow-inner">
              <div className="text-5xl sm:text-6xl font-extrabold drop-shadow-md">11</div>
              <div className="text-lg sm:text-xl font-bold mt-1 tracking-wide">Varieties Available</div>
              <div className="mt-6 flex flex-wrap justify-center gap-2 sm:gap-2.5">
                {varieties.map((v) => (
                  <span key={v.name} className="px-3 sm:px-3.5 py-1 sm:py-1.5 bg-white/15 hover:bg-white/25 transition-colors rounded-full text-xs sm:text-sm font-medium shadow-sm backdrop-blur-sm">
                    {v.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Choose Your Varieties Section */}
      <div className="max-w-6xl mx-auto px-4 py-12 sm:py-16 border-t border-border/40">
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-center mb-3 text-foreground">Choose Your Varieties</h2>
        <p className="text-center text-muted-foreground text-sm sm:text-base mb-8 sm:mb-12 max-w-2xl mx-auto">11 carefully cultivated varieties of fresh microgreens, each packed with nutrients and flavor</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {varieties.map((variety) => (
            <div key={variety.name} className="bg-white rounded-2xl shadow-md border border-border/40 overflow-hidden hover:shadow-xl transition-all group">
              <div className="relative h-44 sm:h-48 bg-secondary/30 overflow-hidden">
                <img 
                  src={variety.image} 
                  alt={variety.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 sm:p-5">
                <h5 className="font-bold text-foreground mb-1 text-base sm:text-lg group-hover:text-primary transition-colors">{variety.name}</h5>
                <p className="text-muted-foreground text-xs sm:text-sm">{variety.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Grow Greens Section */}
      <div className="max-w-6xl mx-auto px-4 py-12 sm:py-16 border-t border-border/40">
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-center mb-3 text-foreground">Why Choose Grow Greens?</h2>
        <p className="text-center text-muted-foreground text-sm sm:text-base mb-8 sm:mb-12 max-w-2xl mx-auto">Quality, safety, and sustainability in every box</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {whyChoose.map((item) => (
            <div key={item.title} className="bg-white rounded-xl shadow-md p-5 sm:p-6 text-center hover:shadow-lg transition border border-border/40">
              <div className="text-3xl sm:text-4xl mb-3">{item.icon}</div>
              <h5 className="font-bold text-foreground mb-2 text-base sm:text-lg">{item.title}</h5>
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Importance of Microgreens Section */}
      <div className="max-w-6xl mx-auto px-4 py-12 sm:py-16 border-t border-border/40 mb-12">
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-center mb-3 text-foreground">Importance of Microgreens in Our Daily Life</h2>
        <p className="text-center text-muted-foreground text-sm sm:text-base mb-8 sm:mb-12 max-w-2xl mx-auto">Discover why microgreens are essential for modern nutrition and wellness</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {importance.map((item) => (
            <div key={item.title} className="bg-white rounded-xl shadow-md p-5 sm:p-6 flex items-start gap-4 hover:shadow-lg transition border border-border/40">
              <div className="text-2.5xl sm:text-3xl flex-shrink-0">{item.icon}</div>
              <div>
                <h5 className="font-bold text-foreground mb-1.5 text-base sm:text-lg">{item.title}</h5>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
