import { useEffect, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ParallaxHero } from "~/components/ParallaxHero";
import { benefits, expertise, services } from "../../../constants";

gsap.registerPlugin(ScrollTrigger);

// Define props interface for ScrollFloat
interface ScrollFloatProps {
  children: React.ReactNode;
  animationDuration?: number;
  ease?: string;
  scrollStart?: string;
  scrollEnd?: string;
  stagger?: number;
}

// ScrollFloat Component with proper types
const ScrollFloat = ({
  children,
  animationDuration = 1,
  ease = "back.inOut(2)",
  scrollStart = "center bottom+=50%",
  scrollEnd = "bottom bottom-=40%",
  stagger = 0.03,
}: ScrollFloatProps) => {
  // Explicitly type the ref as HTMLSpanElement
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Handle textContent safely with null check
    const chars = element.textContent?.split("") || [];

    // Type parameters in map function
    const html = chars
      .map(
        (char: string, i: number) =>
          `<span style="display: inline-block; opacity: 0; transform: translateY(30px);">${
            char === " " ? "&nbsp;" : char
          }</span>`
      )
      .join("");

    // Use dangerouslySetInnerHTML instead of innerHTML
    element.innerHTML = ""; // Clear first
    element.insertAdjacentHTML("beforeend", html);

    // Type the spans collection properly
    const spans = element.querySelectorAll<HTMLSpanElement>("span");

    gsap.to(Array.from(spans), {
      opacity: 1,
      y: 0,
      duration: animationDuration,
      ease: ease,
      stagger: stagger,
      scrollTrigger: {
        trigger: element,
        start: scrollStart,
        end: scrollEnd,
        toggleActions: "play none none reverse",
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [animationDuration, ease, scrollStart, scrollEnd, stagger, children]);

  return <span ref={ref}>{children}</span>;
};

// Content Section with Synchronized Image Parallax
const ContentWithImage = ({ reverse = false }) => {
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
            <h2 className="text-3xl font-bold mb-6">
              <ScrollFloat stagger={0.02}>Cautious And Reliable</ScrollFloat>{" "}
              <ScrollFloat stagger={0.02}>
                Hazardous waste management company in Ahmedabad
              </ScrollFloat>
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              {[
                "Waste that is harmful to human health and the environment is classified as hazardous. We are a reliable hazardous waste recycler in Ahmedabad, Gujarat, extending an efficacious treatment process that aligns with your industrial waste handling needs.",
                "Recycling Hub is a GPCB approved hazardous waste recycler in Ahmedabad that has earned the stature of the most trusted, owing to our unparalleled services and a well-trained team.",
                "We take time to understand the requirement of businesses, industrial behemoths and government agencies to cater to their distinctive needs. Furthermore, we take responsibility for your hazardous waste from collection to recycling.",
                "As a Hazardous waste management company in Gujarat, we offer a complete range of environmental services, including waste collection, recycling compliances, EHS inspections, and other internal waste management services.",
                "With our regulatory compliance for hazardous waste, you can rest assured of the safety of humans, infrastructure, and the environment.",
              ].map((text, i) => (
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
                src="https://images.unsplash.com/vector-1756301725624-51f2d520387f?w=800&q=80"
                alt="Industrial waste barrels and hazardous materials"
                style={{
                  y: imageY,
                  scale: imageScale,
                }}
                className="relative rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Services Grid with Enhanced Hover Effects
const ServicesGrid = () => {
  return (
    <section className="py-20 px-4 bg-brand-50/30">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <ScrollFloat stagger={0.03}>
              Hazardous Waste Management Services
            </ScrollFloat>
          </h2>
          <p className="text-gray-700 max-w-4xl mx-auto">
            As a{" "}
            <span className="font-semibold text-brand-600">
              GPCB approved hazardous waste recycler
            </span>
            , our recycling and disposal service spectrum encompasses
            industrial, commercial, and other hazardous waste like used
            batteries, electronics, and cleaning products.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                y: -12,
                scale: 1.03,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-brand-600 h-full relative overflow-hidden group cursor-pointer"
            >
              {/* Animated gradient background on hover */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileHover={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 bg-gradient-to-br from-brand-600/5 via-brand-400/5 to-brand-600/5 opacity-0 group-hover:opacity-100"
              />

              {/* Shine effect on hover */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100"
                initial={{ x: "-100%" }}
                whileHover={{
                  x: "100%",
                  transition: { duration: 0.6, ease: "easeInOut" },
                }}
              >
                <div className="h-full w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
              </motion.div>

              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1 + 0.2,
                  type: "spring",
                  stiffness: 200,
                }}
                className="w-12 h-12 bg-brand-600 rounded-full flex items-center justify-center mb-4 relative z-10 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-md group-hover:shadow-lg"
              >
                <span className="text-white font-bold text-xl">
                  {index + 1}
                </span>
              </motion.div>

              <h3 className="font-bold text-lg mb-3 text-brand-800 relative z-10 group-hover:text-brand-600 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm relative z-10 group-hover:text-gray-700 transition-colors duration-300">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Expertise Section with Parallax
const ExpertiseSection = () => {
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
              <ScrollFloat stagger={0.04}>Our Expertise</ScrollFloat>
            </h3>
            <ul className="space-y-4">
              {expertise.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3 group"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5, type: "spring" }}
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
            <div className="relative group">
              <motion.div
                className="absolute inset-0 bg-brand-400 rounded-lg opacity-30"
                style={{ y: imageY }}
              />
              <motion.img
                src="https://images.unsplash.com/photo-1697698449698-2f2696edcd4e?w=800&q=80"
                alt="Waste recycling facility operations"
                style={{ y: imageY }}
                className="relative rounded-lg shadow-2xl w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Benefits Stepper with Reversible Dynamic Coloring
const BenefitsStepper = () => {
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

      // Animate each circle to get color when line reaches it - WITH REVERSE
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
  }, [benefits.length]);

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
              <ScrollFloat stagger={0.03}>
                Benefits of our Hazardous Scrap Management
              </ScrollFloat>
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
              {benefits.map((benefit, index) => (
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

// Main Component
const HazardousWastePage = () => {
  return (
    <div className="bg-white">
      <ParallaxHero
        mediaSrc="https://images.unsplash.com/photo-1751453875319-660527493daa?w=1920&q=80"
        mediaType="image"
        title="Hazardous Waste Management"
        subtitle="Building a Sustainable Future Together"
      />
      <ContentWithImage />
      <ServicesGrid />
      <ExpertiseSection />
      <BenefitsStepper />
    </div>
  );
};

export default HazardousWastePage;
