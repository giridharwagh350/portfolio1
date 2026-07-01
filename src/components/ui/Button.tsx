import { motion } from "motion/react";
import { ButtonProps } from "../../types";

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  id,
  href,
  icon,
  iconPosition = "left",
}: ButtonProps) {
  // Styles based on design language (thick borders, bold typography, hand-drawn/brutalist feelings)
  const baseStyle =
    "inline-flex items-center justify-center font-extrabold uppercase tracking-wider border-[3px] border-dark rounded-full transition-all duration-150 select-none cursor-pointer text-center";

  const variants = {
    primary: "bg-primary text-black hover:bg-yellow-400 shadow-[4px_4px_0px_0px_#1E1E1E] hover:shadow-[6px_6px_0px_0px_#1E1E1E] hover:-translate-x-[2px] hover:-translate-y-[2px] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_#1E1E1E]",
    secondary: "bg-white text-black hover:bg-neutral-100 shadow-[4px_4px_0px_0px_#1E1E1E] hover:shadow-[6px_6px_0px_0px_#1E1E1E] hover:-translate-x-[2px] hover:-translate-y-[2px] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_#1E1E1E]",
    accent: "bg-accent text-black hover:bg-sky-400 shadow-[4px_4px_0px_0px_#1E1E1E] hover:shadow-[6px_6px_0px_0px_#1E1E1E] hover:-translate-x-[2px] hover:-translate-y-[2px] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_#1E1E1E]",
    danger: "bg-secondary text-white hover:bg-red-600 shadow-[4px_4px_0px_0px_#1E1E1E] hover:shadow-[6px_6px_0px_0px_#1E1E1E] hover:-translate-x-[2px] hover:-translate-y-[2px] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_#1E1E1E]",
    outline: "bg-transparent text-black hover:bg-black hover:text-white shadow-none",
    dark: "bg-dark text-white hover:bg-black shadow-[4px_4px_0px_0px_#1E1E1E] hover:shadow-[6px_6px_0px_0px_#1E1E1E] hover:-translate-x-[2px] hover:-translate-y-[2px] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_#1E1E1E]",
  };

  const sizes = {
    sm: "px-4 py-1.5 text-xs",
    md: "px-6 py-2.5 text-sm md:text-base",
    lg: "px-8 py-3.5 text-base md:text-lg",
    xl: "px-10 py-4.5 text-lg md:text-xl",
  };

  const buttonContent = (
    <>
      {icon && iconPosition === "left" && (
        <span className="mr-2 flex items-center justify-center">{icon}</span>
      )}
      <span>{children}</span>
      {icon && iconPosition === "right" && (
        <span className="ml-2 flex items-center justify-center">{icon}</span>
      )}
    </>
  );

  const combinedClass = `${baseStyle} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <motion.a
        id={id}
        href={href}
        className={combinedClass}
        whileTap={{ scale: 0.96 }}
        transition={{ type: "spring", stiffness: 400, damping: 15 }}
      >
        {buttonContent}
      </motion.a>
    );
  }

  return (
    <motion.button
      id={id}
      onClick={onClick}
      className={combinedClass}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
    >
      {buttonContent}
    </motion.button>
  );
}
