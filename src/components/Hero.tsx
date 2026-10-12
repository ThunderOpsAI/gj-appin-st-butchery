import React from 'react';
import { Phone, Calendar, ArrowRight, ShieldCheck, Award } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-stone-900 via-stone-900 to-stone-950 text-white py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ef4444_1px,transparent_1px)] [background-size:16px_16px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-red-950/90 text-red-300 border border-red-800/80 mb-6">
            <Award className="w-3.5 h-3.5 text-red-400" />
            Wangaratta Quality Butcher • 92 Appin Street
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-serif tracking-tight leading-tight mb-6">
            Hand-Selected Meats, Weekly Value Packs & Xmas Hams.
          </h1>

          <p className="text-lg sm:text-xl text-stone-300 leading-relaxed mb-8 max-w-2xl font-light">
            Enjoy prime North East Victorian beef, tender local lamb, house-made gourmet sausages, and traditional redgum wood-smoked Christmas hams. Cut fresh by your local Appin Street butchers.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href="#enquiry"
              className="px-6 py-4 bg-red-800 hover:bg-red-700 text-white font-bold rounded-xl text-center text-sm uppercase tracking-wider transition-all shadow-xl shadow-red-950/40 flex items-center justify-center gap-2"
            >
              <span>Order Ahead / Reserve a Ham</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="tel:0357213822"
              className="px-6 py-4 bg-stone-800/90 hover:bg-stone-750 text-stone-100 hover:text-white border border-stone-700 font-bold rounded-xl text-center text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-red-400" />
              <span>Call (03) 5721 3822</span>
            </a>
          </div>

          {/* Quick trust metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-12 mt-12 border-t border-stone-800 text-xs text-stone-400">
            <div>
              <div className="text-white font-bold text-lg font-serif">$50 & $100</div>
              <div>Weekly Meat Packs</div>
            </div>
            <div>
              <div className="text-white font-bold text-lg font-serif">Redgum Smoked</div>
              <div>Festive Christmas Hams</div>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <div className="text-white font-bold text-lg font-serif">100% Local</div>
              <div>Victorian Farm Sourced</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
