import CustomCursor from "@/components/CustomCursor";
import ParallaxLines from "@/components/ParallaxLines";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Exchanges from "@/components/sections/Exchanges";
import Features from "@/components/sections/Features";
import SpeedMetrics from "@/components/sections/SpeedMetrics";
import CodeIntegration from "@/components/sections/CodeIntegration";
import Backtesting from "@/components/sections/Backtesting";
import Security from "@/components/sections/Security";
import DataCenter from "@/components/sections/DataCenter";
import VolumeCounters from "@/components/sections/VolumeCounters";
import QuantBlog from "@/components/sections/QuantBlog";
import Uptime from "@/components/sections/Uptime";
import Reviews from "@/components/sections/Reviews";
import CTAFooter from "@/components/sections/CTAFooter";

const Index = () => {
  return (
    <div className="relative bg-background text-foreground min-h-screen overflow-x-hidden">
      <CustomCursor />
      <ParallaxLines />
      <Navbar />
      <Hero />
      <Exchanges />
      <Features />
      <SpeedMetrics />
      <CodeIntegration />
      <Backtesting />
      <Security />
      <DataCenter />
      <VolumeCounters />
      <QuantBlog />
      <Uptime />
      <Reviews />
      <CTAFooter />
    </div>
  );
};

export default Index;
