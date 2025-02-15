import React from 'react';
import PageNav from '@/components/page-nav';
import Footer from '@/components/footer';

export default function Contact() {
  return (
    <>
    <PageNav />
    <div className="container mx-auto px-4 py-12 min-h-screen">
      {/* Breadcrumb */}
      <nav className="text-gray-500 text-sm mb-8">
        <ol className="list-reset flex">
          <li><a href="/" className="text-blue-600 hover:underline">Home</a></li>
          <li><span className="mx-2">/</span></li>
          <li className="text-gray-700">Contact</li>
        </ol>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Contact Information */}
        <div className="space-y-8">
          <div className="p-8 border rounded-lg shadow-lg bg-white">
            <h3 className="text-xl font-bold mb-4 text-gray-800">Call To Us</h3>
            <p className="text-gray-600">We are available 24/7, 7 days a week.</p>
            <p className="text-gray-600">Phone: +880161122333</p>
          </div>
          <div className="p-8 border rounded-lg shadow-lg bg-white">
            <h3 className="text-xl font-bold mb-4 text-gray-800">Write To Us</h3>
            <p className="text-gray-600">Fill out our form and we will contact you within 24 hours.</p>
            <p className="text-gray-600">Email: customer@exclusive.com</p>
            <p className="text-gray-600">Email: support@exclusive.com</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="p-8 border rounded-lg shadow-lg bg-white">
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <input
                type="text"
                placeholder="Your Name *"
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
              <input
                type="email"
                placeholder="Your Email *"
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
              <input
                type="tel"
                placeholder="Your Phone *"
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
            </div>
            <textarea
              placeholder="Your Message"
              className="w-full p-3 border rounded-lg h-40 focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}
