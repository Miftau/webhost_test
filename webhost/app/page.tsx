'use client';

import React, { useState } from 'react';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('Popular');
  const [expandedFAQ, setExpandedFAQ] = useState(0);

  const domainTypes = [
    { name: '.Me', price: '$6.49/yr', originalPrice: '$14.98/yr' },
    { name: '.Org', price: '$6.49/yr', originalPrice: '$14.98/yr' },
    { name: '.Com', price: '$6.49/yr', originalPrice: '$14.98/yr' },
    { name: '.Net', price: '$6.49/yr', originalPrice: '$14.98/yr' },
    { name: '.Shop', price: '$6.49/yr', originalPrice: '$14.98/yr' },
    { name: '.Store', price: '$6.49/yr', originalPrice: '$14.98/yr' },
    { name: '.Pro', price: '$6.49/yr', originalPrice: '$14.98/yr' },
    { name: '.Site', price: '$6.49/yr', originalPrice: '$14.98/yr' },
    { name: '.Biz', price: '$6.49/yr', originalPrice: '$14.98/yr' },
    { name: '.Co', price: '$6.49/yr', originalPrice: '$14.98/yr' },
  ];

  const tldList = [
    { tld: '.com', registration: '$10.28', renewal: '$10.48', transfer: '$10.48', idProtection: '$10.28' },
    { tld: '.com', registration: '$10.28', renewal: '$10.48', transfer: '$10.48', idProtection: '$10.28' },
    { tld: '.com', registration: '$10.28', renewal: '$10.48', transfer: '$10.48', idProtection: '$10.28' },
    { tld: '.com', registration: '$10.28', renewal: '$10.48', transfer: '$10.48', idProtection: '$10.28' },
    { tld: '.com', registration: '$10.28', renewal: '$10.48', transfer: '$10.48', idProtection: '$10.28' },
    { tld: '.com', registration: '$10.28', renewal: '$10.48', transfer: '$10.48', idProtection: '$10.28' },
    { tld: '.com', registration: '$10.28', renewal: '$10.48', transfer: '$10.48', idProtection: '$10.28' },
    { tld: '.com', registration: '$10.28', renewal: '$10.48', transfer: '$10.48', idProtection: '$10.28' },
    { tld: '.com', registration: '$10.28', renewal: '$10.48', transfer: '$10.48', idProtection: '$10.28' },
    { tld: '.com', registration: '$10.28', renewal: '$10.48', transfer: '$10.48', idProtection: '$10.28' },
    { tld: '.com', registration: '$10.28', renewal: '$10.48', transfer: '$10.48', idProtection: '$10.28' },
    { tld: '.com', registration: '$10.28', renewal: '$10.48', transfer: '$10.48', idProtection: '$10.28' },
    { tld: '.com', registration: '$10.28', renewal: '$10.48', transfer: '$10.48', idProtection: '$10.28' },
    { tld: '.com', registration: '$10.28', renewal: '$10.48', transfer: '$10.48', idProtection: '$10.28' },
    { tld: '.com', registration: '$10.28', renewal: '$10.48', transfer: '$10.48', idProtection: '$10.28' },
  ];

  const faqs = [
    {
      question: 'What is Shared Hosting?',
      answer:
        'Shared Hosting is a popular hosting option that provides an affordable way to get your website online. Shared Hosting works by allowing multiple users to share space on a single server maintained by the hosting provider. Our Shared Hosting is suitable for blogging, hobbies and small business websites.',
    },
    {
      question: 'What is the difference between Linux and Windows hosting?',
      answer:
        'Linux and Windows hosting differ primarily in the operating system they run on. Linux hosting is generally more cost-effective and supports open-source applications like WordPress, while Windows hosting is better suited for .NET applications and Microsoft-based technologies.',
    },
    {
      question: 'If my PC runs Windows, do I have to use Windows Hosting?',
      answer:
        'No, you don’t have to use Windows Hosting if your PC runs Windows. Most websites are built using technologies that work across platforms, so you can use Linux hosting regardless of your operating system.',
    },
    {
      question: 'What’s the difference between a domain name and web hosting?',
      answer:
        'A domain name is your website’s address (like example.com), while web hosting is the service that stores your website files and makes them accessible on the internet. You need both to have a functioning website.',
    },
  ];

  const toggleFAQ = (index: React.SetStateAction<number>) => {
    setExpandedFAQ(expandedFAQ === index ? -1 : index);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 800" className="w-full h-full">
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,640L48,624C96,608,192,576,288,560C384,544,480,544,576,544C672,544,768,544,864,544C960,544,1056,544,1152,544C1248,544,1344,544,1392,544L1440,544L1440,800L1392,800C1344,800,1248,800,1152,800C1056,800,960,800,864,800C768,800,672,800,576,800C480,800,384,800,288,800C192,800,96,800,48,800L0,800Z"
            ></path>
          </svg>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
           
          </div>

          <div className="mt-20 mb-16">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Search and Buy a Domain</h1>
            <p className="text-lg text-gray-300 mb-8">Grab the domain you’ve been looking for.</p>

            <div className="bg-white rounded-xl p-6 shadow-lg max-w-2xl mx-auto">
              <div className="flex items-center mb-4">
                <div className="text-gray-400 mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="type here to search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 bg-transparent border-none outline-none text-gray-700 placeholder-gray-500"
                />
                <button className="bg-purple-800 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors">
                  Search
                </button>
              </div>

              <div className="flex flex-wrap gap-4">
                {['Popular', 'Geographic', 'Technology', 'Service', 'Business', 'Media', 'Shopping', 'More'].map(
                  (tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`flex flex-col items-center p-2 rounded-md transition-colors ${
                        activeTab === tab ? 'text-purple-600 bg-purple-50' : 'text-gray-600 hover:text-purple-600'
                      }`}
                    >
                      <div className="w-8 h-8 mb-1">
                        {tab === 'Popular' && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.12a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.12a1 1 0 00-1.175 0l-3.976 2.12c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.12c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                            />
                          </svg>
                        )}
                        {tab === 'Geographic' && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17.657 16.657L13.707 12.707m-3 2.293a1 1 0 111.414-1.414L14 14.586V12a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1h-2.586l-2.586 2.586a1 1 0 11-1.414-1.414zM11 14a1 1 0 11-2 0 1 1 0 012 0zm-2 0a1 1 0 11-2 0 1 1 0 012 0z"
                            />
                          </svg>
                        )}
                        {tab === 'Technology' && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 20l4-16m4 4l4 4-4 4M6 16l4-4-4-4"
                            />
                          </svg>
                        )}
                        {tab === 'Service' && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                            />
                          </svg>
                        )}
                        {tab === 'Business' && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.336 2.146"
                            />
                          </svg>
                        )}
                        {tab === 'Media' && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 10l4.553-2.727A1 1 0 0121 8.364v8.272a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                            />
                          </svg>
                        )}
                        {tab === 'Shopping' && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 3h2l.4 2M7 13h10a2 2 0 002-2V5.42a2 2 0 00-1.116-1.857L11 3.572a2 2 0 00-1.116 0L5.116 5.643A2 2 0 004 7.42v8.58a2 2 0 001.116 1.857L7 13z"
                            />
                          </svg>
                        )}
                        {tab === 'More' && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                            />
                          </svg>
                        )}
                      </div>
                      <span className="text-xs">{tab}</span>
                    </button>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Popular Domains Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              Choose From the Most Popular Domains
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {domainTypes.map((domain, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="mb-4">
                  <p className="text-sm text-gray-600">Domain name</p>
                  <p className="text-2xl font-bold text-purple-800">{domain.name}</p>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-purple-800">{domain.price}</p>
                    <p className="text-sm text-gray-500">{domain.originalPrice}</p>
                  </div>
                  <div className="text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Things To Remember Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
              Things To Remember Before you Buy Domains
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-6xl font-bold text-purple-800 mb-4">01</div>
              <h3 className="text-xl font-semibold mb-4">Stay simple</h3>
              <p className="text-gray-600 text-sm">
                Don’t get complicated. An easy-to-remember domain is always best.
              </p>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-purple-800 mb-4">02</div>
              <h3 className="text-xl font-semibold mb-4">Act now</h3>
              <p className="text-gray-600 text-sm">
                Stay true to your brand. Be distinct but choose a domain your audience will recognize.
              </p>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-purple-800 mb-4">03</div>
              <h3 className="text-xl font-semibold mb-4">Drop the hyphens</h3>
              <p className="text-gray-600 text-sm">
                Just because the internet is high-tech doesn’t mean your domain name should be.
              </p>
            </div>
          </div>
        </section>

        {/* TLD List Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
              Explore the Possibilities from Our TLD List
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-6 font-medium text-gray-700">TLD</th>
                  <th className="text-left py-4 px-6 font-medium text-gray-700">Registration</th>
                  <th className="text-left py-4 px-6 font-medium text-gray-700">Renewal</th>
                  <th className="text-left py-4 px-6 font-medium text-gray-700">Transfer</th>
                  <th className="text-left py-4 px-6 font-medium text-gray-700">ID Protection</th>
                </tr>
              </thead>
              <tbody>
                {tldList.map((tld, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                    <td className="py-4 px-6 font-medium text-gray-700">{tld.tld}</td>
                    <td className="py-4 px-6 text-gray-700">{tld.registration}</td>
                    <td className="py-4 px-6 text-gray-700">{tld.renewal}</td>
                    <td className="py-4 px-6 text-gray-700">{tld.transfer}</td>
                    <td className="py-4 px-6 text-gray-700">{tld.idProtection}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex justify-between items-center mt-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="pl-4 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="absolute right-3 top-2.5 text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-gray-600">Per page:</span>
              <button className="px-3 py-1 bg-purple-800 text-white rounded-md">1</button>
              <button className="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-100">2</button>
              <button className="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-100">3</button>
              <button className="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-100">4</button>
              <button className="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-100">5</button>
              <button className="px-3 py-1 text-purple-800 font-medium">Next</button>
            </div>
          </div>
        </section>

        {/* Why Buy Domains Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
              Why Buy Domains at &quot;Name&quot;?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-800 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-4">Domain locking</h3>
              <p className="text-gray-600 text-sm">
                Lock your domain to prevent unauthorized transfers of your domain names.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-800 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-4">Great renewal rates</h3>
              <p className="text-gray-600 text-sm">
                When it’s time to renew your domain, you’ll never have to worry about breaking the bank.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-800 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.356-2m15.356 2H15"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-4">Auto-renewal</h3>
              <p className="text-gray-600 text-sm">
                You’ll never lose your domain (even if you forget) thanks to our auto-renewal option.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-800 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-4">Easy management</h3>
              <p className="text-gray-600 text-sm">
                Manage your domain with an easy-to-use control panel and dashboard.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-800 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.336 2.146"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-4">Whois privacy protection</h3>
              <p className="text-gray-600 text-sm">
                Need some privacy? We’ll protect your personal info from the WHOIS database for a small fee.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-800 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-4">Low prices & huge selection</h3>
              <p className="text-gray-600 text-sm">
                Register your domain for a low price and choose from a wide selection of extensions.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
              Domain Registration FAQs
            </h2>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/4">
                <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-blue-800"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-center mb-2">FAQ</h3>
                  <div className="w-24 h-0.5 bg-blue-800 mx-auto"></div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 rounded-lg bg-blue-100 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-blue-800"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                        />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-center mb-2">مركز المساعدة</h3>
                  <div className="w-24 h-0.5 bg-blue-800 mx-auto"></div>
                </div>
              </div>

              <div className="md:w-3/4">
                <div className="bg-white p-8 rounded-lg shadow-sm">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-gray-200 last:border-b-0 pb-6 mb-6 last:mb-0">
                      <button
                        onClick={() => toggleFAQ(index)}
                        className="flex justify-between items-center w-full text-left"
                      >
                        <span className="text-purple-800 font-medium">{faq.question}</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className={`h-5 w-5 text-purple-800 transition-transform ${
                            expandedFAQ === index ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      {expandedFAQ === index && (
                        <div className="mt-4 text-gray-600 text-sm">{faq.answer}</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="text-center text-gray-600">
            <p>© 2023 Name. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}