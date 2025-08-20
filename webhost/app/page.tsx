'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Home() {
  const [activeTab, setActiveTab] = useState('Design and development');
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  // Animation variants for sections
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { 
        delay: i * 0.1, 
        duration: 0.5, 
        ease: 'easeOut' 
      }
    })
  };

  // Animation variants for buttons
  const buttonVariants = {
    hover: { 
      scale: 1.05, 
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)', 
      transition: { duration: 0.3 } 
    }
  };

  // Animation variants for expandable sections
  const expandVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { 
      height: 'auto', 
      opacity: 1, 
      transition: { duration: 0.3, ease: 'easeInOut' }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
    {/* Hero Section */}
<motion.section
  className="relative bg-cover bg-center bg-no-repeat text-white py-20"
  style={{
    backgroundImage: "url('https://via.placeholder.com/1920x1080/0a1a3f/ffffff?text=Hero+Background')",
  }}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={sectionVariants}
>
  {/* Background Decorative Elements (3D Blocks) */}
  <div className="absolute inset-0 overflow-hidden">
    {/* Left Side Blocks */}
    <div className="absolute top-16 left-10 flex flex-col space-y-6">
      <div className="w-16 h-16 bg-blue-800 rounded-lg shadow-lg flex items-center justify-center transform rotate-6">
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h1" />
        </svg>
      </div>
      <div className="w-16 h-16 bg-blue-800 rounded-lg shadow-lg flex items-center justify-center transform -rotate-6">
        <span className="text-white font-bold text-lg">MC</span>
      </div>
    </div>

    {/* Right Side Blocks */}
    <div className="absolute top-16 right-10 flex flex-col space-y-6">
      <div className="w-16 h-16 bg-blue-800 rounded-lg shadow-lg flex items-center justify-center transform -rotate-6">
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      </div>
      <div className="w-16 h-16 bg-blue-800 rounded-lg shadow-lg flex items-center justify-center transform rotate-6">
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </div>
    </div>

    {/* Bottom Center Icon */}
    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
      <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg">
        <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
    </div>
  </div>

  {/* Content */}
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
      {/* Left Side (Empty) */}
      <div className="flex justify-center"></div>

      {/* Center Content */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }}
        viewport={{ once: true }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-2">Solutions</h1>
        <h2 className="text-2xl md:text-3xl mb-4">Ideal web hosting</h2>
        <p className="text-blue-200 mb-6 text-center text-sm md:text-base">
          شركة العنكبوت الليبي هي الشركة الرائدة في تقديم حلول التكنولوجيا وألخدمات السحابية في ليبيا.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.input
            type="text"
            placeholder="Search for a new domain"
            className="px-6 py-3 rounded-full border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full sm:w-80"
            whileFocus={{ scale: 1.02, transition: { duration: 0.3 } }}
          />
          <motion.button
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-medium transition-colors"
            variants={buttonVariants}
            whileHover="hover"
          >
            Search
          </motion.button>
        </div>
      </motion.div>

      {/* Right Side (Empty) */}
      <div className="flex justify-center"></div>
    </div>
  </div>
</motion.section>

      {/* Services Section */}
    <motion.section
      className="py-20 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={sectionVariants}
    >
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Header */}
    <motion.div
      className="text-center mb-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 0.5 } }}
      viewport={{ once: true }}
    >
      <h2 className="inline-block bg-purple-900 text-white text-lg font-semibold px-6 py-2 rounded-lg">
        Our services
      </h2>
    </motion.div>

    {/* Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {[
        {
          title: "Shared cloud hosting",
          description: "Host your website easily, comfortably, and at economical costs!",
          price: "Starting from 45 SAR .SAR/month",
          image: "/shared-hosting-card 1.svg",
        },
        {
          title: "Dedicated servers",
          description: "Host your website easily, comfortably, and at economical costs!",
          price: "Starting from 45 SAR .SAR/month",
          image: "/shared-hosting-card 1.svg",
        },
        {
          title: "Web hosting",
          description: "Host your website easily, comfortably, and at economical costs!",
          price: "Starting from 45 SAR .SAR/month",
          image: "/shared-hosting-card 1.svg",
        },
        {
          title: "Control panel license",
          description: "Host your website easily, comfortably, and at economical costs!",
          price: "Starting from 45 SAR .SAR/month",
          image: "/shared-hosting-card 1.svg",
        },
        {
          title: "Ranges",
          description: "Host your website easily, comfortably, and at economical costs!",
          price: "Starting from 45 SAR .SAR/month",
          image: "/shared-hosting-card 1.svg",
        },
        {
          title: "VPS",
          description: "Host your website easily, comfortably, and at economical costs!",
          price: "Starting from 45 SAR .SAR/month",
          image: "/shared-hosting-card 1.svg",
        },
      ].map((service, index) => (
        <motion.div
          key={index}
          className="rounded-2xl shadow-lg border border-gray-200 overflow-hidden flex flex-col bg-white"
          variants={cardVariants}
          custom={index}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
        >
          {/* Top Purple Section */}
          <div className="bg-purple-900 w-full h-36 relative flex items-center justify-center rounded-b-[3rem]">
            <motion.img
              src={service.image}
              alt={service.title}
              className="w-28 h-28 object-contain relative -bottom-8"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{
                opacity: 1,
                scale: 1,
                transition: { duration: 0.5 },
              }}
              viewport={{ once: true }}
            />
          </div>

          {/* Content */}
          <div className="flex flex-col items-center text-center px-6 pb-6 pt-12 flex-grow">
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm mb-6">
              {service.description}
            </p>
          </div>

          {/* Price Footer */}
          <div className="bg-purple-900 text-white text-sm font-medium text-center py-3">
            {service.price}
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</motion.section>

      {/* Payment Methods */}
      <motion.section
        className="py-16 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 0.5 } }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Payment methods</h2>
          </motion.div>
          
          <motion.div
            className="bg-white rounded-lg shadow-lg p-8"
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          >
            <div className="flex items-center justify-center space-x-4 mb-4">
              <motion.img 
                src="https://www.fawry.com/images/fawry-logo.png" 
                alt="Fawry" 
                className="h-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.1 } }}
                viewport={{ once: true }}
              />
              <motion.img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Vodafone_logo_2017.svg/1200px-Vodafone_logo_2017.svg.png" 
                alt="Vodafone" 
                className="h-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.2 } }}
                viewport={{ once: true }}
              />
              <motion.img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Visa_Inc._logo.svg/1200px-Visa_Inc._logo.svg.png" 
                alt="VISA" 
                className="h-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.3 } }}
                viewport={{ once: true }}
              />
              <motion.img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Mastercard-logo.svg/1200px-Mastercard-logo.svg.png" 
                alt="Mastercard" 
                className="h-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.4 } }}
                viewport={{ once: true }}
              />
              <motion.img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/1200px-PayPal.svg.png" 
                alt="PayPal" 
                className="h-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.5 } }}
                viewport={{ once: true }}
              />
            </div>
            <p className="text-center text-gray-600">Pay using Fawry or more than 20 other payment methods</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Server Locations */}
      <motion.section
        className="py-20 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 0.5 } }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Server locations</h2>
          </motion.div>
          
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.7 } }}
            viewport={{ once: true }}
          >
            <img src="/world-map.svg" />
          </motion.div>
          
           <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {[
              { name: "America", flag: "https://flagcdn.com/40x30/us.png",},
              { name: "Britain", flag: "https://flagcdn.com/40x30/gb.png",  },
              { name: "Türkiye", flag: "https://flagcdn.com/40x30/tr.png",  },
              { name: "The UAE", flag: "https://flagcdn.com/40x30/ae.png",  },
              { name: "Saudi Arabia", flag: "https://flagcdn.com/40x30/sa.png", },
              { name: "Korea", flag: "https://flagcdn.com/40x30/kr.png",  },
              { name: "Italy", flag: "https://flagcdn.com/40x30/it.png",  },
              { name: "Finland", flag: "https://flagcdn.com/40x30/fi.png", },
              { name: "Germany", flag: "https://flagcdn.com/40x30/de.png",},
              { name: "Sudan", flag: "https://flagcdn.com/40x30/sd.png", }
            ].map((location, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg p-4 shadow-sm border border-gray-100"
                variants={cardVariants}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
                    <motion.img 
                      src={location.flag}
                      alt={`${location.name} flag`}
                      className="w-full h-full object-cover"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.5 } }}
                      viewport={{ once: true }}
                    />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{location.name}</div>
                    <div className="text-xs text-green-600">{location.latency}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Business Services */}
      <motion.section
        className="py-20 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 0.5 } }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Great services that meet your business needs</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              With our cloud products and services, you&apos;ll find that we meet 100% of your business and data needs, with superior security for your infrastructure.
            </p>
          </motion.div>
          
          <div className="flex justify-center mb-8 space-x-4">
            {["Design and development", "Ranges", "Cloud services"].map((tab, index) => (
              <motion.button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-md transition-colors ${
                  activeTab === tab 
                    ? "bg-blue-600 text-white" 
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
                variants={buttonVariants}
                whileHover="hover"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.1 } }}
                viewport={{ once: true }}
              >
                {tab}
              </motion.button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "JPaaS Platform as a Service",
                description: "Managed PaaS with automated DevOps processes. Pay-per-use pricing.",
                icon: "cloud"
              },
              {
                title: "LS Suite",
                description: "Professional email, online storage, corporate meetings, and more. Built to work.",
                icon: "email"
              },
              {
                title: "Shared cloud hosting",
                description: "Host your website easily, comfortably and at an economical cost!. With shared cloud hosting.",
                icon: "server"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 border border-gray-200"
                variants={cardVariants}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
              >
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h1" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                <motion.button
                  className="text-blue-600 text-sm font-medium hover:text-blue-800"
                  variants={buttonVariants}
                  whileHover="hover"
                >
                  Learn more
                </motion.button>
              </motion.div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0, transition: { duration: 0.6 } }}
              viewport={{ once: true }}
            >
              <div className="flex space-x-4 mb-6">
                <motion.button 
                  className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium"
                  variants={buttonVariants}
                  whileHover="hover"
                >
                  AR
                </motion.button>
                <motion.button 
                  className="bg-white text-gray-800 px-4 py-2 rounded-full text-sm font-medium"
                  variants={buttonVariants}
                  whileHover="hover"
                >
                  EN
                </motion.button>
              </div>
              <motion.img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/CPanel_logo.svg/1200px-CPanel_logo.svg.png" 
                alt="Control Panel" 
                className="rounded-lg shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.7 } }}
                viewport={{ once: true }}
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0, transition: { duration: 0.6 } }}
              viewport={{ once: true }}
            >
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-500">Subscriber services panel</span>
                  <span className="text-sm font-medium">Comprehensive control panel</span>
                </div>
                <p className="text-gray-600 mb-6">Fully managed, responsive and easy-to-use control panel to manage all your cloud services.</p>
                
                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <motion.button 
                      onClick={() => toggleSection('Easy management')}
                      className="flex items-center justify-between w-full"
                      whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                    >
                      <span className="font-medium">Easy management</span>
                      <motion.svg 
                        className="w-5 h-5" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        animate={{ rotate: expandedSection === 'Easy management' ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </motion.svg>
                    </motion.button>
                    <AnimatePresence>
                      {expandedSection === 'Easy management' && (
                        <motion.div
                          variants={expandVariants}
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                          className="mt-2 text-sm text-gray-600"
                        >
                          Complete management and a comprehensive overview of all your services in one place.
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4">
                    <motion.button 
                      onClick={() => toggleSection('Run with one click')}
                      className="flex items-center justify-between w-full"
                      whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                    >
                      <span className="font-medium">Run with one click</span>
                      <motion.svg 
                        className="w-5 h-5" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        animate={{ rotate: expandedSection === 'Run with one click' ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </motion.svg>
                    </motion.button>
                    <AnimatePresence>
                      {expandedSection === 'Run with one click' && (
                        <motion.div
                          variants={expandVariants}
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                          className="mt-2 text-sm text-gray-600"
                        >
                          Launch your services instantly with a single click.
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4">
                    <motion.button 
                      onClick={() => toggleSection('Run with one click 2')}
                      className="flex items-center justify-between w-full"
                      whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                    >
                      <span className="font-medium">Run with one click</span>
                      <motion.svg 
                        className="w-5 h-5" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        animate={{ rotate: expandedSection === 'Run with one click 2' ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </motion.svg>
                    </motion.button>
                    <AnimatePresence>
                      {expandedSection === 'Run with one click 2' && (
                        <motion.div
                          variants={expandVariants}
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                          className="mt-2 text-sm text-gray-600"
                        >
                          Launch your services instantly with a single click.
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Partners */}
      <motion.section
        className="py-20 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 0.5 } }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our partners</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We think about our partnerships with the pioneers of integration to provide secure and reliable hosting solutions that support the growth of our customers&apos; businesses and achieve their goals in the digital world.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Linode_logo.svg/1200px-Linode_logo.svg.png",
                name: "Linode",
                description: "It is the world's largest independent provider of open cloud services with 11 global data centers serving nearly one million customers and businesses around the world.",
                link: "Show more"
              },
              {
                logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/CPanel_logo.svg/1200px-CPanel_logo.svg.png",
                name: "Cpanel",
                description: "cPanel has been trusted by millions of users around the world for more than 20 years, and has remained the leading hosting automation platform.",
                link: "Show more"
              },
              {
                logo: "https://upload.wikimedia.org/wikipedia/commons/5/5c/CloudLinux_OS_Logo.png",
                name: "Cloudlinux",
                description: "CloudLinux OS is the leading multi-tenant platform. It improves server stability, density, and security by isolating each tenant.",
                link: "Show more"
              }
            ].map((partner, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg p-6 shadow-lg border border-gray-200"
                variants={cardVariants}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
              >
                <div className="flex flex-col items-center text-center">
                  <motion.img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="w-24 h-24 mb-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, transition: { duration: 0.5 } }}
                    viewport={{ once: true }}
                  />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{partner.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{partner.description}</p>
                  <motion.button
                    className="text-blue-600 text-sm font-medium hover:text-blue-800"
                    variants={buttonVariants}
                    whileHover="hover"
                  >
                    {partner.link}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { name: "AMD Epyc", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/AMD_Logo.svg/1200px-AMD_Logo.svg.png" },
              { name: "cloudflare", logo: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Cloudflare_Logo.png" },
              { name: "MemCached", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Memcached_logo.svg/1200px-Memcached_logo.svg.png" },
              { name: "Imunify36", logo: "https://seeklogo.com/images/I/imunify360-logo-4F8C2F1A4B-seeklogo.com.png" },
              { name: "MailChannel", logo: "https://www.mailchannels.com/wp-content/uploads/2020/03/mailchannels-logo.png" },
              { name: "LiteSpeed", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/LiteSpeed_Logo.svg/1200px-LiteSpeed_Logo.svg.png" },
              { name: "QUIC.cloud", logo: "https://www.quic.cloud/wp-content/uploads/2020/08/QUIC.cloud-Logo-Color.png" },
              { name: "MariaDB", logo: "https://upload.wikimedia.org/wikipedia/commons/5/5e/MariaDB_logo.svg" },
              { name: "JetBackup", logo: "https://seeklogo.com/images/J/jetbackup-logo-B5F3D4A4B1-seeklogo.com.png" },
              { name: "softaculous", logo: "https://www.softaculous.com/images/softaculous_logo.png" }
            ].map((partner, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 text-center"
                variants={cardVariants}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              >
                <motion.img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="w-16 h-16 mx-auto mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1, transition: { duration: 0.5 } }}
                  viewport={{ once: true }}
                />
                <div className="text-sm font-medium text-gray-900">{partner.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Customer Opinions */}
      <motion.section
        className="py-20 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 0.5 } }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Customer opinions</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              className="bg-white rounded-lg p-8 shadow-lg border border-gray-200"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            >
              <motion.div 
                className="flex items-center justify-center mb-6"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1, transition: { duration: 0.5 } }}
                viewport={{ once: true }}
              >
                <svg className="w-12 h-12 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.314c0-2.314.295-3.214 2.017-3.214h2.017V7.314S16.732 6 14.017 6H2.017v8.686h2.017c1.722 0 2.017 1.014 2.017 3.214v7.314zM7.314 21v-7.314c0-2.314.295-3.214 2.017-3.214h2.017V7.314S10.029 6 7.314 6H4.017v8.686h2.017c1.722 0 2.017 1.014 2.017 3.214v7.314z"/>
                </svg>
              </motion.div>
              <p className="text-gray-600 mb-6 text-center">
                Your team&apos;s professionalism, dedication, and attention to detail were evident throughout the process of developing the ISOC Libya website. The website was easy to use and attractive in design, and perfectly embodied the spirit and vision of ISOC Libya. We are very happy with the results and the positive feedback we have received on the site
              </p>
              <div className="text-center">
                <div className="font-bold text-gray-900">Amjad Shweidi</div>
                <div className="text-sm text-gray-500">Rice ISOC Libya</div>
              </div>
            </motion.div>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "help", label: "Help Center" },
                { icon: "jobs", label: "Jobs" },
                { icon: "services", label: "Subscriber services" },
                { icon: "status", label: "Server status" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg p-6 shadow-lg border border-gray-200 text-center"
                  variants={cardVariants}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                >
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="text-sm font-medium text-gray-900">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};