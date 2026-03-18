import { Section } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Sprout, ShoppingBag, BookOpen, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import heroImg from "/images/hero_microgreens.jpg";

const harvestImages = [
  { src: "/images/gallery/grow-greens-south-chittoor-ernakulam-microgreen-wholesalers-7e2dwdnuo3.jpg", name: "Pea Shoots", desc: "Tender & sweet" },
  { src: "/images/gallery/grow-greens-south-chittoor-ernakulam-microgreen-wholesalers-d9lg8bkd1g.jpg", name: "Radish Greens", desc: "Spicy & crisp" },
  { src: "/images/gallery/grow-greens-south-chittoor-ernakulam-microgreen-wholesalers-h41u9b0zfg.jpg", name: "Sunflower Greens", desc: "Nutty & crunchy" },
  { src: "/images/gallery/EsbPnzVdmX5sSc7z7DaV.webp", name: "Mixed Microgreens", desc: "Nutrient-packed blend" },
];

export default function Home() {

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
      title: "No Pesticides, No Fertilizers", 
      desc: "Pure and safe microgreens for you and your family" 
    },
    { 
      icon: "🌾", 
      title: "Non-GMO Seeds", 
      desc: "Open pollinated seeds ensuring natural growth and authentic flavors" 
    },
    { 
      icon: "💰", 
      title: "Low Rates", 
      desc: "Premium quality at affordable prices - just ₹600/month" 
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

  const featuredLinks = [
    {
      title: "The Better India Feature",
      source: "The Better India",
      url: "https://thebetterindia.com/farming/ajay-gopinath-former-banker-microgreens-farming-organic-cultivation-grow-greens-successful-business-10487697",
      description: "Ex-Banker Grows Microgreens in 80 Sq Ft at Home"
    },
    {
      title: "Banker Quits Job to Farm",
      source: "30 Stades",
      url: "https://30stades.com/farming/banker-ajay-gopinath-quits-job-to-grow-microgreens-earns-rs5-lakh-monthly-from-64-sqft-room-7663828",
      description: "Earns Rs 5 Lakh Monthly from 64 Sqft Room"
    },
    {
      title: "Go Microgreen",
      source: "New Indian Express",
      url: "https://www.newindianexpress.com/cities/kochi/2021/Oct/22/go-microgreen-2374176.html",
      description: "The revolution of microgreens in Kerala."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 z-10" />
          <img 
            src={heroImg} 
            alt="Fresh Lush Microgreens" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-4 relative z-20 text-white">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block py-1.5 px-4 rounded-full bg-secondary text-primary text-sm font-bold mb-6 shadow-lg uppercase tracking-wider">
              India's Leading Microgreens Farm
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight text-white">
              Cultivating Health, <br/>
              <span className="text-secondary">One Tiny Leaf</span> at a Time.
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl font-light">
              Join the green revolution with premium organic microgreens grown with passion and precision by Ajay Gopinath.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/subscription">
                <Button size="lg" className="bg-secondary text-primary hover:bg-white text-lg px-8 py-6 rounded-full font-bold">
                  Start Subscription <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/training">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 text-lg px-8 py-6 rounded-full">
                  Learn Farming
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro Stats */}
      <Section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center p-8 bg-white rounded-2xl shadow-lg border border-border/50 hover:shadow-xl transition-all">
          <Sprout className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="text-3xl font-bold mb-2">15+</h3>
          <p className="text-muted-foreground">Varieties of Greens</p>
        </div>
        <div className="text-center p-8 bg-white rounded-2xl shadow-lg border border-border/50 hover:shadow-xl transition-all">
          <ShoppingBag className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="text-3xl font-bold mb-2">1000+</h3>
          <p className="text-muted-foreground">Happy Customers</p>
        </div>
        <div className="text-center p-8 bg-white rounded-2xl shadow-lg border border-border/50 hover:shadow-xl transition-all">
          <BookOpen className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="text-3xl font-bold mb-2">50+</h3>
          <p className="text-muted-foreground">Workshops Conducted</p>
        </div>
      </Section>

      {/* Featured Press */}
      <Section bg="light">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4">Featured In The News</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our journey from banking to sustainable farming has inspired many. Read about Grow Greens in top publications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredLinks.map((link, i) => (
            <motion.a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              key={i}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all block group"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-bold tracking-wider uppercase text-secondary-foreground/70 bg-secondary/30 px-2 py-1 rounded">
                  {link.source}
                </span>
                <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors font-sans text-foreground">
                {link.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {link.description}
              </p>
            </motion.a>
          ))}
        </div>
      </Section>

      {/* Product Preview */}
      <Section>
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl mb-4">Our Fresh Harvest</h2>
            <p className="text-muted-foreground">Nutrient-dense microgreens grown without soil.</p>
          </div>
          <Link href="/gallery">
            <Button variant="ghost" className="hidden md:flex">View Gallery <ArrowRight className="ml-2 w-4 h-4" /></Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {harvestImages.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden rounded-2xl relative aspect-[4/5]">
                <img
                  src={item.src}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Link href="/gallery">
            <Button variant="outline">View Gallery</Button>
          </Link>
        </div>
      </Section>

      {/* Why Choose Grow Greens Section */}
      <Section bg="light">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4">Why Choose Grow Greens?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Quality, safety, and sustainability in every box</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {whyChoose.map((item) => (
            <motion.div 
              key={item.title} 
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition"
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <h5 className="font-bold text-foreground mb-2">{item.title}</h5>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Importance of Microgreens Section */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4">Importance of Microgreens in Our Daily Life</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Discover why microgreens are essential for modern nutrition and wellness</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {importance.map((item) => (
            <motion.div 
              key={item.title} 
              whileHover={{ x: 5 }}
              className="bg-white rounded-xl shadow-md p-6 flex items-start gap-4 hover:shadow-lg transition"
            >
              <div className="text-3xl flex-shrink-0">{item.icon}</div>
              <div>
                <h5 className="font-bold text-foreground mb-2">{item.title}</h5>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Call to Action */}
      <Section bg="dark" className="text-center">
        <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Ready to Grow with Us?</h2>
        <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
          Whether you want fresh greens delivered to your door or want to learn how to grow them yourself, we're here to help.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact">
            <Button size="lg" className="bg-secondary text-primary hover:bg-white text-lg px-8 py-6 rounded-full font-bold">
              Contact Us
            </Button>
          </Link>
        </div>
      </Section>
    </div>
  );
}
