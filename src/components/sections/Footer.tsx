import { Sparkle } from "../ui/Doodles";

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t-3 border-black py-12 px-6 select-none relative overflow-hidden">
      {/* Decorative Sparkle */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 text-primary opacity-20 pointer-events-none animate-spin-slow">
        <Sparkle className="w-8 h-8 fill-primary stroke-black stroke-[3px]" />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10 text-center md:text-left">
        
        {/* Left Side */}
        <div>
          <h4 className="text-lg font-black tracking-tight uppercase text-dark">
            Giridhar Sandip Wagh
          </h4>

          <p className="text-xs font-black uppercase text-dark/40 tracking-wider mt-1">
            Full Stack Java Developer • Cyber Security Intern • M.Sc. Computer Science Student
          </p>
        </div>

        {/* Right Side */}
        <div className="flex flex-col md:items-end">
          <p className="text-sm font-black text-dark/70">
            Built with React.js, TypeScript, Tailwind CSS & Framer Motion
          </p>

          <p className="text-xs font-bold text-dark/40 mt-1 uppercase">
            © 2026 Giridhar Sandip Wagh • All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}