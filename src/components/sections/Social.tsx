import { motion } from "motion/react";
import { Instagram, Youtube, Linkedin, Github, Mail, ArrowUpRight } from "lucide-react";
import Card from "../ui/Card";
import SectionWrapper from "../ui/SectionWrapper";
import { Sparkle, ScribbleStar } from "../ui/Doodles";
import resumePdf from "./giridharwagh_resume.pdf";

interface SocialWidgetProps {
  name: string;
  handle: string;
  label: string;
  icon: any;
  color: string;
  hoverColor: string;
  url: string;
  colSpan: string;
}

const SOCIAL_ITEMS: SocialWidgetProps[] = [
  {
    name: "LinkedIn",
    handle: "Giridhar Wagh",
    label: "Connect with me for professional networking, internships, and career opportunities.",
    icon: Linkedin,
    color: "bg-accent",
    hoverColor: "hover:bg-sky-400",
    url: "https://www.linkedin.com/in/giridharwagh350",
    colSpan: "md:col-span-4",
  },
  {
    name: "GitHub",
    handle: "Giridharwagh350",
    label: "Explore my Full Stack, Java, Cyber Security, and MERN Stack projects.",
    icon: Github,
    color: "bg-dark text-white",
    hoverColor: "hover:bg-black",
    url: "https://github.com/giridharwagh350",
    colSpan: "md:col-span-4",
  },
  {
    name: "Email",
    handle: "giridharwagh0943@gmail.com",
    label: "Open to Full Stack Java Developer, Software Engineer, and Cyber Security opportunities.",
    icon: Mail,
    color: "bg-primary",
    hoverColor: "hover:bg-yellow-400",
    url: "mailto:giridharwagh0943@gmail.com",
    colSpan: "md:col-span-4",
  },
  {
    name: "project",
    handle: "AI Cyber Security",
    label: "Explore my AI Cyber Security project",
    icon: ArrowUpRight,
    color: "bg-[#7C3AED] text-white",
    hoverColor: "hover:bg-violet-700",
    url: "https://ai-cyber-security-assistant.onrender.com/",
    colSpan: "md:col-span-6",
  },
  {
  name: "Resume",
  handle: "Download CV",
  label: "Download my latest resume with education, internships, technical skills, and projects.",
  icon: Mail,
  color: "bg-emerald-500 text-white",
  hoverColor: "hover:bg-emerald-600",
  url: resumePdf,
  colSpan: "md:col-span-6",
},
];

export default function Social() {
  return (
    <SectionWrapper
      id="social"
      title="SOCIALS"
      subtitle="Follow my authentic journey daily or send over placement collaborations."
    >
      <div className="relative">
        {/* Floating star doodle */}
        <div className="absolute top-1/2 -right-12 w-12 h-12 select-none pointer-events-none hidden lg:block">
          <ScribbleStar className="w-full h-full fill-primary rotate-45" />
        </div>
        <div className="absolute bottom-6 -left-12 w-10 h-10 select-none pointer-events-none hidden lg:block">
          <Sparkle className="w-full h-full fill-secondary" />
        </div>

        {/* Bento grid of premium app-style social widgets */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {SOCIAL_ITEMS.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <Card
                key={index}
                bg={item.color}
                className={`${item.colSpan} border-3 border-black p-6 md:p-8 flex flex-col justify-between items-start text-left relative overflow-hidden`}
                hoverLift={true}
                hoverShadow={true}
                onClick={() => window.open(item.url, "_blank")}
              >
                {/* Outgoing hover arrow card indicator */}
                <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_0px_#000] hover:scale-110 active:scale-95 transition-transform">
                  <ArrowUpRight size={18} className="stroke-[3] text-black" />
                </div>

                {/* Top Section: Large custom-styled circle icon */}
                <div className="w-16 h-16 rounded-2xl bg-white border-3 border-black flex items-center justify-center text-black shadow-[3px_3px_0px_0px_#000000] mb-8 select-none">
                  <IconComponent size={30} className="stroke-[2.5]" />
                </div>

                {/* Bottom Section: Text and handles */}
                <div>
                  <h4 className="text-xs font-black uppercase tracking-widest text-black/40">
                    {item.name}
                  </h4>
                  <h3 className="text-xl md:text-2xl font-black text-black tracking-tight mt-1 leading-none uppercase">
                    {item.handle}
                  </h3>
                  <p className="text-sm font-extrabold text-black/80 mt-4 leading-normal">
                    {item.label}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
