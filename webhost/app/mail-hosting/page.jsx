import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import PricingCard from "../components/SharedHosting/PricingCard";
import DashboardFeatures from "../components/Home/DashboardFeatures";
import BeastSection from "../components/DataCenter/BeastSection/BeastSection";
import Asks from "../components/DataCenter/Asks/Asks";
import AllNeedSection from "../components/MailHosting/AllNeedSection";
import StrongSecurity from "../components/MailHosting/StrongSecurity";
import EasyTransitionSection from "../components/MailHosting/EasyTransitionSection";
import MailHostAdvantages from "../components/MailHosting/MailHostAdvantages";

const MailHosting = () => {
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
      <AllNeedSection />
      <DashboardFeatures />
      <StrongSecurity />
      <MailHostAdvantages />
      <EasyTransitionSection />
      <Asks />
    </div>
  );
};

export default MailHosting;
