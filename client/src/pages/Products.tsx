import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { SEO } from "@/components/SEO";
import { 
  Leaf, Home, Sprout, Nut, Droplets, Wheat, Carrot, 
  Settings, Box, PackageOpen, Layers, Flower2,
  ArrowRight
} from "lucide-react";
import { easeIn, motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const products = [
  { name: "Live Microgreens", icon: Leaf, desc: "Fresh, nutrient-packed microgreens harvested right at your home." },
  { name: "Small Farm Model", icon: Home, desc: "A complete setup including trays and seeds to start your own microgreens farm." },
  { name: "Sprouts", icon: Sprout, desc: "Crisp and healthy sprouts for your daily salads and meals." },
  { name: "Cashew Sprouts", icon: Nut, desc: "Delicious, protein-rich sprouted cashews for the perfect snack." },
  { name: "Pulps", icon: Droplets, desc: "Pure and concentrated pulps for beverages and cooking." },
  { name: "Millets", icon: Wheat, desc: "Wholesome, ancient grains that provide energy and exceptional nutrition." },
  { name: "Exotic Vegetables", icon: Carrot, desc: "Rare and unique vegetables cultivated sustainably." },
  { name: "Edible Flowers", icon: Flower2, desc: "Beautiful blooms that add color and flavor to any culinary creation." },
  { name: "Millet Flakes", icon: Settings, desc: "Healthy flakes perfect for a nutritious breakfast or quick meal." },
  { name: "Trays", icon: Box, desc: "Durable, food-grade trays designed specifically for growing microgreens." },
  { name: "Seeds", icon: PackageOpen, desc: "High-quality, non-GMO seeds with great germination rates." },
  { name: "Growing Medium", icon: Layers, desc: "100% decomposable, clean, and soil-less growing mediums." }
];

export default function Products() {
  return (
    <div>
      <SEO 
        title="Our Products" 
        description="Fresh live microgreens, sprouts, small farm models, and accessories to grow your own superfoods."
        path="/products"
      />
      <PageHeader 
        title="Our Products" 
        subtitle="Farm Fresh to Your Doorstep"
      />

      <Section>
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4 font-serif text-foreground">Everything You Need to Grow & Eat Healthy</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From our fresh harvest to the tools and seeds you need to cultivate your own, explore our full range of offerings tailored for health and sustainability.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
          {products.map((product, i) => {
            const Icon = product.icon;
            return (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                key={i}
                className="bg-white rounded-2xl shadow-md p-6 border border-border/40 hover:shadow-xl transition-all group flex flex-col items-center text-center cursor-pointer"
              >
                <div className="bg-secondary/20 p-4 rounded-full mb-4 group-hover:bg-primary transition-colors duration-300">
                  <Icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{product.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{product.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Gallery Sections */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4 font-serif text-foreground">Explore Our Collections</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Get a closer look at what Grow Greens has to offer.</p>
          </div>

          {/* Microgreens & Millets Gallery */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center flex items-center justify-center gap-3">
              <Leaf className="w-8 h-8 text-primary" /> Live Microgreens & Millets Varieties
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {Array.from({ length: 34 }).map((_, i) => (
                <img key={`mg-${i}`} src={`/images/Pics/microgreens-varities%20(${i + 1}).jpg`} alt={`Live Microgreens ${i + 1}`} className="rounded-xl object-cover w-full aspect-square shadow-sm hover:scale-105 transition-transform" loading="lazy" />
              ))}
              <img src="/images/Pics/pearl-millet.jpg" alt="Pearl Millet" className="rounded-xl object-cover w-full aspect-square shadow-sm hover:scale-105 transition-transform" loading="lazy" />
            </div>
          </div>

          {/* Edible Flowers Gallery */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center flex items-center justify-center gap-3">
              <Flower2 className="w-8 h-8 text-primary" /> Edible Flowers
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 max-w-6xl mx-auto">
              {Array.from({ length: 7 }).map((_, i) => (
                <img key={`fl-${i}`} src={`/images/Pics/flowers%20(${i + 1}).jpg`} alt={`Edible Flower ${i + 1}`} className="rounded-xl object-cover w-full aspect-square shadow-sm hover:scale-105 transition-transform" loading="lazy" />
              ))}
            </div>
          </div>

          {/* Sprouts Gallery */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center flex items-center justify-center gap-3">
              <Sprout className="w-8 h-8 text-primary" /> Fresh Sprouts
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
              {[1, 2, 4, 5, 6, 8, 9].map((num) => (
                <img key={`sp-${num}`} src={`/images/Pics/sprouts%20(${num}).jpg`} alt={`Sprouts ${num}`} className="rounded-xl object-cover w-full aspect-square shadow-sm hover:scale-105 transition-transform" loading="lazy" />
              ))}
            </div>
          </div>



          {/* Seeds Gallery */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center flex items-center justify-center gap-3">
              <PackageOpen className="w-8 h-8 text-primary" /> Premium Seeds
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
              {Array.from({ length: 11 }).map((_, i) => (
                <img key={`se-${i}`} src={`/images/Pics/seeds%20(${i + 1}).jpg`} alt={`Seeds ${i + 1}`} className="rounded-xl object-cover w-full aspect-square shadow-sm hover:scale-105 transition-transform" loading="lazy" />
              ))}
            </div>
          </div>

          {/* Small Farm Model Gallery */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center flex items-center justify-center gap-3">
              <Home className="w-8 h-8 text-primary" /> Small Farm Model (Home Installation)
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {Array.from({ length: 4 }).map((_, i) => (
                <img key={`hi-${i}`} src={`/images/Pics/home-installation-${i + 1}.jpg`} alt={`Home Installation ${i + 1}`} className="rounded-xl object-cover w-full aspect-[4/3] shadow-sm hover:scale-105 transition-transform" loading="lazy" />
              ))}
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 text-center bg-secondary/10 rounded-3xl p-12 border border-secondary/20"
        >
          <h2 className="text-3xl font-bold mb-4">Interested in our products?</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Get in touch with us for bulk orders, custom requirements, or any questions about our offerings.
          </p>
          <Link href="/contact?type=products">
            <Button size="lg" className="rounded-full px-8 py-6 text-lg font-semibold group">
              Contact Us <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </Section>
    </div>
  );
}
