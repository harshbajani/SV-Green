import { motion } from "framer-motion";
import { cn } from "~/lib/utils";

const clients = [
  {
    name: "Sun Pharmaceuticals",
    logo: "/sunpharma.png",
  },
  {
    name: "Zydus Lifesciences",
    logo: "/zyduslife.png",
  },
  {
    name: "Torrent Pharmaceuticals",
    logo: "/torrentpharma.png",
  },
  {
    name: "Cadila Pharmaceuticals",
    logo: "/cadilapharma.png",
  },
  {
    name: "Amul",
    logo: "/amul.png",
  },
  {
    name: "Arvind Limited",
    logo: "/arvind.png",
  },
  {
    name: "Aarti Industries",
    logo: "/aartiindustries.png",
  },
  {
    name: "Nirma Limited",
    logo: "/nirma.png",
  },
  {
    name: "UPL Limited",
    logo: "/upl.png",
  },
  {
    name: "Alembic Pharmaceuticals",
    logo: "/alembicpharmaceuticals.png",
  },
];

// Alternative version with CSS animation for even smoother performance
export function ClientMarqueeCSSVersion({ className }: { className?: string }) {
  const duplicatedClients = [...clients, ...clients, ...clients];

  return (
    <section
      className={cn("py-16 px-4 bg-white border-y border-gray-100", className)}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-brand-400 mb-3">
            Industries We Serve
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Trusted by leading manufacturing companies
          </h2>
          <p className="text-sm text-gray-600">
            Representative companies across sectors we proudly serve
          </p>
        </motion.div>

        {/* Marquee Container */}
        <div className="relative overflow-hidden">
          {/* Gradient overlays */}

          {/* CSS Animation */}
          <style>{`
            @keyframes scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            .animate-scroll {
              animation: scroll 10s linear infinite;
            }
            .animate-scroll:hover {
              animation-play-state: paused;
            }
          `}</style>

          <div className="animate-scroll flex gap-16 items-center">
            {duplicatedClients.map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="shrink-0 w-40 h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center text-xs text-gray-500 mt-8 italic"
        >
          *Representative companies in industries we serve across Gujarat,
          Maharashtra & Rajasthan
        </motion.p>
      </div>
    </section>
  );
}
