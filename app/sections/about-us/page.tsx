import { motion } from "framer-motion";
import { Recycle, Shield, Heart, Award } from "lucide-react";
import { ParallaxHero } from "~/components/ParallaxHero";

function AboutSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              className="text-brand-400 font-semibold text-sm uppercase tracking-wider bg-brand-200/30 px-4 py-2 rounded-full"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              We are SV Green
            </motion.span>

            <motion.h2
              className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              GPCB Authorized Waste Recycler
            </motion.h2>

            <motion.div
              className="space-y-4 text-gray-600 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <p>
                The climate adversities call for a change; a change from a
                linear to circular economy wherein waste is not just disposed of
                but recycled for recreating purposes. We, as a leading waste
                management company in Ahmedabad, Gujarat, recognize our
                responsibility not only towards our clients and our workforce
                but our planet as a whole.
              </p>

              <p>
                Driven by the goal of environmental conservation, SV Green
                powers large-scale waste generators with one-stop waste
                management solutions. At present, we are serving 150+ diverse
                manufacturing industries pan India. Our organizational journey
                commenced in 2016, and ever since, we have gone far miles in our
                goal to reinforce recycling.
              </p>

              <p>
                Waste management is a burning problem for various industries;
                hence, we provide convenient strategic waste/scrap management
                solutions for our clients. Whether it is the purchase,
                collection, or disposal of scrap/waste, compliance and service
                remain at the nucleus of our value-added solutions.
              </p>

              <p>
                SV Green - a Pollution Control Board's authorized waste
                recycler, seamlessly mitigates the challenges associated with
                plastic waste management, hazardous waste management, E-waste
                management, and more, for diverse industrial sectors.
              </p>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1597043395098-cc198e08a1e1?w=800&q=80"
                alt="Recycling and sustainability"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-tr from-brand-600/20 to-transparent" />
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, type: "spring" }}
              className="absolute -bottom-6 -left-6 bg-brand-600 text-white px-8 py-4 rounded-xl shadow-xl"
            >
              <div className="text-3xl font-bold">150+</div>
              <div className="text-sm">Industries Served</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Why Choose Us Section
function WhyChooseUs() {
  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Excellent Service",
      description:
        "SV Green endures a deep understanding of the GPCB and CPCB waste management standards. However, one compliance is not enough; thus we stay ahead of the curve by delivering hassle-free services and innovative waste management solutions.",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Our Values",
      description:
        "We ensure transparency, customer satisfaction, innovation, social commitment, integrity, environmental safety, and 100% compliance as a GPCB-approved recycler. SV Green delivers excellence through continuous technology up-gradation and higher service levels.",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Our Commitment",
      description:
        "SV Green is committed to delivering all-inclusive waste management solutions with complete transparent processes adhering to regulatory standards. From pickup to disposal, we pledge for seamless and uninterrupted waste management.",
    },
    {
      icon: <Recycle className="w-8 h-8" />,
      title: "Compliant Services",
      description:
        '"100% PCB compliance" is our motto. Be it certification or recycling processes, we comply with the pollution control board\'s waste management criteria. For clients, it is helpful in meeting their mandatory environmental responsibilities.',
    },
  ];

  return (
    <section className="py-20 px-4 bg-linear-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xl text-brand-400 font-semibold mb-4">
            <span className="bg-brand-200/30 px-4 py-2 rounded-full">
              Why Choose Us?
            </span>
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            One-Stop Waste Management Solution
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow"
            >
              <motion.div
                className="w-16 h-16 bg-brand-600 text-white rounded-xl flex items-center justify-center mb-6"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Impact Section
function ImpactSection() {
  const impacts = [
    {
      image:
        "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&q=80",
      stat: "1800+",
      label: "Empowered Waste Pickers",
      highlight: "1800+",
    },
    {
      image:
        "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&q=80",
      stat: "3,00,000+",
      label: "Tonnes of Dry Waste Handled",
      highlight: "3,00,000+ Tonnes",
    },
    {
      image:
        "https://images.unsplash.com/photo-1538078026987-71b09af8a666?w=600&q=80",
      stat: "7,50,000+",
      label: "Tonnes of CO₂ Equivalent Emissions Diverted",
      highlight: "7,50,000+",
    },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            SV Green Impact
          </h2>
          <p className="text-xl text-gray-600">
            Making social, economic & environmental impact
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {impacts.map((impact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative"
            >
              {/* Image Container */}
              <div className="relative h-80 rounded-2xl overflow-hidden mb-6">
                <motion.img
                  src={impact.image}
                  alt={impact.label}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

                {/* Overlay Text */}
                <motion.div
                  className="absolute bottom-6 left-6 right-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.3 }}
                >
                  <div className="text-4xl font-bold text-white mb-2">
                    <span className="text-brand-50 text-xl bg-brand-200/30 px-4 py-1 rounded-full">
                      {impact.highlight}
                    </span>
                  </div>
                  <p className="text-white text-lg font-medium">
                    {impact.label}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Main Component
export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-white">
      <ParallaxHero
        mediaSrc="https://images.unsplash.com/photo-1682309614473-1b006ce453c9?w=1920&q=80"
        mediaType="image"
        title="About Us"
        subtitle="Building a Sustainable Future Together"
      />

      <AboutSection />
      <WhyChooseUs />
      <ImpactSection />
    </div>
  );
}
