import React from "react";
import HeroSectionNormal from "../components/HeroSectionNormal/HeroSectionNormal";
import GrowthSection from "../components/DataCenter/GrowthSection/GrowthSection";
import ServerLocation from "../components/DataCenter/ServerLocation/ServerLocation";
import Services from "../components/DataCenter/Services/Services";
import BeastSection from "../components/DataCenter/BeastSection/BeastSection";
import Asks from "../components/DataCenter/Asks/Asks";

const DataCenter = () => {
  return (
    <div className="overflow-x-hidden">
      <HeroSectionNormal
        title="مراكز البيانات"
        description="كلام و وصف للاستضافات المشتركة كلام و وصف للاستضافات المشتركة كلام و وصف للاستضافات كلام و المشتركة كلام و وصف للاستضافات المشتركة"
        primaryButtonText="انشاء حساب"
        secondaryButtonText="عرض الاسعار"
        imageBottom="/images/Group1.png"
        imageAltBottom="Hero Background"
      />

      <GrowthSection />
      <ServerLocation />
      <Services />
      <BeastSection />
      <Asks/>
    </div>
  );
};

export default DataCenter;
