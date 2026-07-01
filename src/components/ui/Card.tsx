import { motion } from "motion/react";
import { CardProps } from "../../types";

export default function Card({
  children,
  className = "",
  id,
  bg = "bg-white",
  borderColor = "border-black",
  shadowColor = "shadow-black",
  hoverLift = true,
  hoverShadow = true,
  onClick,
}: CardProps) {
  // Thick borders, highly rounded corners, bold offset shadows
  const baseStyle = `rounded-[48px] border-[3px] border-dark ${bg} p-6 md:p-10 transition-all duration-300`;

  // Dynamic shadow classes based on hover state configuration
  const shadowStyle = hoverShadow
    ? `shadow-[10px_10px_0px_0px_rgba(30,30,30,1)] hover:shadow-[14px_14px_0px_0px_rgba(30,30,30,1)]`
    : `shadow-[10px_10px_0px_0px_rgba(30,30,30,1)]`;

  const liftStyle = hoverLift
    ? `hover:-translate-x-[4px] hover:-translate-y-[4px] active:translate-x-0 active:translate-y-0 active:shadow-[6px_6px_0px_0px_rgba(30,30,30,1)]`
    : "";

  return (
    <motion.div
      id={id}
      onClick={onClick}
      className={`${baseStyle} ${shadowStyle} ${liftStyle} ${className} ${onClick ? "cursor-pointer" : ""}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
    >
      {children}
    </motion.div>
  );
}
