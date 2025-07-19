"use client";
import { useRouter, usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Home, User, Briefcase, Mail, Package } from "lucide-react";

export default function Navigation() {
  const router = useRouter();
  const pathname = usePathname();

  const navItems = [
    { icon: <Home />, route: "/", tooltip: "Home" },
    { icon: <User />, route: "/about", tooltip: "About Me" },
    { icon: <Briefcase />, route: "/projects", tooltip: "projects" },
    { icon: <Package />, route: "/plans", tooltip: "Plans" },
    { icon: <Mail />, route: "/contact", tooltip: "Contact" },
  ];

  const handleNavigate = (route: string) => {
    router.push(route);
  };

  return (
    <>
      {/* Large screens - Vertical navigation on right side */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 space-y-5 hidden lg:block z-50">
        {navItems.map((item) => {
          const isActive =
            pathname?.replace(/\/$/, "") === item.route.replace(/\/$/, "");
          return (
            <div key={item.route} className="relative group">
              <motion.button
                key={item.route}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleNavigate(item.route)}
                className={`p-3 rounded-full cursor-pointer flex flex-col items-center transition-colors
                 ${
                   isActive
                     ? "bg-yellow-400 text-black"
                     : "bg-secondary text-secondary-foreground"
                 }`}
              >
                {item.icon}
              </motion.button>
              <div className="absolute right-full mr-2 top-1/2 -translate-y-1/2 hidden group-hover:block">
                <div className="px-3 py-1 bg-secondary rounded text-sm whitespace-nowrap">
                  {item.tooltip}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Small screens - Horizontal navigation at bottom with full width */}
      <div className="fixed bottom-0 left-0 w-full bg-background border-t border-border py-3 lg:hidden z-50">
        <div className="flex justify-around items-center">
          {navItems.map((item) => {
            const isActive =
              pathname?.replace(/\/$/, "") === item.route.replace(/\/$/, "");
            return (
              <motion.button
                key={item.route}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleNavigate(item.route)}
                className={`p-3 rounded-full cursor-pointer flex flex-col items-center transition-colors
                  ${
                    isActive
                      ? "bg-yellow-400 text-black"
                      : "bg-secondary text-secondary-foreground"
                  }`}
              >
                {item.icon}
                <span className="text-xs mt-1 max-lg:hidden">
                  {item.tooltip}
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>
    </>
  );
}
