import { motion } from "framer-motion";
import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  User,
  Building2,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { ParallaxHero } from "~/components/ParallaxHero";

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const locations = [
    {
      city: "Vapi",
      state: "Gujarat",
      address: "Industrial Area, Vapi",
      isPrimary: true,
    },
    {
      city: "Ankleshwar",
      state: "Gujarat",
      address: "GIDC, Ankleshwar",
    },
    {
      city: "Ahmedabad",
      state: "Gujarat",
      address: "Industrial Hub, Ahmedabad",
    },
    {
      city: "Mumbai",
      state: "Maharashtra",
      address: "Industrial Zone, Mumbai",
    },
    {
      city: "Jaipur",
      state: "Rajasthan",
      address: "RIICO Area, Jaipur",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-white via-brand-50/10 to-white">
      <ParallaxHero
        mediaSrc="https://images.unsplash.com/photo-1516387938699-a93567ec168e?w=1920&q=80"
        mediaType="image"
        title="Get in Touch"
        subtitle="Let's discuss how we can help with your waste management needs"
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Section - Quick Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16 -mt-24 relative z-10">
          {[
            {
              icon: Phone,
              title: "Call Us",
              info: "+91 90000 00000",
              subInfo: "Mon-Sat, 9AM-6PM",
              href: "tel:+919000000000",
              color: "#3a5a40",
            },
            {
              icon: Mail,
              title: "Email Us",
              info: "shyam.bhannushali@gmail.com",
              subInfo: "Response within 24 hours",
              href: "mailto:shyam.bhannushali@gmail.com",
              color: "#588157",
            },
            {
              icon: MapPin,
              title: "Visit Us",
              info: "Vapi, Gujarat",
              subInfo: "5 locations across India",
              href: "#locations",
              color: "#344e41",
            },
          ].map((item, index) => (
            <motion.a
              key={item.title}
              href={item.href}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border-2 border-gray-100 hover:border-brand-200"
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                style={{ backgroundColor: `${item.color}20` }}
              >
                <item.icon className="w-7 h-7" style={{ color: item.color }} />
              </div>
              <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
              <p className="text-sm font-semibold text-gray-700 mb-1">
                {item.info}
              </p>
              <p className="text-xs text-gray-500">{item.subInfo}</p>
            </motion.a>
          ))}
        </div>

        {/* Main Grid - Form + Info */}
        <div className="grid lg:grid-cols-[1.2fr,1fr] gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-200/20 border border-brand-200/30 mb-4"
              >
                <Sparkles className="w-4 h-4 text-brand-600" />
                <span className="text-sm font-semibold text-brand-600">
                  Quick Response Guaranteed
                </span>
              </motion.div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                Send us a message
              </h2>
              <p className="text-gray-600">
                Share your waste management requirements and our team will get
                back to you within 24-48 hours with a customized solution.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name *
                </label>
                <div className="relative">
                  <motion.div
                    animate={{
                      scale: focusedField === "name" ? 1 : 0,
                      opacity: focusedField === "name" ? 1 : 0,
                    }}
                    className="absolute -inset-1 bg-linear-to-r from-brand-400 to-brand-600 rounded-xl blur-sm"
                  />
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField(null)}
                      className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-brand-400 focus:outline-none transition-all bg-white"
                      placeholder="Your full name"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Email & Phone */}
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <motion.div
                      animate={{
                        scale: focusedField === "email" ? 1 : 0,
                        opacity: focusedField === "email" ? 1 : 0,
                      }}
                      className="absolute -inset-1 bg-linear-to-r from-brand-400 to-brand-600 rounded-xl blur-sm"
                    />
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        onFocus={() => setFocusedField("email")}
                        onBlur={() => setFocusedField(null)}
                        className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-brand-400 focus:outline-none transition-all bg-white"
                        placeholder="your.email@company.com"
                      />
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.25 }}
                >
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <motion.div
                      animate={{
                        scale: focusedField === "phone" ? 1 : 0,
                        opacity: focusedField === "phone" ? 1 : 0,
                      }}
                      className="absolute -inset-1 bg-linear-to-r from-brand-400 to-brand-600 rounded-xl blur-sm"
                    />
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        onFocus={() => setFocusedField("phone")}
                        onBlur={() => setFocusedField(null)}
                        className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-brand-400 focus:outline-none transition-all bg-white"
                        placeholder="+91 00000 00000"
                      />
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Company */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Company Name
                </label>
                <div className="relative">
                  <motion.div
                    animate={{
                      scale: focusedField === "company" ? 1 : 0,
                      opacity: focusedField === "company" ? 1 : 0,
                    }}
                    className="absolute -inset-1 bg-linear-to-r from-brand-400 to-brand-600 rounded-xl blur-sm"
                  />
                  <div className="relative">
                    <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      onFocus={() => setFocusedField("company")}
                      onBlur={() => setFocusedField(null)}
                      className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-brand-400 focus:outline-none transition-all bg-white"
                      placeholder="Your company name"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Message */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35 }}
              >
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Message *
                </label>
                <div className="relative">
                  <motion.div
                    animate={{
                      scale: focusedField === "message" ? 1 : 0,
                      opacity: focusedField === "message" ? 1 : 0,
                    }}
                    className="absolute -inset-1 bg-linear-to-r from-brand-400 to-brand-600 rounded-xl blur-sm"
                  />
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                    <textarea
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      onFocus={() => setFocusedField("message")}
                      onBlur={() => setFocusedField(null)}
                      className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-brand-400 focus:outline-none transition-all bg-white resize-none"
                      placeholder="Tell us about your waste management requirements..."
                    />
                  </div>
                </div>
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full relative group overflow-hidden rounded-xl bg-linear-to-r from-brand-600 to-brand-400 text-white font-semibold py-4 shadow-lg hover:shadow-xl transition-all"
              >
                <motion.div
                  className="absolute inset-0 bg-white"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                  style={{ opacity: 0.1 }}
                />
                <span className="relative flex items-center justify-center gap-2">
                  {isSubmitted ? (
                    <>
                      <CheckCircle2 className="w-5 h-5" />
                      Message Sent Successfully!
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </span>
              </motion.button>
            </form>
          </motion.div>

          {/* Right Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            {/* Business Hours */}
            <div className="bg-linear-to-br from-brand-600 to-brand-800 rounded-2xl p-8 text-white shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold">Business Hours</h3>
              </div>
              <div className="space-y-3 text-brand-50">
                <div className="flex justify-between items-center pb-3 border-b border-white/10">
                  <span className="font-medium">Monday - Friday</span>
                  <span className="font-semibold text-white">
                    9:00 AM - 6:00 PM
                  </span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-white/10">
                  <span className="font-medium">Saturday</span>
                  <span className="font-semibold text-white">
                    9:00 AM - 2:00 PM
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Sunday</span>
                  <span className="font-semibold text-white">Closed</span>
                </div>
              </div>
            </div>

            {/* Locations */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-brand-600" />
                Our Locations
              </h3>
              <div className="space-y-4" id="locations">
                {locations.map((location, index) => (
                  <motion.div
                    key={location.city}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.08 }}
                    whileHover={{ x: 4 }}
                    className={`p-4 rounded-xl transition-all cursor-pointer ${
                      location.isPrimary
                        ? "bg-linear-to-br from-brand-200/30 to-brand-50/30 border-2 border-brand-400"
                        : "bg-gray-50 hover:bg-gray-100"
                    }`}
                  >
                    {location.isPrimary && (
                      <span className="inline-block px-2 py-1 rounded-full bg-brand-600 text-white text-xs font-semibold mb-2">
                        Primary Location
                      </span>
                    )}
                    <h4 className="font-bold text-gray-900">
                      {location.city}, {location.state}
                    </h4>
                    <p className="text-sm text-gray-600 mt-1">
                      {location.address}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Trust Badge */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-linear-to-br from-brand-50/40 to-white rounded-2xl p-6 border-2 border-brand-200/30"
            >
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-600 text-white mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">
                  GPCB Authorized
                </h4>
                <p className="text-sm text-gray-600">
                  27+ years of trusted service with complete compliance &
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
