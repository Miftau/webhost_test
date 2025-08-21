'use client';
import { use, useState } from 'react';
import Image from 'next/image';

export default function Hosting() {
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50 font-sans">
        
        {/* Hero Section */}
<section className="relative bg-gradient-to-br from-[#2B1F51] to-blue-900 min-h-screen flex items-center justify-center py-16 overflow-hidden">
  {/* Background elements */}
  <div className="absolute inset-0 opacity-10">
    <div className="absolute top-10 left-10 w-64 h-64 bg-purple-300 rounded-full mix-blend-soft-light filter blur-xl opacity-20"></div>
    <div className="absolute bottom-10 right-10 w-64 h-64 bg-blue-300 rounded-full mix-blend-soft-light filter blur-xl opacity-20"></div>
  </div>
  
  <div className="relative z-10 container mx-auto px-4">
    <div className="flex flex-col items-center text-center">
      {/* Main heading */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
        الاستضافات المشتركة
      </h1>
      
      {/* Description text */}
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-10 max-w-3xl">
        <p className="text-white text-lg md:text-xl leading-relaxed">
          الاستخدامات المشتركة  
          <span className="block mt-3 text-white/90 text-base md:text-lg">
            ظلم و بعض الاستعاملات المشتركة ظلم و بعض الاستعاملات المشتركة ظلم و بعض الاستعاملات المشتركة ظلم و المشتركة ظلم و بعض الاستعاملات المشتركة
          </span>
        </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-5 mb-16">
        <button className="bg-white text-[#2B1F51] px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors duration-300 text-lg font-semibold shadow-lg transform hover:-translate-y-1 transition-transform">
          انشاء حساب
        </button>
        <button className="bg-blue-500 text-white px-8 py-4 rounded-xl hover:bg-blue-600 transition-colors duration-300 text-lg font-semibold shadow-lg transform hover:-translate-y-1 transition-transform">
          عرض الأسعار
        </button>
      </div>

      {/* Image */}
      <div className="relative w-full max-w-4xl">
        <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src="/Group 19443.png"
            alt="استضافات مشتركة"
            width={800}
            height={500}
            className="w-full h-auto"
            priority
          />
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -top-5 -right-5 w-20 h-20 bg-yellow-400 rounded-full opacity-20"></div>
        <div className="absolute -bottom-5 -left-5 w-16 h-16 bg-blue-400 rounded-full opacity-20"></div>
      </div>
    </div>
  </div>

  {/* Bottom wave divider */}
  <div className="absolute bottom-0 left-0 w-full">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full">
      <path fill="#FFFFFF" fillOpacity="1" d="M0,64L80,74.7C160,85,320,107,480,112C640,117,800,107,960,90.7C1120,75,1280,53,1360,42.7L1440,32L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
    </svg>
  </div>
</section>
        {/* Enhanced Kubernetes Section */}
        <section className="relative py-12 sm:py-16 lg:py-24 bg-white overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#2B1F51]/10 to-blue-100">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-full opacity-30">
              <path fill="#2B1F51" fillOpacity="0.2" d="M0,192L48,186.7C96,181,192,171,288,170.7C384,171,480,181,576,176C672,171,768,149,864,149.3C960,149,1056,171,1152,176C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
          </div>
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#2B1F51] mb-6 animate-fade-in-down">
                مجموعات Kubernetes في غضون دقائق فقط
              </h2>
              <p className="text-gray-600 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed mb-8">
                توقف عن إضاعة الوقت والجهد في إدارة مجموعات Kubernetes. مع Kubernetes Engine، يمكنك بسهولة إطلاق وإدارة وضبط موارد تطبيقاتك في الحاويات في دقائق بدلاً من أيام.
              </p>
              <button className="mt-6 bg-gradient-to-r from-[#2B1F51] to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-sm sm:text-base lg:text-lg shadow-lg hover:shadow-xl hover:from-[#2B1F51]/90 hover:to-blue-500 transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up">
                اطلب الآن!
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#2B1F51] mb-4">
                انطلق أسرع وسارع في نموّ عملك
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              {[
                { icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0l-8-8m8 8v10M13 7H6m0 0l8-8m-8 8v10" />, title: "حظر البريد الإلكتروني غير المصرح به", desc: "فم تكون المجموعات الخاصة بك وإدارتها ونشرها سرعة في خطوات بسيطة وبدون وقت يذكر." },
                { icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />, title: "حظر البريد الإلكتروني غير المصرح به", desc: "فم تكون المجموعات الخاصة بك وإدارتها ونشرها سرعة في خطوات بسيطة وبدون وقت يذكر." },
                { icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 11-4 0 2 2 0 014 0z" />, title: "حظر البريد الإلكتروني غير المصرح به", desc: "فم تكون المجموعات الخاصة بك وإدارتها ونشرها سرعة في خطوات بسيطة وبدون وقت يذكر." },
              ].map((feature, index) => (
                <div key={index} className="bg-white p-6 sm:p-8 rounded-xl shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      {feature.icon}
                    </svg>
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 text-sm sm:text-base">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#2B1F51] mb-4">اختر الخط</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
              {[
                { name: "P2-HOST", price: "91.30", originalPrice: "120", discount: "30%", features: [
                  "60GB NVMe Storage",
                  "15 Website (s)",
                  "4 RAM",
                  "3 CPU",
                  "cPanel Control Panel",
                  "Unlimited Subdomains",
                  "Unlimited MySQL & SQL Databases",
                  "Unlimited Email Account",
                  "Unlimited FTP Accounts",
                  "Dedicated Name Server(ns1,ns2)"
                ] },
                { name: "P2-HOST", price: "91.30", originalPrice: "120", discount: "30%", features: [
                  "60GB NVMe Storage",
                  "15 Website (s)",
                  "4 RAM",
                  "3 CPU",
                  "cPanel Control Panel",
                  "Unlimited Subdomains",
                  "Unlimited MySQL & SQL Databases",
                  "Unlimited Email Account",
                  "Unlimited FTP Accounts",
                  "Dedicated Name Server(ns1,ns2)"
                ] },
                { name: "P2-HOST", price: "91.30", originalPrice: "120", discount: "30%", features: [
                  "60GB NVMe Storage",
                  "15 Website (s)",
                  "4 RAM",
                  "3 CPU",
                  "cPanel Control Panel",
                  "Unlimited Subdomains",
                  "Unlimited MySQL & SQL Databases",
                  "Unlimited Email Account",
                  "Unlimited FTP Accounts",
                  "Dedicated Name Server(ns1,ns2)"
                ] }
              ].map((plan, index) => (
                <div key={index} className={`rounded-xl shadow-lg border ${index === 0 ? 'border-yellow-400' : index === 1 ? 'border-gray-300' : 'border-blue-400'} relative transform hover:scale-105 transition-transform duration-300`}>
                  {index === 0 && (
                    <div className="absolute top-0 left-0 right-0 h-3 bg-yellow-400 rounded-t-xl"></div>
                  )}
                  {index === 1 && (
                    <div className="absolute top-0 left-0 right-0 h-3 bg-gray-300 rounded-t-xl"></div>
                  )}
                  {index === 2 && (
                    <div className="absolute top-0 left-0 right-0 h-3 bg-blue-400 rounded-t-xl"></div>
                  )}
                  
                  <div className="p-6 sm:p-8">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                    <div className="flex items-baseline mb-6">
                      <span className="text-4xl sm:text-5xl font-bold text-gray-800">{plan.price}</span>
                      <span className="text-gray-500 ml-1 text-sm">د.ل.</span>
                      <span className="text-xs text-gray-500 ml-2 line-through">{plan.originalPrice} د.ل</span>
                      <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded ml-2">{plan.discount}</span>
                    </div>
                    
                    <button className="w-full bg-[#2B1F51] text-white py-3 rounded-lg hover:bg-[#2B1F51]/90 transition-colors duration-300 text-sm sm:text-base font-medium">
                      اطلب الان
                    </button>
                    
                    <ul className="space-y-3 mt-6">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="text-sm text-gray-600 flex items-center">
                          <svg className="h-4 w-4 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="px-6 sm:px-8 pb-8">
                    <button className="text-gray-500 text-sm hover:text-[#2B1F51] transition-colors duration-300">
                      compare packages
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Support Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-purple-100 rounded-full opacity-30 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100 rounded-full opacity-30 blur-3xl translate-x-1/3 translate-y-1/3"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center bg-blue-100 text-blue-800 rounded-full px-4 py-1.5 mb-6">
                <span className="text-sm font-medium">دعم فني متكامل</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2B1F51] mb-6 leading-tight">
                لست واثقًا من أين ستبدأ؟ <span className="text-blue-600">لا تقلق، سنقوم بمساعدتك</span>
              </h2>
              
              <div className="max-w-4xl mx-auto space-y-4 mb-8">
                <p className="text-gray-700 text-lg leading-relaxed bg-white/70 backdrop-blur-sm p-4 rounded-xl shadow-sm">
                  شركة العنكبوت الليبي رائدة رسميًا لحلول مايكروسوفت السحابية، على استعداد لمساعدة مؤسستك في أي حل إنتاجية سحابي "مايكروسوفت 365" ودمجها بالكامل مع أعمالك.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed bg-white/70 backdrop-blur-sm p-4 rounded-xl shadow-sm">
                  نفتخر بخدمتنا للعديد من الشركات في رحلاتهم لتقييد عملية انتقالهم إلى خدمات مايكروسوفت 365 بنجاح – وسنكون سعداء بمساعدتكم أنتم كذلك!
                </p>
              </div>
              
              <button className="group relative bg-gradient-to-r from-[#2B1F51] to-blue-700 text-white px-8 py-4 rounded-xl hover:shadow-lg transition-all duration-300 font-semibold text-lg overflow-hidden">
                <span className="relative z-10">اطلب الان!</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-[#2B1F51] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path>
                  </svg>
                </div>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
              {[
                { 
                  title: "تغييرات الإعدادات", 
                  desc: "تغطية كاملة لجميع التغييرات والتعديلات المطلوبة",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  )
                },
                { 
                  title: "التدريب الشامل", 
                  desc: "تدريب شامل للموظفين على جميع الميزات والاستخدامات",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                    </svg>
                  )
                },
                { 
                  title: "الدعم الفني المتواصل", 
                  desc: "دعم فني متواصل على مدار الساعة طوال أيام الأسبوع",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  )
                },
                { 
                  title: "ضبط الإعدادات والتخصيص", 
                  desc: "تخصيص النظام بالكامل حسب متطلبات عملك واحتياجاتك",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  )
                },
                { 
                  title: "ترحيل البيانات والمستخدمين", 
                  desc: "نقل بياناتك ومستخدميك بأمان تام وسرعة فائقة",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                  )
                },
                { 
                  title: "ترحيل SharePoint Online", 
                  desc: "انتقال سلس وآمن للبيانات إلى SharePoint Online",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  )
                },
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                >
                  <div className="w-14 h-14 mx-auto mb-5 flex items-center justify-center bg-blue-100 text-blue-600 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 text-center mb-3 group-hover:text-blue-700 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-center text-sm leading-relaxed">
                    {item.desc}
                  </p>
                  <div className="mt-4 text-center">
                    <span className="inline-flex items-center text-blue-600 text-sm font-medium group-hover:underline">
                      اكتشف المزيد
                      <svg className="w-4 h-4 mr-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Features Grid Section */}
<section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
  {/* Decorative elements */}
  <div className="absolute top-0 right-0 w-40 h-40 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-[#2B1F51]/20 rounded-full opacity-30 blur-3xl -translate-y-1/3 translate-x-1/3 hidden sm:block"></div>
  <div className="absolute bottom-0 left-0 w-40 h-40 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-blue-100 rounded-full opacity-30 blur-3xl translate-y-1/3 -translate-x-1/3 hidden sm:block"></div>
  
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="text-center mb-10 sm:mb-12 lg:mb-16">
      <div className="inline-flex items-center justify-center bg-blue-100 text-blue-800 rounded-full px-4 py-2 sm:px-5 sm:py-2 mb-4 sm:mb-6">
        <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        <span className="text-xs sm:text-sm font-medium">ميزات متقدمة</span>
      </div>
      
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#2B1F51] mb-4 sm:mb-6 leading-tight animate-fade-in-down">
        ما الذي <span className="text-blue-600">يميزنا</span> عن الآخرين؟
      </h2>
      <p className="text-gray-600 text-sm sm:text-base lg:text-lg max-w-xl sm:max-w-2xl mx-auto leading-relaxed">
        نقدم حلولاً متكاملة وأداءً استثنائياً لضمان نجاح مشاريعك الرقمية
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
      {[
        { 
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          ),
          title: "تحسين أداء الموقع عبر CDN", 
          desc: "تعمل شبكة توصيل المحتوى (CDN) الخاصة بنا على تحسين سرعة تحميل الصفحة وتحسين أداء الخادم بنسبة 80% في المتوسط لتحسين تجربة المستخدم والترتيب في محركات البحث.",
          stats: "80% تحسين في الأداء"
        },
        { 
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          ),
          title: "التخفيف من هجمات DDoS", 
          desc: "نحمي عملك من هجمات حجب الخدمة الموزعة (DDoS) التي يمكن أن تسبب توقفاً تاماً. نحجب هجمات DDoS للطبقات 3 و 4 و 7 مع الحفاظ على استمرارية الخدمة أثناء الهجمات.",
          stats: "حماية 24/7"
        },
        { 
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          ),
          title: "الحماية من الاختراق والبرامج الخبيثة", 
          desc: "نحمي موقعك من البرامج الضارة ونمنع محاولات الاختراق وهجمات استغلال الثغرات Zero-Day وهجمات Brute Force لتخمين كلمات المرور.",
          stats: "حماية شاملة"
        },
        { 
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
            </svg>
          ),
          title: "نسخ احتياطي تلقائي", 
          desc: "نظام النسخ الاحتياطي التلقائي يحفظ بياناتك يومياً مع إمكانية الاستعادة بنقرة واحدة. لا داعي للقلق على بياناتك مع حلولنا المتكاملة.",
          stats: "نسخ يومي آمن"
        },
        { 
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
            </svg>
          ),
          title: "ترحيل سهل وسريع", 
          desc: "خدمة ترحيل مجانية لمواقعك من أي مضيف آخر. فريقنا المحترف ينقل موقعك بدون أي توقف أو فقدان للبيانات.",
          stats: "ترحيل مجاني"
        },
        { 
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          ),
          title: "دعم فني على مدار الساعة", 
          desc: "فريق دعم فني محترف متاح 24/7/365 لمساعدتك في أي استفسار أو مشكلة تواجهك. نحن هنا لضمان نجاح مشروعك.",
          stats: "دعم 24/7"
        },
      ].map((feature, index) => (
        <div 
          key={index} 
          className="group bg-white p-6 sm:p-7 lg:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden"
        >
          {/* Hover effect overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-[#2B1F51] opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl"></div>
          
          {/* Icon container */}
          <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mx-auto mb-4 sm:mb-6 flex items-center justify-center bg-blue-100 text-blue-600 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500">
            {feature.icon}
          </div>
          
          {/* Title */}
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 text-center mb-3 sm:mb-4 group-hover:text-blue-700 transition-colors duration-300">
            {feature.title}
          </h3>
          
          {/* Description */}
          <p className="text-gray-600 text-sm sm:text-base lg:text-base text-center mb-4 sm:mb-6 leading-relaxed">
            {feature.desc}
          </p>
          
          {/* Stats badge */}
          <div className="text-center">
            <span className="inline-block bg-blue-100 text-blue-700 text-xs sm:text-sm font-medium px-3 sm:px-4 py-1.5 sm:py-2 rounded-full group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
              {feature.stats}
            </span>
          </div>
          
          {/* Decorative corner */}
          <div className="absolute top-0 right-0 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-blue-100 opacity-30 group-hover:bg-blue-600 group-hover:opacity-20 transition-all duration-500 transform rotate-45 translate-x-8 sm:translate-x-10 lg:translate-x-12 -translate-y-8 sm:-translate-y-10 lg:-translate-y-12"></div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

        
    {/* Trust Section */}
<section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
  {/* Decorative elements with pulse animation */}
  <div className="absolute top-10 left-10 w-72 h-72 bg-purple-100 rounded-full opacity-30 blur-3xl animate__animated animate__pulse animate__infinite animate__slower"></div>
  <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-100 rounded-full opacity-30 blur-3xl animate__animated animate__pulse animate__infinite animate__slower animate__delay-1s"></div>
  
  <div className="container mx-auto px-4 relative z-10">
    {/* Header with fade-in animation */}
    <div className="text-center mb-16 animate__animated animate__fadeIn animate__duration-1s">
      <div className="inline-flex items-center justify-center bg-blue-100 text-blue-800 rounded-full px-5 py-2 mb-6">
        <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        <span className="text-sm font-medium">ثقة العملاء</span>
      </div>
      
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2B1F51] mb-6 leading-tight">
        موثوق به من قبل <span className="text-blue-600">أفضل العملاء</span>
      </h2>
      <p className="text-gray-600 text-lg max-w-2xl mx-auto">
        نفتخر بشراكتنا مع أبرز المؤسسات والهيئات في مختلف القطاعات
      </p>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-7xl mx-auto">
      {[
        { name: "مركز المعلومات والتوثيق", color: "#1E3A8A", initials: "م ت و", shape: "circle" },
        { name: "لجنة الإفراجات المالية", color: "#2563EB", initials: "إ م", shape: "square" },
        { name: "صندوق الضمان الاجتماعي", color: "#7C3AED", initials: "ض ا", shape: "hexagon" },
        { name: "مصلحة السجل التجاري", color: "#059669", initials: "س ت", shape: "triangle" },
        { name: "صيدلية ذات الصواريخ", color: "#DC2626", initials: "ذ ص", shape: "diamond" },
        { name: "الهيئة العامة للطيران", color: "#D97706", initials: "ه ط", shape: "pentagon" },
      ].map((client, index) => (
        <div 
          key={index} 
          className={`group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 flex flex-col items-center animate__animated animate__fadeInUp animate__delay-${index + 1}00ms`}
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="relative mb-5">
            <div 
              className={`w-20 h-20 flex items-center justify-center rounded-2xl bg-gradient-to-br from-white to-gray-50 shadow-inner group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300
                ${client.shape === 'circle' ? 'rounded-full' : ''}
                ${client.shape === 'hexagon' ? 'transform rotate-0' : ''}
                ${client.shape === 'triangle' ? 'transform rotate-0' : ''}
              `}
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-xl" 
                  style={{ backgroundColor: `${client.color}20`, border: `2px solid ${client.color}40` }}>
                {client.shape === 'circle' && (
                  <svg className="w-10 h-10" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" fill={client.color} />
                    <text x="50" y="58" textAnchor="middle" fill="white" fontSize="24" fontWeight="bold">{client.initials}</text>
                  </svg>
                )}
                {client.shape === 'square' && (
                  <svg className="w-10 h-10" viewBox="0 0 100 100">
                    <rect x="5" y="5" width="90" height="90" rx="10" fill={client.color} />
                    <text x="50" y="58" textAnchor="middle" fill="white" fontSize="24" fontWeight="bold">{client.initials}</text>
                  </svg>
                )}
                {client.shape === 'hexagon' && (
                  <svg className="w-10 h-10" viewBox="0 0 100 100">
                    <path d="M50 5L90 30L90 70L50 95L10 70L10 30Z" fill={client.color} />
                    <text x="50" y="58" textAnchor="middle" fill="white" fontSize="24" fontWeight="bold">{client.initials}</text>
                  </svg>
                )}
                {client.shape === 'triangle' && (
                  <svg className="w-10 h-10" viewBox="0 0 100 100">
                    <path d="M50 5L90 80L10 80Z" fill={client.color} />
                    <text x="50" y="65" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">{client.initials}</text>
                  </svg>
                )}
                {client.shape === 'diamond' && (
                  <svg className="w-10 h-10" viewBox="0 0 100 100">
                    <path d="M50 5L95 50L50 95L5 50Z" fill={client.color} />
                    <text x="50" y="58" textAnchor="middle" fill="white" fontSize="24" fontWeight="bold">{client.initials}</text>
                  </svg>
                )}
                {client.shape === 'pentagon' && (
                  <svg className="w-10 h-10" viewBox="0 0 100 100">
                    <path d="M50 5L90 35L75 85L25 85L10 35Z" fill={client.color} />
                    <text x="50" y="58" textAnchor="middle" fill="white" fontSize="24" fontWeight="bold">{client.initials}</text>
                  </svg>
                )}
              </div>
            </div>
            
            {/* Hover effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
          </div>
          
          <h3 className="text-gray-800 font-semibold text-center text-sm leading-tight group-hover:text-blue-700 transition-colors duration-300">
            {client.name}
          </h3>
          
          <div className="mt-3 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="w-4 h-4 text-yellow-400 transform group-hover:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Stats row with slide-in animation */}
    <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
      {[
        { number: "200+", label: "عميل راضي" },
        { number: "99.9%", label: "معدل الرضا" },
        { number: "24/7", label: "دعم فني" },
        { number: "5+", label: "سنوات خبرة" },
      ].map((stat, index) => (
        <div 
          key={index} 
          className={`text-center bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-md animate__animated animate__slideInLeft animate__delay-${index + 1}00ms`}
          style={{ animationDelay: `${index * 200}ms` }}
        >
          <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
          <div className="text-gray-600 font-medium">{stat.label}</div>
        </div>
      ))}
    </div>

    {/* CTA button with pulse animation */}
    <div className="text-center mt-12">
      <button className="bg-gradient-to-r from-[#2B1F51] to-blue-700 text-white px-8 py-4 rounded-xl hover:shadow-lg transition-all duration-300 font-semibold text-lg group animate__animated animate__pulse animate__infinite animate__slower">
        <span className="relative z-10">انضم إلى عملائنا الراضين</span>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-[#2B1F51] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
      </button>
    </div>
  </div>
</section>

        {/* FAQ Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
              <div className="lg:col-span-2">
                <div className="bg-gray-50 p-6 sm:p-8 rounded-xl shadow-lg">
                  {[
                    { question: "ما هو الفخذ الافتراضي المخصص؟ (VPS)", answer: "VPS المحدد الافتراضي هو فخذ مخصص إلى بيئات استضافة متوسطة تمامًا. عندما يكون لديك استضافة VPS ، فإن إحدى تلك البيئات مخصصة لك بالكامل. هذا يعني أنك ستُضطر إلى مشاركة الموارد (مثل ذاكرة الوصول العشوائي أو وحدة المعالجة المركزية) مع العملاء الآخرين ومن غير المرجح أن تتأثر بسلوكهم." },
                    { question: "متى يجب علي استخدام استضافة VPS بدلًا من الاستضافة المشتركة؟", answer: "عندما تحتاج إلى أكثر من الموارد التي توفرها الاستضافة المشتركة، مثل زيادة كبيرة في الأداء أو الحاجة إلى تخصيص أكبر." },
                    { question: "ما الفرق بين الفخذ الافتراضي والفخذ المخصص؟", answer: "الفخذ الافتراضي (VPS) هو خادم مخصص مجزأ إلى عدة بيئات مستقلة، بينما الفخذ المخصص هو خادم كامل مخصص لك بالكامل دون تقاسم الموارد مع الآخرين." },
                  ].map((faq, index) => (
                    <div key={index} className="mb-6">
                      <button 
                        onClick={() => toggleFAQ(index)}
                        className="flex justify-between items-center w-full text-left focus:outline-none focus:ring-2 focus:ring-[#2B1F51] rounded-lg p-2"
                      >
                        <span className="text-[#2B1F51] font-medium text-base sm:text-lg">{faq.question}</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className={`h-5 w-5 text-[#2B1F51] transition-transform duration-300 ${expandedFAQ === index ? 'rotate-180' : ''}`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {expandedFAQ === index && (
                        <div className="mt-4 text-gray-600 text-sm sm:text-base leading-relaxed animate-fade-in">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col space-y-6">
                {[
                  { title: "الأسئلة الشائعة", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /> },
                  { title: "مركز المساعدة", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /> },
                ].map((item, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          {item.icon}
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-center text-gray-800 mb-2">{item.title}</h3>
                    <div className="w-24 h-0.5 bg-blue-800 mx-auto"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Inline CSS for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.3s ease-in-out;
        }
      `}</style>
    </>
  );
}