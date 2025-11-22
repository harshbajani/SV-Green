import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import {
  Leaf,
  ShieldCheck,
  Recycle,
  Handshake,
  Truck,
  ArrowRight,
  MapPin,
  Globe2,
  BadgeCheck,
  Sparkles,
} from "lucide-react";
import { ParallaxHero } from "~/components/ParallaxHero";
import { BenefitsStepper } from "~/components/BenefitsStepper";
import { homeservices } from "../../../constants";
import { cn } from "~/lib/utils";
import { ClientMarqueeCSSVersion } from "~/components/ClientMarquee";
import IndustriesServed from "~/components/IndustryServed";

interface ServiceProps {
  service: (typeof homeservices)[number];
  index: number;
  isHovered: number | null;
  setHoveredIndex: (index: number | null) => void;
}

function useAnimatedCounter(end: number, duration = 1.4) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const containerRef = useRef<HTMLLIElement | null>(null);
  const inView = useInView(containerRef, { once: true, margin: "-80px" });

  if (ref.current && inView) {
    const start = 0;
    const startTime = performance.now();

    const step = (time: number) => {
      const progress = Math.min((time - startTime) / (duration * 1000), 1);
      const value = Math.floor(start + (end - start) * progress);
      if (ref.current) ref.current.textContent = value.toLocaleString();
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }

  return { ref, containerRef };
}

function TrustStrip() {
  const stats = [
    { label: "Years of Experience", value: "27+", accent: true },
    { label: "Clients Served", value: "500+", accent: false },
    { label: "Tonnes Recycled", value: "3,00,000+", accent: false },
    { label: "States Covered", value: "3+", accent: false },
  ];

  return (
    <section className="bg-brand-800 text-brand-50 py-6 px-4">
      <div className="max-w-7xl mx-auto grid gap-6 md:grid-cols-4">
        {stats.map((s, index) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="flex flex-col items-start md:items-center gap-1"
          >
            <div
              className={cn(
                "text-2xl font-bold tracking-tight",
                s.accent ? "text-brand-50" : "text-brand-200"
              )}
            >
              {s.value}
            </div>
            <p className="text-xs uppercase tracking-wide text-brand-50/80">
              {s.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  index,
  isHovered,
  setHoveredIndex,
}: ServiceProps) {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      onHoverStart={() => setHoveredIndex(index)}
      onHoverEnd={() => setHoveredIndex(null)}
      className="group relative"
    >
      {/* Glow effect on hover */}
      <motion.div
        className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"
        style={{ backgroundColor: service.color }}
      />

      {/* Main card */}
      <motion.div
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="relative h-full rounded-2xl bg-white border-2 border-gray-100 overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300"
      >
        {/* Top decorative bar */}
        <div
          className="h-1.5 w-full"
          style={{ backgroundColor: service.color }}
        />

        {/* Content */}
        <div className="p-6">
          {/* Icon and emoji */}
          <div className="flex items-start justify-between mb-4">
            <motion.div
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center w-14 h-14 rounded-xl shadow-lg group-hover:shadow-xl transition-shadow"
              style={{ backgroundColor: service.color }}
            >
              <Icon className="w-7 h-7 text-white" strokeWidth={2} />
            </motion.div>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-gray-900 transition-colors">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            {service.description}
          </p>

          {/* Learn more link */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileHover={{ x: 5 }}
            className="flex items-center gap-2 text-sm font-semibold group-hover:opacity-100 opacity-0 transition-opacity"
            style={{ color: service.color }}
          >
            Learn more
            <ArrowRight className="w-4 h-4" />
          </motion.div>
        </div>

        {/* Decorative corner accent */}
        <div
          className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full opacity-10 group-hover:opacity-20 transition-opacity"
          style={{ backgroundColor: service.color }}
        />
      </motion.div>
    </motion.div>
  );
}

function ServicesOverview() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 bg-linear-to-b from-brand-200/50 via-white to-brand-200/50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-green-50 to-emerald-50 border border-green-200 mb-6"
          >
            <Sparkles className="w-4 h-4 text-green-600" />
            <span className="text-xs font-semibold tracking-wider uppercase text-green-700">
              Comprehensive Scrap Solutions
            </span>
          </motion.div>

          {/* Main heading */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="text-gray-900">One partner for </span>
            <span className="bg-linear-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              every waste stream
            </span>
          </h2>

          {/* Description */}
          <p className="text-lg text-gray-600 leading-relaxed">
            From plastics and metals to hazardous and complex industrial waste,
            SV Green provides unified collection, recycling and documentation
            <span className="font-semibold text-gray-900">
              {" "}
              tailored to your facility's needs.
            </span>
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {homeservices.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              isHovered={hoveredIndex}
              setHoveredIndex={setHoveredIndex}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <motion.a
            href="/services/hazardous-waste-management"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-linear-to-r from-green-600 to-emerald-600 text-white font-semibold shadow-lg hover:shadow-xl transition-shadow group"
          >
            View All Services & Solutions
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-brand-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-brand-200/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-200/10 rounded-full blur-3xl" />
      </div>
    </section>
  );
}

function AdvantageSection() {
  const items = [
    {
      icon: ShieldCheck,
      title: "27+ Years of Expertise",
      text: "Deep experience in industrial scrap, yearly contracts and public & private tenders.",
    },
    {
      icon: BadgeCheck,
      title: "GPCB Authorized & Compliant",
      text: "End-to-end documentation, manifests and certificates aligned with PCB norms.",
    },
    {
      icon: Truck,
      title: "Pan-Region Logistics",
      text: "Strategic presence across Vapi, Ankleshwar, Ahmedabad, Jaipur and Mumbai.",
    },
    {
      icon: Handshake,
      title: "Flexible Commercials",
      text: "Transparent terms with flexible security deposits and long-term partnerships.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-linear-to-b from-white to-brand-50/30">
      <div className="max-w-7xl mx-auto grid gap-12 lg:grid-cols-2 items-center">
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-brand-400 bg-brand-200/30 px-4 py-2 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-400" />
            The SV Green Advantage
          </p>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-brand-800 leading-tight">
            Industrial waste management that{" "}
            <span className="text-brand-600">
              feels like an extension of your EHS team.
            </span>
          </h2>
          <p className="mt-4 text-gray-600">
            We combine strong on-ground operations with compliant documentation
            and transparent commercial structures to help you meet ESG and PCB
            expectations without slowing down your core business.
          </p>
        </motion.div>

        <div className="grid gap-6">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -4 }}
              className="flex gap-4 rounded-xl bg-white shadow-md hover:shadow-xl transition-shadow p-5 border border-brand-50/60"
            >
              <div className="mt-1 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600 text-brand-50 shadow-md">
                <item.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-base md:text-lg font-semibold text-brand-800">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-gray-600">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ValuesSection() {
  const values = [
    {
      icon: ShieldCheck,
      label: "Integrity",
      text: "Transparent pricing, documentation and processes at every step.",
    },
    {
      icon: Leaf,
      label: "Environmental Responsibility",
      text: "Designing solutions that genuinely reduce landfill burden and emissions.",
    },
    {
      icon: Handshake,
      label: "Reliability",
      text: "Consistent pickups, predictable operations and clear service SLAs.",
    },
    {
      icon: Recycle,
      label: "Circular Thinking",
      text: "Maximizing recovery and reuse to power a circular economy.",
    },
    {
      icon: Truck,
      label: "Operational Efficiency",
      text: "Optimized routing and on-site processes to minimize disruption.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-brand-400 mb-3">
            Our Values
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-800 mb-3">
            Built on trust, compliance and long-term partnerships.
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            SV Green is driven by ethics and impact—supporting your ESG goals
            while creating dignified livelihoods and a cleaner environment.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {values.map((value, index) => (
            <motion.div
              key={value.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="group rounded-2xl border border-brand-50 bg-linear-to-br from-white to-brand-50/30 p-5 shadow-sm hover:shadow-lg transition-all"
            >
              <div className="inline-flex items-center justify-center rounded-xl bg-brand-600 text-brand-50 p-2 mb-4 group-hover:scale-110 transition-transform">
                <value.icon className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-brand-800 mb-2">
                {value.label}
              </h3>
              <p className="text-sm text-gray-600">{value.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  const steps = [
    {
      title: "Consultation",
      description:
        "We map your waste profile, current flows, contracts and compliance requirements.",
    },
    {
      title: "Customized Solution",
      description:
        "We design an optimized, compliant plan for collection, sorting, recycling and reporting.",
    },
    {
      title: "Compliant Execution",
      description:
        "Our on-ground teams execute safe handling, logistics and processing per PCB norms.",
    },
    {
      title: "Transparent Documentation",
      description:
        "You receive manifests, certificates and impact reports for every movement.",
    },
  ];

  return <BenefitsStepper item={steps} title="Our Proven 4-Step Process" />;
}

function ServiceAreas() {
  const clusters = [
    {
      region: "Gujarat",
      cities: ["Vapi", "Ankleshwar", "Ahmedabad"],
      primary: true,
    },
    {
      region: "Maharashtra",
      cities: ["Mumbai"],
      primary: false,
    },
    {
      region: "Rajasthan",
      cities: ["Jaipur"],
      primary: false,
    },
  ];

  return (
    <section className="py-20 px-4 bg-brand-800 text-brand-50">
      <div className="max-w-7xl mx-auto grid gap-12 lg:grid-cols-2 items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-brand-200 mb-3">
            <Globe2 className="h-4 w-4" />
            Service Footprint
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Strategic presence across Western India.
          </h2>
          <p className="text-sm md:text-base text-brand-50/80">
            Our hubs in Gujarat, Maharashtra and Rajasthan give us the ability
            to support multi-plant enterprises with consistent service quality
            and centralized reporting.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl bg-linear-to-br from-brand-600 to-brand-800 p-6 border border-brand-50/20 overflow-hidden"
        >
          <div className="absolute -top-10 -right-16 h-40 w-40 rounded-full bg-brand-50/10 blur-2xl" />
          <div className="relative space-y-4">
            {clusters.map((cluster, index) => (
              <motion.div
                key={cluster.region}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={cn(
                  "rounded-xl px-4 py-3 border flex items-start gap-3 backdrop-blur-sm",
                  cluster.primary
                    ? "bg-black/10 border-brand-50/50"
                    : "bg-black/5 border-brand-50/20"
                )}
              >
                <div className="mt-1">
                  <MapPin className="h-4 w-4 text-brand-50" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-brand-200">
                    {cluster.region}
                  </p>
                  <p className="text-sm font-semibold">
                    {cluster.cities.join(" • ")}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ImpactSection() {
  const { ref: co2Ref, containerRef: co2Container } =
    useAnimatedCounter(750000);
  const { ref: wasteRef, containerRef: wasteContainer } =
    useAnimatedCounter(300000);
  const { ref: jobsRef, containerRef: jobsContainer } =
    useAnimatedCounter(1800);

  const impactItems = [
    {
      label: "Tonnes of CO₂ equivalent emissions diverted",
      ref: co2Ref,
      container: co2Container,
      suffix: "+",
    },
    {
      label: "Tonnes of waste diverted from landfills",
      ref: wasteRef,
      container: wasteContainer,
      suffix: "+",
    },
    {
      label: "Jobs supported across the value chain",
      ref: jobsRef,
      container: jobsContainer,
      suffix: "+",
    },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto grid gap-12 lg:grid-cols-[1.1fr,1fr] items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-brand-400 mb-3">
            Impact in numbers
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-800 mb-3">
            Turning waste into measurable environmental impact.
          </h2>
          <p className="text-sm md:text-base text-gray-600 mb-6">
            Every contract goes beyond compliance—helping reduce emissions,
            conserve resources and create dignified livelihoods in the waste
            ecosystem.
          </p>

          <ul className="space-y-4">
            {impactItems.map((item, index) => (
              <motion.li
                key={item.label}
                ref={item.container}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="flex items-baseline gap-4"
              >
                <span className="text-3xl font-semibold text-brand-600 min-w-20">
                  <span ref={item.ref} />
                  {item.suffix}
                </span>
                <span className="text-sm md:text-base text-gray-700">
                  {item.label}
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-brand-50 bg-linear-to-br from-brand-50 to-white p-6 shadow-md"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-10 w-10 rounded-xl bg-brand-600 text-brand-50 flex items-center justify-center">
              <Recycle className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-brand-400">
                ESG-aligned reporting
              </p>
              <p className="text-sm font-semibold text-brand-800">
                Quarterly environmental impact snapshots
              </p>
            </div>
          </div>
          <p className="text-sm text-gray-700 mb-4">
            Get easy-to-use numbers for sustainability reporting: emissions
            prevented, waste diverted from landfills and livelihoods supported.
          </p>
          <ul className="space-y-2 text-xs text-gray-600">
            <li>• Ready for ESG and CSR reporting decks</li>
            <li>• PCB-compliant manifests and certificates</li>
            <li>• Easy integration with your internal MIS</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

function VisionMission() {
  return (
    <section className="py-20 px-4 bg-brand-50">
      <div className="max-w-7xl mx-auto grid gap-10 lg:grid-cols-2 items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-brand-800">
            Our Vision
          </h2>
          <p className="text-sm md:text-base text-gray-700">
            To be India&apos;s most trusted industrial scrap and waste
            management partner—enabling every manufacturing facility to operate
            with zero-landfill ambition and full regulatory peace of mind.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-brand-800">
            Our Mission
          </h2>
          <p className="text-sm md:text-base text-gray-700">
            To design and operate waste solutions that are safe, compliant and
            economically viable—while creating measurable environmental impact
            and dignified livelihoods across the recycling value chain.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-16 px-4 bg-brand-800 text-brand-50">
      <div className="max-w-5xl mx-auto text-center space-y-6">
        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-brand-200">
          Ready to partner?
        </p>
        <h2 className="text-3xl md:text-4xl font-bold">
          Ready to partner with India&apos;s most trusted scrap recycler?
        </h2>
        <p className="text-sm md:text-base text-brand-50/80 max-w-2xl mx-auto">
          Share your waste profile and locations and we&apos;ll come back with a
          compliant, commercially viable proposal within 24-48 hours.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <motion.a
            href="/contact-us"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 rounded-full bg-brand-50 text-brand-800 px-6 py-3 text-sm font-semibold shadow-md hover:shadow-lg"
          >
            Get a Quote
            <ArrowRight className="h-4 w-4" />
          </motion.a>
          <motion.a
            href="tel:+919000000000"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 rounded-full border border-brand-200 px-6 py-3 text-sm font-semibold text-brand-50 hover:bg-brand-700/60"
          >
            Call our team
          </motion.a>
        </div>
      </div>
    </section>
  );
}

function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 md:hidden px-4 pb-4 pointer-events-none">
      <div className="max-w-md mx-auto rounded-full bg-white shadow-xl border border-brand-50 flex items-center justify-between px-4 py-2 pointer-events-auto">
        <div className="flex flex-col">
          <span className="text-xs font-semibold text-brand-800">
            Need a quick estimate?
          </span>
          <span className="text-[11px] text-gray-500">
            Share your scrap details in under a minute.
          </span>
        </div>
        <div className="flex gap-2">
          <a
            href="/contact-us"
            className="rounded-full bg-brand-600 text-white text-xs px-3 py-1.5 font-semibold flex items-center gap-1"
          >
            Get a quote
          </a>
          <a
            href="tel:+919000000000"
            className="rounded-full border border-brand-200 text-[11px] px-2.5 py-1 text-brand-700"
          >
            Call
          </a>
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <ParallaxHero
        mediaSrc="/hero.mp4"
        mediaType="video"
        title="Transforming Industrial Waste into Environmental Responsibility"
        subtitle="27+ years of trusted industrial scrap management across Gujarat, Maharashtra & Rajasthan."
      />

      <TrustStrip />
      <ServicesOverview />
      <AdvantageSection />
      <ValuesSection />
      <IndustriesServed />
      <ProcessSection />
      <ServiceAreas />
      <VisionMission />
      <ImpactSection />
      <CTASection />
      <ClientMarqueeCSSVersion className="bg-brand-50" />

      <StickyMobileCTA />
    </div>
  );
}
