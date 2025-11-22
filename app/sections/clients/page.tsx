import { motion } from "framer-motion";
import { easeOut } from "framer-motion";
import { ParallaxHero } from "~/components/ParallaxHero";

const clients = [
  { name: "Sun Pharmaceuticals", logo: "/sunpharma.png" },
  { name: "Zydus Lifesciences", logo: "/zyduslife.png" },
  { name: "Torrent Pharmaceuticals", logo: "/torrentpharma.png" },
  { name: "Cadila Pharmaceuticals", logo: "/cadilapharma.png" },
  { name: "Amul", logo: "/amul.png" },
  { name: "Arvind Limited", logo: "/arvind.png" },
  { name: "Aarti Industries", logo: "/aartiindustries.png" },
  { name: "Nirma Limited", logo: "/nirma.png" },
  { name: "UPL Limited", logo: "/upl.png" },
  { name: "Alembic Pharmaceuticals", logo: "/alembicpharmaceuticals.png" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 25, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.45,
      ease: easeOut, // ✔ FIX
    },
  },
};

export default function ClientPage() {
  return (
    <>
      <ParallaxHero
        mediaSrc="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1920&q=80"
        mediaType="image"
        title="Clients"
        subtitle="Clients with whom we have worked till now"
      />
      <section className="min-h-screen py-20 bg-brand-50/20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <p className="text-sm tracking-[0.25em] text-brand-400 uppercase font-semibold">
              Our Clients
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-brand-800 mt-3">
              Trusted By Industry Leaders
            </h1>
            <p className="text-gray-600 text-sm max-w-xl mx-auto mt-4">
              We are proud to work with some of the most respected
              manufacturing, pharmaceutical, textile, dairy, and FMCG companies
              across India.
            </p>
          </motion.div>

          {/* Animated Grid */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10"
          >
            {clients.map((client, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{
                  scale: 1.08,
                  rotate: 1,
                  transition: { type: "spring", stiffness: 200, damping: 12 },
                }}
                className="bg-white group rounded-xl border border-brand-200 p-6 shadow-sm hover:shadow-md hover:border-brand-600 transition-all cursor-pointer"
              >
                <div className="h-20 flex items-center justify-center transition-all duration-300">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-full object-contain"
                  />
                </div>
                <p className="text-center mt-4 text-sm text-brand-800 font-medium group-hover:text-brand-600 transition-colors">
                  {client.name}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Footer text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="text-center text-xs text-gray-500 mt-10 italic"
          >
            *Our clients span across Gujarat, Maharashtra & Rajasthan
          </motion.p>
        </div>
      </section>
    </>
  );
}
