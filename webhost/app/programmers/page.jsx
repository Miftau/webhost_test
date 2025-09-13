import React from 'react'
import HeroSection from '../components/HeroSection/HeroSection'
import WhyChooseUs from '../components/Programmers/WhyChooseUs'
import PricingCard from '../components/SharedHosting/PricingCard'
import FeatureSection from '../components/Programmers/FeactureSection'
import SSLSection from '../components/Programmers/SSLSection'
import WhoisSection from '../components/Programmers/WhiosSection'
import Asks from '../components/DataCenter/Asks/Asks'
import BenefitsSection from '../components/Programmers/BenefitsSection'
import ImageSection from '../components/Security/ImageSection'

const Programmers = () => {
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
            <WhyChooseUs />
            <ImageSection/>
            <PricingCard />
            <FeatureSection />
            <SSLSection/>
            <WhoisSection/>
            <BenefitsSection />
            <Asks />
        </div>
    )
}

export default Programmers