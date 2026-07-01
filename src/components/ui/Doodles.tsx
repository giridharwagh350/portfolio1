import { motion } from "motion/react";

// Playful yellow spiral loop doodle seen in the reference image margin
export function LoopScribble({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={`fill-none stroke-primary ${className}`}
      strokeWidth="6"
      strokeLinecap="round"
    >
      <path d="M10,50 C10,10 90,10 90,50 C90,90 20,90 50,50 C70,25 35,25 20,60 C10,80 80,85 70,40" />
    </svg>
  );
}

// Hand-drawn vector star doodle
export function ScribbleStar({ className = "", color = "fill-primary" }: { className?: string; color?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={`w-8 h-8 ${color} stroke-black stroke-[3px] ${className}`}
    >
      <path d="M50,5 L62,35 L95,35 L68,55 L78,88 L50,68 L22,88 L32,55 L5,35 L38,35 Z" />
    </svg>
  );
}

// Simple hand-drawn squiggle/curve line helper
export function HandSquiggle({ className = "", color = "stroke-secondary" }: { className?: string; color?: string }) {
  return (
    <svg
      viewBox="0 0 100 20"
      className={`fill-none ${color} ${className}`}
      strokeWidth="5"
      strokeLinecap="round"
    >
      <path d="M5,10 C30,2 45,18 70,5 C85,-3 92,12 95,8" />
    </svg>
  );
}

// Hand-drawn arrow scribble pointing to a card or action
export function ScribbleArrow({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={`fill-none stroke-black ${className}`}
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10,80 Q40,60 80,20" />
      <path d="M50,15 L82,18 L80,50" />
    </svg>
  );
}

// Sparkle element used on borders and titles
export function Sparkle({ className = "", color = "fill-accent" }: { className?: string; color?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={`${color} stroke-black stroke-[4px] ${className}`}
    >
      <path d="M50,0 Q50,50 100,50 Q50,50 50,100 Q50,50 0,50 Q50,50 50,0 Z" />
    </svg>
  );
}

// Organic wavy blob divider
export function OrganicBlob({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={`fill-accent/20 ${className}`}
    >
      <path d="M45,-60 C58,-52,67,-36,73,-19 C79,-2,82,19,75,36 C68,53,52,65,34,73 C16,81,-3,83,-22,78 C,-41,72,-59,58,-68,40 C,-77,22,-77, -1,-73,-21 C,-69,-41,-60,-58,-46,-67 C,-32,-76,-16,-77,2,-80 C20,-82,32,-68,45,-60 Z" transform="translate(100, 100)" />
    </svg>
  );
}

// High-end Bespoke SVG Cartoon Illustration of Yasin Siddique
// Styled exactly like the illustration in the reference: Friendly creator, baseball cap, red jacket, smiling, warm yellow round background, bold outlines.
export function CustomYasinAvatarSVG({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      {/* Circle yellow background with thick black outline */}
      <motion.div
        className="w-full h-full rounded-full bg-primary border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden flex items-center justify-center"
        whileHover={{ scale: 1.05, rotate: 2 }}
        transition={{ type: "spring", stiffness: 300, damping: 12 }}
      >
        <svg
          viewBox="0 0 200 200"
          className="w-[90%] h-[90%] select-none"
        >
          {/* Hair back */}
          <path d="M55,100 C45,85 50,60 70,55 C90,50 110,50 130,55 C150,60 155,85 145,100" fill="#1E1E1E" stroke="#000000" strokeWidth="4" />
          
          {/* Ears */}
          <circle cx="55" cy="105" r="14" fill="#E8B085" stroke="#000000" strokeWidth="4" />
          <circle cx="145" cy="105" r="14" fill="#E8B085" stroke="#000000" strokeWidth="4" />
          <path d="M53,101 C50,105 53,108 55,108" fill="none" stroke="#000000" strokeWidth="3" />
          <path d="M147,101 C150,105 147,108 145,108" fill="none" stroke="#000000" strokeWidth="3" />

          {/* Face */}
          <path d="M60,95 C60,60 140,60 140,95 C140,135 120,150 100,150 C80,150 60,135 60,95 Z" fill="#FCD34D" stroke="#000000" strokeWidth="4" />
          
          {/* Cheek rosy blush */}
          <circle cx="75" cy="115" r="7" fill="#FF5C5C" opacity="0.4" />
          <circle cx="125" cy="115" r="7" fill="#FF5C5C" opacity="0.4" />

          {/* Hair front / Sideburns */}
          <path d="M60,90 C60,80 65,75 70,75 L130,75 C135,75 140,80 140,90 L140,95 C135,92 135,90 130,90 C125,90 120,95 110,90 C100,90 95,95 85,90 C75,90 70,95 65,95 L60,90 Z" fill="#1E1E1E" stroke="#000000" strokeWidth="4" />

          {/* Beard / stubble shadow */}
          <path d="M63,115 C63,142 80,147 100,147 C120,147 137,142 137,115 L140,115 C140,138 125,150 100,150 C75,150 60,138 60,115 Z" fill="#1E1E1E" opacity="0.15" />

          {/* Stylish Glasses */}
          <rect x="63" y="93" width="30" height="20" rx="6" fill="none" stroke="#000000" strokeWidth="4" />
          <rect x="107" y="93" width="30" height="20" rx="6" fill="none" stroke="#000000" strokeWidth="4" />
          <line x1="93" y1="100" x2="107" y2="100" stroke="#000000" strokeWidth="4" />
          <line x1="55" y1="98" x2="63" y2="98" stroke="#000000" strokeWidth="4" />
          <line x1="137" y1="98" x2="145" y2="98" stroke="#000000" strokeWidth="4" />

          {/* Friendly eyes inside glasses */}
          <circle cx="78" cy="103" r="4.5" fill="#1E1E1E" />
          <circle cx="122" cy="103" r="4.5" fill="#1E1E1E" />
          {/* Eye highlights */}
          <circle cx="79.5" cy="101.5" r="1.5" fill="#FFFFFF" />
          <circle cx="123.5" cy="101.5" r="1.5" fill="#FFFFFF" />

          {/* Nose */}
          <path d="M96,110 Q100,115 104,110" fill="none" stroke="#000000" strokeWidth="4" strokeLinecap="round" />

          {/* Smile */}
          <path d="M85,123 Q100,138 115,123" fill="none" stroke="#000000" strokeWidth="4" strokeLinecap="round" />
          
          {/* Beard details (trim, stylish beard line) */}
          <path d="M60,110 C62,130 80,143 100,143 C120,143 138,130 140,110 C138,132 118,145 100,145 C82,145 62,132 60,110 Z" fill="#1E1E1E" stroke="#000000" strokeWidth="1" />

          {/* Trendy white baseball cap with orange visor */}
          {/* Cap Dome */}
          <path d="M62,75 C60,35 140,35 138,75 Z" fill="#FFFFFF" stroke="#000000" strokeWidth="4" />
          {/* Cap Logo (Playful star) */}
          <path d="M100,43 L104,50 L111,50 L106,54 L108,61 L100,57 L92,61 L94,54 L89,50 L96,50 Z" fill="#FF5C5C" stroke="#000000" strokeWidth="1.5" />
          {/* Cap Visor (Brim) */}
          <path d="M50,73 C50,73 70,64 100,64 C130,64 150,73 150,73 C150,73 145,82 100,82 C55,82 50,73 50,73 Z" fill="#FF5C5C" stroke="#000000" strokeWidth="4" strokeLinejoin="round" />

          {/* Red Hoodie and shirt collar */}
          <path d="M70,145 L130,145 L135,175 C135,185 160,195 160,205 L40,205 C40,195 65,185 65,175 Z" fill="#FF5C5C" stroke="#000000" strokeWidth="4" />
          {/* Collar shirt opening */}
          <path d="M85,145 L100,165 L115,145" fill="#38BDF8" stroke="#000000" strokeWidth="4" strokeLinejoin="round" />
          <path d="M100,165 L100,195" stroke="#000000" strokeWidth="4" />
          
          {/* Hoodie cords */}
          <circle cx="82" cy="175" r="4" fill="#FFC83D" stroke="#000000" strokeWidth="2.5" />
          <line x1="85" y1="145" x2="82" y2="171" stroke="#000000" strokeWidth="3" />
          <circle cx="118" cy="175" r="4" fill="#FFC83D" stroke="#000000" strokeWidth="2.5" />
          <line x1="115" y1="145" x2="118" y2="171" stroke="#000000" strokeWidth="3" />
        </svg>

        {/* Small verified check badge like the reference */}
        <div className="absolute top-4 right-4 bg-emerald-500 border-2 border-black rounded-full p-0.5 flex items-center justify-center w-6 h-6 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
          <svg viewBox="0 0 24 24" className="w-4 h-4 text-white stroke-white stroke-[4px] fill-none">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
      </motion.div>
    </div>
  );
}
