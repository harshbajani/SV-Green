import React from "react";
import {
  Factory,
  Car,
  Wind,
  Shirt,
  Sun,
  Gauge,
  Package,
  UtensilsCrossed,
  Stethoscope,
  Construction,
  Gem,
  FlaskConical,
  Milk,
  Bolt,
  Cpu,
  Cable,
  CircleDot,
} from "lucide-react";

export default function IndustriesServed() {
  const items = [
    { label: "Pharmaceuticals", Icon: FlaskConical },
    { label: "Automotive", Icon: Car },
    { label: "Wind Energy", Icon: Wind },
    { label: "Textile", Icon: Shirt },
    { label: "Solar Power", Icon: Sun },
    { label: "Pumps & Motors", Icon: Gauge },
    { label: "Printing & Packaging", Icon: Package },
    { label: "Food Manufacturing", Icon: UtensilsCrossed },
    { label: "Health Care", Icon: Stethoscope },
    { label: "Heavy Machinery", Icon: Construction },
    { label: "Ceramics", Icon: Gem },
    { label: "Chemicals", Icon: FlaskConical },
    { label: "Dairy", Icon: Milk },
    { label: "Energy", Icon: Bolt },
    { label: "Glass", Icon: Factory },
    { label: "Electronics", Icon: Cpu },
    { label: "Cable", Icon: Cable },
    { label: "Rubber", Icon: CircleDot },
  ];

  return (
    <section className="w-full bg-brand-50/30 py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold tracking-wide text-brand-600">
            Served More Than 19 Industries
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-800 mt-2">
            Industries We Have Served
          </h2>
        </div>

        {/* Grid Items */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-y-12 gap-x-6 justify-items-center">
          {items.map(({ label, Icon }, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-3 group cursor-pointer"
            >
              <div
                className="
                w-20 h-20 md:w-16 md:h-16 flex items-center justify-center 
                rounded-xl border border-brand-200 bg-white shadow-sm
                transition-all duration-300 
                group-hover:bg-brand-200 group-hover:border-brand-400 
                group-hover:shadow-lg group-hover:scale-110
              "
              >
                <Icon className="w-8 h-8 text-brand-800 group-hover:text-brand-600 transition-colors duration-300" />
              </div>

              <p className="text-sm font-medium text-brand-800 group-hover:text-brand-600 transition-colors">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
