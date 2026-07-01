import { motion } from "motion/react";
import { SectionWrapperProps } from "../../types";

export default function SectionWrapper({
  id,
  title,
  subtitle,
  children,
  className = "",
  bg = "bg-white",
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`relative w-full py-16 md:py-24 ${bg} overflow-hidden ${className}`}
    >
      {/* Container with Desktop-First Precision and mobile-friendly gutters */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading with Cartoon/Neo-brutal styling */}
        {title && (
          <div className="mb-12 md:mb-18 flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 120, damping: 12 }}
              className="relative inline-block"
            >
              {/* Thick shadow effect behind heading */}
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-dark border-3 border-black bg-primary px-6 py-3 rounded-2xl shadow-[4px_4px_0px_0px_#000000] relative z-10 select-none">
                {title}
              </h2>
              {/* Playful abstract yellow circle behind section title */}
              <div className="absolute -top-3 -left-4 w-12 h-12 bg-accent rounded-full border-2 border-black -z-0 animate-pulse" />
              <div className="absolute -bottom-3 -right-4 w-8 h-8 bg-secondary rounded-full border-2 border-black -z-0" />
            </motion.div>
            
            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="mt-6 text-base md:text-lg font-bold text-dark max-w-xl"
              >
                {subtitle}
              </motion.p>
            )}
          </div>
        )}

        {/* Content body with Framer Motion staggering */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
