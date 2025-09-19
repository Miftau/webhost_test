import React from "react";
import HeroSectionVPS from "../components/HeroSection/HeroSectionVPS";
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
     <HeroSectionVPS
            title="Vps Hosting"
            description="Discover amazing features designed to enhance your experience and boost productivity."
            primaryButtonText="Get Started"
            primaryButtonLink="/signup"
            secondaryButtonText="Learn More"
            secondaryButtonLink="/about"
            
            leftSideBox={{
              border: "/images/border-two.svg",
              container: "/images/hero-box-container.svg",
              floating: "/images/left-floating.svg",
              shadow: "/images/sm-shadow.svg"
            }}
            rightSideBox={{
              border: "/images/border-two.svg",
              container: "/images/hero-box-container.svg",
              floating: "/images/right-floating.svg",
              shadow: "/images/sm-shadow.svg"
            }}
            
            centerBox={{
              border: "/images/border-one.svg",
              container: "/images/hero-windows-container.svg",
              floating: "/images/center-floating.svg",
              shadow: "/images/lg-shadow.svg"
              
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

