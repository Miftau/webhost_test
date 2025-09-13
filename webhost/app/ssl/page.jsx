import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import SSLCertificates from "../components/SSL/SSLCertificates";
import SecuritySection from "../components/SSL/SecuritySection";
import BeastSection from "../components/DataCenter/BeastSection/BeastSection";
import Asks from "../components/DataCenter/Asks/Asks";
import FeaturesSection from "../components/SSL/FeaturesSection";

const SSL = () => {
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
      <SSLCertificates />
      <SecuritySection />
      <FeaturesSection />
      <BeastSection />
      <Asks />
    </div>
  );
};

export default SSL;
