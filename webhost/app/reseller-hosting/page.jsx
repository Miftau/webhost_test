import React from 'react'
import HeroSection from '../components/HeroSection/HeroSection'
import KubernetesHostingIntro from '../components/Microsoft365/KubernetesHostingIntro'
import PricingCard from '../components/SharedHosting/PricingCard'
import ClickSection from '../components/SharedHosting/ClickSection'
import JoinSection from '../components/SharedHosting/JoinSection'
import BeastSection from '../components/DataCenter/BeastSection/BeastSection'
import Asks from '../components/DataCenter/Asks/Asks'

const ResellerHosting = () => {
  return (
    <div className='overflow-x-hidden'>
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
      <KubernetesHostingIntro />
      <PricingCard/>
      <ClickSection/>
      <JoinSection />
      <BeastSection />
      <Asks/>
    </div>
  )
}

export default ResellerHosting