'use client';
import { useState } from 'react';
import Head from 'next/head';

export default function Servers() {
  const [activeTab, setActiveTab] = useState('monthly');

  const plans = [
    {
      name: "Opillions Native",
      price: "91.30",
      period: "d.l/quarterly",
      storage: "20GB SSD storage",
      memory: "2GB Memory",
      cpu: "1 vCPU",
      features: ["Feature 1", "Feature 2", "Feature 3"]
    },
    {
      name: "Opillions Native",
      price: "91.30",
      period: "d.l/quarterly",
      storage: "20GB SSD storage",
      memory: "2GB Memory",
      cpu: "1 vCPU",
      features: ["Feature 1", "Feature 2", "Feature 3"]
    },
    {
      name: "Opillions Native",
      price: "91.30",
      period: "d.l/quarterly",
      storage: "20GB SSD storage",
      memory: "2GB Memory",
      cpu: "1 vCPU",
      features: ["Feature 1", "Feature 2", "Feature 3"]
    }
  ];

  const advantages = [
    {
      icon: "🛡️",
      title: "Protect and manage peripheral devices",
      description: "Comprehensive protection for all connected devices"
    },
    {
      icon: "🔒",
      title: "Malware protection and anti-ransomware",
      description: "Advanced security against malware and ransomware threats"
    },
    {
      icon: "💾",
      title: "Backup and recovery for physical, virtual and cloud environments",
      description: "Complete data protection across all environments"
    },
    {
      icon: "🌩️",
      title: "Cloud-based disaster recovery",
      description: "Ensure business continuity with cloud recovery solutions"
    },
    {
      icon: "📧",
      title: "Email protection and archiving",
      description: "Secure your communications with advanced email protection"
    },
    {
      icon: "🔍",
      title: "Detect and respond to advanced threats",
      description: "Proactive threat detection and response capabilities"
    }
  ];

  const nistFramework = [
    {
      icon: "🛡️",
      title: "Protection",
      description: "Acronis complies with the National Institute of Standards and Technology (NIST) framework, using best practices in security, management, software updates, and more"
    },
    {
      icon: "🔍",
      title: "Recognition",
      description: "Identify vulnerabilities in your IT infrastructure and perform automatic discovery of devices in your network"
    },
    {
      icon: "↩️",
      title: "Restoration",
      description: "We can quickly address and recover lost data and systems remotely while verifying the cause of the problem"
    },
    {
      icon: "⚡",
      title: "Response",
      description: "Rapid use of Cyber Defense Operations Center alerts and support in the event of a cyber attack"
    },
    {
      icon: "✅",
      title: "Verification",
      description: "From threats and provide strong defenses against malware/ransomware"
    }
  ];

  const faqs = [
    {
      question: "When should I use VPS hosting instead of shared hosting?",
      answer: "VPS hosting is ideal when you need more control, resources, and isolation than shared hosting can provide, but don't require a full dedicated server."
    },
    {
      question: "What is the difference between a virtual server and a dedicated server?",
      answer: "A virtual server shares physical hardware with other virtual servers but provides dedicated resources, while a dedicated server gives you exclusive access to all the resources of a physical machine."
    },
    {
      question: "What sites are available for VPS hosting?",
      answer: "We offer VPS hosting in multiple global data centers to ensure optimal performance for your audience regardless of their location."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Head>
        <title>Cloud Servers | High Performance Hosting</title>
        <meta name="description" content="Cloud servers with high performance and stability of up to 100% with multiple geographical locations" />
      </Head>

      {/* Header Section */}
      <header className="bg-gradient-to-r from-blue-900 to-purple-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-tight animate-fade-in-down">
            Cloud Servers
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto mb-8 leading-relaxed">
            High-performance cloud servers with 100% stability across multiple global locations
          </p>
          <button className="mt-6 bg-white text-blue-900 font-semibold py-3 px-8 rounded-full hover:bg-blue-100 transition-all duration-300 transform hover:scale-105">
            Choose Your Plan
          </button>
        </div>
      </header>

      {/* Pricing Plans Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-8">
            <div className="flex bg-gray-100 rounded-full p-1.5 shadow-sm">
              <button 
                className={`px-6 py-2 rounded-full text-sm sm:text-base font-medium transition-all duration-300 ${activeTab === 'monthly' ? 'bg-blue-600 text-white shadow-md' : 'text-gray-700 hover:bg-gray-200'}`}
                onClick={() => setActiveTab('monthly')}
              >
                Monthly
              </button>
              <button 
                className={`px-6 py-2 rounded-full text-sm sm:text-base font-medium transition-all duration-300 ${activeTab === 'quarterly' ? 'bg-blue-600 text-white shadow-md' : 'text-gray-700 hover:bg-gray-200'}`}
                onClick={() => setActiveTab('quarterly')}
              >
                Quarterly
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {plans.map((plan, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="text-xl sm:text-2xl font-bold text-center mb-4 text-gray-900">{plan.name}</h3>
                <div className="text-3xl sm:text-4xl font-extrabold text-center mb-2 text-blue-600">${plan.price}</div>
                <div className="text-gray-500 text-sm sm:text-base text-center mb-6">{plan.period}</div>
                
                <div className="flex justify-center mb-6">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse"></div>
                    <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse delay-150"></div>
                    <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse delay-300"></div>
                  </div>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-green-600 text-sm font-bold">✓</span>
                    </div>
                    <span className="text-gray-700">{plan.storage}</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-green-600 text-sm font-bold">✓</span>
                    </div>
                    <span className="text-gray-700">{plan.memory}</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-green-600 text-sm font-bold">✓</span>
                    </div>
                    <span className="text-gray-700">{plan.cpu}</span>
                  </div>
                </div>
                
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
                  Order Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Advantages Section */}
      <section className="py-16 md:py-24 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-12 text-gray-900 animate-fade-in-up">
            Key Advantages
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-3xl mb-4">{advantage.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3 text-gray-900">{advantage.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NIST Framework Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-4 text-gray-900">
            NIST Framework Compliance
          </h2>
          <p className="text-gray-600 text-base sm:text-lg text-center max-w-3xl mx-auto mb-12 leading-relaxed">
            Our solutions adhere to the National Institute of Standards and Technology framework, ensuring top-tier security standards.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {nistFramework.map((item, index) => (
              <div key={index} className="text-center p-4 hover:bg-gray-50 rounded-lg transition-all duration-300">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-semibold text-lg mb-2 text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-12 text-gray-900 animate-fade-in-up">
            Frequently Asked Questions
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300">
                <h3 className="font-semibold text-lg sm:text-xl mb-3 text-gray-900">{faq.question}</h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-900">Help Center</h3>
            <p className="text-gray-600 text-sm sm:text-base mb-6 leading-relaxed">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            <button className="bg-blue-600 text-white py-3 px-8 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
              Contact Support
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}