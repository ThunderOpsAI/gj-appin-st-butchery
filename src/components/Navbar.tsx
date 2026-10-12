'use client';

import React, { useState } from 'react';
import { Phone, Clock, MapPin, ShoppingCart, Menu as MenuIcon, X } from 'lucide-react';

interface NavbarProps {
  onOpenLeadsModal?: () => void;
  cartCount?: number;
  onCartClick?: () => void;
}

export default function Navbar({ onOpenLeadsModal, cartCount = 0, onCartClick }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-stone-900 text-stone-100 shadow-md">
      {/* Top micro-bar */}
      <div className="bg-red-950/80 px-4 py-1.5 text-xs text-red-200 flex justify-between items-center border-b border-red-900/50">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-red-400" />
            92 Appin Street, Wangaratta VIC
          </span>
          <span className="hidden sm:flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            Mon-Fri 7am-5:30pm | Sat 7am-12:30pm
          </span>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="tel:0357213822"
            className="flex items-center gap-1 text-red-200 hover:text-white font-semibold transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-red-400" />
            (03) 5721 3822
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg bg-red-800 text-white flex items-center justify-center font-serif font-black text-xl shadow-inner border border-red-700">
            G&J
          </div>
          <div>
            <div className="font-serif font-extrabold text-lg sm:text-xl text-white tracking-tight group-hover:text-red-300 transition-colors">
              G&J Appin St Butchery
            </div>
            <div className="text-[10px] sm:text-xs text-stone-400 uppercase tracking-widest">
              Wangaratta Quality Meats
            </div>
          </div>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-stone-300">
          <a href="#catalogue" className="hover:text-white transition-colors">Meat Packs</a>
          <a href="#menu" className="hover:text-white transition-colors">Counter Menu</a>
          <a href="#enquiry" className="hover:text-white transition-colors">Order Ahead / Ham Deposit</a>
          <a href="#hours" className="hover:text-white transition-colors">Hours & Location</a>
        </nav>

        {/* CTA buttons */}
        <div className="flex items-center gap-3">
          <a
            href="#enquiry"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-red-800 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-red-950"
          >
            Order Ahead / Reserve a Ham
          </a>

          <a
            href="tel:0357213822"
            className="inline-flex sm:hidden p-2 rounded-lg bg-red-800 text-white"
            aria-label="Call (03) 5721 3822"
          >
            <Phone className="w-4 h-4" />
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-stone-300 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-stone-900 border-t border-stone-800 px-4 pt-3 pb-6 space-y-3 text-sm">
          <a
            href="#catalogue"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-stone-200 hover:text-white py-1.5"
          >
            Meat Packs & Specials
          </a>
          <a
            href="#menu"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-stone-200 hover:text-white py-1.5"
          >
            Counter Menu
          </a>
          <a
            href="#enquiry"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-stone-200 hover:text-white py-1.5"
          >
            Order Ahead / Reserve a Ham
          </a>
          <a
            href="#hours"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-stone-200 hover:text-white py-1.5"
          >
            Hours & Location
          </a>
          <div className="pt-2">
            <a
              href="tel:0357213822"
              className="w-full text-center py-2.5 px-4 bg-red-800 text-white rounded-lg font-bold flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Call (03) 5721 3822
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
