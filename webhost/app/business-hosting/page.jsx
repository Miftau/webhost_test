import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import PricingCard from "../components/SharedHosting/PricingCard";
import GrowSection from "../components/ApplicationHosting/GrowSection";
import BeastSection from "../components/DataCenter/BeastSection/BeastSection";
import Asks from "../components/DataCenter/Asks/Asks";
import BackGroundSection from "./BackGroundSection";
import PlatformSupport from "../components/WindowsHosting/PlatformSupport";

const WorkHosting = () => {
  return (
    <div>
      <HeroSection
              title="خدمة الاستضافة السحابية"
              description="منصة قوية وآمنة لإدارة مواقعك بسهولة"
              primaryButtonText="ابدأ الآن"
              primaryButtonLink="/signup"
              secondaryButtonText="الخطط والأسعار"
              secondaryButtonLink="/pricing"
              sideBox={{
                border: "/images/border-two.svg",
                container: "/images/hero-box-container.svg",
                floating: "/images/hero-box.svg",
                shadow: "/images/sm-shadow.svg",
              }}
              centerBox={{
                border: "/images/border-one.svg",
                container: "/images/hero-windows-container.svg",
                floating: "/images/hero-windows.svg",
                shadow: "/images/lg-shadow.svg",
              }}
            />
      <div className="h-24 sm:h-32 lg:h-48 w-full overflow-hidden">
        <img
          src="/images/clouds-graph 1.svg"
          alt="Decorative Top"
          className="w-full h-full object-cover opacity-50"
        />
      </div>
      <PricingCard />
      <BackGroundSection />
      <GrowSection/>
      <BeastSection />
      <PlatformSupport />
      <Asks />
    </div>
  );
};

export default WorkHosting;
