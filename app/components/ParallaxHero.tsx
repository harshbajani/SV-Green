import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SplitText from "./react-bits/SplitText";

interface Props {
  mediaSrc: string;
  mediaType: "image" | "video";
  title: string;
  subtitle: string;
}

// Reusable Hero Component with Parallax Effect
export function ParallaxHero({
  mediaSrc,
  mediaType = "image",
  title,
  subtitle,
}: Props) {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // keep parallax for background only
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div ref={heroRef} className="relative h-[70vh] overflow-hidden">
      {/* Background Media with Parallax */}
      <motion.div style={{ y }} className="absolute inset-0 w-full h-full">
        {mediaType === "video" ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={mediaSrc} type="video/mp4" />
          </video>
        ) : (
          <img
            src={mediaSrc}
            alt="Hero background"
            className="w-full h-full object-cover"
          />
        )}
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
      </motion.div>

      {/* Content (STATIC relative to scroll) */}
      <div className="relative h-full flex items-center justify-center z-10 pointer-events-none">
        <div className="text-center text-white px-4 pointer-events-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-2"
          >
            <SplitText
              text={title}
              delay={80}
              duration={0.8}
              ease="power3.out"
              splitType="words, chars"
              from={{ opacity: 0, y: 50, rotateX: -90 }}
              to={{ opacity: 1, y: 0, rotateX: 0 }}
              threshold={0.1}
              rootMargin="0px"
              textAlign="center"
              className="pb-2"
            />
          </motion.h1>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-200"
            >
              <SplitText
                text={subtitle}
                delay={80}
                duration={0.8}
                ease="power3.out"
                splitType="words, chars"
                from={{ opacity: 0, y: 50, rotateX: -90 }}
                to={{ opacity: 1, y: 0, rotateX: 0 }}
                threshold={0.1}
                rootMargin="0px"
                textAlign="center"
              />
            </motion.p>
          )}
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1 h-2 bg-white rounded-full" />
        </motion.div>
      </motion.div>
    </div>
  );
}
