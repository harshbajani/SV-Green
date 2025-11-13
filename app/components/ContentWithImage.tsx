import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface Props {
  item: string[];
  title: string;
  src: string;
  alt: string;
  reverse: boolean;
}

export const ContentWithImage = ({
  reverse = false,
  item,
  title,
  src,
  alt,
}: Props) => {
  // Type the ref as HTMLElement
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);

  return (
    <section ref={ref} className="py-20 px-4 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div
          className={`flex flex-col ${
            reverse ? "lg:flex-row-reverse" : "lg:flex-row"
          } gap-12 items-center`}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1"
          >
            <h2 className="text-3xl font-bold mb-6">{title}</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              {item.map((text, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                >
                  {text}
                </motion.p>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1"
          >
            <div className="relative group">
              <motion.div
                className="absolute inset-0 bg-brand-600 rounded-lg opacity-20"
                style={{
                  y: imageY,
                  scale: imageScale,
                }}
              />
              <motion.img
                src={src}
                alt={alt}
                style={{
                  y: imageY,
                  scale: imageScale,
                }}
                className="relative rounded-lg shadow-2xl w-full h-auto aspect-square"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
