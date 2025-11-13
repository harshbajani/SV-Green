import { useRef } from "react";
import ScrollFloat from "./react-bits/ScrollFloat";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

interface Props {
  title: string;
  item: string[];
  src: string;
  alt: string;
}

export const ExpertiseSection = ({ title, item, src, alt }: Props) => {
  // Type the ref
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section ref={ref} className="py-20 px-4 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <h3 className="text-3xl font-bold mb-8 text-brand-800">
              <ScrollFloat stagger={0.04}>{title}</ScrollFloat>
            </h3>
            <ul className="space-y-4">
              {item.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3 group"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5, type: "tween" }}
                    className="w-8 h-8 bg-brand-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:shadow-lg"
                  >
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </motion.div>
                  <span className="text-gray-700 group-hover:text-brand-800 transition-colors duration-200 group-hover:translate-x-1 inline-block transition-transform">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1"
          >
            <div className="relative group overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-brand-400 rounded-lg opacity-30"
                style={{ y: imageY }}
              />
              <motion.img
                src={src}
                alt={alt}
                style={{ y: imageY }}
                className="relative rounded-lg shadow-2xl w-full h-full aspect-square object-cover hover:scale-110 duration-200 transition-all"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
