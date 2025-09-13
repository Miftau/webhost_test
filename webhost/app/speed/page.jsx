import React from "react";
import HeroSectionNormal from "../components/HeroSectionNormal/HeroSectionNormal";
import LaunchHero from "../components/Fast/LaunchHero/LaunchHero";
import BackGroundSection from "../components/Fast/BackGroundSection/BackGroundSection";
import Asks from "../components/DataCenter/Asks/Asks";
import BackupsGrowSection from "../components/Backups/BackupsGrowSection";
import SpeedAdvantage from "../components/SpeedAdvantage";

const Fast = () => {
  return (
    <div className="overflow-x-hidden">
      <HeroSectionNormal
        title="السرعة"
        description="احمِ بيانات موقعك، واعرض لزوارك شهادة الأمان الخاصة بك."
        primaryButtonText="ابدا الان!"
        secondaryButtonText="سجل الآن"
       imageBottom="/images/speed.svg"
        imageAltBottom="Hero Background"
      />
      <LaunchHero />
      <BackGroundSection />
      <SpeedAdvantage/>
      <Asks />
    </div>
  );
};

export default Fast;
