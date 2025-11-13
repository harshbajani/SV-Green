import { motion } from "framer-motion";
import { NavItems } from "../../../constants";

export default function ServicesPage() {
  const services =
    NavItems.find((item) => item.name === "Services")?.children || [];

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
            Our Services
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            Comprehensive waste management solutions tailored to your needs
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="rounded-lg bg-gray-50 p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.name}
              </h3>
              <p className="text-gray-600">
                Professional {service.name.toLowerCase()} services to meet your
                environmental and regulatory requirements.
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
