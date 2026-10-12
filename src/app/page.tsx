'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ButcheryCatalogue from '@/components/ButcheryCatalogue';
import DirectOrderBanner from '@/components/DirectOrderBanner';
import Menu, { CartItem } from '@/components/Menu';
import HamDepositEnquiry from '@/components/HamDepositEnquiry';
import FlyersSection from '@/components/FlyersSection';
import StorySection from '@/components/StorySection';
import LocationHours from '@/components/LocationHours';
import Footer from '@/components/Footer';
import AdminLeadsDrawer from '@/components/AdminLeadsDrawer';

export default function Home() {
  const [isLeadsDrawerOpen, setIsLeadsDrawerOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const handleCartChange = (items: CartItem[]) => {
    const totalCount = items.reduce((sum, item) => sum + item.quantity, 0);
    setCartCount(totalCount);
  };

  const scrollToMenu = () => {
    const menuEl = document.getElementById('menu');
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen bg-[#fcfaf7] text-stone-900 font-sans selection:bg-red-200 selection:text-red-900">
      {/* Sticky Modular Header */}
      <Navbar
        onOpenLeadsModal={() => setIsLeadsDrawerOpen(true)}
        cartCount={cartCount}
        onCartClick={scrollToMenu}
      />

      {/* Hero Section */}
      <Hero />

      {/* Unique Feature: Butchery Catalogue (Meat Packs, Prime Steaks, Artisan Sausages, Xmas Hams) */}
      <ButcheryCatalogue />

      {/* Direct Order Savings & Smoko Value Banner */}
      <DirectOrderBanner />

      {/* Interactive Daily Butcher Counter Menu & Order Cart */}
      <Menu onCartChange={handleCartChange} />

      {/* Unique Feature: Order Ahead / Christmas Ham Deposit Form */}
      <HamDepositEnquiry />

      {/* Weekly Butcher Blackboard Specials */}
      <FlyersSection />

      {/* Wangaratta Butchery Craft Story */}
      <StorySection />

      {/* Trading Hours, Location Map & Contact */}
      <LocationHours />

      {/* Site Footer with Admin Drawer Trigger */}
      <Footer onOpenLeadsModal={() => setIsLeadsDrawerOpen(true)} />

      {/* Admin Leads Slide-Over Drawer */}
      <AdminLeadsDrawer
        isOpen={isLeadsDrawerOpen}
        onClose={() => setIsLeadsDrawerOpen(false)}
      />
    </main>
  );
}
