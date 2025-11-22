import {
  eWaste,
  eWasteProcess,
  eWasteServices,
  whyRecycle,
} from "../../../../constants";
import { ContentWithImage } from "~/components/ContentWithImage";
import { ParallaxHero } from "~/components/ParallaxHero";
import { ServicesGrid } from "~/components/ServicesGrid";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import ScrollFloat from "~/components/react-bits/ScrollFloat";
import { useRef } from "react";
import { BenefitsStepper } from "~/components/BenefitsStepper";
import { RecycleHub } from "~/components/RecycleHub";
import IndustriesServed from "~/components/IndustryServed";

const EWasteManagementPage = () => {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <div className="bg-white">
      <ParallaxHero
        mediaSrc="https://images.unsplash.com/photo-1759500657339-6e11b99a8882?w=1920&q=80"
        mediaType="image"
        title="E-Waste Manegement"
        subtitle="Building a Sustainable Future Together"
      />
      <ContentWithImage
        item={eWaste}
        reverse={false}
        title="Top-Notch E-Waste Recycler In Gujarat"
        src="https://images.unsplash.com/photo-1637773339519-679b29199c18?w=800&q=80"
        alt="E-Waste"
      />
      <ServicesGrid
        item={eWasteServices}
        src="/electronic-waste.png"
        alt="E-Waste"
        title="Benefits Of E-waste Management Services"
        description="E-waste recycling is good for the environment and your business's bottom line. When you associate your business with us for E-waste recycling, you tap into umpteen benefits; to name a few:"
      />

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
                <ScrollFloat stagger={0.04}>
                  Do's and Don'ts of E-Waste Management Services
                </ScrollFloat>
              </h3>
              <h4 className="text-muted-foreground text-xl font-medium mb-4">
                Do's
              </h4>
              <ul className="space-y-4">
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  className="flex flex-col items-start gap-3 group"
                >
                  <div className="flex items-center gap-4">
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
                      Check the product catalog for end-of-life equipment
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
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
                      Ensure to have an authorized E waste recycler
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
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
                      Discount the battery from the product
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
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
                      Use a glass surface that protects against breakage
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
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
                      Recycle electronics reaching the end of life
                    </span>
                  </div>
                </motion.li>
              </ul>

              <h4 className="text-muted-foreground text-xl font-medium my-4">
                Don'ts
              </h4>
              <ul className="space-y-4">
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  className="flex items-center gap-3 group"
                >
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-center gap-4">
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
                        Never dismantle electronic products on your own
                      </span>
                    </div>
                    <div className="flex items-center gap-4">
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
                        Don’t throw electronics with the sign ‘Do not dispose of
                        it’
                      </span>
                    </div>
                    <div className="flex items-center gap-4">
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
                        Do not dispose of with municipal waste as it reaches
                        landfills
                      </span>
                    </div>
                    <div className="flex items-center gap-4">
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
                        Never give your e waste to a local scrap dealer or
                        ragpickers
                      </span>
                    </div>
                  </div>
                </motion.li>
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
                  src="https://images.unsplash.com/photo-1614201756100-1ccde6a6589e?w=800&q=80"
                  alt="E-waste"
                  style={{ y: imageY }}
                  className="relative rounded-lg shadow-2xl w-full h-full aspect-square object-cover hover:scale-110 duration-200 transition-all"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <BenefitsStepper
        title="E-Waste Management Process"
        item={eWasteProcess}
      />
      <RecycleHub
        title="Why SV Green for Plastic Waste Disposal?"
        description="SV Green is a trustworthy, hazardous waste management company that takes care of your hazardous scrap compliance-related needs so that you can focus on your essential business operations. We believe in offering the best customer satisfaction. Therefore, our expert staff promptly answers your queries to work with you on your waste disposal and recycling requirements."
        src="/electronic-waste.png"
        alt="electronic Waste"
        item={whyRecycle}
      />
      <IndustriesServed />
    </div>
  );
};

export default EWasteManagementPage;
