"use client";

import React, { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      aria-label="Scroll to top"
      onClick={scrollToTop}
      className={`sticky bottom-[4%] left-[80%] md:left-[90%] xl:left-[95%] z-50 p-3 rounded-full bg-gradient-to-b from-accent-foreground/80 to-accent-foreground/40 backdrop-blur-md text-primary-foreground cursor-pointer shadow-lg hover:text-white hover:bg-gradient-to-t hover:from-background/80 hover:to-backfrom-background/40
        transition-all duration-300
        ${
          visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-6 pointer-events-none"
        }
      `}
      style={{ willChange: "opacity, transform" }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
};

export default ScrollToTopButton;
