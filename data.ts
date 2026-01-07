import saganaImg from "@assets/generated_images/sagana_river_wellness_retreat.png";
import forestImg from "@assets/generated_images/secluded_forest_retreat_cabin.png";
import hikingImg from "@assets/generated_images/high-altitude_hiking_experience_mount_kenya.png";
import ngareImg from "@assets/generated_images/ngare_ndare_forest_waterfalls.png";
import lamuImg from "@assets/generated_images/lamu_coastal_tranquility.png";
import chyuluImg from "@assets/generated_images/chyulu_hills_volcanic_peaks.png";

export interface Experience {
  id: string;
  title: string;
  location: string;
  duration: string;
  price?: string;
  image: string;
  category: "Boutique Retreats" | "Weekend Getaways" | "Adventure & Outdoor" | "Hiking & Mountaineering";
  description: string;
}

export const experiences: Experience[] = [
  {
    id: "1",
    title: "Sagana River Retreat",
    location: "Sagana, Kenya",
    duration: "4 Days",
    image: saganaImg,
    category: "Boutique Retreats",
    description: "Riverside serenity with gentle hikes, guided nature walks, and opportunities for reflection. Perfect for mindful adventurers seeking calm away from the crowds.",
  },
  {
    id: "2",
    title: "Camp Dunda Escape",
    location: "Embu, Kenya",
    duration: "3 Days",
    image: forestImg,
    category: "Weekend Getaways",
    description: "Luxury wilderness lodge with panoramic hill views, curated nature experiences, and quiet mornings. Ideal for private retreats and explorers who value comfort.",
  },
  {
    id: "3",
    title: "Ngare Ndare Forest",
    location: "Laikipia, Kenya",
    duration: "2 Days",
    image: ngareImg,
    category: "Adventure & Outdoor",
    description: "Immerse yourself in waterfalls, turquoise pools, and canopy walks. A serene forest escape designed for restoration and mindful exploration.",
  },
  {
    id: "4",
    title: "Lamu Coastal Escape",
    location: "Lamu Island, Kenya",
    duration: "5 Days",
    image: lamuImg,
    category: "Boutique Retreats",
    description: "Secluded beaches, Swahili culture, and traditional dhow sailing. Ideal for luxury travelers seeking tranquility and mindful coastal experiences.",
  },
  {
    id: "5",
    title: "Chyulu Hills Journey",
    location: "Tsavo, Kenya",
    duration: "4 Days",
    image: chyuluImg,
    category: "Hiking & Mountaineering",
    description: "Rolling volcanic hills offering hiking, horseback riding, and panoramic views. Ideal for explorers seeking serenity and adventure.",
  },
  {
    id: "6",
    title: "Mount Kenya Alpine",
    location: "Mount Kenya, Kenya",
    duration: "6 Days",
    image: hikingImg,
    category: "Hiking & Mountaineering",
    description: "A refined hiking experience through glacial valleys and rare alpine moorlands, far from the mass tourism paths.",
  },
];
