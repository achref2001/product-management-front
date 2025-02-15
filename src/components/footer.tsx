import React from 'react';
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ArrowRight, Linkedin, Instagram, Facebook, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Exclusive Column */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Exclusive</h2>
            <div className="space-y-2">
              <p>Subscribe</p>
              <p className="text-sm">Get 10% off your first order</p>
              <div className="flex items-center space-x-2">
                <Input type="email" placeholder="Enter your email" className="bg-transparent border-gray-600" />
                <Button size="icon" variant="outline" className="border-gray-600">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Support Column */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Support</h2>
            <div className="space-y-2 text-sm">
              <p>08 LOGTS BELIMOUR,</p>
              <p>borj belimour, algeria.</p>
              <p>support@exclusive.com</p>
              <p>+213 660 123 456</p>
            </div>
          </div>

          {/* Account Column */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Account</h2>
            <nav className="space-y-2 text-sm">
              <a href="/account" className="block hover:text-gray-300">
                My Account
              </a>
              <a href="/login" className="block hover:text-gray-300">
                Login / Register
              </a>
              <a href="/cart" className="block hover:text-gray-300">
                Cart
              </a>
              <a href="/wishlist" className="block hover:text-gray-300">
                Wishlist
              </a>
              <a href="/shop" className="block hover:text-gray-300">
                Shop
              </a>
            </nav>
          </div>

          {/* Quick Link Column */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Quick Link</h2>
            <nav className="space-y-2 text-sm">
              <a href="/privacy-policy" className="block hover:text-gray-300">
                Privacy Policy
              </a>
              <a href="/terms" className="block hover:text-gray-300">
                Terms Of Use
              </a>
              <a href="/faq" className="block hover:text-gray-300">
                FAQ
              </a>
              <a href="/contact" className="block hover:text-gray-300">
                Contact
              </a>
            </nav>
          </div>

          {/* Download App Column */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Download App</h2>
            <p className="text-sm text-gray-400">Save $3 with App New User Only</p>
            
            <div className="flex space-x-4 pt-4">
              <a href="#" className="hover:text-gray-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-gray-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-gray-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-gray-300">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-400 mt-12">
          <p>&copy; Copyright Rimel 2025. All right reserved</p>
        </div>
      </div>
    </footer>
  )
}

