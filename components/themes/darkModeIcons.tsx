"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      whileHover={{
        scale: 1.1,
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      onClick={toggleTheme}
      className="p-[15px] cursor-pointer rounded-full flex flex-col items-center transition-colors bg-secondary text-secondary-foreground hover:bg-secondary/80"
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </motion.button>
  );
}
