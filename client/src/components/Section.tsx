import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  delay?: number;
  bg?: "white" | "light" | "dark";
}

export function Section({ children, className = "", id, delay = 0, bg = "white" }: SectionProps) {
  const bgStyles = {
    white: "bg-background",
    light: "bg-secondary/30",
    dark: "bg-primary text-primary-foreground",
  };

  return (
    <section id={id} className={`py-12 md:py-20 ${bgStyles[bg]} overflow-hidden`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut", delay }}
        className={`container mx-auto px-4 ${className}`}
      >
        {children}
      </motion.div>
    </section>
  );
}
