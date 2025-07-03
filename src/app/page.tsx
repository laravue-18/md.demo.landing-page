import Image from "next/image";
import HeroSection from "@/ui/home/HeroSection";
import FeatureSection from "@/ui/home/FeatureSection";
import AboutSection from "@/ui/home/AboutSection";
import TeamSection from "@/ui/home/TeamSection";
import PortfolioSection from "@/ui/home/PortfolioSection";
import TestimonialSection from "@/ui/home/TestimonialSection";
import PricingSection from "@/ui/home/PricingSection";
import BlogSection from "@/ui/home/BlogSection";
import SupportSection from "@/ui/home/SupportSection";
import CtaSection from "@/ui/home/CtaSection";
import FooterSection from "@/ui/home/FooterSection";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <FeatureSection />
      <AboutSection />
      <TeamSection />
      <PortfolioSection />
      <TestimonialSection />
      <PricingSection />
      <BlogSection />
      <SupportSection />
      <CtaSection />
      <FooterSection />
    </div>
  );
}
