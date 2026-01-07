import { motion } from "framer-motion";
import { Wind, Compass, Heart } from "lucide-react";

const features = [
  {
    icon: Wind,
    title: "Gentle Pacing",
    description: "No rush, no tight schedules. Just enough time to finish your book and watch the sunset over the hills.",
  },
  {
    icon: Compass,
    title: "Handpicked Stays",
    description: "We only visit places where the hosts know your name and the coffee is always fresh.",
  },
  {
    icon: Heart,
    title: "Kind to the Soul",
    description: "Experiences designed to leave you feeling lighter and more connected to the world around you.",
  },
];

export default function FeatureSection() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">The Jibello Philosophy</h2>
          <p className="text-muted-foreground">
            Travel isn't just about where you go. It's about who you become along the way.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center mb-6 shadow-sm text-primary">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-medium mb-3">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
