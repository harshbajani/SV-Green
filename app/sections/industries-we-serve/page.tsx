import { motion } from "framer-motion";
import { ParallaxHero } from "~/components/ParallaxHero";

export default function IndustriesWeServePage() {
  const blogPosts = [
    {
      title: "The Importance of Waste Management",
      excerpt:
        "Learn why effective waste management is crucial for environmental sustainability.",
      date: "January 15, 2024",
    },
    {
      title: "Circular Economy: The Future of Waste",
      excerpt:
        "Discover how circular economy principles are transforming waste management.",
      date: "February 1, 2024",
    },
    {
      title: "E-Waste: A Growing Concern",
      excerpt:
        "Understanding the challenges and solutions for electronic waste management.",
      date: "February 15, 2024",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <ParallaxHero
        mediaSrc="https://images.unsplash.com/photo-1516937941344-00b4e0337589?w=1920&q=80"
        mediaType="image"
        title="Industries We Serve"
        subtitle="Building a Sustainable Future Together"
      />
    </div>
  );
}
