import { motion } from "motion/react";
import { ExternalLink, Code, Youtube, Play, FileText, Sparkles, BookOpen } from "lucide-react";
import Card from "../ui/Card";
import SectionWrapper from "../ui/SectionWrapper";
import { LoopScribble, ScribbleStar, Sparkle } from "../ui/Doodles";

export default function Resources() {
  const resourceItems = [
    {
      title: "TCS NQT Coding Sheet",
      desc: "Comprehensive question bank curated to master coding logic and pass TCS NQT technical rounds.",
      url: "https://takeuforward.org/interviews/tcs-nqt-coding-sheet-tcs-coding-questions",
      icon: <Code size={24} className="stroke-[2.5]" />,
      badge: "DSA & Coding",
      color: "bg-[#FFC83D]", // Yellow
      hoverText: "View Coding Sheet",
    },
    {
      title: "Aptitude Prep Playlist",
      desc: "Top-tier curated YouTube video series containing essential tricks for quantitative & logical reasoning.",
      url: "https://youtube.com/playlist?list=PL3JmT-xgOMNy5r3QBTRzv32LFUTXBmKf2&si=k-qY-U4XOGgD0Zkz",
      icon: <Youtube size={24} className="stroke-[2.5]" />,
      badge: "Aptitude & Logic",
      color: "bg-[#FF5C5C] text-white", // Red
      hoverText: "Watch YouTube Playlist",
    },
    {
      title: "LeetCode 75 Roadmap",
      desc: "Curated list of 75 high-yield LeetCode DSA questions to build robust logical foundations fast.",
      url: "https://share.google/1a5FnrzfPLYGb9dzX",
      icon: <Sparkles size={24} className="stroke-[2.5]" />,
      badge: "Must-Do DSA",
      color: "bg-[#38BDF8]", // Blue
      hoverText: "Open DSA Sheet",
    },
    {
      title: "ATS Resume Template",
      desc: "High-conversion, ATS-optimized Google Docs resume template built for student placement rounds.",
      url: "https://docs.google.com/document/d/1bu83tp5TB0dEh7URsDWeRXFQh8qakz04/edit?usp=drivesdk&ouid=102374584970926930089&rtpof=true&sd=true",
      icon: <FileText size={24} className="stroke-[2.5]" />,
      badge: "Placement Asset",
      color: "bg-emerald-300", // Green
      hoverText: "Get Resume Template",
    },
  ];

  return (
    <SectionWrapper
      id="resources"
      title="PREPARATION RESOURCES"
      subtitle="The exact resources I use daily for DSA, Aptitude, and on-campus Placement preparation. Feel free to copy!"
    >
      <div className="relative">
        {/* Playful backdrop decorators */}
        <div className="absolute top-1/2 -left-12 w-16 h-16 pointer-events-none hidden lg:block animate-float-slow">
          <LoopScribble className="w-full h-full rotate-45" />
        </div>
        <div className="absolute bottom-6 -right-12 w-12 h-12 pointer-events-none hidden lg:block animate-pulse">
          <ScribbleStar className="w-full h-full fill-primary" />
        </div>

        {/* Highlight Callout Box for placement ready state */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 bg-dark text-white border-3 border-black p-6 md:p-8 rounded-[32px] shadow-[8px_8px_0px_0px_#FFC83D] flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden"
        >
          {/* Neon decorative background light */}
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-secondary opacity-25 rounded-full blur-2xl pointer-events-none" />

          <div className="flex items-center gap-4 text-left">
            <div className="w-14 h-14 rounded-2xl bg-primary border-2 border-black flex items-center justify-center shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              <BookOpen className="text-black stroke-[3]" size={26} />
            </div>
            <div>
              <span className="text-[10px] md:text-xs font-black uppercase text-primary tracking-widest bg-yellow-400/10 border border-primary/20 px-2.5 py-1 rounded-full">
                Placement Ready Kit 🚀
              </span>
              <h3 className="text-xl md:text-2xl font-black uppercase mt-1 tracking-tight">
                Get All My Prep Materials
              </h3>
              <p className="text-xs md:text-sm font-bold text-neutral-300 mt-1 max-w-xl leading-relaxed">
                "Sharing is caring! These curated sources are helping me study for technical assessments, Aptitude modules, and analytics rounds."
              </p>
            </div>
          </div>

          <div className="shrink-0 flex items-center gap-2">
            <div className="text-xs font-black uppercase tracking-wider text-neutral-400">
              Click cards below to open links directly!
            </div>
          </div>
        </motion.div>

        {/* Bento Grid layout for Resources */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {resourceItems.map((item, idx) => (
            <Card
              key={idx}
              bg={item.color}
              className="border-3 border-black p-6 md:p-8 flex flex-col justify-between items-start text-left relative overflow-hidden min-h-[220px]"
              hoverLift={true}
              hoverShadow={true}
              onClick={() => window.open(item.url, "_blank")}
            >
              {/* Corner accent link icon */}
              <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_0px_#000] hover:scale-110 active:scale-95 transition-transform">
                <ExternalLink size={16} className="stroke-[3] text-black" />
              </div>

              {/* Tag / Badge */}
              <div className="bg-white border-2 border-black rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-wider text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] select-none">
                {item.badge}
              </div>

              {/* Title & Description */}
              <div className="mt-6 flex-1">
                <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-current leading-none mb-3">
                  {item.title}
                </h3>
                <p className="text-xs md:text-sm font-extrabold opacity-90 leading-relaxed mb-6">
                  {item.desc}
                </p>
              </div>

              {/* Action Bar */}
              <div className="w-full flex items-center justify-between border-t border-current/20 pt-4">
                <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider">
                  <span className="w-8 h-8 rounded-full bg-white border border-black flex items-center justify-center text-black shadow-[1.5px_1.5px_0px_0px_#000]">
                    {item.icon}
                  </span>
                  <span>{item.hoverText}</span>
                </div>
                <div className="w-6 h-6 rounded-full bg-white border-2 border-black flex items-center justify-center text-black text-xs font-black">
                  ⚡
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
