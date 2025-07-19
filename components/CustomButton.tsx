// Button.tsx
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { useState } from "react";

interface AnimatedButtonProps {
  txt: string;
  link: string;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({ txt, link }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="mt-12 text-center">
      <div className="mx-auto w-fit">
        <Link
          href={link}
          className="relative inline-flex items-center overflow-hidden border-2 border-[#ffb400] rounded-full bg-transparent hover:bg-[#ffb400]/5 font-bold text-foreground dark:text-white hover:text-white transition-all duration-300 group"
          style={{
            width: "280px",
            height: "60px",
            paddingLeft: "2rem",
            paddingRight: "4rem",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Animated background */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-[#ffb400] to-[#ff8c00] transition-transform duration-300 ease-out"
            style={{
              transform: isHovered ? "translateX(0)" : "translateX(100%)",
              zIndex: 0,
            }}
          />

          {/* Text content */}
          <div className="relative z-10 flex items-center gap-2">
            <span className="text-lg font-semibold">{txt}</span>
          </div>

          {/* Circle with arrow */}
          <div
            className="absolute right-0 top-0 h-full w-14 flex justify-center items-center bg-gradient-to-r from-[#ffb400] to-[#ff8c00] rounded-r-full z-20 transition-transform duration-300 group-hover:scale-110"
            style={{
              borderTopRightRadius: "50px",
              borderBottomRightRadius: "50px",
            }}
          >
            <ArrowRight className="text-white text-xl transform transition-transform duration-300" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default AnimatedButton;
