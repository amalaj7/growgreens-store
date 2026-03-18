import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { 
  Leaf, Home, Sprout, Nut, Droplets, Wheat, Carrot, 
  Settings, Box, PackageOpen, Layers, Flower2
} from "lucide-react";
import { easeIn, motion } from "framer-motion";

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
      </Section>
    </div>
  );
}
