import React from 'react'
import HeroSectionDiff from '../components/HeroSection/HeroSectionDiff'
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
          <HeroSectionDiff
            title="Welcome to Our Platform"
            description="Discover amazing features designed to enhance your experience and boost productivity."
            primaryButtonText="Get Started"
            primaryButtonLink="/signup"
            secondaryButtonText="Learn More"
            secondaryButtonLink="/about"
            
            leftSideBox={{
              leftimage: "/images/prog-left.svg",
            }}
            rightSideBox={{
              rightimage: "/images/prog-right.svg",
            }}
            
            centerBox={{
              centerimage: "/images/prog-center.svg",
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