import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";
import { NavItems, PHONE_NUMBER } from "../../constants";
import { cn } from "~/lib/utils";

function AnimatedUnderline({
  isHovered,
  isActive,
  scrolled,
}: {
  isHovered: boolean;
  isActive: boolean;
  scrolled: boolean;
}) {
  return (
    <motion.div
      className={clsx(
        "absolute bottom-1 left-0 right-0 h-0.5 origin-left",
        scrolled ? "bg-white" : "bg-brand-200"
      )}
      initial={{ scaleX: isActive ? 1 : 0 }}
      animate={{ scaleX: isActive ? 1 : isHovered ? 1 : 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    />
  );
}

function DropdownItem({
  item,
  index,
  scrolled,
}: {
  item: {
    name: string;
    href?: string;
    children?: Array<{ name: string; href: string }>;
  };
  index: number;
  scrolled: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [isNavHovered, setIsNavHovered] = useState(false);

  // consider the item disabled if it's Services (or explicitly /services)
  const isDisabled =
    item.href === "/services" || item.name.toLowerCase() === "services";

  return (
    <motion.li
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
      className="relative"
      onMouseEnter={() => {
        setIsHovered(true);
        setIsNavHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsNavHovered(false);
      }}
    >
      <div className="flex items-center">
        {/*
          If disabled (Services), render a focusable non-link element.
          Otherwise render NavLink as before.
        */}
        {isDisabled ? (
          <div
            // Keep it keyboard-focusable and role=button so it's discoverable but not navigable
            role="button"
            tabIndex={0}
            aria-haspopup={!!item.children?.length}
            aria-expanded={isHovered}
            onFocus={() => {
              setIsHovered(true);
              setIsNavHovered(true);
            }}
            onBlur={() => {
              setIsHovered(false);
              setIsNavHovered(false);
            }}
            onKeyDown={(e) => {
              // prevent Enter/Space from doing anything (no navigation)
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
              }
              // allow keyboard users to open the dropdown with ArrowDown if you want:
              // if (e.key === "ArrowDown") setIsHovered(true);
            }}
            onClick={(e) => {
              // prevent any accidental navigation
              e.preventDefault();
            }}
            className={clsx(
              "px-3 py-2 rounded-md text-sm font-medium hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-ring/50 flex items-center gap-1 relative",
              scrolled ? "text-white" : "text-foreground",
              // indicate it's non-clickable visually (optional)
              "cursor-default select-none"
            )}
          >
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block relative text-white"
              onMouseEnter={() => setIsNavHovered(true)}
              onMouseLeave={() => setIsNavHovered(false)}
            >
              {item.name}
            </motion.span>
            <AnimatedUnderline
              isHovered={isNavHovered || isHovered}
              isActive={false}
              scrolled={scrolled}
            />
          </div>
        ) : (
          <NavLink
            to={item.href || "#"}
            className={({ isActive }) =>
              clsx(
                "px-3 py-2 rounded-md text-sm font-medium hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-ring/50 flex items-center gap-1 relative",
                scrolled ? "text-white" : "text-foreground"
              )
            }
          >
            {({ isActive }) => (
              <>
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block relative"
                  onMouseEnter={() => setIsNavHovered(true)}
                  onMouseLeave={() => setIsNavHovered(false)}
                >
                  {item.name}
                </motion.span>
                <AnimatedUnderline
                  isHovered={isNavHovered || isHovered}
                  isActive={isActive}
                  scrolled={scrolled}
                />
              </>
            )}
          </NavLink>
        )}

        <motion.div
          animate={{ rotate: isHovered ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <FiChevronDown
            className={clsx("transition-colors duration-200 text-white")}
          />
        </motion.div>
      </div>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 top-full mt-2 min-w-64 z-50"
          >
            <div
              className={clsx(
                "rounded-md border shadow-lg overflow-hidden",
                scrolled ? "bg-white text-foreground" : "bg-white"
              )}
            >
              <ul className="py-2">
                {item.children?.map((child, childIndex) => (
                  <motion.li
                    key={child.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.2,
                      delay: childIndex * 0.03,
                    }}
                  >
                    <Link
                      to={child.href}
                      className="block px-4 py-2 text-sm hover:bg-gray-100 transition-colors duration-150"
                    >
                      <motion.span whileHover={{ x: 5 }} className="block">
                        {child.name}
                      </motion.span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.li>
  );
}

function NavItem({
  item,
  index,
  scrolled,
}: {
  item: {
    name: string;
    href?: string;
    children?: Array<{ name: string; href: string }>;
  };
  index: number;
  scrolled: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.li
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <NavLink
        to={item.href || "#"}
        className={({ isActive }) =>
          clsx(
            "px-3 py-2 rounded-md text-sm font-medium hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-ring/50 relative block",
            scrolled ? "text-white" : "text-foreground"
          )
        }
      >
        {({ isActive }) => (
          <>
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block relative text-white"
            >
              {item.name}
            </motion.span>
            <AnimatedUnderline
              isHovered={isHovered}
              isActive={isActive}
              scrolled={scrolled}
            />
          </>
        )}
      </NavLink>
    </motion.li>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled
          ? "bg-brand-600/95 backdrop-blur supports-backdrop-filter:bg-brand-600/85 shadow"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-3"
          >
            <Link to="/" className="flex items-center gap-0">
              <motion.img
                src="/logo.png"
                alt="Logo"
                className="h-24 w-auto object-contain p-2 bg-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              />
            </Link>
          </motion.div>

          {/* Desktop nav */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="hidden lg:flex items-center gap-1"
          >
            <ul
              className={clsx(
                "flex items-center gap-6",
                scrolled ? "text-white" : "text-foreground"
              )}
            >
              {NavItems.map((item, index) => {
                const hasChildren = item.children && item.children.length > 0;
                if (!hasChildren) {
                  return (
                    <NavItem
                      key={item.name}
                      item={item}
                      index={index}
                      scrolled={scrolled}
                    />
                  );
                }
                return (
                  <DropdownItem
                    key={item.name}
                    item={item}
                    index={index}
                    scrolled={scrolled}
                  />
                );
              })}
            </ul>
          </motion.div>

          {/* Mobile hamburger */}
          <motion.button
            type="button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={clsx(
              "lg:hidden inline-flex items-center justify-center rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-ring/50",
              scrolled
                ? "text-white hover:bg-white/10"
                : "text-foreground hover:bg-foreground/5"
            )}
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <FiMenu className="h-6 w-6" />
          </motion.button>
        </div>
      </nav>

      {/* Mobile sheet */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed inset-0 z-50"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/40"
              onClick={() => setMobileOpen(false)}
              aria-hidden
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute inset-y-0 right-0 w-80 max-w-[90%] bg-white shadow-xl p-4 flex flex-col"
            >
              <div className="flex items-center justify-between">
                <Link
                  to="/"
                  className="flex items-center gap-2"
                  onClick={() => setMobileOpen(false)}
                >
                  <motion.img
                    src="/logo.jpg"
                    alt="Logo"
                    className="h-8 w-auto object-contain"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  />
                </Link>
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  className="rounded-md p-2 text-foreground hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-ring/50"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                >
                  <FiX className="h-6 w-6" />
                </motion.button>
              </div>
              <nav className="mt-4 overflow-y-auto">
                <ul className="space-y-1">
                  {NavItems.map((item, index) => {
                    const hasChildren =
                      item.children && item.children.length > 0;
                    const isServices =
                      item.href === "/services" ||
                      item.name.toLowerCase() === "services";

                    return (
                      <motion.li
                        key={item.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                      >
                        {/* If Services (or explicit /services) => prevent navigation on parent */}
                        <Link
                          to={item.href || "#"}
                          onClick={(e) => {
                            if (isServices && hasChildren) {
                              // Prevent navigation for Services parent; keep mobile open (or toggle if you implement)
                              e.preventDefault();
                              // We keep children visible by default in your current mobile UI,
                              // so just do nothing further here.
                              return;
                            }
                            setMobileOpen(false);
                          }}
                          className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-100 transition-colors duration-150"
                        >
                          <motion.span whileHover={{ x: 5 }} className="block">
                            {item.name}
                          </motion.span>
                        </Link>
                        {hasChildren && (
                          <motion.ul
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            transition={{ duration: 0.3 }}
                            className="mt-1 pl-4 space-y-1"
                          >
                            {item.children!.map((child, childIndex) => (
                              <motion.li
                                key={child.name}
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                  duration: 0.2,
                                  delay: childIndex * 0.03,
                                }}
                              >
                                <Link
                                  to={child.href}
                                  onClick={() => setMobileOpen(false)}
                                  className="block rounded-md px-3 py-2 text-sm hover:bg-gray-50 transition-colors duration-150"
                                >
                                  <motion.span
                                    whileHover={{ x: 5 }}
                                    className="block"
                                  >
                                    {child.name}
                                  </motion.span>
                                </Link>
                              </motion.li>
                            ))}
                          </motion.ul>
                        )}
                      </motion.li>
                    );
                  })}
                </ul>
              </nav>
              {PHONE_NUMBER && (
                <motion.a
                  href={`tel:${PHONE_NUMBER}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-auto inline-flex items-center justify-center rounded-md bg-brand-600 text-white px-3 py-2 text-sm font-medium hover:bg-brand-600/90 transition-colors duration-200"
                >
                  Call us
                </motion.a>
              )}
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
