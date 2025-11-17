import { motion } from "framer-motion";
import { Link } from "react-router";
import { FaRecycle } from "react-icons/fa";
import { Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { NavItems } from "../../constants";
import { cn } from "~/lib/utils";

const year = new Date().getFullYear();

export default function Footer() {
  const flatLinks = NavItems.filter((n) => n.href).map((n) => ({
    label: n.name,
    href: n.href ?? "#",
  }));

  return (
    <footer className="bg-brand-800 text-brand-50 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-3 md:col-span-2"
          >
            <div className="flex items-center gap-2">
              <div className="h-20 w-20 rounded-xl bg-brand-600 flex items-center justify-center">
                <img
                  src="/logo.png"
                  alt="logo"
                  className="text-brand-50 h-16 w-16"
                />
              </div>
              <div>
                <p className="text-sm font-semibold tracking-wide uppercase text-brand-200">
                  SV Green
                </p>
                <p className="text-xs text-brand-200/80">
                  Industrial Scrap & Waste Management
                </p>
              </div>
            </div>
            <p className="text-sm text-brand-100 max-w-md">
              GPCB‑authorized scrap buyer and waste recycler helping industries
              across Gujarat, Maharashtra and Rajasthan meet compliance while
              creating real environmental impact.
            </p>
            <div className="flex flex-wrap items-center gap-3 text-xs text-brand-100/90">
              <span className="inline-flex items-center gap-1 rounded-full border border-brand-600/60 px-3 py-1">
                <ShieldCheck className="h-3 w-3" />
                GPCB Authorized
              </span>
              <span className="inline-flex items-center gap-1 rounded-full border border-brand-600/60 px-3 py-1">
                <ShieldCheck className="h-3 w-3" />
                GST Registered
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-sm font-semibold mb-3 text-brand-100">
              Quick Links
            </h3>
            <nav className="space-y-1 text-sm">
              {flatLinks.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    "block text-brand-200/90 hover:text-brand-50 transition-colors"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            <h3 className="text-sm font-semibold mb-1 text-brand-100">
              Contact
            </h3>
            <div className="space-y-2 text-xs text-brand-100/90">
              <p className="flex items-start gap-2">
                <MapPin className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" />
                <span>
                  Ahmedabad • Vapi • Ankleshwar • Jaipur • Mumbai
                  <br />
                  Serving manufacturing facilities across Western India.
                </span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 flex-shrink-0" />
                <a
                  href="mailto:shyam.bhannushali@gmail.com"
                  className="hover:text-brand-50 underline underline-offset-2"
                >
                  shyam.bhannushali@gmail.com
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 flex-shrink-0" />
                <a
                  href="tel:+919000000000"
                  className="hover:text-brand-50 underline underline-offset-2"
                >
                  +91 90000 00000
                </a>
              </p>
            </div>
          </motion.div>
        </div>

        <div className="mt-10 border-t border-brand-700 pt-4 flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] text-brand-200/80">
          <p>© {year} SV Green. All rights reserved.</p>
          <p className="text-[11px]">
            Committed to safe & compliant recycling for a cleaner, circular
            economy.
          </p>
        </div>
      </div>
    </footer>
  );
}
