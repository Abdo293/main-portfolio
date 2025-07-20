"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Rocket,
  Check,
  Star,
  ArrowRight,
  Zap,
  Globe,
  Smartphone,
  Percent,
  Settings,
} from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { extraServices, plans } from "./PlansData";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PlansPage() {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedPlanData, setSelectedPlanData] = useState<any>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const openPlanDialog = (plan: any) => {
    setSelectedPlanData(plan);
    setOpenDialog(true);
  };

  const handlePlanRequest = (plan: any) => {
    const templateParams = {
      plan_name: plan.name,
      plan_price: plan.price + " " + plan.currency,
      delivery_time: plan.deliveryTime,
      user_name: formData.name,
      user_email: formData.email,
      user_phone: formData.phone,
      message: `New Plan Request:\n\nPlan: ${plan.name}\nPrice: ${plan.price} ${plan.currency}\nDelivery Time: ${plan.deliveryTime}\n\nUser Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}`,
    };

    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_TEMPLATE_ID || "",
        templateParams,
        process.env.NEXT_PUBLIC_PUBLIC_KEY || ""
      )
      .then(() => {
        toast.success(`Request for ${plan.name} sent! 🎉`, {
          description: "You will be contacted shortly.",
        });
        setFormData({ name: "", email: "", phone: "" });
      })
      .catch((error) => {
        toast.error("Failed to send the request", {
          description: "Please try again or contact me directly.",
        });
        console.error(error.text);
      });
  };

  return (
    <div className="w-full bg-background min-h-screen overflow-y-auto">
      <div className="container mx-auto px-4 lg:px-[100px] py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground dark:text-white">
            Simple <span className="text-[#ffb400]">Pricing</span>
          </h1>
          <p className="text-lg text-muted-foreground dark:text-slate-400 max-w-3xl mx-auto mb-6">
            Quality frontend development at affordable prices. Perfect for
            getting your business online quickly and professionally.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#ffb400] to-[#ff8c00] mx-auto rounded-full mb-4"></div>

          {/* Discount Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#ffb400]/10 to-[#ff8c00]/10 border border-[#ffb400]/30 rounded-full px-6 py-2 text-[#ffb400] font-medium">
            <Percent className="w-5 h-5" />
            <span>Launch Discount - Limited Time!</span>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan) => (
            <Card
              key={plan.id}
              className={`relative max-md:mt-3 group bg-card/50 backdrop-blur-sm border ${
                plan.borderColor
              } shadow-lg hover:shadow-xl hover:shadow-[#ffb400]/10 transition-all duration-300 hover:translate-y-[-8px] ${
                plan.popular ? "ring-2 ring-[#ffb400]/30 scale-105" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-[#ffb400] to-[#ff8c00] text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-2 shadow-lg">
                    <Star className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}

              <CardContent className="p-8">
                {/* Plan Header */}
                <div className="text-center mb-6">
                  <div
                    className={`p-4 bg-gradient-to-br ${plan.bgGradient} rounded-full w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <plan.icon className={`w-8 h-8 ${plan.iconColor}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-card-foreground dark:text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-muted-foreground dark:text-slate-400 mb-4">
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="mb-4">
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <span className="text-2xl text-muted-foreground line-through">
                        {plan.originalPrice}
                      </span>
                      <div className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                        SAVE
                      </div>
                    </div>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-4xl font-bold text-[#ffb400]">
                        {plan.price}
                      </span>
                      <span className="text-lg text-muted-foreground">
                        {plan.currency}
                      </span>
                    </div>
                  </div>

                  {/* Delivery Time */}
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-6">
                    <Rocket className="w-4 h-4" />
                    <span>Delivery: {plan.deliveryTime}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="p-1 bg-[#ffb400]/10 rounded-full">
                        <Check className="w-4 h-4 text-[#ffb400]" />
                      </div>
                      <span className="text-sm text-foreground dark:text-white">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => openPlanDialog(plan)}
                  className={`w-full cursor-pointer py-4 px-6 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl ${
                    plan.popular
                      ? "bg-gradient-to-r from-[#ffb400] to-[#ff8c00] text-white hover:from-[#ff8c00] hover:to-[#ffb400] hover:shadow-[#ffb400]/25"
                      : "bg-card/80 border border-[#ffb400]/20 text-foreground dark:text-white hover:bg-[#ffb400]/10 hover:border-[#ffb400]/40"
                  }`}
                >
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Extra Services */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground dark:text-white">
              Add-On <span className="text-[#ffb400]">Services</span>
            </h2>
            <p className="text-lg text-muted-foreground dark:text-slate-400 max-w-2xl mx-auto">
              Enhance your package with these optional extras
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {extraServices.map((service, index) => (
              <Card
                key={index}
                className="group bg-card/50 backdrop-blur-sm border border-[#ffb400]/20 shadow-lg hover:shadow-xl hover:shadow-[#ffb400]/10 transition-all duration-300 hover:translate-y-[-4px]"
              >
                <CardContent className="p-6 text-center">
                  <div className="p-4 bg-[#ffb400]/10 rounded-full w-fit mx-auto mb-4 group-hover:bg-[#ffb400]/20 transition-colors duration-300">
                    <service.icon className="w-8 h-8 text-[#ffb400]" />
                  </div>
                  <h3 className="text-xl font-bold text-card-foreground dark:text-white mb-2">
                    {service.name}
                  </h3>
                  <p className="text-sm text-muted-foreground dark:text-slate-400 mb-3">
                    {service.description}
                  </p>
                  <div className="text-[#ffb400] font-semibold text-lg">
                    {service.price}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Why Work With Me */}
        <section className="mb-16">
          <Card className="bg-gradient-to-br from-[#ffb400]/5 to-[#ff8c00]/5 backdrop-blur-sm border border-[#ffb400]/20 shadow-lg">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold mb-6 text-foreground dark:text-white">
                Why Choose <span className="text-[#ffb400]">My Services?</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
                <div className="text-center">
                  <div className="p-4 bg-[#ffb400]/10 rounded-full w-fit mx-auto mb-4">
                    <Globe className="w-8 h-8 text-[#ffb400]" />
                  </div>
                  <h3 className="font-bold text-foreground dark:text-white mb-2">
                    Modern Design
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Latest design trends and technologies
                  </p>
                </div>

                <div className="text-center">
                  <div className="p-4 bg-[#ffb400]/10 rounded-full w-fit mx-auto mb-4">
                    <Zap className="w-8 h-8 text-[#ffb400]" />
                  </div>
                  <h3 className="font-bold text-foreground dark:text-white mb-2">
                    Fast Delivery
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Quick turnaround without compromising quality
                  </p>
                </div>

                <div className="text-center">
                  <div className="p-4 bg-[#ffb400]/10 rounded-full w-fit mx-auto mb-4">
                    <Smartphone className="w-8 h-8 text-[#ffb400]" />
                  </div>
                  <h3 className="font-bold text-foreground dark:text-white mb-2">
                    Mobile First
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Optimized for all devices and screen sizes
                  </p>
                </div>

                <div className="text-center">
                  <div className="p-4 bg-[#ffb400]/10 rounded-full w-fit mx-auto mb-4">
                    <Settings className="w-8 h-8 text-[#ffb400]" />
                  </div>
                  <h3 className="font-bold text-foreground dark:text-white mb-2">
                    Support
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Ongoing support and maintenance
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CTA Section */}
        <div className="text-center max-md:mb-10">
          <Card className="bg-gradient-to-r from-[#ffb400]/10 to-[#ff8c00]/10 backdrop-blur-sm border border-[#ffb400]/30 shadow-xl">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground dark:text-white">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-muted-foreground dark:text-slate-400 mb-8 max-w-2xl mx-auto">
                Let's create your website together! Contact me to discuss your
                project and take advantage of these launch prices.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href={"/contact"}>
                  <button className="bg-gradient-to-r cursor-pointer from-[#ffb400] to-[#ff8c00] text-white py-4 px-8 rounded-lg font-medium hover:from-[#ff8c00] hover:to-[#ffb400] transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:shadow-[#ffb400]/25">
                    <ArrowRight className="w-5 h-5" />
                    Contact Me Now
                  </button>
                </Link>
                <Link href={"/projects"}>
                  <button className="bg-card/80 cursor-pointer border border-[#ffb400]/20 text-foreground dark:text-white py-4 px-8 rounded-lg font-medium hover:bg-[#ffb400]/10 hover:border-[#ffb400]/40 transition-all duration-300 flex items-center justify-center gap-2">
                    <Globe className="w-5 h-5" />
                    View Projects
                  </button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Request {selectedPlanData?.name} Plan</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 mt-4">
            <Input
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            <Input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            <Input
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />
          </div>
          <DialogFooter className="mt-6">
            <Button
              onClick={() => {
                handlePlanRequest(selectedPlanData);
                setOpenDialog(false);
              }}
              className="bg-gradient-to-r from-[#ffb400] to-[#ff8c00] text-white hover:from-[#ff8c00] hover:to-[#ffb400]"
            >
              Confirm Request
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
