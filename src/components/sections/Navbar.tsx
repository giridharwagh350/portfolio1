import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { NavItem } from "../../types";

const NAV_ITEMS: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "focus", label: "Focus" },
  { id: "creator", label: "experience" },
  { id: "research", label: "Research" },
  { id: "social", label: "Social" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160;

      for (const item of NAV_ITEMS) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);

    const el = document.getElementById(id);

    if (el) {
      window.scrollTo({
        top: el.offsetTop - 100,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 px-6 select-none">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white border-3 border-black rounded-full px-6 py-3.5 flex items-center justify-between shadow-[4px_4px_0px_0px_#000]">

          {/* Logo */}
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-2 text-lg font-black uppercase"
          >
            <span className="w-8 h-8 rounded-full bg-primary border-2 border-black flex items-center justify-center text-xs shadow-[2px_2px_0px_0px_#000]">
              G
            </span>

            <span className="hidden sm:block">
              Giridhar Wagh
            </span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-2">
            {NAV_ITEMS.map((item) => {
              const active = activeSection === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 rounded-full uppercase font-bold text-sm transition-all ${
                    active
                      ? "bg-primary border-2 border-black shadow-[2px_2px_0px_0px_#000]"
                      : "hover:bg-gray-100"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Contact Button */}
          <button
            onClick={() => scrollToSection("contact")}
            className="hidden md:flex bg-secondary text-white px-5 py-2 rounded-full border-2 border-black font-bold uppercase shadow-[2px_2px_0px_0px_#000] hover:scale-105 transition-all"
          >
            Contact Me 🚀
          </button>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-10 h-10 rounded-full border-2 border-black bg-primary flex items-center justify-center shadow-[2px_2px_0px_0px_#000]"
          >
            {isMobileMenuOpen ? (
              <X size={20} className="stroke-[3]" />
            ) : (
              <Menu size={20} className="stroke-[3]" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="md:hidden mt-3 bg-white border-3 border-black rounded-3xl p-5 shadow-[5px_5px_0px_0px_#000]"
            >
              {NAV_ITEMS.map((item) => {
                const active = activeSection === item.id;

                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full text-left py-3 px-4 rounded-xl font-bold uppercase mb-2 ${
                      active
                        ? "bg-primary border-2 border-black"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}