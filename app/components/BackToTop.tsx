import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    const updateScrollProgress = () => {
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (window.pageYOffset / scrollHeight) * 100;
      setScrollProgress(scrolled);
    };

    const handleScroll = () => {
      toggleVisibility();
      updateScrollProgress();
    };

    window.addEventListener("scroll", handleScroll);
    // Initial call to set correct state on mount
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`fixed bottom-8 right-8 p-4 rounded-full shadow-lg transition-all duration-300 ease-in-out transform group ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-16 pointer-events-none"
        }`}
        style={{
          backgroundColor: "#3a5a40",
          zIndex: 1000,
        }}
        aria-label="Back to top"
      >
        {/* Ripple effect background */}
        <div
          className={`absolute inset-0 rounded-full transition-all duration-300 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
          style={{
            backgroundColor: "#588157",
            opacity: isHovered ? 0.3 : 0,
          }}
        />

        {/* Rotating border effect */}
        <div
          className={`absolute inset-0 rounded-full border-2 transition-all duration-500 ${
            isHovered ? "rotate-180 scale-110" : "rotate-0 scale-100"
          }`}
          style={{
            borderColor: "#a3b18a",
            opacity: isHovered ? 1 : 0,
          }}
        />

        {/* Icon with bounce animation */}
        <ArrowUp
          className={`relative z-10 transition-all duration-300 ${
            isHovered ? "animate-bounce" : ""
          }`}
          size={24}
          color="#dad7cd"
          strokeWidth={2.5}
        />

        {/* Pulse effect on scroll */}
        <div
          className="absolute inset-0 rounded-full animate-ping"
          style={{
            backgroundColor: "#588157",
            opacity: 0.2,
            animationDuration: "2s",
            animationIterationCount: isVisible && !isHovered ? "infinite" : "0",
          }}
        />

        {/* Tooltip */}
        <span
          className={`absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-300 ${
            isHovered
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-2 pointer-events-none"
          }`}
          style={{
            backgroundColor: "#344e41",
            color: "#dad7cd",
          }}
        >
          Back to Top
          {/* Tooltip arrow */}
          <span
            className="absolute left-full top-1/2 -translate-y-1/2 border-8 border-transparent"
            style={{
              borderLeftColor: "#344e41",
            }}
          />
        </span>
      </button>

      {/* Scroll Progress Indicator */}
      <div
        className="fixed top-0 left-0 h-1 bg-brand-200 transition-all duration-300"
        style={{
          width: `${scrollProgress}%`,
          zIndex: 9999,
        }}
      />
    </>
  );
}
