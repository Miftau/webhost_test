import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import WordPressGrowSection from "../components/WordPressHosting/WordPressGrowSection";
import FreeToolsSection from "../components/WordPressHosting/FreeToolsSection";
import PricingCard from "../components/SharedHosting/PricingCard";
import WordpressFeatures from "../components/WordPressHosting/WordpressFeatures";
import ArabicSection from "../components/WordPressHosting/ArabicSection";
import ImageSection from "../components/WordPressHosting/ImageSection";
import BeastSection from "../components/DataCenter/BeastSection/BeastSection";
import Asks from "../components/DataCenter/Asks/Asks";
import FeatureSection from "../components/WordPressHosting/FeatureSection";
import AdvantageSection from "../components/WordPressHosting/AdvantageSection";


const WordPressHosting = () => {
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
      <FreeToolsSection />
      <WordPressGrowSection />
      <PricingCard />
      <WordpressFeatures />
      <ArabicSection />
      <ImageSection />
      <FeatureSection />
      <AdvantageSection />
      <Asks />
    </div>
  );
};

export default WordPressHosting;
