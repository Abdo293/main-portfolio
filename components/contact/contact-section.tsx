"use client";

import PageTransition from "@/components/PageTransition";
import { Card, CardContent } from "@/components/ui/card";
import {
  Mail,
  Phone,
  Send,
  User,
  MessageCircle,
  Clock,
  CheckCircle,
  ExternalLink,
} from "lucide-react";
import { useState } from "react";
import AnimatedButton from "../CustomButton";
import { contactInfo, socialLinks } from "./ContactData";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_TEMPLATE_ID || "",
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_PUBLIC_KEY || ""
      );

      if (result.status === 200) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });

        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        alert("Something went wrong!");
      }
    } catch (error) {
      console.error("EmailJS error:", error);
      alert("Failed to send message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageTransition>
      <div className="w-full bg-background min-h-screen overflow-y-auto">
        <div className="container mx-auto px-4 lg:px-[100px] py-16 relative">
          {/* Page Title */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground dark:text-white">
              Get In <span className="text-[#ffb400]">Touch</span>
            </h1>
            <p className="text-lg text-muted-foreground dark:text-slate-400 max-w-2xl mx-auto mb-6">
              Have a project in mind or want to collaborate? I'd love to hear
              from you. Let's discuss how we can bring your ideas to life.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-[#ffb400] to-[#ff8c00] mx-auto rounded-full"></div>
          </div>

          {/* Contact Info Cards */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-[#ffb400]/10 rounded-full">
                <Phone className="w-6 h-6 text-[#ffb400]" />
              </div>
              <h2 className="text-3xl font-semibold text-foreground dark:text-white max-md:text-2xl">
                Contact Information
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="group bg-card/50 backdrop-blur-sm border border-[#ffb400]/20 shadow-lg hover:shadow-xl hover:shadow-[#ffb400]/10 transition-all duration-300 hover:translate-y-[-4px] hover:border-[#ffb400]/40"
                >
                  <CardContent className="p-6 text-center">
                    <div className="p-4 bg-[#ffb400]/10 rounded-full w-fit mx-auto mb-4 group-hover:bg-[#ffb400]/20 transition-colors duration-300">
                      <info.icon className="w-8 h-8 text-[#ffb400]" />
                    </div>
                    <h3 className="text-xl font-bold text-card-foreground dark:text-white mb-2">
                      {info.title}
                    </h3>
                    <p className="text-sm text-muted-foreground dark:text-slate-400 mb-3">
                      {info.description}
                    </p>
                    <a
                      href={info.link}
                      className="text-[#ffb400] hover:text-[#ff8c00] font-medium transition-colors duration-300 flex items-center justify-center gap-2"
                    >
                      {info.value}
                      {info.link !== "#" && (
                        <ExternalLink className="w-4 h-4" />
                      )}
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Main Content - Form and Info */}
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-[#ffb400]/10 rounded-full">
                  <MessageCircle className="w-6 h-6 text-[#ffb400]" />
                </div>
                <h2 className="text-3xl font-semibold text-foreground dark:text-white">
                  Send Message
                </h2>
              </div>

              <Card className="bg-card/50 backdrop-blur-sm border border-[#ffb400]/20 shadow-lg">
                <CardContent className="p-8">
                  {isSubmitted && (
                    <div className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-green-400 font-medium">
                        Message sent successfully! I'll get back to you soon.
                      </span>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-foreground dark:text-white mb-2">
                          Full Name *
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="w-full pl-10 pr-4 py-3 bg-card/50 backdrop-blur-sm border border-[#ffb400]/20 rounded-lg text-foreground dark:text-white placeholder-muted-foreground focus:outline-none focus:border-[#ffb400]/40 focus:bg-card/80 transition-all duration-300"
                            placeholder="Your full name"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground dark:text-white mb-2">
                          Email Address *
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full pl-10 pr-4 py-3 bg-card/50 backdrop-blur-sm border border-[#ffb400]/20 rounded-lg text-foreground dark:text-white placeholder-muted-foreground focus:outline-none focus:border-[#ffb400]/40 focus:bg-card/80 transition-all duration-300"
                            placeholder="your.email@example.com"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground dark:text-white mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-card/50 backdrop-blur-sm border border-[#ffb400]/20 rounded-lg text-foreground dark:text-white placeholder-muted-foreground focus:outline-none focus:border-[#ffb400]/40 focus:bg-card/80 transition-all duration-300"
                        placeholder="What's this about?"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground dark:text-white mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 bg-card/50 backdrop-blur-sm border border-[#ffb400]/20 rounded-lg text-foreground dark:text-white placeholder-muted-foreground focus:outline-none focus:border-[#ffb400]/40 focus:bg-card/80 transition-all duration-300 resize-none"
                        placeholder="Tell me about your project or question..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-[#ffb400] to-[#ff8c00] text-white py-4 px-6 rounded-lg font-medium hover:from-[#ff8c00] hover:to-[#ffb400] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:shadow-[#ffb400]/25"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar Info */}
            <div className="space-y-8">
              {/* Social Links */}
              <Card className="bg-card/50 backdrop-blur-sm border border-[#ffb400]/20 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-card-foreground dark:text-white mb-4">
                    Connect With Me
                  </h3>
                  <div className="space-y-3">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-3 p-3 bg-[#ffb400]/5 hover:bg-[#ffb400]/10 rounded-lg transition-all duration-300 group border border-transparent hover:border-[#ffb400]/20`}
                      >
                        <social.icon
                          className={`w-5 h-5 text-muted-foreground group-hover:text-[#ffb400] transition-colors duration-300`}
                        />
                        <span className="text-foreground dark:text-white group-hover:text-[#ffb400] transition-colors duration-300">
                          {social.name}
                        </span>
                        <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-[#ffb400] ml-auto transition-colors duration-300" />
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Info */}
              <Card className="bg-card/50 backdrop-blur-sm border border-[#ffb400]/20 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-card-foreground dark:text-white mb-4">
                    Let's Collaborate
                  </h3>
                  <p className="text-sm text-muted-foreground dark:text-slate-300 mb-4">
                    I'm always interested in new opportunities and interesting
                    projects. Whether you have a question or just want to say
                    hello, feel free to reach out.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-[#ffb400]">
                    <CheckCircle className="w-4 h-4" />
                    <span>Available for freelance work</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Back to Projects CTA */}
          <div className="mb-10">
            <AnimatedButton txt="View My Projects" link="/projects" />
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
