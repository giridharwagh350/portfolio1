import { motion } from "motion/react";
import Card from "../ui/Card";
import SectionWrapper from "../ui/SectionWrapper";
import { Sparkle, ScribbleStar } from "../ui/Doodles";

interface SkillCardProps {
  icon: string;
  title: string;
  subtitle: string;
  bgColor: string;
  colSpan?: string;
  shadowColor?: string;
}

const FOCUS_ITEMS: SkillCardProps[] = [
  {
    icon: "☕",
    title: "Java",
    subtitle: "Building strong expertise in Core Java, Object-Oriented Programming (OOP), Collections Framework, Exception Handling, and JDBC.",
    bgColor: "bg-primary",
    colSpan: "md:col-span-4",
  },
  {
    icon: "🗄️",
    title: "SQL Databases",
    subtitle: "Writing complex joins, subqueries, and optimizing relational schemas.",
    bgColor: "bg-accent",
    colSpan: "md:col-span-4",
  },
  {
    icon: "⚛️",
    title: "React.js",
    subtitle: "Developing modern, responsive, and interactive user interfaces using React.js, Hooks, Components, and Tailwind CSS.",
    bgColor: "bg-secondary text-white",
    colSpan: "md:col-span-4",
  },
  {
    icon: "🟢",
    title: "Node.js",
    subtitle: "Building scalable backend applications, REST APIs, authentication systems, and server-side logic using Express.js.",
    bgColor: "bg-emerald-300",
    colSpan: "md:col-span-6",
  },
  {
    icon: "🍃",
    title: "Spring Boot",
    subtitle: "Learning Spring Boot to build secure, scalable Java backend applications with REST APIs, Spring MVC, Spring Data JPA, and MySQL integration.",
    bgColor: "bg-purple-300",
    colSpan: "md:col-span-6",
  },
  {
    icon: "⚡",
    title: "Data Structures & Algorithms",
    subtitle: "Strengthening logic & code quality for rigorous technical rounds.",
    bgColor: "bg-amber-300",
    colSpan: "md:col-span-4",
  },
  {
    icon: "🧠",
    title: "Aptitude",
    subtitle: "Cracking quantitative analysis, logical reasoning, and puzzle-solving.",
    bgColor: "bg-fuchsia-300",
    colSpan: "md:col-span-4",
  },
  {
    icon: "🎯",
    title: "Placement Preparation",
    subtitle: "Preparing daily for on-campus interviews, placements, and mock exams.",
    bgColor: "bg-teal-300",
    colSpan: "md:col-span-4",
  },
];

export default function Focus() {
  return (
    <SectionWrapper
      id="focus"
      title="CURRENT FOCUS"
      subtitle="What I am learning, building, and preparing for placements every single day."
    >
      <div className="relative">
        {/* Floating background doodle */}
        <div className="absolute top-1/3 -left-12 w-14 h-14 select-none pointer-events-none hidden lg:block">
          <ScribbleStar className="w-full h-full fill-secondary rotate-12" />
        </div>
        <div className="absolute bottom-12 -right-12 w-12 h-12 select-none pointer-events-none hidden lg:block">
          <Sparkle className="w-full h-full fill-accent" />
        </div>

        {/* Asymmetrical Bento Grid matching the layout hierarchy of the reference */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {FOCUS_ITEMS.map((item, index) => (
            <Card
              key={index}
              bg={item.bgColor}
              className={`${item.colSpan || "md:col-span-4"} border-3 border-black p-6 flex flex-col justify-between items-start text-left relative overflow-hidden`}
              hoverLift={true}
              hoverShadow={true}
            >
              {/* Highlight corner shine */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-white/20 -rotate-45 translate-x-8 -translate-y-8 pointer-events-none" />

              <div>
                {/* Large Round Circle Icon Container */}
                <div className="w-16 h-16 rounded-2xl bg-white border-3 border-black flex items-center justify-center text-3xl shadow-[3px_3px_0px_0px_#000000] mb-6 select-none">
                  {item.icon}
                </div>

                {/* Card Title */}
                <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-black">
                  {item.title}
                </h3>
              </div>

              {/* Card Subtitle */}
              <p className="text-sm font-extrabold text-black/80 mt-4 leading-relaxed">
                {item.subtitle}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}