import React from 'react';
import { Tag, Sparkles, Flame, Check } from 'lucide-react';

export default function FlyersSection() {
  return (
    <section className="py-16 bg-stone-100 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-red-700 bg-red-50 border border-red-200 px-3 py-1 rounded-full">
            In-Store Chalkboard
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-stone-900 mt-3">
            This Week's Counter Specials at Appin Street
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-2">
            Updated fresh every Tuesday morning based on the best local Victorian livestock.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-stone-900 text-stone-100 rounded-xl p-6 border-2 border-dashed border-red-700/60 shadow-lg relative overflow-hidden">
            <div className="flex justify-between items-start mb-4">
              <span className="px-2.5 py-1 bg-red-800 text-white rounded text-[10px] font-bold uppercase tracking-wider">
                Tradie Favourite
              </span>
              <span className="text-xl font-bold text-amber-300 font-serif">$50 Pack</span>
            </div>
            <h3 className="text-lg font-bold font-serif mb-2 text-white">The $50 Budget Smoko Pack</h3>
            <ul className="text-xs text-stone-300 space-y-1.5 mb-6">
              <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-red-400" /> 1kg Lean Beef Mince</li>
              <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-red-400" /> 1kg Fresh Thin BBQ Sausages</li>
              <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-red-400" /> 1kg Marinated Honey Drumsticks</li>
              <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-red-400" /> 6 Thick-Cut Pork Loin Chops</li>
            </ul>
            <a
              href="#enquiry"
              className="block w-full text-center py-2 bg-stone-800 hover:bg-stone-700 text-stone-200 hover:text-white rounded text-xs font-bold uppercase tracking-wider transition-colors"
            >
              Order Ahead
            </a>
          </div>

          <div className="bg-stone-900 text-stone-100 rounded-xl p-6 border-2 border-red-600 shadow-xl relative overflow-hidden ring-2 ring-red-600/20">
            <div className="flex justify-between items-start mb-4">
              <span className="px-2.5 py-1 bg-amber-600 text-white rounded text-[10px] font-bold uppercase tracking-wider">
                Big Family Saver
              </span>
              <span className="text-xl font-bold text-amber-300 font-serif">$100 Pack</span>
            </div>
            <h3 className="text-lg font-bold font-serif mb-2 text-white">The $100 Jumbo Family Crate</h3>
            <ul className="text-xs text-stone-300 space-y-1.5 mb-6">
              <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-amber-400" /> 1.5kg Tender Rump Steak</li>
              <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-amber-400" /> 1.5kg Premium Beef Mince</li>
              <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-amber-400" /> 1.5kg House Thin Sausages</li>
              <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-amber-400" /> 1kg Free-Range Chicken Breast</li>
              <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-amber-400" /> 8 Hand-Pressed Beef Patties</li>
            </ul>
            <a
              href="#enquiry"
              className="block w-full text-center py-2 bg-red-800 hover:bg-red-700 text-white rounded text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
            >
              Order Ahead
            </a>
          </div>

          <div className="bg-stone-900 text-stone-100 rounded-xl p-6 border-2 border-dashed border-red-700/60 shadow-lg relative overflow-hidden">
            <div className="flex justify-between items-start mb-4">
              <span className="px-2.5 py-1 bg-red-800 text-white rounded text-[10px] font-bold uppercase tracking-wider">
                Holiday Pre-Order
              </span>
              <span className="text-xl font-bold text-amber-300 font-serif">Reserve Now</span>
            </div>
            <h3 className="text-lg font-bold font-serif mb-2 text-white">Wood-Smoked Christmas Hams</h3>
            <ul className="text-xs text-stone-300 space-y-1.5 mb-6">
              <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-red-400" /> Half (4-5kg) or Whole (8-10kg)</li>
              <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-red-400" /> Australian Pork Cured On The Bone</li>
              <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-red-400" /> Traditional Redgum Smokehouse</li>
              <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-red-400" /> Small deposit locks in your ham</li>
            </ul>
            <a
              href="#enquiry"
              className="block w-full text-center py-2 bg-stone-800 hover:bg-stone-700 text-stone-200 hover:text-white rounded text-xs font-bold uppercase tracking-wider transition-colors"
            >
              Reserve a Ham
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
