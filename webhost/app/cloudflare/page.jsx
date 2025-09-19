import React from "react";
import SSLCertificates from "../components/SSL/SSLCertificates";
import SecuritySection from "../components/SSL/SecuritySection";
import BeastSection from "../components/DataCenter/BeastSection/BeastSection";
import Asks from "../components/DataCenter/Asks/Asks";
import FeaturesSection from "../components/SSL/FeaturesSection";
import HeroSectionVPS from "../components/HeroSection/HeroSectionVPS";
import AdvantageSection from "../components/WordPressHosting/AdvantageSection";
import Advantages from "../components/Careers/Advantages";
import AdvantagesShared from "../components/SharedHosting/AdvantagesShared";
import WindowsKeyAdSection from "../components/WindowsKeyAdSection";
import PricingCard from "../components/SharedHosting/PricingCard";
import AfterCloudFlareHeroSection from "../components/AfterCloudFlareHeroSection/AfterCloudFlareHeroSection";
import NewStandardWebSucsess from "../components/NewStandardWebSucsess/NewStandardWebSucsess";

const SSL = () => {
  return (
    <div>
     <HeroSectionVPS
            title="Cloudflare"
            description="The perfect solution for a faster, more secure and reliable web experience.."
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
              container: "/images/cloudflare-container.svg",
              floating: "/images/cloudflare-floating.svg",
              shadow: "/images/lg-shadow.svg"
              
            }}
          />

      <AfterCloudFlareHeroSection/>
      <WindowsKeyAdSection/>
      <NewStandardWebSucsess/>
      <div className="space-y-20 sm:space-y-28">
      <PricingCard/>
      <Asks />
      </div>
    </div>
  );
};

export default SSL;
