import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import ExperienceCard from "@/components/home/ExperienceCard";
import FeatureSection from "@/components/home/FeatureSection";
import Newsletter from "@/components/home/Newsletter";
import Footer from "@/components/layout/Footer";
import { experiences } from "@/lib/data";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      
      <main>
        <Hero />
        
        <section className="py-24 container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="max-w-xl">
              <span className="text-primary text-sm font-bold uppercase tracking-widest mb-2 block">Mindful Travel Destinations</span>
              <h2 className="text-4xl md:text-5xl font-serif">Intentional Travel Destinations</h2>
            </div>
            <a href="#" className="hidden md:block text-sm font-medium border-b border-foreground/30 pb-1 hover:border-foreground transition-colors">
              View All Destinations
            </a>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {experiences.map((exp, idx) => (
              <ExperienceCard key={exp.id} experience={exp} index={idx} />
            ))}
          </div>
          
          <div className="mt-12 text-center md:hidden">
            <a href="#" className="text-sm font-medium border-b border-foreground/30 pb-1 hover:border-foreground transition-colors">
              View All Destinations
            </a>
          </div>
        </section>

        <FeatureSection />
        
        <Newsletter />
      </main>

      <Footer />
    </div>
  );
}
