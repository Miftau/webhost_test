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
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 800" className="w-full h-full opacity-20">
              <path fill="#ffffff" fillOpacity="1" d="M0,640L48,624C96,608,192,576,288,560C384,544,480,544,576,544C672,544,768,544,864,544C960,544,1056,544,1152,544C1248,544,1344,544,1392,544L1440,544L1440,800L1392,800C1344,800,1248,800,1152,800C1056,800,960,800,864,800C768,800,672,800,576,800C480,800,384,800,288,800C192,800,96,800,48,800L0,800Z"></path>
            </svg>
          </div>
          
          <div className="relative z-10 container mx-auto px-4 py-12 sm:py-16 lg:py-20">
            <div className="text-center mb-12">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight">
                الاستضافات المشتركة
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
                كلام و وصف للاستضافات المشتركة كلم و وصف للاستضافات المشتركة كلم و وصف للاستضافات المشتركة كلم و وصف للاستضافات المشتركة
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="bg-white text-purple-800 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300 text-sm sm:text-base font-medium">
                  انشاء حساب
                </button>
                <button className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white/10 transition-colors duration-300 text-sm sm:text-base font-medium">
                  عرض السعار
                </button>
              </div>
            </div>

            <div className="flex justify-center">
              <Image
                src="/Group 19443.png"
                alt="Kubernetes illustration"
                width={800}
                height={400}
                className="max-w-full h-auto rounded-lg"
                priority
              />
            </div>
          </div>
        </section>

        {/* Kubernetes Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-purple-800 mb-4">
                مجموعات Kubernetes في غضون دقائق فقط
              </h2>
              <p className="text-gray-600 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto leading-relaxed">
                توقف عن إطاعة الوقت والجهد في إدارة مجموعات Kubernetes. باستخدام Kubernetes Engine، يمكنك بسهولة إطلاق وإدارة وضبط موارد تطبيقاتك في الحاويات في دقائق بدلاً من أيام.
              </p>
              <button className="mt-6 bg-transparent border-2 border-purple-800 text-purple-800 px-6 py-3 rounded-lg hover:bg-purple-800 hover:text-white transition-colors duration-300 text-sm sm:text-base font-medium">
                اطلب الان!
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-purple-800 mb-4">
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
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-purple-800 mb-4">اختر الخط</h2>
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
                    
                    <button className="w-full bg-purple-800 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors duration-300 text-sm sm:text-base font-medium">
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
                    <button className="text-gray-500 text-sm hover:text-purple-800 transition-colors duration-300">
                      compare packages
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Support Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-purple-800 mb-4">
                لست واثقًا من أين ستبدأ؟ لا تقلق، سنقوم بمساعدتك
              </h2>
              <p className="text-gray-600 text-sm sm:text-base lg:text-lg max-w-4xl mx-auto mb-4 leading-relaxed">
                شركة العناكوت الليي وصفتها مرؤدا رسماً لحلول مايكروسوفت السحابية، على استعداد لمساعدة مؤسستك في أيتي حل الإنتاجية السحابي "مايكروسوفت 365" ودمجها بالكامل مع آيت عملك.
              </p>
              <p className="text-gray-600 text-sm sm:text-base lg:text-lg max-w-4xl mx-auto mb-8 leading-relaxed">
                نفتخر بخدمتنا للعديد من الشركات في رحاتهم لتقييد عمليّة انتقالهم إلى خدمات مايكروسوفت 365 بنجاح – وسعنا مساعدتكم أنتم كذلك!
              </p>
              <button className="bg-transparent border-2 border-purple-800 text-purple-800 px-6 py-3 rounded-lg hover:bg-purple-800 hover:text-white transition-colors duration-300 text-sm sm:text-base font-medium">
                اطلب الان!
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
              {[
                { title: "تغييرات الإعدادات", desc: "تغطية كاملة لجميع التغييرات" },
                { title: "التدريب", desc: "تدريب شامل للموظفين" },
                { title: "الدعم الفني", desc: "دعم فني متواصل" },
                { title: "ضبط الإعدادات والتخصيص", desc: "تخصيص النظام حسب الحاجة" },
                { title: "ترحيل البيانات والمستخدمين", desc: "نقل بياناتك بأمان" },
                { title: "ترحيل SharePoint Online", desc: "انتقال سلس للبيانات" },
              ].map((item, index) => (
                <div key={index} className="text-center transform hover:scale-105 transition-transform duration-300">
                  <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-green-100 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-purple-800 mb-4">ما الذي يميز</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              {[
                { icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.638 2.296.07 2.572-1.065z" />, title: "تحسين أداء الموقع عبر CDN", desc: "تعمل شبكة توصيل المحتوى (CDN) الخاصة بك على تحسين سرعة تحميل الصفحة وتحليل أخطال الخادم بنسبة 80% في المتوسط لتحسين أداء موقعك." },
                { icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />, title: "التخفيف من هجمات DDOS", desc: "يمكن أن تسبب هجمات حجب الخدمة الموزعة (DDoS) في التوقف التام لعملك. لكن بحظر هجمات DDoS للنفقات 3 و 4 و 7 ومع تأمين معدل نقل البيانات أثناء الهجمات bandwidth." },
                { icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />, title: "الحماية من عمليات الاختراق والبرامج الخبيثة", desc: "فم بحماية موقعك من البرامج الضارة ومنع محاولات الاختراق وهجمات استغلال الثغرات Zero-Day وهجمات Brute Force لتخمين كلمة المرور." },
                { icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />, title: "تحسين أداء الموقع عبر CDN", desc: "تعمل شبكة توصيل المحتوى (CDN) الخاصة بك على تحسين سرعة تحميل الصفحة وتحليل أخطال الخادم بنسبة 80% في المتوسط لتحسين أداء موقعك." },
                { icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />, title: "التخفيف من هجمات DDOS", desc: "يمكن أن تسبب هجمات حجب الخدمة الموزعة (DDoS) في التوقف التام لعملك. لكن بحظر هجمات DDoS للنفقات 3 و 4 و 7 ومع تأمين معدل نقل البيانات أثناء الهجمات bandwidth." },
                { icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />, title: "الحماية من عمليات الاختراق والبرامج الخبيثة", desc: "فم بحماية موقعك من البرامج الضارة ومنع محاولات الاختراق وهجمات استغلال الثغرات Zero-Day وهجمات Brute Force لتخمين كلمة المرور." },
              ].map((feature, index) => (
                <div key={index} className="bg-white p-6 sm:p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
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

        {/* Trust Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-purple-800 mb-4">موثوق به من قبل عملائنا</h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
              {[
                { src: "https://placehold.co/200x150/1e3a8a/ffffff?text=Center+Logo", alt: "Center Logo", text: "مركز المعلومات والتوثيق" },
                { src: "https://placehold.co/200x150/1e3a8a/ffffff?text=Financial+Logo", alt: "Financial Logo", text: "لجنة الإفراجات المالية" },
                { src: "https://placehold.co/200x150/1e3a8a/ffffff?text=Social+Logo", alt: "Social Logo", text: "صندوق الضمان الاجتماعي" },
                { src: "https://placehold.co/200x150/1e3a8a/ffffff?text=Social+Logo", alt: "Social Logo", text: "صندوق الضمان الاجتماعي" },
                { src: "https://placehold.co/200x150/1e3a8a/ffffff?text=Commercial+Logo", alt: "Commercial Logo", text: "مصلحة السجل التجاري" },
                { src: "https://placehold.co/200x150/1e3a8a/ffffff?text=Health+Logo", alt: "Health Logo", text: "صيدلية ذات الصواريخ" },
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
                  <Image src={item.src} alt={item.alt} width={200} height={150} className="mx-auto mb-4 rounded-lg" />
                  <p className="text-gray-800 font-medium text-sm sm:text-base">{item.text}</p>
                </div>
              ))}
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
                        className="flex justify-between items-center w-full text-left focus:outline-none focus:ring-2 focus:ring-purple-800 rounded-lg p-2"
                      >
                        <span className="text-purple-800 font-medium text-base sm:text-lg">{faq.question}</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className={`h-5 w-5 text-purple-800 transition-transform duration-300 ${expandedFAQ === index ? 'rotate-180' : ''}`}
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

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <p className="text-sm sm:text-base">© 2023 جميع الحقوق محفوظة</p>
            </div>
          </div>
        </footer>
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