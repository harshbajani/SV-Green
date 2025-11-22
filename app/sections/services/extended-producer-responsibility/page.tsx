import { ParallaxHero } from "~/components/ParallaxHero";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  EPRProcess,
  EPRServices,
  eprServices,
  extendedProducerResponsibility,
  whyRecycle,
} from "../../../../constants";
import { ServicesGrid } from "~/components/ServicesGrid";
import { ExpertiseSection } from "~/components/ExpertiseSection";
import { BenefitsStepper } from "~/components/BenefitsStepper";
import { RecycleHub } from "~/components/RecycleHub";
import IndustriesServed from "~/components/IndustryServed";

const ExtendedProducerResponsibilityPage = ({ reverse = false }) => {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);
  return (
    <div className="bg-white">
      <ParallaxHero
        mediaSrc="https://images.unsplash.com/photo-1679998873820-fb46bb66dfe2?w=1920&q=80"
        mediaType="image"
        title="Extended Producer Responsibility"
        subtitle="Building a Sustainable Future Together"
      />
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
                GPCB Approved EPR Agency in Gujarat
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed mb-6">
                {extendedProducerResponsibility.map((text, i) => (
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
              <h2 className="text-3xl font-bold mb-6">EPR Process</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <h2 className="text-muted-foreground text-lg font-semibold">
                  Registration And Preparation Of EPR Plan
                </h2>
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                >
                  According to the plastic waste management regulations, the
                  companies that use plastic packaging must register as
                  Producers, Importers, or Brand owners. These companies must
                  offer an EPR action plan. The plan should contain the type and
                  qualities of plastic waste and how to collect and process
                  plastic waste with implementing partners. We are a CPCB
                  registered recycler and EPR agency in Gujarat that offers the
                  best support for collection and recycling plastic waste.
                </motion.p>
                <h2 className="text-muted-foreground text-lg font-semibold">
                  Implementation Of EPR Plan
                </h2>
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                >
                  In this phase, collection, recycling, transportation, and
                  disposal of plastic waste take place. After the trash is
                  collected, quality is set up based on relevant criteria in the
                  EPR plan. Moreover, the record is maintained for each activity
                  for quarterly filings. We are Gujarat’s best EPR service
                  provider to facilitate a reverse collection mechanism.
                </motion.p>
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
                  src="https://images.unsplash.com/photo-1582748298043-0c0d31aa506e?w=1920&q=80"
                  alt="Electronic waste"
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
      <ServicesGrid
        item={eprServices}
        src="/electronic-waste.png"
        alt="Electronic Waste"
        title="EPR Services"
        description="In our long working history as a CPCB approved EPR agency in Ahmedabad, we have provided our clients with the best services pertaining to plastic recycling. We help develop an extensive collection network that adds consumer and informal sectors."
      />
      <ExpertiseSection
        title="Benefits Of Our Plastic Waste Management Services"
        item={EPRServices}
        src="https://images.unsplash.com/photo-1744306424453-9757bed1e4b2?w=800&q=80"
        alt="Waste recycling facility operations"
      />
      <BenefitsStepper
        title="Extended Producer Responsibility (EPR) Strategy"
        item={EPRProcess}
      />
      <RecycleHub
        title="Why SV Green for Plastic Waste Disposal?"
        description="SV Green is a trustworthy, hazardous waste management company that takes care of your hazardous scrap compliance-related needs so that you can focus on your essential business operations. We believe in offering the best customer satisfaction. Therefore, our expert staff promptly answers your queries to work with you on your waste disposal and recycling requirements."
        src="/electronic-waste.png"
        alt="Electronic Waste"
        item={whyRecycle}
      />
      <IndustriesServed />
    </div>
  );
};

export default ExtendedProducerResponsibilityPage;
