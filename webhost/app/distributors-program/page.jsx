import React from 'react'
import HeroSection from '../components/HeroSection/HeroSection'
import KubernetesSection from '../components/DistributorsProgram/KubernetesSection'
import ArabicFeaturesSection from '../components/DistributorsProgram/ArabicFeaturesSection'
import BackGroundSection from '../components/DistributorsProgram/BackGroundSection'
import PricingSection from '../components/DistributorsProgram/PricingSection'
import ClickSection from '../components/SharedHosting/ClickSection'
import WordPressMigrationSection from '../components/DistributorsProgram/WordPressMigrationSection'
import AdvantageSection from '../components/WordPressHosting/AdvantageSection'
import Asks from '../components/DataCenter/Asks/Asks'

const DistributorsProgram = () => {
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
            <KubernetesSection />
            <ArabicFeaturesSection />
            <BackGroundSection/>
            <PricingSection />
            <ClickSection />
            <WordPressMigrationSection />
            <AdvantageSection />
            <Asks />
        </div>
    )
}

export default DistributorsProgram