import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import PricingCard from "../components/FullServers/PricingCard";
import BackupsGrowSection from "../components/Backups/BackupsGrowSection";
import Asks from "../components/DataCenter/Asks/Asks";
import PlatformSupport from "../components/Backups/PlatformSupport";
import WindowsKeyAdSection from "../components/WindowsKeyAdSection";

const ServerManagement = () => {
  return (
    <div className="overflow-x-hidden">
      <HeroSection
        title="خدمة الاستضافة السحابية"
        description="منصة قوية وآمنة لإدارة مواقعك بسهولة"
        primaryButtonText="ابدأ الآن"
        primaryButtonLink="/signup"
        secondaryButtonText="الخطط والأسعار"
        secondaryButtonLink="/pricing"
        sideBox={{
          border: "/custom-border.svg",
          container: "/custom-container.svg",
          floating: "/custom-floating.svg",
          shadow: "/custom-shadow.svg",
        }}
        centerBox={{
          border: "/main-border.svg",
          container: "/main-container.svg",
          floating: "/main-floating.svg",
          shadow: "/main-shadow.svg",
        }}
      />
      <PricingCard />
      <BackupsGrowSection />
      <PlatformSupport />
      <WindowsKeyAdSection/>
      <Asks />
    </div>
  );
};

export default ServerManagement;
