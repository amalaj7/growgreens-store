import { Section } from "@/components/Section";
import { SEO } from "@/components/SEO";
import { motion } from "framer-motion";
import { ExternalLink, PlayCircle, Newspaper, Youtube } from "lucide-react";

// The array of News Articles
const newsArticles = [
  {
    title: "The Better India Feature",
    source: "The Better India",
    url: "https://thebetterindia.com/farming/ajay-gopinath-former-banker-microgreens-farming-organic-cultivation-grow-greens-successful-business-10487697",
    description: "Ex-Banker Grows Microgreens in 80 Sq Ft at Home."
  },
  {
    title: "Banker Quits Job to Farm",
    source: "30 Stades",
    url: "https://30stades.com/farming/banker-ajay-gopinath-quits-job-to-grow-microgreens-earns-rs5-lakh-monthly-from-64-sqft-room-7663828",
    description: "Earns Rs 5 Lakh Monthly from 64 Sqft Room."
  },
  {
    title: "Go Microgreen",
    source: "New Indian Express",
    url: "https://www.newindianexpress.com/cities/kochi/2021/Oct/22/go-microgreen-2374176.html",
    description: "The revolution of microgreens in Kerala."
  },
  {
    title: "Kerala Man Grows Microgreens in His Room, Earns 3 Lakh/Month",
    source: "Krishi Jagran",
    url: "https://krishijagran.com/success-story/kerela-man-grows-microgreens-in-his-room-earns-3-lakhmonth-know-how/",
    description: "Success story of a Kerala man earning well from microgreens."
  },
  {
    title: "Kochi Resident Earns Lakhs Farming Microgreens",
    source: "Open Digest",
    url: "https://opendigest.in/kochi-resident-earns-lakhs-farming-microgreens-at-his-80-sqft-room/",
    description: "Earns lakhs farming microgreens at his 80 sqft room."
  },
  {
    title: "Kerala Man Quits Banking Job to Start Growing Microgreens",
    source: "Startup Pedia",
    url: "https://startuppedia.in/farming/kerala-man-quits-banking-job-and-starts-growing-microgreens-in-his-house-clocks-rs-35-lakh-monthly-revenue-8690212",
    description: "Clocks ₹3.5 lakh monthly revenue."
  },
  {
    title: "Kerala Man Earns 3 Lakh/Month Growing Microgreens",
    source: "Country Farms",
    url: "https://countryfarmss.com/news/226_Kerala_Man_Earns_3_LakhMonth_Growing_Microgreens_in_His_Room_Here_is_How_He_Does_It",
    description: "How he does it growing microgreens in his room."
  },
  {
    title: "Ajay Gopinath Built Microgreens Empire",
    source: "Simply Life Tips",
    url: "https://simplylifetips.com/ajay-gopinath-built-microgreens-empire/",
    description: "Building a microgreens empire from scratch."
  },
  {
    title: "Know How A Kerala Man Grows Microgreens",
    source: "See Positive",
    url: "https://seepositive.in/health-wellbeing/know-how-a-kerala-man-grows-microgreens-in-his-room-and-earns-3-lakh-per-month/",
    description: "Grows microgreens in his room and earns 3 Lakh per month."
  }
];

// The array of YouTube Videos
const youtubeVideos = [
  { id: "Dzv4wJr36ao", url: "https://www.youtube.com/watch?v=Dzv4wJr36ao&t=1452s", type: "video" }, // Highlighted First Video
  { id: "lNZMqml-z7k", url: "https://www.youtube.com/watch?v=lNZMqml-z7k&t=194s", type: "video" },
  { id: "YX9cTBm9ByM", url: "https://www.youtube.com/watch?v=YX9cTBm9ByM", type: "video" },
  { id: "8A1XSPJGzkQ", url: "https://www.youtube.com/watch?v=8A1XSPJGzkQ", type: "video" },
  { id: "nqmPoQd1624", url: "https://www.youtube.com/watch?v=nqmPoQd1624&t=598s", type: "video" },
  { id: "kPwKGrTV6bI", url: "https://www.youtube.com/shorts/kPwKGrTV6bI", type: "short" },
  { id: "XQXL_-2obrk", url: "https://www.youtube.com/watch?v=XQXL_-2obrk", type: "video" },
  { id: "uaT2uqeyEOs", url: "https://www.youtube.com/shorts/uaT2uqeyEOs", type: "short" },
  { id: "4FzVOpWw9Sc", url: "https://www.youtube.com/shorts/4FzVOpWw9Sc", type: "short" },
  { id: "cuMiNIbVVDQ", url: "https://www.youtube.com/watch?v=cuMiNIbVVDQ", type: "video" },
  { id: "0b-nyrm2z8w", url: "https://www.youtube.com/shorts/0b-nyrm2z8w", type: "short" },
  { id: "lV8PFKczznU", url: "https://www.youtube.com/shorts/lV8PFKczznU", type: "short" },
  { id: "Fo8vKJYIXkY", url: "https://www.youtube.com/shorts/Fo8vKJYIXkY", type: "short" },
  { id: "f_EBgttpcBs", url: "https://www.youtube.com/watch?v=f_EBgttpcBs", type: "video" },
  { id: "n8-q4B1GRO8", url: "https://www.youtube.com/watch?v=n8-q4B1GRO8&t=2289s", type: "video" },
];

export default function Featured() {
  return (
    <div className="pt-24 min-h-screen">
      <SEO 
        title="Media & Features" 
        description="Read about Grow Greens in various top publications and watch our latest YouTube interviews."
        path="/featured"
      />

      <div className="text-center mb-10 px-4 mt-8 md:mt-12 text-foreground">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            Featured In The Media
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Our journey from banking to sustainable farming has inspired many. 
            Discover the story of our microgreens farm across top publications and news channels.
          </p>
        </motion.div>
      </div>

      {/* YOUTUBE VIDEOS SECTION */}
      <Section bg="light" className="py-12 md:py-20 rounded-t-3xl">
        <div className="flex flex-col items-center mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Youtube className="w-10 h-10 text-red-600" />
            <h2 className="text-4xl font-bold tracking-tight">Media Presence</h2>
          </div>
          <p className="text-muted-foreground">Watch our journey, farming tips, and media coverage</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {youtubeVideos.map((video, i) => {
            return (
              <motion.a
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                key={video.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                whileHover={{ y: -5 }}
                className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 bg-black cursor-pointer flex aspect-video"
              >
                <img
                  src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                  onError={(e) => {
                    // Fallback to hqdefault if maxresdefault doesn't exist
                    e.currentTarget.src = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
                  }}
                  alt={`YouTube thumbnail`}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
                
                {/* Center Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/20 p-4 rounded-full backdrop-blur-sm group-hover:bg-red-600/90 transition-all duration-300 transform group-hover:scale-110 shadow-xl">
                    <PlayCircle className="text-white transition-all duration-300 w-10 h-10" fill="currentColor" />
                  </div>
                </div>

                {/* Tags and content */}
                <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                  <span /> {/* Spacer */}
                  {video.type === "short" && (
                     <span className="bg-white/90 backdrop-blur-md text-slate-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-md flex items-center gap-1 ml-auto">
                        <svg className="w-3 h-3 text-red-600" viewBox="0 0 24 24" fill="currentColor"><path d="M10 14.651L15.467 12 10 9.349v5.302zM12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/></svg>
                        Short
                     </span>
                  )}
                </div>
              </motion.a>
            );
          })}
        </div>
      </Section>

      {/* NEWS ARTICLES SECTION */}
      <Section bg="white" className="py-12 md:py-20 rounded-t-3xl border-t border-border/40">
        <div className="flex flex-col items-center mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Newspaper className="w-10 h-10 text-primary" />
            <h2 className="text-4xl font-bold tracking-tight">In The News</h2>
          </div>
          <p className="text-muted-foreground">Articles and stories covering our success</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsArticles.map((link, i) => (
            <motion.a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white border hover:border-primary/30 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all flex flex-col group h-full relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                 <Newspaper className="w-24 h-24" />
              </div>
              <div className="flex justify-between items-start mb-4 relative z-10">
                <span className="text-[10px] md:text-xs font-bold tracking-wider uppercase text-primary bg-primary/10 px-3 py-1.5 rounded-full">
                  {link.source}
                </span>
                <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors font-sans text-foreground leading-snug relative z-10">
                {link.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mt-auto relative z-10 mb-4">
                {link.description}
              </p>
              
              <div className="mt-auto relative z-10 flex items-center text-primary text-sm font-semibold group-hover:underline">
                Read Article <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </motion.a>
          ))}
        </div>
      </Section>
    </div>
  );
}
