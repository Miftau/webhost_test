"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { ChevronDown } from "lucide-react";

const languages = [
  { value: "en", label: "English", flag: "/images/flag/England.png" },
  { value: "tr", label: "Türkçe", flag: "/images/flag/turkey.png" },
  { value: "ar", label: "العربية", flag: "/images/flag/saudi.png" },
  { value: "it", label: "Italia", flag: "/images/flag/italy.png" },
  { value: "de", label: "Deutsch", flag: "/images/flag/Germen.png" },
  { value: "es", label: "Español", flag: "/images/flag/spain.png" },
];

const GoogleTranslate = () => {
  const [selectedLang, setSelectedLang] = useState("en");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Initialize Google Translate
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        { pageLanguage: "en" },
        "google_translate_container"
      );
    };

    // Function to clean up Google Translate elements
    const cleanupGoogleTranslate = () => {
      try {
        // Hide banner elements
        const banner = document.querySelector('.goog-te-banner-frame');
        const tooltip = document.querySelector('.goog-te-tooltip');
        const menuFrame = document.querySelector('.goog-te-menu-frame');
        const combo = document.querySelector('.goog-te-combo');
        
        if (banner) {
          banner.style.display = 'none';
          banner.style.visibility = 'hidden';
          banner.style.position = 'absolute';
          banner.style.left = '-9999px';
          banner.style.top = '-9999px';
          banner.style.zIndex = '-1000';
        }
        
        if (tooltip) {
          tooltip.style.display = 'none';
          tooltip.style.visibility = 'hidden';
        }
        
        if (menuFrame) {
          menuFrame.style.display = 'none';
          menuFrame.style.visibility = 'hidden';
        }
        
        // Hide the combo box but keep it accessible for programmatic use
        if (combo) {
          combo.style.visibility = 'hidden';
          combo.style.position = 'absolute';
          combo.style.left = '-9999px';
        }
      } catch (error) {
        // Ignore errors during cleanup
      }
    };

    // Run cleanup immediately
    cleanupGoogleTranslate();
    
    // Set up periodic cleanup
    const interval = setInterval(cleanupGoogleTranslate, 1000);
    
    // Set up mutation observer for dynamic content
    const observer = new MutationObserver(cleanupGoogleTranslate);
    observer.observe(document.body, { 
      childList: true, 
      subtree: true 
    });

    // Clean up function
    return () => {
      clearInterval(interval);
      observer.disconnect();
      
      // Final cleanup on unmount
      try {
        const elementsToClean = [
          '.goog-te-banner-frame',
          '.goog-te-tooltip',
          '.goog-te-menu-frame'
        ];
        
        elementsToClean.forEach(selector => {
          const elements = document.querySelectorAll(selector);
          elements.forEach(el => {
            if (el && el.parentNode) {
              el.parentNode.removeChild(el);
            }
          });
        });
      } catch (error) {
        // Ignore cleanup errors
      }
    };
  }, []);

  const handleLanguageChange = (lang) => {
    setSelectedLang(lang);
    setOpen(false);

    // Trigger Google Translate hidden <select>
    const googleCombo = document.querySelector(".goog-te-combo");
    if (googleCombo) {
      googleCombo.value = lang;
      googleCombo.dispatchEvent(new Event("change"));
    }
  };

  const currentLang = languages.find((l) => l.value === selectedLang);

  return (
    <>
      {/* Google Translate script */}
      <Script
        src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />

      {/* Hidden container for Google Translate */}
      <div id="google_translate_container" style={{ display: "none" }}></div>

      {/* Custom Dropdown */}
      <div className="relative">
        {/* Trigger button */}
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2 border border-gray-200 rounded px-3 py-1.5 bg-white text-sm shadow-sm hover:bg-gray-50"
        >
          <img src={currentLang.flag} alt={currentLang.label} className="w-5" />
          <span>{currentLang.label}</span>
          <ChevronDown
            className={`w-4 h-4 transition-transform ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>

        {/* Dropdown menu */}
        {open && (
          <div className="absolute left-0 mt-1 w-40 bg-white border border-gray-200 rounded shadow-lg z-1000 animate-fadeIn">
            {languages.map((lang) => (
              <div
                key={lang.value}
                onClick={() => handleLanguageChange(lang.value)}
                className="flex items-center gap-2 px-3 py-2 cursor-pointer hover:bg-gray-100 text-sm"
              >
                <img src={lang.flag} alt={lang.label} className="w-5" />
                <span>{lang.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default GoogleTranslate;