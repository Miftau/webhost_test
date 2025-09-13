import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import PricingSection from "../components/CloudServers/PricingSection";
import FeaturesSection from "../components/CloudServers/FeaturesSection";
import NISTFrameworkSection from "../components/CloudServers/NISTFrameworkSection";
import MainFeature from "../components/CloudServers/MainFeature";
import BeastSection from "../components/DataCenter/BeastSection/BeastSection";
import Asks from "../components/DataCenter/Asks/Asks";
import ImageSection from "../components/CloudServers/ImageSection";
import CloudImageSection from "../components/CloudServers/CloudImageSection";
import DashboardFeatures from "../components/Home/DashboardFeatures";
import PartnersGrid from "../components/SharedHosting/PartnersGrid";
import AdvantagesShared from "../components/SharedHosting/AdvantagesShared";

const CloudServers = () => {
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
      <FeaturesSection />
      <NISTFrameworkSection />
      <MainFeature/>
      <ImageSection />
      <AdvantagesShared />
      <Asks />
    </div>
  );
};

export default CloudServers;
