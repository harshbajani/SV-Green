import { motion } from "framer-motion";

export default function AboutUsPage() {
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
            About Us
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            Learn more about SV Green and our mission to create a sustainable
            future through effective waste management solutions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 prose prose-lg max-w-none"
        >
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Our Mission
              </h2>
              <p className="text-gray-600">
                At SV Green, we are committed to providing comprehensive waste
                management solutions that protect the environment and promote
                sustainability. Our mission is to help businesses and
                communities manage their waste responsibly while contributing to
                a circular economy.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Our Vision
              </h2>
              <p className="text-gray-600">
                We envision a world where waste is viewed as a resource, and
                every organization plays a role in creating a sustainable
                future. Through innovation, dedication, and collaboration, we
                strive to make waste management efficient, accessible, and
                environmentally responsible.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
