import { motion } from "framer-motion";
import ScrollFloat from "./react-bits/ScrollFloat";

interface Props {
  item: { title: string; description: string }[];
  title: string;
  description: string;
  src: string;
  alt: string;
}

export const ServicesGrid = ({ item, title, description, src, alt }: Props) => {
  return (
    <section className="py-20 px-4 bg-brand-600">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-xl md:text-4xl font-bold mb-4 text-brand-50">
            <ScrollFloat stagger={0.03}>{title}</ScrollFloat>
          </h2>
          <p className="text-brand-50 max-w-4xl mx-auto text-sm">
            {description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {item.map((service, index) => (
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
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-brand-200 h-full relative overflow-hidden group cursor-pointer z-30"
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
      <div className="absolute right-0 z-0 -mt-[500px] hidden sm:block">
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover invert opacity-15"
        />
      </div>
      <div className="absolute left-0 z-0 -mt-[500px] hidden sm:block">
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover invert opacity-15"
        />
      </div>
    </section>
  );
};
