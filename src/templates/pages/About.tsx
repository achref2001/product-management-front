import React from 'react';
import PageNav from '@/components/page-nav';
import Footer from '@/components/footer';
import img1 from '@/assets/images/images.jpg';

const About: React.FC = () => {
  return (
    <>
      <PageNav />
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Breadcrumb */}
        <nav className="text-gray-500 text-sm mb-8">
          <ol className="list-reset flex">
            <li><a href="/" className="text-blue-600 hover:underline">Home</a></li>
            <li><span className="mx-2">/</span></li>
            <li className="text-gray-700">About</li>
          </ol>
        </nav>

        {/* Story Section */}
        <div className="flex flex-col md:flex-row items-center max-w-4xl mx-auto mb-16">
          <div className="md:w-1/2 mb-8 md:mb-0 mr-8">
            <img src={img1} alt="Our Story Image" className="w-full h-auto object-cover rounded-lg shadow-lg" />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl font-bold mb-6 text-gray-900">Our Story</h1>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Launched in 2015, Exclusive is South Asia's premier online shopping
              marketplace with an active presence in Bangladesh. Supported by
              wide range of tailor-made marketing, data and service solutions,
              Exclusive has 10,500 sellers and 300 brands and serves 3
              million customers across the region.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Exclusive offers the most diverse assortment of products, growing at a
              very fast pace with the increase in diverse investment in categories
              ranging from consumer.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">10.5k</h2>
            <p className="text-gray-600">Sellers active on our site</p>
          </div>
          <div className="p-6 rounded-lg bg-red-600 text-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-4xl font-bold mb-2">33k</h2>
            <p>Monthly Product Sale</p>
          </div>
          <div className="p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">45.5k</h2>
            <p className="text-gray-600">Customer active on our site</p>
          </div>
          <div className="p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">25k</h2>
            <p className="text-gray-600">Annual gross sale in our site</p>
          </div>
        </div>

        {/* Team Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 mb-16">
          <div className="text-center">
            <div className="mb-4 relative">
              <img src={img1} alt="Tom Cruise" className="w-48 h-48 mx-auto object-cover rounded-full shadow-lg transition-transform duration-300" />
              <div className="absolute inset-0 bg-black bg-opacity-0 rounded-full transition-all duration-300"></div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-1">John Doe</h3>
            <p className="text-gray-600 mb-3">Founder & Chairman</p>
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-700 transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>

          <div className="text-center">
            <div className="mb-4 relative">
              <img src={img1} alt="Will Smith" className="w-48 h-48 mx-auto object-cover rounded-full shadow-lg transition-transform duration-300" />
              <div className="absolute inset-0 bg-black bg-opacity-0 rounded-full transition-all duration-300"></div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-1">John Doe</h3>
            <p className="text-gray-600 mb-3">Product Designer</p>
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-700 transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>

          <div className="text-center">
            <div className="mb-4 relative">
              <img src={img1} alt="Will Smith" className="w-48 h-48 mx-auto object-cover rounded-full shadow-lg transition-transform duration-300" />
              <div className="absolute inset-0 bg-black bg-opacity-0 rounded-full transition-all duration-300"></div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-1">John Doe</h3>
            <p className="text-gray-600 mb-3">Product Designer</p>
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-700 transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">FREE AND FAST DELIVERY</h4>
              <p className="text-gray-600 text-center">Free delivery on all orders over 150</p>
            </div>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">24/7 CUSTOMER SERVICE</h4>
              <p className="text-gray-600 text-center">Friendly 24/7 customer support</p>
            </div>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">MONEY BACK GUARANTEE</h4>
              <p className="text-gray-600 text-center">We return money within 30 days</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
