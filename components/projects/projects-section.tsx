"use client";

import PageTransition from "@/components/PageTransition";
import { Card, CardContent } from "@/components/ui/card";
import {
  ExternalLink,
  Github,
  Calendar,
  Code,
  Layers,
  Globe,
  Filter,
  Search,
  Eye,
  Star,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { projects } from "./ProjectsData";
import AnimatedButton from "../CustomButton";

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", "Frontend", "Full Stack", "Mobile"];

  const filteredProjects = projects.filter((project) => {
    const matchesFilter =
      selectedFilter === "All" || project.category === selectedFilter;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some((tech) =>
        tech.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesFilter && matchesSearch;
  });

  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <PageTransition>
      <div className="w-full bg-background min-h-screen overflow-y-auto">
        <div className="container mx-auto px-4 lg:px-[100px] py-16 relative">
          {/* Page Title */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground dark:text-white">
              My <span className="text-[#ffb400]">Projects</span>
            </h1>
            <p className="text-lg text-muted-foreground dark:text-slate-400 max-w-2xl mx-auto mb-6">
              Explore my portfolio of web applications and digital solutions,
              built with modern technologies and best practices.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-[#ffb400] to-[#ff8c00] mx-auto rounded-full"></div>
          </div>

          {/* Featured Projects Section */}
          {featuredProjects.length > 0 && (
            <section className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-[#ffb400]/10 rounded-full">
                  <Star className="w-6 h-6 text-[#ffb400]" />
                </div>
                <h2 className="text-3xl font-semibold text-foreground dark:text-white">
                  Featured Projects
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredProjects.map((project) => (
                  <Card
                    key={project.id}
                    className="group bg-card/50 backdrop-blur-sm border border-[#ffb400]/20 shadow-lg hover:shadow-2xl hover:shadow-[#ffb400]/10 transition-all duration-500 hover:scale-[1.02] hover:border-[#ffb400]/40 overflow-hidden"
                    onMouseEnter={() => setHoveredProject(project.id)}
                    onMouseLeave={() => setHoveredProject(null)}
                  >
                    <div className="relative overflow-hidden">
                      {/* Project Image */}
                      <div className="h-64 relative overflow-hidden bg-gradient-to-br from-[#ffb400]/5 to-[#ff8c00]/5">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          quality={95}
                          priority={true}
                        />
                        {/* Optional overlay for better text readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

                        {/* Status Badge */}
                        {/* <div className="absolute top-4 left-4 z-10">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${
                              project.status === "Completed"
                                ? "bg-green-500/20 text-green-400 border border-green-500/30"
                                : "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                            }`}
                          >
                            {project.status}
                          </span>
                        </div> */}
                        {/* Featured Badge */}
                        <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-[#ffb400] to-[#ff8c00] text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                          <Star className="w-3 h-3" />
                          Featured
                        </div>
                      </div>

                      {/* Overlay on Hover */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 z-20 ${
                          hoveredProject === project.id
                            ? "opacity-100"
                            : "opacity-0"
                        }`}
                      >
                        <div className="absolute bottom-4 left-4 right-4 flex gap-3">
                          <Link
                            href={project.liveUrl}
                            className="flex items-center gap-2 bg-[#ffb400] hover:bg-[#ff8c00] text-white px-4 py-2 rounded-full transition-all duration-300 flex-1 justify-center"
                          >
                            <Globe className="w-4 h-4" />
                            Live Demo
                          </Link>
                          <Link
                            href={project.githubUrl}
                            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/30 px-4 py-2 rounded-full transition-all duration-300 flex-1 justify-center backdrop-blur-sm"
                          >
                            <Github className="w-4 h-4" />
                            Code
                          </Link>
                        </div>
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-bold text-card-foreground dark:text-white group-hover:text-[#ffb400] transition-colors duration-300">
                          {project.title}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground dark:text-slate-400">
                          <Calendar className="w-4 h-4" />
                          {project.year}
                        </div>
                      </div>

                      <p className="text-muted-foreground dark:text-slate-300 mb-4 line-clamp-3">
                        {project.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="bg-gradient-to-r from-[#ffb400]/20 to-[#ff8c00]/20 text-[#ffb400] px-2 py-1 rounded-full text-xs border border-[#ffb400]/30"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          )}

          {/* Filters and Search */}
          <section className="mb-12">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-card/50 backdrop-blur-sm border border-[#ffb400]/20 rounded-full text-foreground dark:text-white placeholder-muted-foreground focus:outline-none focus:border-[#ffb400]/40 focus:bg-card/80 transition-all duration-300"
                />
              </div>
            </div>
          </section>

          {/* All Projects Grid */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-[#ffb400]/10 rounded-full">
                <Layers className="w-6 h-6 text-[#ffb400]" />
              </div>
              <h2 className="text-3xl font-semibold text-foreground dark:text-white">
                All Projects
              </h2>
              <div className="flex-1 h-px bg-gradient-to-r from-[#ffb400]/30 to-transparent"></div>
            </div>

            {filteredProjects.length === 0 ? (
              <div className="text-center py-16">
                <div className="p-4 bg-[#ffb400]/10 rounded-full w-fit mx-auto mb-4">
                  <Search className="w-8 h-8 text-[#ffb400]" />
                </div>
                <h3 className="text-xl font-semibold text-foreground dark:text-white mb-2">
                  No projects found
                </h3>
                <p className="text-muted-foreground dark:text-slate-400">
                  Try adjusting your search or filter criteria
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
                  <Card
                    key={project.id}
                    className="group bg-card/50 backdrop-blur-sm border border-[#ffb400]/20 shadow-lg hover:shadow-xl hover:shadow-[#ffb400]/10 transition-all duration-300 hover:translate-y-[-4px] hover:border-[#ffb400]/40 overflow-hidden"
                    onMouseEnter={() => setHoveredProject(project.id)}
                    onMouseLeave={() => setHoveredProject(null)}
                  >
                    <div className="relative overflow-hidden">
                      {/* Project Image */}
                      <div className="h-48 relative overflow-hidden bg-gradient-to-br from-[#ffb400]/5 to-[#ff8c00]/5">
                        {project.image ? (
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            quality={90}
                          />
                        ) : (
                          <div className="absolute inset-0 bg-gradient-to-br from-[#ffb400]/10 to-[#ff8c00]/30 flex items-center justify-center">
                            <Code className="w-12 h-12 text-[#ffb400]/50" />
                          </div>
                        )}

                        {/* Status Badge
                        <div className="absolute top-3 left-3 z-10">
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${
                              project.status === "Completed"
                                ? "bg-green-500/20 text-green-400 border border-green-500/30"
                                : "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                            }`}
                          >
                            {project.status}
                          </span>
                        </div> */}
                        {project.featured && (
                          <div className="absolute top-3 right-3 z-10 bg-gradient-to-r from-[#ffb400] to-[#ff8c00] text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                            <Star className="w-3 h-3" />
                          </div>
                        )}
                      </div>

                      {/* Overlay on Hover */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 z-20 ${
                          hoveredProject === project.id
                            ? "opacity-100"
                            : "opacity-0"
                        }`}
                      >
                        <div className="absolute bottom-3 left-3 right-3 flex gap-2">
                          <Link
                            href={project.liveUrl}
                            className="flex items-center gap-1 bg-[#ffb400] hover:bg-[#ff8c00] text-white px-3 py-2 rounded-full transition-all duration-300 flex-1 justify-center text-sm"
                          >
                            <Eye className="w-3 h-3" />
                            View
                          </Link>
                          <Link
                            href={project.githubUrl}
                            className="flex items-center gap-1 bg-white/10 hover:bg-white/20 text-white border border-white/30 px-3 py-2 rounded-full transition-all duration-300 flex-1 justify-center backdrop-blur-sm text-sm"
                          >
                            <Github className="w-3 h-3" />
                            Code
                          </Link>
                        </div>
                      </div>
                    </div>

                    <CardContent className="p-5">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-lg font-bold text-card-foreground dark:text-white group-hover:text-[#ffb400] transition-colors duration-300 line-clamp-1">
                          {project.title}
                        </h3>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground dark:text-slate-400">
                          <Calendar className="w-3 h-3" />
                          {project.year}
                        </div>
                      </div>

                      <p className="text-sm text-muted-foreground dark:text-slate-300 mb-4 line-clamp-2">
                        {project.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-1">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="bg-gradient-to-r from-[#ffb400]/20 to-[#ff8c00]/20 text-[#ffb400] px-2 py-1 rounded-full text-xs border border-[#ffb400]/30"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </section>

          {/* Contact CTA */}
          <div>
            <AnimatedButton txt="Get In Touch" link="/contact" />
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
