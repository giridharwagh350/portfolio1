import { useState } from "react";
import { motion } from "motion/react";
import { Download, Compass, Sparkles, BookOpen } from "lucide-react";
import Button from "../ui/Button";
import Card from "../ui/Card";
import ResumeModal from "../ui/ResumeModal";
import profile from "./profile.jpeg";
import {
  LoopScribble,
  ScribbleStar,
  Sparkle,
  HandSquiggle,
} from "../ui/Doodles";

export default function Hero() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const roles = [
    { text: "M.Sc Computer Science 🎓", color: "bg-primary" },
    { text: "Java Developer ☕", color: "bg-accent" },
    { text: "Full Stack Developer 💻", color: "bg-secondary text-white" },
    { text: "Open to Work 🚀", color: "bg-emerald-400" },
  ];

  return (
    <section
      id="home"
      className="relative w-full pt-32 pb-16 md:pt-40 md:pb-24 bg-white overflow-hidden"
    >
      {/* Decorative Hand-Drawn Background Doodles */}
      <div className="absolute top-24 left-6 md:left-20 w-16 h-16 opacity-30 select-none pointer-events-none hidden sm:block">
        <LoopScribble className="animate-float-slow" />
      </div>
      <div className="absolute top-1/2 right-12 w-10 h-10 select-none pointer-events-none animate-float-fast">
        <ScribbleStar className="w-full h-full fill-accent" />
      </div>
      <div className="absolute bottom-16 left-12 w-8 h-8 select-none pointer-events-none animate-float">
        <Sparkle className="w-full h-full fill-secondary" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* LEFT COLUMN: GREETINGS AND TEXT */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">

            {/* Playful greeting badges with scaling animation */}
            <div className="flex flex-wrap gap-3 mb-6 select-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: -2 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
                className="inline-flex items-center gap-1.5 bg-secondary text-white font-extrabold uppercase text-xs md:text-sm px-4 py-2 border-3 border-black rounded-full shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
              >
                <Sparkles size={16} className="animate-spin-slow" />
                <span>Hello, Visitors! 👋</span>
              </motion.div>

              <motion.a
                href="#resources"
                initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                animate={{ opacity: 1, scale: 1, rotate: 2 }}
                transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.15 }}
                className="inline-flex items-center gap-1.5 bg-primary text-black hover:bg-yellow-400 font-extrabold uppercase text-xs md:text-sm px-4 py-2 border-3 border-black rounded-full shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] cursor-pointer hover:-translate-y-0.5 active:translate-y-0 active:shadow-[1px_1px_0px_0px_#000] transition-all animate-pulse"
              >
                <BookOpen size={16} className="stroke-[3]" />
                <span>Prep Resources Live 🚀</span>
              </motion.a>
            </div>

            {/* Main Name with extremely bold display font */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, type: "spring", stiffness: 100 }}
              className="relative"
            >
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tight text-dark leading-[1.05] mb-2">
                Giridhar <br />
                <span className="text-primary bg-yellow-100/50 px-2 rounded-2xl border-b-6 border-black">
                  Sandip Wagh
                </span>
              </h1>

              <div className="w-32 h-6 mt-1 mb-6">
                <HandSquiggle className="w-full h-full stroke-secondary" />
              </div>
            </motion.div>

            {/* Dynamic Role Badges Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-2 md:gap-3 mb-6 max-w-xl"
            >
              {roles.map((role, idx) => (
                <motion.span
                  key={idx}
                  whileHover={{ scale: 1.05, rotate: idx % 2 === 0 ? 1 : -1 }}
                  className={`text-xs md:text-sm font-black uppercase tracking-wider px-3.5 py-1.5 border-2.5 border-black rounded-full shadow-[2.5px_2.5px_0px_0px_#000000] select-none cursor-default ${role.color}`}
                >
                  {role.text}
                </motion.span>
              ))}
            </motion.div>

            {/* Short High-Impact Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-xl font-bold text-dark/80 max-w-xl mb-8 leading-relaxed"
            >
              Currently pursuing M.Sc. Computer Science with a strong interest in Full Stack Development, Java, and Data Analytics. Passionate about building real-world applications and continuously improving my technical skills.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4 items-center"
            >
              <Button
                variant="primary"
                size="lg"
                href="#social"
                icon={<Compass size={20} className="stroke-[3]" />}
              >
                Let's Connect
              </Button>

              

              <Button
                variant="secondary"
                size="lg"
                onClick={() => setIsResumeOpen(true)}
                icon={<Download size={20} className="stroke-[3]" />}
              >
                Resume
              </Button>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: PREMIUM APP WIDGET INTERFACE */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotate: 1 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 80, damping: 15 }}
            className="lg:col-span-5 relative flex justify-center lg:justify-end"
          >
            {/* Absolute positioning doodles framing the card */}
            <div className="absolute -top-10 -right-4 w-16 h-16 z-0 select-none pointer-events-none">
              <LoopScribble className="w-full h-full rotate-45" />
            </div>

            {/* Main Premium Widget Card (Inspired directly by the reference's profile UI) */}
            <Card
              className="w-full max-w-[360px] bg-white text-center flex flex-col items-center relative z-10"
              hoverLift={true}
              hoverShadow={true}
            >
              {/* Profile Image with verification checkmark */}
              <div className="w-44 h-44 mb-6 relative">
                <motion.div
                  className="w-full h-full rounded-full bg-primary border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden flex items-center justify-center"
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 12 }}
                >
                  

                  <img
                    src={profile}
                    alt="Giridhar Wagh"
                    className="w-full h-full object-cover"
                  />

                  {/* Small verified check badge like the reference */}
                  <div className="absolute top-4 right-4 bg-emerald-500 border-2 border-black rounded-full p-0.5 flex items-center justify-center w-6 h-6 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 text-white stroke-white stroke-[4px] fill-none">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                </motion.div>
              </div>

              {/* Title & Handles */}
              <h3 className="text-2xl font-black text-dark tracking-tight uppercase leading-none">
                Giridhar Wagh
              </h3>
              <p className="text-xs font-black text-dark/50 mt-1 uppercase">
                @giridharwagh
              </p>

              {/* IIIT Nagpur Credit Transfer Pink Capsule like the reference wallet address pill */}
              <div className="mt-4 bg-[#FF7BB0] text-black text-xs font-black uppercase tracking-wider px-4 py-1.5 border-2 border-black rounded-full shadow-[2px_2px_0px_0px_#000000] select-none">
                M.Sc Computer Science • DY Patil ACS
              </div>

              {/* Hello world card message */}
              <div className="mt-5 bg-muted-bg border-2 border-black p-4 rounded-2xl w-full text-left">
                <p className="text-xs md:text-sm font-bold text-dark/80 leading-normal">
                  "Pursuing M.Sc. Computer Science at Dr. D. Y. Patil ACS College, Pimpri Chinchwad. Completed B.Sc. Computer Science in 2025. Skilled in Java, React, Node.js, MySQL, MongoDB, HTML, CSS, and JavaScript."
                </p>
              </div>

              {/* Circular Social Connect Buttons (Inspired by reference bottom row circles) */}
              <div className="mt-6 flex items-center gap-3">
                <span className="text-xs font-black uppercase text-dark/40 mr-1">
                  PALS:
                </span>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/tiger_w14/?hl=en"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-primary border-2 border-black flex items-center justify-center font-black text-sm shadow-[1.5px_1.5px_0px_0px_#000] hover:-translate-y-1 active:translate-y-0 active:shadow-none transition-all cursor-pointer animate-float"
                >
                  📸
                </a>
                {/* YouTube */}
                <a
                  href="https://github.com/giridharwagh350/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-secondary text-white border-2 border-black flex items-center justify-center font-black text-sm shadow-[1.5px_1.5px_0px_0px_#000] hover:-translate-y-1 active:translate-y-0 active:shadow-none transition-all cursor-pointer animate-float-slow"
                >
                  📺
                </a>
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/giridharwagh350/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-accent border-2 border-black flex items-center justify-center font-black text-sm shadow-[1.5px_1.5px_0px_0px_#000] hover:-translate-y-1 active:translate-y-0 active:shadow-none transition-all cursor-pointer animate-float-fast"
                >
                  👔
                </a>
              </div>
            </Card>
          </motion.div>

        </div>
      </div>

      {/* Interactive Resume Modal Backdrop integration */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </section>
  );
}
