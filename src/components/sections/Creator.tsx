import { motion } from "motion/react";
import { Briefcase, ShieldCheck, Code2, GraduationCap } from "lucide-react";
import Card from "../ui/Card";
import SectionWrapper from "../ui/SectionWrapper";
import { LoopScribble, ScribbleStar, Sparkle } from "../ui/Doodles";

export default function Experience() {
  const highlights = [
    { icon: "💻", text: "Full Stack Developer" },
    { icon: "🛡️", text: "Cyber Security" },
    { icon: "☕", text: "Java Developer" },
    { icon: "🚀", text: "Open to Work" },
    { icon: "🎓", text: "M.Sc. Computer Science" },
  ];

  const experiences = [
    {
      company:
        "Cybernetics Software Pvt. Ltd. & Security Shells Infotech Pvt. Ltd.",
      role: "Cyber Security Intern",
      duration: "Nov 2025 – May 2026",
      icon: <ShieldCheck size={24} className="stroke-[3]" />,
      color: "bg-red-200",
      description:
        "Completed a 6-month Cyber Security Internship working on system monitoring, vulnerability assessment, network security, security testing, and basic cybersecurity operations.",
    },
    
  ];

  return (
    <SectionWrapper
      id="experience"
      title="PROFESSIONAL EXPERIENCE"
      subtitle="Hands-on industry experience through internships and real-world projects."
    >
      <div className="relative">
        <div className="absolute top-1/2 -left-16 w-20 h-20 opacity-35 hidden lg:block">
          <LoopScribble className="w-full h-full animate-float-slow" />
        </div>

        <Card
          bg="bg-white"
          className="border-3 border-black w-full"
          hoverLift={false}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

            {/* Left Side */}
            <div className="lg:col-span-5">

              <div className="flex items-center gap-2 bg-primary/20 border-2 border-black rounded-full px-4 py-2 mb-6 shadow-[2px_2px_0px_0px_#000]">
                <Briefcase size={16} className="stroke-[3]" />
                <span className="font-black uppercase text-xs">
                  Industry Experience
                </span>
              </div>

              <h2 className="text-4xl font-black uppercase leading-tight mb-6">
                Learning Through
                <br />
                <span className="text-primary bg-yellow-100 px-2 rounded-xl border-b-4 border-black">
                  Real Projects
                </span>
              </h2>

              <p className="text-lg font-bold text-dark/70 leading-relaxed mb-8">
                My internships have helped me strengthen my skills in Full Stack
                Development and Cyber Security while working on real-world
                applications and industry practices.
              </p>

              <div className="flex flex-wrap gap-3">
                {highlights.map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 bg-muted-bg border-2 border-black rounded-full px-4 py-2 shadow-[2px_2px_0px_0px_#000]"
                  >
                    <span>{item.icon}</span>
                    <span className="text-sm font-black">{item.text}</span>
                  </motion.div>
                ))}
              </div>

            </div>

            {/* Right Side */}
            <div className="lg:col-span-7 flex flex-col gap-6">

              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className={`${exp.color} border-3 border-black rounded-3xl p-6 shadow-[5px_5px_0px_0px_#000]`}
                >
                  <div className="flex gap-4">

                    <div className="w-14 h-14 rounded-full bg-white border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_0px_#000]">
                      {exp.icon}
                    </div>

                    <div className="flex-1">

                      <h3 className="text-xl font-black uppercase">
                        {exp.role}
                      </h3>

                      <p className="font-bold text-dark">
                        {exp.company}
                      </p>

                      <p className="text-sm font-black text-dark/60 uppercase mt-1">
                        {exp.duration}
                      </p>

                      <p className="mt-4 text-sm font-bold leading-relaxed">
                        {exp.description}
                      </p>

                    </div>

                  </div>
                </motion.div>
              ))}

              <div className="bg-yellow-200 border-3 border-black rounded-3xl p-6 shadow-[5px_5px_0px_0px_#000]">
                <div className="flex items-center gap-3">
                  <GraduationCap size={26} />
                  <h3 className="font-black text-xl uppercase">
                    Career Objective
                  </h3>
                </div>

                <p className="mt-4 font-bold leading-relaxed">
                  Seeking an opportunity as a Full Stack Java Developer where I
                  can apply my expertise in Java, React.js, Node.js, Spring
                  Boot, and Cyber Security to build secure and scalable
                  software solutions.
                </p>
              </div>

            </div>

          </div>
        </Card>

        <div className="absolute -top-6 right-6 hidden sm:block">
          <ScribbleStar className="w-12 h-12 fill-primary" />
        </div>

        <div className="absolute -bottom-6 left-6 hidden sm:block">
          <Sparkle className="w-10 h-10 fill-accent" />
        </div>

      </div>
    </SectionWrapper>
  );
}