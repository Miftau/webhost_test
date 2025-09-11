import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import PricingCard from "../components/SharedHosting/PricingCard";
import AdvantagesShared from "../components/SharedHosting/AdvantagesShared";
import FeaturesSection from "../components/SharedHosting/FeaturesSection";
import PartnersGrid from "../components/SharedHosting/PartnersGrid";
import Asks from "../components/DataCenter/Asks/Asks";
import PaymentSection from "../components/CloudTigers/PaymentSection";
import NIStFrameworkSection from "../components/CloudServers/NISTFrameworkSection";




const SharedHosting = () => {
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
      <PricingCard/>
      <PaymentSection/>
      <NIStFrameworkSection/>
      <FeaturesSection/>
      <AdvantagesShared />
      <PartnersGrid/>
      <Asks/>
   
    </div>
  );
};

export default SharedHosting;
