"use client";
import PageTransition from "@/components/PageTransition";
import AnimatedButton from "../CustomButton";
import { useState } from "react";
import { socialLinks } from "../contact/ContactData";
import { Mail } from "lucide-react"; // Import mail icon

export default function HeroSection() {
  return (
    <PageTransition>
      {/* Yellow background div with fixed position */}
      <div className="bg-[#ffb400] fixed left-[-87%] -top-1/2 h-[200%] w-full rotate-[-15deg] max-lg:hidden z-[1]"></div>

      {/* Container for positioning content */}
      <div className="relative z-10 container mx-auto pt-10 flex flex-col lg:flex-row items-center max-lg:absolute max-lg:top-1/2 max-lg:transform max-lg:translate-y-[-60%] max-md:mt-10">
        {/* Image container with higher z-index to appear above the background */}
        <div className="img-container w-full lg:w-1/3 flex justify-center lg:justify-start max-md:mt-[250px]">
          <div className="img relative lg:fixed rounded-[50%] lg:rounded-none w-[250px] sm:w-[260px] md:w-[300px] lg:w-[400px] xl:w-[500px] h-[250px] sm:h-[260px] md:h-[300px] lg:h-[calc(100vh-80px)] overflow-hidden"></div>
        </div>

        {/* Content section */}
        <div className="flex flex-col items-center lg:items-start justify-center mt-8 lg:mt-0 lg:h-[calc(100vh-80px)] text-center lg:text-left lg:w-2/3 lg:ml-[200px] px-4">
          <p className="font-bold text-3xl max-md:text-[27px] sm:text-4xl md:text-5xl">
            <span className="text-[#ffb400] block">
              I'm Abdelrhman Abuelazm
            </span>{" "}
            Web Developer
          </p>
          <p className="max-w-xl text-sm sm:text-base leading-relaxed sm:leading-[35px] my-4">
            I'm a Egyptian based web designer & front‑end developer focused on
            crafting clean & user‑friendly experiences. I am passionate about
            building excellent software that improves the lives of those around
            me.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4 my-6">
            {/* Email link */}
            <a
              href="mailto:contact@abuelazm.com"
              className="p-3 bg-white/10 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-full transition-all duration-300 hover:scale-110 hover:bg-[#ffb400]/20 hover:border-[#ffb400]/40 group"
              aria-label="Send Email"
            >
              <Mail className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-[#ffb400] transition-colors duration-300" />
            </a>

            {/* Social media links */}
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 bg-white/10 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-full transition-all duration-300 hover:scale-110 hover:bg-[#ffb400]/20 hover:border-[#ffb400]/40 group ${social.color}`}
                aria-label={social.name}
              >
                <social.icon className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-current transition-colors duration-300" />
              </a>
            ))}
          </div>

          <div className="max-md:mb-[110px]">
            <AnimatedButton txt="More About Me" link="/about" />
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
