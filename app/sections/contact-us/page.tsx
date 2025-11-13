import { motion } from "framer-motion";

export default function ContactUsPage() {
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
            Contact Us
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            Get in touch with us for your waste management needs
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 max-w-2xl mx-auto"
        >
          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-brand-600 focus:ring-brand-600 focus:outline-none"
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-brand-600 focus:ring-brand-600 focus:outline-none"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-brand-600 focus:ring-brand-600 focus:outline-none"
                placeholder="Your message"
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full rounded-md bg-brand-600 px-4 py-2 text-white font-medium hover:bg-brand-700 transition-colors"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
