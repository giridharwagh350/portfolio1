import { ReactNode } from "react";

export interface NavItem {
  id: string;
  label: string;
}

export interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "accent" | "outline" | "danger" | "dark";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  onClick?: () => void;
  id?: string;
  href?: string;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
}

export interface CardProps {
  children: ReactNode;
  className?: string;
  id?: string;
  bg?: string;
  borderColor?: string;
  shadowColor?: string;
  hoverLift?: boolean;
  hoverShadow?: boolean;
  onClick?: () => void;
  key?: string | number;
}

export interface SectionWrapperProps {
  id: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  bg?: string;
}

export interface SkillItem {
  icon: string;
  title: string;
  subtitle: string;
  color: string;
  textColor?: string;
}

export interface SocialItem {
  name: string;
  label: string;
  icon: ReactNode;
  url: string;
  color: string;
  textColor?: string;
}
