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
