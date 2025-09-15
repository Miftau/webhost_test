import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import PricingSection from "../components/ApplicationHosting/PricingSection";
import PaymentFeaturesSection from "../components/ApplicationHosting/PaymentFeaturesSection";
import ECommercePlatforms from "../components/ApplicationHosting/ECommercePlatforms";
import GrowSection from "../components/ApplicationHosting/GrowSection";
import Asks from "../components/DataCenter/Asks/Asks";
import BeastSection from "../components/DataCenter/BeastSection/BeastSection";

const ApplicationHosting = () => {
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
      <PricingSection />
      <PaymentFeaturesSection />
      <ECommercePlatforms />
      <GrowSection />
      <BeastSection />
      <Asks />
    </div>
  );
};

export default ApplicationHosting;
