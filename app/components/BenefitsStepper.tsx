import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  item: { title: string; description: string }[];
  title: string;
}

export const BenefitsStepper = ({ item, title }: Props) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const cards = cardRefs.current.filter(
      (ref): ref is HTMLDivElement => ref !== null
    );

    if (!section || cards.length === 0) return;

    cards.forEach((card, index) => {
      const numberCircle = card.querySelector(".number-circle");

      // Initial state - cards start below and invisible
      gsap.set(card, {
        y: 100,
        opacity: 0,
      });

      // Card entrance animation from bottom
      gsap.to(card, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top bottom-=100",
          end: "top center",
          toggleActions: "play none none reverse",
        },
      });

      // Number circle color change
      if (numberCircle) {
        gsap.to(numberCircle, {
          backgroundColor: "#3a5a40",
          borderColor: "#3a5a40",
          scale: 1.1,
          scrollTrigger: {
            trigger: card,
            start: "top center+=100",
            end: "bottom center",
            toggleActions: "play none none reverse",
            onEnter: () => {
              const span = numberCircle.querySelector("span");
              if (span) span.style.color = "white";
            },
            onLeaveBack: () => {
              const span = numberCircle.querySelector("span");
              if (span) span.style.color = "#a3b18a";
            },
          },
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [item.length]);

  return (
    <section
      ref={sectionRef}
      className="py-20 px-4 bg-linear-to-b from-white to-brand-50/20"
    >
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h3 className="text-4xl md:text-5xl font-bold text-brand-800 mb-4">
            {title}
          </h3>
          <p className="text-gray-600 text-lg">Our comprehensive process</p>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {item.map((benefit, index) => (
            <div
              key={index}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              className="flex flex-col items-center"
            >
              {/* Number Circle */}
              <div className="number-circle w-20 h-20 rounded-full flex items-center justify-center shadow-xl transition-all duration-500 bg-white border-4 border-brand-200 mb-6">
                <span className="font-bold text-3xl transition-colors duration-500 text-brand-400">
                  {index + 1}
                </span>
              </div>

              {/* Content Card */}
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="content-card bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-brand-600 h-full w-full"
              >
                <h5 className="text-xl font-bold mb-3 text-brand-800">
                  {benefit.title}
                </h5>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
