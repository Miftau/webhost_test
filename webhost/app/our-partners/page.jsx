import React from 'react'
import Asks from '../components/DataCenter/Asks/Asks'
import HeroSection from '../components/HeroSection/HeroSection'
import PartnersSection from '../components/Home/PartnersSection'
import SuccessPartners from '../components/SuccessPartners/SuccessPartners'

const page = () => {
  return (
    <div className="overflow-x-hidden">
       <HeroSection
        title="شركاؤنا"
        description="ادفع بالطريقة التي تناسبك واستمتع بتجربة دفع سهلة وسلسة"
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
          floating: "/images/our-partners-floating.svg",
          shadow: "/images/lg-shadow.svg",
        }}
      />
      
      <SuccessPartners/>
      <PartnersSection />
      <Asks/>
    </div>
  )
}

export default page