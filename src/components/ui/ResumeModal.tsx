import { motion, AnimatePresence } from "motion/react";
import { X, Briefcase, Award, GraduationCap, Flame, Code, Cpu } from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
          {/* Backdrop with elegant blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="relative bg-white border-4 border-black rounded-[36px] shadow-[12px_12px_0px_0px_#000000] w-full max-w-4xl max-h-[85vh] overflow-y-auto z-10 flex flex-col select-none"
          >
            {/* Header with Close Button */}
            <div className="sticky top-0 bg-primary border-b-4 border-black p-6 flex justify-between items-center z-20">
              <div>
                <h2 className="text-2xl md:text-3xl font-black uppercase text-black tracking-tight">
                  WAGH GIRIDHAR SANDIP
                </h2>
                <p className="text-xs font-black uppercase tracking-widest text-black/60 mt-1">
                  Full Stack Java Developer • Cyber Security Intern • M.Sc. Computer Science
                </p>
              </div>
              <button
                onClick={onClose}
                aria-label="Close Resume"
                className="w-12 h-12 bg-white border-3 border-black rounded-full flex items-center justify-center cursor-pointer hover:bg-neutral-100 active:scale-90 shadow-[2px_2px_0px_0px_#000] transition-all"
              >
                <X size={20} className="stroke-[3]" />
              </button>
            </div>

            {/* Resume Content Body */}
            <div className="p-6 md:p-10 flex flex-col gap-8 text-left">
              {/* Career Objective Section */}
              <div className="bg-[#38BDF8]/10 border-3 border-black p-6 rounded-2xl shadow-[4px_4px_0px_0px_#000000]">
                <h3 className="text-lg font-black uppercase tracking-tight flex items-center gap-2 text-black mb-3">
                  <span className="w-8 h-8 rounded-lg bg-[#38BDF8] border-2 border-black flex items-center justify-center text-sm">🎯</span>
                  Career Objective
                </h3>
                <p className="text-sm md:text-base font-bold text-dark/80 leading-relaxed">
                  Passionate M.Sc. Computer Science student seeking opportunities as a Full Stack Java Developer. Skilled in Java, Spring Boot, React.js, Node.js, MySQL, MongoDB, and Cyber Security with internship experience in Web Development and Cyber Security.
                </p>
              </div>

              {/* Education Grid */}
              <div>
                <h3 className="text-xl font-black uppercase tracking-tight flex items-center gap-2 text-black mb-6">
                  <span className="w-8 h-8 rounded-lg bg-primary border-2 border-black flex items-center justify-center text-sm">🎓</span>
                  Education History
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border-3 border-black bg-white p-5 rounded-2xl shadow-[4px_4px_0px_0px_#000000]">
                    <div className="text-[10px] font-black uppercase text-dark/40">2023 – Present</div>
                    <h4 className="text-base font-black text-dark uppercase mt-1 leading-snug">
                      M.Sc. Computer Science — Dr. D. Y. Patil ACS College (2025–2027)
                    </h4>
                    <p className="text-sm font-bold text-dark/70 mt-1">
                      B.Sc. Computer Science (Completed 2025) with 7.79 CGPA
                    </p>
                  </div>

                  <div className="border-3 border-black bg-white p-5 rounded-2xl shadow-[4px_4px_0px_0px_#000000]">
                    <div className="text-[10px] font-black uppercase text-dark/40">High School & Secondary</div>
                    <h4 className="text-base font-black text-dark uppercase mt-1 leading-snug">
                      HSC (2022) 76.83% & SSC (2020) 81.00%
                    </h4>
                    <p className="text-sm font-bold text-dark/70 mt-1">
                      Maharaja Sayajirao Gaikwad Arts, Science & Commerce College, Malegaon Camp, Nashik
                    </p>
                  </div>
                </div>
              </div>

              {/* Projects Section */}
              <div>
                <h3 className="text-xl font-black uppercase tracking-tight flex items-center gap-2 text-black mb-6">
                  <span className="w-8 h-8 rounded-lg bg-secondary text-white border-2 border-black flex items-center justify-center text-sm">💡</span>
                  Featured Projects
                </h3>

                <div className="flex flex-col gap-6">
                  {/* Project 1 */}
                  <div className="border-3 border-black bg-white p-6 rounded-3xl shadow-[6px_6px_0px_0px_#000000]">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b-2 border-dashed border-black/15 pb-4 mb-4">
                      <div>
                        <span className="text-xs font-black uppercase bg-primary px-2.5 py-1 border border-black rounded-full shadow-[1.5px_1.5px_0px_0px_#000]">
                          Team Project
                        </span>
                        <h4 className="text-lg md:text-xl font-black text-dark uppercase mt-2">
                          🐾 PET NGO MANAGEMENT SYSTEM (FULL STACK PROJECT)
                        </h4>
                      </div>
                      <div className="text-xs font-black text-dark/50 uppercase bg-muted-bg px-3 py-1.5 border border-black rounded-lg">
                        JAN 2026 – MAR 2026
                      </div>
                    </div>

                    <p className="text-sm font-bold text-dark/75 leading-relaxed">
                      A full-stack web application developed to simplify pet adoption and rescue by connecting NGOs, shelters, and pet adopters. The platform provides secure authentication, pet listings, adoption requests, and donation management while offering a responsive and user-friendly interface.
                    </p>

                    <div className="mt-4">
                      <h5 className="text-xs font-black uppercase text-dark/40 mb-1.5">Tools Used:</h5>
                      <div className="flex flex-wrap gap-1.5">
                        {["REACT.JS ", "NODE.JS ", "EXPRESS.JS", "MONGODB", "JWT", "TAILWIND CSS ", "REST API ", "GIT"].map((tool) => (
                          <span key={tool} className="text-xs font-black uppercase bg-muted-bg border border-black px-2 py-0.5 rounded-full">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Project 2 */}
                  <div className="border-3 border-black bg-white p-6 rounded-3xl shadow-[6px_6px_0px_0px_#000000]">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b-2 border-dashed border-black/15 pb-4 mb-4">
                      <div>
                        <span className="text-xs font-black uppercase bg-accent px-2.5 py-1 border border-black rounded-full shadow-[1.5px_1.5px_0px_0px_#000]">
                          Team Project
                        </span>
                        <h4 className="text-lg md:text-xl font-black text-dark uppercase mt-2">
                          🎨 ART GALLERY MANAGEMENT SYSTEM (FULL STACK PROJECT)
                        </h4>
                      </div>
                      <div className="text-xs font-black text-dark/50 uppercase bg-muted-bg px-3 py-1.5 border border-black rounded-lg">
                        APR 2025
                      </div>
                    </div>

                    <p className="text-sm font-bold text-dark/75 leading-relaxed">
                      Developed a web-based Art Gallery Management System that allows artists to showcase their artwork digitally. The platform includes artwork management, artist authentication, category-wise browsing, search functionality, and an admin dashboard for efficient gallery management.
                    </p>

                    <div className="mt-4">
                      <h5 className="text-xs font-black uppercase text-dark/40 mb-1.5">Tools Used:</h5>
                      <div className="flex flex-wrap gap-1.5">
                        {["HTML ", "CSS ", "javaScirpt", "PHP", "JWT", "PostgreSQL", "SQl ", "GIT"].map((tool) => (
                          <span key={tool} className="text-xs font-black uppercase bg-muted-bg border border-black px-2 py-0.5 rounded-full">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Work Internship Section */}
              <div>
                <h3 className="text-xl font-black uppercase tracking-tight flex items-center gap-2 text-black mb-6">
                  <span className="w-8 h-8 rounded-lg bg-emerald-400 border-2 border-black flex items-center justify-center text-sm">
                    💼
                  </span>
                  Professional Internships
                </h3>

                <div className="border-3 border-black bg-white p-6 rounded-3xl shadow-[6px_6px_0px_0px_#000000]">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b-2 border-dashed border-black/15 pb-4 mb-4">
                    <div>
                      <h4 className="text-lg font-black text-dark uppercase">
                        Cyber Security Intern
                      </h4>

                      <p className="text-xs font-black text-secondary uppercase mt-0.5">
                        Cybernetics Software Pvt. Ltd. & Security Shells Infotech Pvt. Ltd.
                      </p>
                    </div>

                    <div className="text-xs font-black text-dark bg-emerald-100 px-3 py-1.5 border border-black rounded-lg">
                      Nov 2025 – May 2026
                    </div>
                  </div>

                  <p className="text-sm font-bold text-dark/75 leading-relaxed">
                    Successfully completed a 6-month Cyber Security Internship, gaining
                    hands-on experience in system monitoring, vulnerability assessment,
                    network security, security testing, incident analysis, and implementing
                    cybersecurity best practices to strengthen organizational security.
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {[
                      "Cyber Security",
                      "Network Security",
                      "Vulnerability Assessment",
                      "System Monitoring",
                      "Security Testing",
                      "Incident Analysis",
                      "Windows",
                      "Networking",
                    ].map((tool) => (
                      <span
                        key={tool}
                        className="text-xs font-black uppercase bg-muted-bg border border-black px-2 py-0.5 rounded-full"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              

            </div>

            {/* Sticky Bottom Actions */}
            <div className="sticky bottom-0 bg-white border-t-3 border-black p-6 flex justify-center gap-4 z-20">
              <button
                onClick={onClose}
                className="bg-black text-white font-black px-8 py-3 rounded-full text-sm uppercase shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-neutral-800 hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                Close Resume
              </button>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
