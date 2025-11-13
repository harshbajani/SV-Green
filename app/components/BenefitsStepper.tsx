import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface Props {
  item: { title: string; description: string }[];
  title: string;
}

export const BenefitsStepper = ({ item, title }: Props) => {
  // Correctly type refs
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const circleRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const line = lineRef.current;
    const container = containerRef.current;
    const circles = circleRefs.current.filter(
      (ref): ref is HTMLDivElement => ref !== null
    );

    if (line && container && circles.length > 0) {
      // Animate the line
      gsap.fromTo(
        line,
        { height: "0%" },
        {
          height: "100%",
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "top center",
            end: "bottom center",
            scrub: 1,
          },
        }
      );

      circles.forEach((circle, index) => {
        const numberSpan = circle.querySelector("span");
        if (!numberSpan) return;

        gsap.to(circle, {
          backgroundColor: "#3a5a40", // brand-600
          scale: 1.1,
          scrollTrigger: {
            trigger: circle,
            start: "top center",
            end: "top center-=100",
            toggleActions: "play none none reverse", // This makes it reverse
            scrub: 0.5,
            onEnter: () => {
              numberSpan.style.color = "white";
            },
            onLeaveBack: () => {
              numberSpan.style.color = "#a3b18a";
            },
          },
        });
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [item.length]);

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-brand-50/20">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 lg:sticky lg:top-24 h-fit"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-brand-800">
              {title}
            </h3>
          </motion.div>

          <div ref={containerRef} className="lg:col-span-7 relative">
            {/* Animated Line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-brand-200">
              <div
                ref={lineRef}
                className="absolute top-0 left-0 w-full bg-brand-600"
                style={{ height: "0%" }}
              />
            </div>

            <div className="space-y-12">
              {item.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="relative pl-16"
                >
                  {/* Number Circle with dynamic color - FIXED REF CALLBACK */}
                  <div
                    ref={(el) => {
                      circleRefs.current[index] = el;
                    }}
                    className="absolute left-0 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 bg-white border-2 border-brand-200"
                  >
                    <span className="font-bold text-xl transition-colors duration-300 text-brand-400">
                      {index + 1}
                    </span>
                  </div>

                  {/* Content Card */}
                  <motion.div
                    whileHover={{ x: 8, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-brand-600"
                  >
                    <h5 className="text-xl font-bold mb-3 text-brand-800">
                      {benefit.title}
                    </h5>
                    <p className="text-gray-600">{benefit.description}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
