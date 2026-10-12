'use client';

import React, { useState } from 'react';
import { Sparkles, ShoppingBag, ShieldCheck, Clock, Award, CheckCircle, ArrowRight } from 'lucide-react';
import { MENU_ITEMS } from '@/data/menu';

export default function ButcheryCatalogue() {
  const [activeTab, setActiveTab] = useState<'packs' | 'beef' | 'sausages' | 'xmas'>('packs');

  const catalogueHighlights = {
    packs: {
      badge: 'Weekly Meat Value Packs',
      title: 'Feed The Family & Pack The Freezer For Less',
      description: 'Hand-prepared weekly value packs designed to stretch your grocery budget without compromising on prime North East Victorian quality. Custom butchery cuts packed fresh or vacuum sealed.',
      items: MENU_ITEMS.filter(i => i.category === 'packs'),
      perks: [
        'Massive savings compared to individual supermarket prices',
        'Vacuum packing available upon request for easy freezing',
        'Pre-order online or by phone for express counter collection'
      ]
    },
    beef: {
      badge: 'Locally Sourced Cattle',
      title: 'Prime Grass-Fed Victorian Beef & Steaks',
      description: 'Aged to perfection in our temperature-controlled coolroom. Cut thick to your exact preference by our experienced tradesmen.',
      items: MENU_ITEMS.filter(i => i.category === 'beef'),
      perks: [
        '100% pasture-raised Australian beef from regional producers',
        'Cut to order: thick, thin, or whole primal cuts available',
        'Fresh lean mince ground fresh twice daily'
      ]
    },
    sausages: {
      badge: 'Award-Winning Smallgoods',
      title: 'Handcrafted Sausages & Redgum Smoked Bacon',
      description: 'Made using natural hog casings, fresh herbs, and generational seasoning blends with no unnecessary fillers.',
      items: MENU_ITEMS.filter(i => i.category === 'sausages'),
      perks: [
        'Over 8 signature gourmet sausage flavours rotated weekly',
        'Traditional Wangaratta thin snags loved by local sporting clubs',
        'Authentic redgum wood smoke flavour in every slice of bacon'
      ]
    },
    xmas: {
      badge: 'Holiday Festive Season',
      title: 'Traditional Wood-Smoked Christmas Hams',
      description: 'Reserve your centrepiece early. Our Christmas hams are cured on the bone with natural spices and smoked over Australian redgum wood for rich, juicy tenderness.',
      items: MENU_ITEMS.filter(i => i.category === 'xmas'),
      perks: [
        'Secure your ham today with a small $30 or $50 deposit',
        'Available in Half (4-5kg) or Whole (8-10kg) sizes',
        'Convenient Christmas Eve collection window with minimal queuing'
      ]
    }
  };

  const current = catalogueHighlights[activeTab];

  return (
    <section id="catalogue" className="py-20 border-b border-stone-300/80 bg-stone-100/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-red-100 text-red-800 mb-4 border border-red-200">
            <Award className="w-3.5 h-3.5" />
            Traditional Craftsmanship Since 1985
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight font-serif">
            G&J Appin St Butchery Showcase
          </h2>
          <p className="mt-4 text-stone-600 text-base sm:text-lg">
            Explore our signature weekly meat packs, dry-aged steaks, artisan snags, and wood-smoked festive Christmas hams.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {(['packs', 'beef', 'sausages', 'xmas'] as const).map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 flex items-center gap-2 shadow-sm ${
                activeTab === tab
                  ? 'bg-red-800 text-white shadow-red-900/20 shadow-md ring-2 ring-red-700/20'
                  : 'bg-white text-stone-700 hover:bg-stone-50 border border-stone-200'
              }`}
            >
              {tab === 'packs' && 'Weekly Meat Packs ($50 / $100)'}
              {tab === 'beef' && 'Prime Beef & Steaks'}
              {tab === 'sausages' && 'House Sausages & Bacon'}
              {tab === 'xmas' && 'Christmas Hams & Roasts'}
            </button>
          ))}
        </div>

        {/* Selected Category Feature Banner */}
        <div className="bg-white rounded-2xl border border-stone-200/90 shadow-sm p-6 sm:p-8 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <span className="text-xs font-bold uppercase tracking-wider text-red-700 bg-red-50 px-2.5 py-1 rounded-md border border-red-100">
                {current.badge}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-stone-900 font-serif mt-3 mb-4">
                {current.title}
              </h3>
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-6">
                {current.description}
              </p>
              <div className="space-y-2.5">
                {current.perks.map((perk, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{perk}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5 bg-stone-50 rounded-xl p-6 border border-stone-200/80 text-center flex flex-col justify-center items-center">
              <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center text-red-800 mb-4">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <h4 className="font-serif font-bold text-lg text-stone-900 mb-2">
                Order Ahead For Fast Collection
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 mb-5 max-w-xs">
                Call ahead or use our online enquiry form to have your packs sliced, packed, and labelled ready at 92 Appin St.
              </p>
              <a
                href="#enquiry"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-red-800 hover:bg-red-700 text-white rounded-lg text-sm font-semibold transition-colors shadow-sm"
              >
                <span>Order Ahead / Reserve a Ham</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {current.items.map(item => (
            <div
              key={item.id}
              className="bg-white rounded-xl border border-stone-200 p-6 flex flex-col justify-between hover:shadow-md transition-shadow group"
            >
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-serif font-bold text-stone-900 text-lg group-hover:text-red-800 transition-colors">
                    {item.name}
                  </h4>
                  <span className="font-bold text-red-800 text-lg whitespace-nowrap ml-2">
                    ${item.price.toFixed(2)}
                  </span>
                </div>
                {item.unit && (
                  <div className="text-xs text-stone-500 -mt-1 mb-2 font-medium">
                    {item.unit}
                  </div>
                )}
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {item.tags?.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href="#enquiry"
                  className="text-xs font-semibold text-red-800 hover:text-red-900 inline-flex items-center gap-1 group-hover:underline"
                >
                  Order <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
