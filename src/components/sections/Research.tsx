import { motion } from "motion/react";
import { ShieldCheck, Award, GraduationCap, Calendar } from "lucide-react";
import Card from "../ui/Card";
import SectionWrapper from "../ui/SectionWrapper";
import { LoopScribble, ScribbleStar } from "../ui/Doodles";

export default function Certifications() {
  return (
    <SectionWrapper
      id="certifications"
      title="CERTIFICATIONS & ACHIEVEMENTS"
      subtitle="Professional certifications and practical learning experiences."
    >
      <div className="relative">
        <div className="absolute top-1/4 -right-12 w-16 h-16 hidden lg:block">
          <LoopScribble className="w-full h-full" />
        </div>

        <Card
          bg="bg-white"
          className="border-3 border-black"
          hoverLift={true}
        >
          <div className="grid lg:grid-cols-12 gap-12">

            {/* Left Side */}
            <div className="lg:col-span-7">

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-2 bg-red-100 border-2 border-black rounded-full px-4 py-2 mb-6 shadow-[3px_3px_0px_0px_#000]"
              >
                <ShieldCheck size={18} />
                <span className="font-black uppercase text-sm">
                  Cyber Security Internship
                </span>
              </motion.div>

              <h2 className="text-4xl md:text-5xl font-black uppercase leading-tight">
                Professional
                <br />
                <span className="text-red-500 bg-red-100 px-2 rounded-xl border-b-4 border-black">
                  Certifications
                </span>
              </h2>

              <p className="mt-6 text-lg font-semibold text-dark/70 leading-relaxed">
                Completed multiple certifications and internships in Full Stack
                Development and Cyber Security, gaining practical industry
                experience while pursuing my Master's degree.
              </p>

              <div className="mt-10 space-y-5">

                <div className="flex gap-4 border-2 border-black rounded-2xl p-5 bg-red-50 shadow-[3px_3px_0px_0px_#000]">
                  <ShieldCheck size={32} />

                  <div>
                    <h3 className="font-black text-lg">
                      Cyber Security Internship
                    </h3>

                    <p className="font-bold">
                      Cybernetics Software Pvt. Ltd. &
                      Security Shells Infotech Pvt. Ltd.
                    </p>

                    <p className="text-sm mt-2">
                      6 Months • Nov 2025 – May 2026
                    </p>
                  </div>
                </div>

                

              </div>
            </div>

            {/* Right Side */}
            <div className="lg:col-span-5 flex flex-col gap-6">

              <div className="border-3 border-black rounded-3xl p-8 bg-primary shadow-[5px_5px_0px_0px_#000]">

                <GraduationCap size={36} />

                <h3 className="text-2xl font-black mt-4">
                  M.Sc. Computer Science
                </h3>

                <p className="mt-3 font-bold">
                  Dr. D. Y. Patil ACS College,
                  Pimpri Chinchwad
                </p>

                <div className="flex items-center gap-2 mt-6">
                  <Calendar size={18} />
                  <span className="font-bold">
                    2025 – 2027
                  </span>
                </div>

              </div>

              <div className="border-3 border-black rounded-3xl p-8 bg-accent shadow-[5px_5px_0px_0px_#000]">

                <h3 className="text-3xl font-black">
                  Career Goal
                </h3>

                <p className="mt-4 font-bold leading-relaxed">
                  To build a successful career as a
                  Full Stack Java Developer while
                  leveraging my Cyber Security
                  knowledge to develop secure,
                  scalable, and reliable applications.
                </p>

              </div>

            </div>

          </div>
        </Card>

        <div className="absolute -bottom-6 right-10 hidden lg:block">
          <ScribbleStar className="w-12 h-12 fill-primary" />
        </div>

      </div>
    </SectionWrapper>
  );
}