import { Experience } from "@/lib/data";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

export default function ExperienceCard({ experience, index }: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="group relative flex flex-col h-full bg-card border border-border/40 overflow-hidden hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 ease-out"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={experience.image}
          alt={experience.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs uppercase tracking-wider font-medium text-foreground">
          {experience.category}
        </div>
      </div>

      <div className="flex flex-col flex-grow p-8">
        <div className="flex items-center space-x-4 text-xs text-muted-foreground mb-4 font-medium uppercase tracking-wide">
          <div className="flex items-center">
            <MapPin className="w-3 h-3 mr-1" />
            {experience.location}
          </div>
          <div className="w-1 h-1 bg-muted-foreground rounded-full" />
          <div className="flex items-center">
            <Clock className="w-3 h-3 mr-1" />
            {experience.duration}
          </div>
        </div>

        <h3 className="text-2xl font-serif font-medium mb-3 group-hover:text-primary transition-colors">
          {experience.title}
        </h3>

        <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
          {experience.description}
        </p>

        <div className="flex items-center justify-end mt-auto pt-6 border-t border-border/50">
          <Button variant="ghost" className="p-0 hover:bg-transparent hover:text-primary group/btn">
            Details <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
