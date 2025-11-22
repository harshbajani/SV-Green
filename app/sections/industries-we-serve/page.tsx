import { industries } from "../../../constants";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { ParallaxHero } from "~/components/ParallaxHero";

function IndustryCard({
  industry,
  index,
}: {
  industry: (typeof industries)[0];
  index: number;
}) {
  const Icon = industry.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative h-full"
    >
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"
        style={{ backgroundColor: industry.color }}
      />

      {/* Main card */}
      <div className="relative h-full rounded-2xl bg-white border-2 border-gray-100 overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300">
        {/* Top bar */}
        <div
          className="h-1.5 w-full"
          style={{ backgroundColor: industry.color }}
        />

        {/* Content */}
        <div className="p-6">
          {/* Icon */}
          <motion.div
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center justify-center w-14 h-14 rounded-xl shadow-lg mb-4 group-hover:shadow-xl transition-shadow"
            style={{ backgroundColor: industry.color }}
          >
            <Icon className="w-7 h-7 text-white" strokeWidth={2} />
          </motion.div>

          {/* Title */}
          <h3 className="text-xl font-bold mb-3 text-gray-900">
            {industry.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            {industry.description}
          </p>

          {/* Services */}
          <div className="space-y-2">
            {industry.services.map((service, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <CheckCircle2
                  className="w-4 h-4 mt-0.5 shrink-0"
                  style={{ color: industry.color }}
                />
                <span className="text-xs text-gray-600">{service}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Corner accent */}
        <div
          className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full opacity-10 group-hover:opacity-20 transition-opacity"
          style={{ backgroundColor: industry.color }}
        />
      </div>
    </motion.div>
  );
}

function IndustriesGrid() {
  return (
    <section className="py-20 px-4 bg-linear-to-b from-white via-brand-50/30 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-green-50 to-emerald-50 border border-green-200 mb-6"
          >
            <Sparkles className="w-4 h-4 text-green-600" />
            <span className="text-xs font-semibold tracking-wider uppercase text-green-700">
              Serving 12+ Industries
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="text-gray-900">Trusted waste partner across </span>
            <span className="bg-linear-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              diverse manufacturing sectors
            </span>
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed">
            From pharmaceuticals to automotive, textiles to electronics—
            <span className="font-semibold text-gray-900">
              {" "}
              we understand your industry's unique waste challenges
            </span>{" "}
            and deliver compliant, cost-effective recycling solutions.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, index) => (
            <IndustryCard
              key={industry.title}
              industry={industry}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-brand-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-brand-200/15 rounded-full blur-3xl" />
      </div>
    </section>
  );
}

function WhyPartnerSection() {
  const reasons = [
    {
      title: "Industry-Specific Expertise",
      description:
        "27+ years serving diverse sectors means we understand your exact waste profile, compliance requirements and operational constraints.",
    },
    {
      title: "Flexible Commercial Terms",
      description:
        "Whether annual contracts, spot purchases or tender-based engagement, we adapt to your procurement model with transparent pricing.",
    },
    {
      title: "Complete Documentation",
      description:
        "From manifests to disposal certificates to quarterly impact reports—everything your EHS and sustainability teams need.",
    },
    {
      title: "Pan-India Presence",
      description:
        "Multi-location businesses benefit from unified service quality, centralized reporting and consistent compliance across sites.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-brand-800 text-brand-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-brand-200 mb-3">
            Why Partner With SV Green?
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            One vendor, zero compromise on compliance or service.
          </h2>
          <p className="text-sm md:text-base text-brand-50/80">
            We eliminate the hassle of managing multiple scrap vendors by
            offering end-to-end solutions with verified recycling, proper
            documentation and transparent commercials.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="rounded-2xl border border-brand-50/20 bg-brand-600/20 backdrop-blur-sm p-6 hover:bg-brand-600/30 transition-all"
            >
              <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
              <p className="text-sm text-brand-50/80">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessOverview() {
  const steps = [
    {
      number: "01",
      title: "Site Assessment",
      description:
        "We visit your facility, map waste streams and understand volume, frequency and special handling needs.",
    },
    {
      number: "02",
      title: "Customized Proposal",
      description:
        "Receive a detailed plan with pricing, pickup schedule, compliance framework and impact metrics.",
    },
    {
      number: "03",
      title: "Seamless Execution",
      description:
        "Our trained teams handle collection, transportation and processing with minimal disruption to your operations.",
    },
    {
      number: "04",
      title: "Regular Reporting",
      description:
        "Monthly manifests, quarterly impact reports and certificates ready for your audits and ESG disclosures.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-brand-400 mb-3">
            How We Work
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-800 mb-3">
            Four simple steps to compliant waste management.
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-brand-200 -translate-x-1/2 z-0" />
              )}

              <div className="relative bg-white rounded-2xl border-2 border-brand-100 p-6 hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-brand-600 text-white text-2xl font-bold mb-4">
                  {step.number}
                </div>
                <h3 className="text-lg font-bold text-brand-800 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-16 px-4 bg-linear-to-b from-brand-50 to-white">
      <div className="max-w-5xl mx-auto text-center space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-brand-400 mb-3">
            Ready to get started?
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-800 mb-4">
            Let's build a waste management plan tailored to your industry.
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto mb-8">
            Share your facility details and waste volumes. Our team will respond
            with a customized proposal within 24-48 hours.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="/contact-us"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-full bg-brand-600 text-white px-8 py-4 text-sm font-semibold shadow-lg hover:shadow-xl transition-shadow"
            >
              Request a Site Visit
              <ArrowRight className="h-4 w-4" />
            </motion.a>
            <motion.a
              href="/services/hazardous-waste-management"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-full border-2 border-brand-600 px-8 py-4 text-sm font-semibold text-brand-600 hover:bg-brand-50 transition-colors"
            >
              View All Services
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function IndustriesWeServePage() {
  return (
    <div className="min-h-screen bg-white">
      <ParallaxHero
        mediaSrc="https://images.unsplash.com/photo-1516937941344-00b4e0337589?w=1920&q=80"
        mediaType="image"
        title="Industries We Serve"
        subtitle="Tailored waste management solutions for every manufacturing sector across Gujarat, Maharashtra & Rajasthan."
      />

      <IndustriesGrid />
      <WhyPartnerSection />
      <ProcessOverview />
      <CTASection />
    </div>
  );
}
