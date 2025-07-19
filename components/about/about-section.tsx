"use client";

import PageTransition from "@/components/PageTransition";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Award, Code, GraduationCap, Briefcase } from "lucide-react";
import { useState } from "react";
import AnimatedButton from "../CustomButton";
import { skills } from "./SkillsData";

export default function About() {
  const [, setHoveredSkill] = useState<string | null>(null);

  return (
    <PageTransition>
      {/* Main container with proper overflow handling */}
      <div className="w-full bg-background min-h-screen overflow-y-auto">
        <div className="container mx-auto px-4 lg:px-[100px] py-16 relative">
          {/* Page Title with animation */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground dark:text-white">
              <span className="text-[#ffb400]">About</span> Me
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-[#ffb400] to-[#ff8c00] mx-auto rounded-full"></div>
          </div>

          {/* Content Grid with improved spacing */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Education Section */}
            <section className="space-y-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-[#ffb400]/10 rounded-full">
                  <GraduationCap className="w-6 h-6 text-[#ffb400]" />
                </div>
                <h2 className="text-3xl font-semibold text-foreground dark:text-white">
                  <span className="relative">
                    Education
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ffb400] group-hover:w-full transition-all duration-300"></span>
                  </span>
                </h2>
              </div>

              <Card className="bg-card/50 backdrop-blur-sm border border-[#ffb400]/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-4px] hover:border-[#ffb400]/40">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-card-foreground dark:text-white mb-2">
                        3-Month Intensive Code Camp
                      </h3>
                      <p className="text-[#ffb400] font-medium mb-2">
                        Information Technology Institute "ITI"
                      </p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground dark:text-slate-400 mb-3">
                        <Calendar className="w-4 h-4" />
                        <span>July - October 2023</span>
                      </div>
                      <p className="text-teal-400 dark:text-teal-300 mb-3">
                        Track: Full Stack Web Development Using MERN
                      </p>
                    </div>
                    <div className="p-2 bg-[#ffb400]/10 rounded-full">
                      <Code className="w-5 h-5 text-[#ffb400]" />
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gradient-to-r from-[#ffb400]/20 to-[#ff8c00]/20 text-[#ffb400] px-3 py-1 rounded-full text-sm border border-[#ffb400]/30">
                      React
                    </span>
                    <span className="bg-gradient-to-r from-[#ffb400]/20 to-[#ff8c00]/20 text-[#ffb400] px-3 py-1 rounded-full text-sm border border-[#ffb400]/30">
                      Node.js
                    </span>
                    <span className="bg-gradient-to-r from-[#ffb400]/20 to-[#ff8c00]/20 text-[#ffb400] px-3 py-1 rounded-full text-sm border border-[#ffb400]/30">
                      MongoDB
                    </span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border border-[#ffb400]/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-4px] hover:border-[#ffb400]/40">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-card-foreground dark:text-white mb-2">
                        Bachelor of Educational Technology
                      </h3>
                      <p className="text-[#ffb400] font-medium mb-2">
                        Faculty of Education
                      </p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground dark:text-slate-400 mb-3">
                        <Calendar className="w-4 h-4" />
                        <span>2017 - 2021</span>
                      </div>
                      <div className="space-y-1 mb-3">
                        <p className="text-teal-400 dark:text-teal-300">
                          Al-azhar University
                        </p>
                        <p className="text-teal-400 dark:text-teal-300">
                          Cumulative Grade: Good
                        </p>
                      </div>
                    </div>
                    <div className="p-2 bg-[#ffb400]/10 rounded-full">
                      <Award className="w-5 h-5 text-[#ffb400]" />
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gradient-to-r from-[#ffb400]/20 to-[#ff8c00]/20 text-[#ffb400] px-3 py-1 rounded-full text-sm border border-[#ffb400]/30">
                      Educational Technology
                    </span>
                    <span className="bg-gradient-to-r from-[#ffb400]/20 to-[#ff8c00]/20 text-[#ffb400] px-3 py-1 rounded-full text-sm border border-[#ffb400]/30">
                      Instructional Design
                    </span>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Experience Section */}
            <section className="space-y-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-[#ffb400]/10 rounded-full">
                  <Briefcase className="w-6 h-6 text-[#ffb400]" />
                </div>
                <h2 className="text-3xl font-semibold text-foreground dark:text-white">
                  <span className="relative">
                    Experience
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ffb400] group-hover:w-full transition-all duration-300"></span>
                  </span>
                </h2>
              </div>

              {/* Current Experience - Merge Company */}
              <Card className="bg-card/50 backdrop-blur-sm border border-[#ffb400]/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-4px] hover:border-[#ffb400]/40 relative overflow-hidden">
                <div className="absolute top-4 right-4 bg-gradient-to-r from-green-400 to-green-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                  Current
                </div>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-card-foreground dark:text-white mb-2">
                        Frontend Developer
                      </h3>
                      <p className="text-[#ffb400] font-medium mb-2">
                        Merge Company
                      </p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground dark:text-slate-400 mb-3">
                        <Calendar className="w-4 h-4" />
                        <span>December 2024 - Present</span>
                      </div>
                      <p className="text-muted-foreground dark:text-slate-300 mb-4">
                        Working as a Frontend Developer specializing in Next.js
                        applications, building modern, responsive web
                        applications with a focus on user experience and
                        performance.
                      </p>
                    </div>
                    <div className="p-2 bg-[#ffb400]/10 rounded-full">
                      <Code className="w-5 h-5 text-[#ffb400]" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="h-2 w-2 mt-2 rounded-full bg-[#ffb400] flex-shrink-0"></div>
                      <p className="text-muted-foreground dark:text-slate-300">
                        Developing scalable web applications using Next.js and
                        React
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="h-2 w-2 mt-2 rounded-full bg-[#ffb400] flex-shrink-0"></div>
                      <p className="text-muted-foreground dark:text-slate-300">
                        Implementing responsive UI components with Tailwind CSS
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="h-2 w-2 mt-2 rounded-full bg-[#ffb400] flex-shrink-0"></div>
                      <p className="text-muted-foreground dark:text-slate-300">
                        Collaborating with design and backend teams to deliver
                        high-quality solutions
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gradient-to-r from-[#ffb400]/20 to-[#ff8c00]/20 text-[#ffb400] px-3 py-1 rounded-full text-sm border border-[#ffb400]/30">
                      Next.js
                    </span>
                    <span className="bg-gradient-to-r from-[#ffb400]/20 to-[#ff8c00]/20 text-[#ffb400] px-3 py-1 rounded-full text-sm border border-[#ffb400]/30">
                      React
                    </span>
                    <span className="bg-gradient-to-r from-[#ffb400]/20 to-[#ff8c00]/20 text-[#ffb400] px-3 py-1 rounded-full text-sm border border-[#ffb400]/30">
                      Tailwind CSS
                    </span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border border-[#ffb400]/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-4px] hover:border-[#ffb400]/40">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-card-foreground dark:text-white mb-2">
                        Freelance Projects
                      </h3>
                      <p className="text-[#ffb400] font-medium mb-2">
                        Self-employed
                      </p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground dark:text-slate-400 mb-3">
                        <Calendar className="w-4 h-4" />
                        <span>2025 - Present</span>
                      </div>
                      <p className="text-muted-foreground dark:text-slate-300 mb-4">
                        Working on various client projects, focusing on creating
                        accessible and visually appealing websites with modern
                        technologies.
                      </p>
                    </div>
                    <div className="p-2 bg-[#ffb400]/10 rounded-full">
                      <Code className="w-5 h-5 text-[#ffb400]" />
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gradient-to-r from-[#ffb400]/20 to-[#ff8c00]/20 text-[#ffb400] px-3 py-1 rounded-full text-sm border border-[#ffb400]/30">
                      Next.js
                    </span>
                    <span className="bg-gradient-to-r from-[#ffb400]/20 to-[#ff8c00]/20 text-[#ffb400] px-3 py-1 rounded-full text-sm border border-[#ffb400]/30">
                      Tailwind CSS
                    </span>
                    <span className="bg-gradient-to-r from-[#ffb400]/20 to-[#ff8c00]/20 text-[#ffb400] px-3 py-1 rounded-full text-sm border border-[#ffb400]/30">
                      UI/UX Design
                    </span>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>

          {/* Skills Section with improved visualization */}
          <section className="mt-20">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="p-3 bg-[#ffb400]/10 rounded-full">
                  <Code className="w-6 h-6 text-[#ffb400]" />
                </div>
                <h2 className="text-3xl font-semibold text-foreground dark:text-white">
                  <span className="relative">
                    Skills
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ffb400] group-hover:w-full transition-all duration-300"></span>
                  </span>
                </h2>
              </div>
              <div className="w-24 h-1 bg-gradient-to-r from-[#ffb400] to-[#ff8c00] mx-auto rounded-full"></div>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
              {skills.map((skill, index) => (
                <Card
                  key={skill.name}
                  className={`group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-[#ffb400]/20 ${skill.bgColor} hover:shadow-[#ffb400]/20 hover:border-[#ffb400]/40 backdrop-blur-sm`}
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <CardContent className="p-6 text-center relative overflow-hidden flex flex-col items-center justify-center">
                    {/* Animated background gradient */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                    />

                    {/* Icon */}
                    <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300 relative z-10">
                      {skill.icon}
                    </div>

                    {/* Skill name */}
                    <h3
                      className={`text-lg font-bold mb-2 ${skill.textColor} group-hover:text-[#ffb400] transition-colors duration-300 relative z-10`}
                    >
                      {skill.name}
                    </h3>

                    {/* Hover effect circle */}
                    <div className="absolute -top-10 -right-10 w-20 h-20 bg-[#ffb400]/20 rounded-full transform scale-0 group-hover:scale-150 transition-transform duration-500" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Enhanced CTA Section */}
          <div className="max-md:mb-10">
            <AnimatedButton link="/project" txt="View My Projects" />
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
