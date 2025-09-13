import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import PricingCard from "../components/SharedHosting/PricingCard";
import LicenseSection from "../components/ServerLicenses/LicenseSection";
import OverviewSection from "../components/ServerLicenses/OverviewSection";
import Asks from "../components/DataCenter/Asks/Asks";
import WhyChooseTigerServerLicenses from "../components/WhyChooseTigerServerLicenses";

const ServerLicenses = () => {
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
      <PricingCard />
      <LicenseSection />
      <OverviewSection />
      <WhyChooseTigerServerLicenses/>
      <Asks />
    </div>
  );
};

export default ServerLicenses;
