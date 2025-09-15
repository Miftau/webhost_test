import React from "react";
import HeroSectionDiff from "../components/HeroSection/HeroSectionDiff";
import PricingSection from "../components/CloudServers/PricingSection";
import FeaturesSection from "../components/CloudServers/FeaturesSection";
import NISTFrameworkSection from "../components/CloudServers/NISTFrameworkSection";
import MainFeature from "../components/VPS/MainFeature";
import BeastSection from "../components/DataCenter/BeastSection/BeastSection";
import Asks from "../components/DataCenter/Asks/Asks";
import CloudImageSection from "../components/CloudServers/CloudImageSection";
import DashboardFeatures from "../components/Home/DashboardFeatures";
import PartnersGrid from "../components/SharedHosting/PartnersGrid";

const VPS = () => {
  return (
    <div className="overflow-x-hidden">
     <HeroSectionDiff
            title="Welcome to Our Platform"
            description="Discover amazing features designed to enhance your experience and boost productivity."
            primaryButtonText="Get Started"
            primaryButtonLink="/signup"
            secondaryButtonText="Learn More"
            secondaryButtonLink="/about"
            
            leftSideBox={{
              border: "/images/left-border.png",
              container: "/images/left-container.png",
              floating: "/images/left-floating.png",
              shadow: "/images/left-shadow.png"
            }}
            rightSideBox={{
              border: "/images/right-border.png",
              container: "/images/right-container.png",
              floating: "/images/right-floating.png",
              shadow: "/images/right-shadow.png"
            }}
            
            centerBox={{
              border: "/images/center-border.png",
              container: "/images/center-container.png",
              floating: "/images/center-floating.png",
              shadow: "/images/center-shadow.png"
            }}
          />

      <PricingSection />
      <FeaturesSection />
      <NISTFrameworkSection />
      <MainFeature/>
      <CloudImageSection />
      <DashboardFeatures />
      <PartnersGrid />
      <BeastSection />
      <Asks />
    </div>
  );
};

export default VPS;

