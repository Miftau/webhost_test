"use client";

import { Button } from "@/components/ui/button";
import { NavigationMenuDemo } from "../Header/MainNavbar";

const HeroSection = ({
  title,
  description,

  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,

  // Side Boxes Images
  sideBox = {
    border,
    container,
    floating,
    shadow,
  },

  // Center Box Images
  centerBox = {
    border,
    container,
    floating,
    shadow,
  },
}) => {
  return (
    <section className="overflow-hidden h-[calc(100vh-85px)] relative">
      {/* Background wrapper */}
      <div className="text-white bg-main-color pt-[85px] h-[90%] scale-110 rounded-b-full shadow-[0_10px_0_20px_rgba(200,206,222,1)] relative z-10 flex flex-col items-center">
        {/* Navbar */}
        <div className="absolute top-0 left-0 w-full z-50">
          <NavigationMenuDemo />
        </div>

        {/* Text Content */}
        <div className="flex flex-col items-center gap-2 mt-6 text-center">
          <h1 className="text-[24px] md:text-[40px] font-semibold">
            {title}
          </h1>
          <h2 className="font-light text-[14px] max-w-[80%] md:max-w-[614px] text-center">
            {description}
          </h2>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-6 text-[14px]">
          <Button
            asChild
            variant="outline"
            className="border px-4 py-2 rounded-md hover:border-transparent hover:bg-white hover:text-main-color transition cursor-pointer"
          >
            <a href={primaryButtonLink}>{primaryButtonText}</a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border px-4 py-2 rounded-md hover:border-transparent hover:bg-white hover:text-main-color transition cursor-pointer"
          >
            <a href={secondaryButtonLink}>{secondaryButtonText}</a>
          </Button>
        </div>

        {/* Floating Illustration */}
        <div className="relative -z-50 flex flex-col items-center mt-10 sm:mt-20 scale-50 sm:scale-80 md:scale-90 lg:scale-100">
          {/* Side Boxes */}
          <div className="flex justify-around w-full">
            {[1, 2].map((_, i) => (
              <div key={i} className="relative w-[266px] h-[154px] hidden sm:block">
                <img src={sideBox.border} alt="border" className="absolute inset-0 w-full h-full" />
                <img src={sideBox.container} alt="container" className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[176px] h-[137px]" />
                <img src={sideBox.floating} alt="box" className="absolute -top-12 left-1/2 -translate-x-1/2 w-[70px] h-[70px] animate-float" />
                <img src={sideBox.shadow} alt="shadow" className="absolute top-15 -translate-y-full left-1/2 -translate-x-1/2 w-[110px] h-[212px]" />
              </div>
            ))}
          </div>

          {/* Center Box */}
          <div className="relative w-[452px] h-[262px]">
            <img src={centerBox.border} alt="border" className="absolute inset-0 w-full h-full" />
            <img src={centerBox.container} alt="container" className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[317px] h-[250px]" />
            <img src={centerBox.floating} alt="floating" className="absolute -top-15 left-1/2 -translate-x-1/2 w-[100px] h-[100px] animate-float" />
            <img src={centerBox.shadow} alt="shadow" className="absolute top-17 -translate-y-full left-1/2 -translate-x-1/2 w-[131px] h-[386px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
