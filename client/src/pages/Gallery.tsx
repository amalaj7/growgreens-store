import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { SEO } from "@/components/SEO";
import { motion } from "framer-motion";

const galleryImages = [
  { src: "/images/gallery/grow-greens-south-chittoor-ernakulam-microgreen-wholesalers-7e2dwdnuo3.jpg", label: "Fresh Microgreens", category: "Farm" },
  { src: "/images/gallery/grow-greens-south-chittoor-ernakulam-microgreen-wholesalers-d9lg8bkd1g.jpg", label: "Ready to Harvest", category: "Farm" },
  { src: "/images/gallery/grow-greens-south-chittoor-ernakulam-microgreen-wholesalers-h41u9b0zfg.jpg", label: "Growing Trays", category: "Farm" },
  { src: "/images/gallery/grow-greens-south-chittoor-ernakulam-microgreen-wholesalers-feh59rc0fq.jpg", label: "Lush Green Rows", category: "Farm" },
  { src: "/images/gallery/EsbPnzVdmX5sSc7z7DaV.webp", label: "Urban Indoor Farm", category: "Farm" },
  { src: "/images/gallery/grow-greens-south-chittoor-ernakulam-microgreen-wholesalers-7420veu3ud.avif", label: "Microgreen Varieties", category: "Products" },
  { src: "/images/gallery/grow-greens-south-chittoor-ernakulam-microgreen-wholesalers-t4thej3mm8.avif", label: "Packed Fresh", category: "Products" },
  { src: "/images/gallery/grow-greens-south-chittoor-ernakulam-microgreen-wholesalers-x3fw0y4o26.webp", label: "Greens Up Close", category: "Products" },
  { src: "/images/gallery/grow-greens-south-chittoor-ernakulam-microgreen-wholesalers-zqcmeqs43b.webp", label: "Harvest Ready", category: "Products" },
  { src: "/images/gallery/PBlUhUz76t2FA9qq2vu2.webp", label: "Farm Setup", category: "Farm" },
  { src: "/images/gallery/7IHIJhbXEV2zmn4jx9mL.webp", label: "Grow Greens Outlet", category: "Store" },
  { src: "/images/gallery/WxD4SbwuhyEKM5YBV9h4.webp", label: "Retail Display", category: "Store" },

  { src: "/images/gallery/grow-greens-south-chittoor-ernakulam-microgreen-wholesalers-5xrg8g2lnp.jpg", label: "Microgreen Close-up", category: "Products" },
  { src: "/images/gallery/grow-greens-south-chittoor-ernakulam-microgreen-wholesalers-q6o64rgvo9.jpg", label: "Packed Greens", category: "Products" },
  { src: "/images/gallery/grow-greens-south-chittoor-ernakulam-microgreen-wholesalers-zgwxvmt8oc.jpg", label: "Daily Harvest", category: "Farm" },
  { src: "/images/gallery/grow-greens-south-chittoor-ernakulam-microgreen-wholesalers-4t5tu0my5p.avif", label: "Healthy Greens", category: "Products" },
  { src: "/images/gallery/grow-greens-south-chittoor-ernakulam-microgreen-wholesalers-jq2m8jbvl8.avif", label: "Organic Produce", category: "Products" },
  { src: "/images/gallery/grow-greens-south-chittoor-ernakulam-microgreen-wholesalers-kx2ogsayiz.avif", label: "Fresh Batch", category: "Farm" },
  { src: "/images/gallery/grow-greens-south-chittoor-ernakulam-microgreen-wholesalers-15ylsahj05.avif", label: "Microgreen Trays", category: "Farm" },
  { src: "/images/gallery/Microgreens.jpg.webp", label: "Vibrant Microgreens", category: "Products" },
  { src: "/images/gallery/TNIE_import_uploads_user_ckeditor_images_article_2021_10_22_DRTYSH.avif", label: "In The Press", category: "Media" },
  { src: "/images/Pics/sprouts%20(2).jpg", label: "Fresh Sprouts", category: "Products" },
  { src: "/images/Pics/flowers%20(2).jpg", label: "Edible Flowers", category: "Products" },
  { src: "/images/Pics/home-installation-1.jpg", label: "Home Farm Setup", category: "Farm" },
  { src: "/images/Pics/pearl-millet.jpg", label: "Pearl Millet", category: "Products" },
  { src: "/images/ajay-image-5.jpg", label: "Founder in Action", category: "Farm" },
  { src: "/images/Pics/microgreens-varities%20(12).jpg", label: "Assorted Greens", category: "Products" },
];

export default function Gallery() {
  return (
    <div>
      <SEO 
        title="Green Gallery | Urban Microgreens Farm in Kochi, India" 
        description="View our lush microgreens farm in Kochi, Kerala, India. See our fresh daily harvest, growing trays, and premium export-ready organic microgreens."
        keywords="microgreens farm images, organic microgreens kochi kerala, microgreens farm india, fresh microgreens gallery, hydroponic farming india"
        path="/gallery"
      />
      <PageHeader 
        title="Green Gallery" 
        subtitle="A Glimpse into our Urban Farm"
      />

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 6) * 0.08 }}
              className="group relative overflow-hidden rounded-2xl h-80 cursor-pointer shadow-md"
            >
              <img 
                src={item.src} 
                alt={item.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-bold">{item.label}</h3>
                <p className="text-white/80 text-sm">{item.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
}
