import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import CloudFeaturesSection from "../components/CloudTigers/CloudFeaturesSection";
import PricingSectionTigers from "../components/CloudTigers/PricingSectionTigers";
import PaymentSection from "../components/CloudTigers/PaymentSection";
import WhyChooseUs from "../components/CloudTigers/WhyChooseUs";
import Asks from "../components/DataCenter/Asks/Asks";
import PlatformSupport from "../components/WindowsHosting/PlatformSupport";

const CloudTigers = () => {
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
          floating: "/images/123456790.png",
          shadow: "/images/lg-shadow.svg",
        }}
      />
      <CloudFeaturesSection />
      <PricingSectionTigers />
      <PaymentSection />
      <WhyChooseUs />
      <PlatformSupport />
      <Asks />
    </div>
  );
};

export default CloudTigers;
