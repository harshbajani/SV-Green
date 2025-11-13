import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

export default function FAQsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What types of waste do you manage?",
      answer:
        "We manage various types of waste including hazardous waste, plastic waste, industrial waste, e-waste, organic waste, rubber scrap, and wooden scrap. We also provide extended producer responsibility services and support circular economy initiatives.",
    },
    {
      question: "How do I get started with your services?",
      answer:
        "Getting started is easy! Simply contact us through our contact form or call us directly. Our team will assess your needs and provide a customized waste management solution for your business.",
    },
    {
      question: "Are your services compliant with environmental regulations?",
      answer:
        "Yes, all our services are fully compliant with local and national environmental regulations. We ensure that all waste handling, transportation, and disposal processes meet the highest environmental standards.",
    },
    {
      question: "Do you provide services for residential customers?",
      answer:
        "Our primary focus is on businesses and industrial clients. However, we do offer some services for residential customers. Please contact us to discuss your specific needs.",
    },
    {
      question: "What is Extended Producer Responsibility (EPR)?",
      answer:
        "Extended Producer Responsibility is an environmental policy approach where producers are given significant responsibility for the treatment or disposal of post-consumer products. We help businesses comply with EPR regulations and manage their product lifecycle responsibilities.",
    },
  ];

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
            Frequently Asked Questions
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our waste management services
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 max-w-3xl mx-auto space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="rounded-lg border border-gray-200 bg-white shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </span>
                <motion.div
                  animate={{
                    rotate: openIndex === index ? 180 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <FiChevronDown className="h-5 w-5 text-gray-500" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-4 overflow-hidden"
                  >
                    <p className="text-gray-600">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
