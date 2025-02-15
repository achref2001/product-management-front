import React from "react";
import { NavMain } from "@/components/nav-main";
import PageNav from "@/components/page-nav";
import HeroSection from "@/components/hero-section";
import FlashSales from "@/components/flash-sales";
import Footer from "@/components/footer";
const HomePage = () => {
 
  return (
    <> 
      <PageNav />
      <HeroSection />
    <div className="container mx-auto px-4 py-8 space-y-12" style={{ width: '70%' }}>
      <main>
        <FlashSales />
      </main>
    </div>
      <Footer />
    </>
  );
};

export default HomePage;
