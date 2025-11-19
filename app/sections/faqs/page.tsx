import { categories, faqs } from "../../../constants";
import { ParallaxHero } from "~/components/ParallaxHero";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  ChevronDown,
  HelpCircle,
  MessageCircle,
  Phone,
  Mail,
} from "lucide-react";

export default function FAQsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredFaqs =
    selectedCategory === "All"
      ? faqs
      : faqs.filter((faq) => faq.category === selectedCategory);

  return (
    <div className="min-h-screen bg-linear-to-b from-white via-brand-50/10 to-white">
      <ParallaxHero
        mediaSrc="https://images.unsplash.com/photo-1626287935075-3275d2d9025e?w=1920&q=80"
        mediaType="image"
        title="FAQs"
        subtitle=""
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  selectedCategory === category
                    ? "bg-brand-600 text-white shadow-lg"
                    : "bg-white text-gray-700 border-2 border-gray-200 hover:border-brand-200"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* FAQ List */}
        <div className="grid lg:grid-cols-[2fr,1fr] gap-8">
          {/* Questions Column */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <AnimatePresence mode="wait">
              {filteredFaqs.map((faq, index) => (
                <motion.div
                  key={`${selectedCategory}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group"
                >
                  <div
                    className={`rounded-2xl border-2 transition-all duration-300 ${
                      openIndex === index
                        ? "border-brand-400 bg-linear-to-br from-brand-50/30 to-white shadow-lg"
                        : "border-gray-200 bg-white hover:border-brand-200 shadow-sm hover:shadow-md"
                    }`}
                  >
                    <button
                      onClick={() =>
                        setOpenIndex(openIndex === index ? null : index)
                      }
                      className="w-full px-6 py-5 flex items-start gap-4 text-left"
                    >
                      {/* Question Number Badge */}
                      <div
                        className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold transition-colors ${
                          openIndex === index
                            ? "bg-brand-600 text-white"
                            : "bg-gray-100 text-gray-600 group-hover:bg-brand-200 group-hover:text-white"
                        }`}
                      >
                        {index + 1}
                      </div>

                      <div className="flex-1">
                        {/* Category Tag */}
                        <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-brand-200/20 text-brand-600 mb-2">
                          {faq.category}
                        </span>
                        <h3 className="text-lg font-bold text-gray-900 mb-1">
                          {faq.question}
                        </h3>
                      </div>

                      {/* Chevron Icon */}
                      <motion.div
                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="shrink-0 mt-1"
                      >
                        <ChevronDown
                          className={`w-6 h-6 transition-colors ${
                            openIndex === index
                              ? "text-brand-600"
                              : "text-gray-400"
                          }`}
                        />
                      </motion.div>
                    </button>

                    {/* Answer */}
                    <AnimatePresence>
                      {openIndex === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-5 pl-18">
                            <p className="text-gray-700 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {filteredFaqs.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12 text-gray-500"
              >
                No questions found in this category.
              </motion.div>
            )}
          </motion.div>

          {/* Contact Card - Sticky Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:sticky lg:top-24 h-fit"
          >
            <div className="rounded-2xl bg-linear-to-br from-brand-600 to-brand-800 text-white p-8 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Still have questions?</h3>
                  <p className="text-sm text-brand-50">We're here to help</p>
                </div>
              </div>

              <p className="text-brand-50 mb-6 text-sm leading-relaxed">
                Can't find the answer you're looking for? Our team is ready to
                assist you with any questions about our services.
              </p>

              <div className="space-y-4 mb-6">
                <a
                  href="mailto:shyam.bhannushali@gmail.com"
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-colors group"
                >
                  <Mail className="w-5 h-5 text-brand-200" />
                  <div>
                    <p className="text-xs text-brand-50">Email us</p>
                    <p className="text-sm font-semibold">
                      shyam.bhannushali@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="tel:+919000000000"
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-colors group"
                >
                  <Phone className="w-5 h-5 text-brand-200" />
                  <div>
                    <p className="text-xs text-brand-50">Call us</p>
                    <p className="text-sm font-semibold">+91 90000 00000</p>
                  </div>
                </a>
              </div>

              <motion.a
                href="/contact-us"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="block w-full text-center px-6 py-3 rounded-xl bg-white text-brand-600 font-semibold shadow-lg hover:shadow-xl transition-shadow"
              >
                Get in Touch
              </motion.a>
            </div>

            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-6 p-6 rounded-2xl bg-white border-2 border-brand-50 shadow-sm"
            >
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-200/20 mb-3">
                  <HelpCircle className="w-6 h-6 text-brand-600" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">
                  GPCB Authorized
                </h4>
                <p className="text-sm text-gray-600">
                  27+ years of trusted service with full compliance and
                  documentation
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
