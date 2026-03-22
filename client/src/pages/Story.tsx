import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { SEO } from "@/components/SEO";
import heroImg from "/images/hero_microgreens.jpg";
import founderImg from "/images/ajay-image.webp";

export default function Story() {
  return (
    <div>
      <SEO 
        title="Our Story" 
        description="From corporate banking to urban farming. Learn about Ajay Gopinath's journey and the philosophy behind Grow Greens."
        path="/story"
      />
      <PageHeader 
        title="Our Story" 
        subtitle="From Corporate Banking to Urban Farming"
        image={heroImg}
      />

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="relative lg:sticky lg:top-24">
            <div className="absolute -inset-4 bg-secondary/30 rounded-3xl transform -rotate-3 z-0" />
            <img 
              src={founderImg} 
              alt="Ajay Gopinath Founder" 
              className="relative z-10 rounded-2xl shadow-xl w-full"
            />
          </div>
          
          <div>
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">The Founder</span>
            <h2 className="text-4xl mb-6 text-foreground">Meet Ajay Gopinath</h2>
            <div className="prose prose-lg text-muted-foreground">
              <p>
                A single meal at a Bengaluru restaurant changed everything for Ajay Gopinath. Sitting across a beautifully plated dish garnished with vibrant microgreens, he found himself captivated — not just by how they looked, but by what they represented. These tiny greens, bursting with nutrients, opened a window into a world he had never imagined pursuing. That evening planted a seed that would eventually grow into Grow Greens.
              </p>
              
              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">The Leap: Learning Before Launching</h3>
              <p>
                Back in 2017–18, while still figuring out his next chapter, Ajay didn't rush into business — he immersed himself in learning. He converted a small corner of his home into a personal research lab, growing microgreens tray by tray, variety by variety. Over two dedicated years, he studied their biology, nutritional profiles, and ideal growing conditions. He sourced non-GMO seeds with care, tested soil-free growing methods, and refined every variable until he could consistently produce greens that were as healthy as they were beautiful.
              </p>
              
              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">Growing a Brand from 80 Square Feet</h3>
              <p>
                When Ajay felt ready, he turned a modest 80-square-foot room at home into Grow Greens' first commercial farm. With over 15 varieties on offer — from tender pea shoots and crisp radish greens to fragrant cilantro and hearty kale — he was soon producing around 5 kg of fresh microgreens every single day, all without a single drop of pesticide.
              </p>
              <p>
                Word spread quickly. Consumers who discovered Grow Greens kept coming back, drawn in by consistent quality and genuine care behind every tray. The brand grew from a home setup to a recognized name across Kerala — and then beyond, with franchise outlets now operating in Chennai and Bengaluru. Today, monthly revenues range between ₹22 lakh and ₹73 lakh, a testament to what passion and persistence can build.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section bg="light">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl mb-8 text-center text-foreground">What Made the Difference?</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg max-w-3xl mx-auto">
            Behind every great business is a set of quiet decisions made consistently over time. Here's what truly set Ajay and Grow Greens apart:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-background p-8 rounded-2xl shadow-sm border border-border/50 transition-all hover:shadow-md">
              <h3 className="text-xl font-bold mb-3 text-primary">A Genuine Love for What He Does</h3>
              <p className="text-muted-foreground">
                Ajay never treated Grow Greens as just a business opportunity. From day one, his drive was rooted in a sincere belief that people deserve cleaner, more nutritious food. That authenticity shows in every tray he grows — and it's something customers can feel.
              </p>
            </div>
            
            <div className="bg-background p-8 rounded-2xl shadow-sm border border-border/50 transition-all hover:shadow-md">
              <h3 className="text-xl font-bold mb-3 text-primary">Two Years of Quiet, Committed Research</h3>
              <p className="text-muted-foreground">
                Rather than rushing to market, Ajay spent years getting it right. His methodical approach to R&D meant that when he did launch, his processes were polished and his product was ready — not just good enough, but genuinely excellent.
              </p>
            </div>
            
            <div className="bg-background p-8 rounded-2xl shadow-sm border border-border/50 transition-all hover:shadow-md">
              <h3 className="text-xl font-bold mb-3 text-primary">Zero Compromise on Quality</h3>
              <p className="text-muted-foreground">
                Whether it's the seed variety he selects or the humidity inside his grow rooms, Ajay treats every detail as important. That uncompromising standard has become Grow Greens' most powerful differentiator in a crowded market.
              </p>
            </div>
            
            <div className="bg-background p-8 rounded-2xl shadow-sm border border-border/50 transition-all hover:shadow-md">
              <h3 className="text-xl font-bold mb-3 text-primary">The Courage to Walk Away from Comfort</h3>
              <p className="text-muted-foreground">
                Leaving a well-paying career in banking is not a small thing. Ajay weighed the risks, trusted his conviction, and made the call. His story is a reminder that the most rewarding paths often begin with the hardest choices.
              </p>
            </div>
            
            <div className="bg-background p-8 rounded-2xl shadow-sm border border-border/50 md:col-span-2 md:w-2/3 md:mx-auto transition-all hover:shadow-md">
              <h3 className="text-xl font-bold mb-3 text-primary text-center">Smart, Steady Growth</h3>
              <p className="text-muted-foreground text-center">
                Ajay didn't try to scale overnight. He expanded deliberately — one franchise at a time — making sure every new location upheld the same standards as the original. That patience is one of the reasons Grow Greens has grown as far as it has.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl mb-6 text-foreground">More Than a Business</h2>
          <div className="prose prose-lg text-muted-foreground mx-auto">
            <p>
              Grow Greens was never just about selling greens. Ajay envisioned it as an invitation — for families, home cooks, and health-conscious individuals — to reconnect with what they eat. Microgreens, when consumed fresh and raw, retain a nutritional density that far surpasses their mature counterparts. Rich in vitamins, enzymes, and antioxidants, they're a small addition to a daily meal that can make a profound difference. Through Grow Greens, Ajay continues to push that message forward — one tray at a time.
            </p>
          </div>
        </div>
      </Section>

      <Section bg="light">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl mb-12">Our Philosophy</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-3xl shadow-sm">🌱</div>
              <h3 className="text-xl font-bold mb-3 text-foreground">100% Organic</h3>
              <p className="text-muted-foreground text-sm">Non-GMO seeds, no pesticides, just pure nature.</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-3xl shadow-sm">💧</div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Soil-less</h3>
              <p className="text-muted-foreground text-sm">Hydroponic techniques that save water and space.</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-3xl shadow-sm">❤️</div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Passion First</h3>
              <p className="text-muted-foreground text-sm">Grown with care and attention to every tray.</p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
