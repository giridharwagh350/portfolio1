import { motion } from "motion/react";
import Card from "../ui/Card";
import SectionWrapper from "../ui/SectionWrapper";
import { Sparkle, ScribbleStar } from "../ui/Doodles";

export default function About() {
  const details = [
    {
      icon: "📍",
      title: "Location",
      desc: "Malegaon, Nashik, Maharashtra, India",
      color: "bg-primary",
    },
    {
      icon: "🎓",
      title: "Education",
      desc: "Master of Science (M.Sc.) in Computer Science (2025 - 2027)",
      color: "bg-accent",
    },
    {
      icon: "🏫",
      title: "College",
      desc: "Dr. D. Y. Patil ACS College, Pimpri Chinchwad, Pune",
      color: "bg-secondary text-white",
    },
    {
      icon: "🎯",
      title: "Career Goal",
      desc: "Aspiring Full Stack Java Developer passionate about building scalable web applications and solving real-world problems.",
      color: "bg-yellow-200",
    },
    {
      icon: "🛡️",
      title: "Cyber Security Internship",
      desc: "Completed a 6-month Cyber Security Internship at Cybernetics Software Pvt. Ltd. & Security Shells Infotech Pvt. Ltd. (Nov 2025 – May 2026). ",
      color: "bg-red-200",
    },
    {
      icon: "💻",
      title: "Technical Skills",
      desc: "Java, React.js, Node.js, HTML, CSS, JavaScript, MySQL, MongoDB, Git & GitHub",
      color: "bg-blue-200",
    },
  ];

  return (
    <SectionWrapper
      id="about"
      title="ABOUT ME"
      subtitle="Who I am, what I study, and where I represent."
    >
      <div className="max-w-4xl mx-auto relative">
        {/* Decorative Elements */}
        <div className="absolute -top-12 -left-8 w-12 h-12 rotate-12 hidden sm:block">
          <ScribbleStar className="w-full h-full fill-accent" />
        </div>

        <div className="absolute -bottom-10 -right-8 w-10 h-10 hidden sm:block animate-pulse">
          <Sparkle className="w-full h-full fill-secondary" />
        </div>

        {/* About Card */}
        <Card
          className="bg-white border-3 border-black w-full"
          hoverLift={false}
        >
          <div className="flex flex-col gap-8">
            {details.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
                className="flex flex-col sm:flex-row gap-5 items-start sm:items-center border-b-2 border-dashed border-black/15 last:border-0 pb-7 last:pb-0"
              >
                <div
                  className={`w-16 h-16 rounded-2xl border-3 border-black flex items-center justify-center text-3xl shadow-[3px_3px_0px_0px_#000] shrink-0 ${item.color}`}
                >
                  {item.icon}
                </div>

                <div className="flex-1">
                  <h4 className="text-sm uppercase font-black tracking-wider text-dark/50">
                    {item.title}
                  </h4>

                  <p className="text-lg md:text-xl font-bold text-dark mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </Card>
      </div>
    </SectionWrapper>
  );
}