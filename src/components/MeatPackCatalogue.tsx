'use client';

import React, { useState } from 'react';
import { Package, Gift, Sparkles, Check, Phone, Calendar, Clock, ShoppingCart, Send, CheckCircle2, AlertCircle, Flame, ShieldCheck } from 'lucide-react';

interface MeatPackCatalogueProps {
  onSelectPackForCart?: (packName: string, price: number) => void;
}

export default function MeatPackCatalogue({ onSelectPackForCart }: MeatPackCatalogueProps) {
  const [activeTab, setActiveTab] = useState<'packs' | 'ham'>('packs');

  // Christmas Ham Enquiry Form State
  const [hamType, setHamType] = useState('Traditional Wood-Smoked Bone-In Half Ham (~5-6kg)');
  const [pickupDate, setPickupDate] = useState('2026-12-23');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [specialInstructions, setSpecialInstructions] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // Quick deposit calculator
  const depositAmount = hamType.includes('Full Ham') ? 50 : 30;

  const handleHamSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      const res = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: customerName,
          phone: customerPhone,
          email: customerEmail,
          service_type: 'Christmas Ham Pre-Order',
          guest_count: 8,
          event_date: pickupDate,
          notes: `Item: ${hamType}. Deposit due: $${depositAmount}. Pickup: ${pickupDate}. Notes: ${specialInstructions || 'None'}`,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setSubmitSuccess(true);
        setCustomerName('');
        setCustomerPhone('');
        setCustomerEmail('');
        setSpecialInstructions('');
      } else {
        setSubmitError(data.error || 'Failed to submit reservation. Please call us directly on (03) 5721 3822.');
      }
    } catch {
      setSubmitError('Connection error. Please call the butchery on (03) 5721 3822 to confirm your booking.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const meatPacks = [
    {
      id: 'pack-50',
      name: '$50 Weekly BBQ Starter Pack',
      price: 50,
      badge: 'Most Popular Weeknight Deal',
      savings: 'Save $14 vs individual cuts',
      servings: 'Feeds 3–4 people for multiple meals',
      contents: [
        '1.0kg Traditional Appin St BBQ Beef Sausages',
        '1.0kg Premium Lean Beef Mince (freshly ground)',
        '6x Handmade Herb & Garlic Chicken Schnitzels',
        '6x Seasoned Gourmet Angus Beef Burger Patties',
      ],
      tagline: 'Ideal for everyday family dinners and easy weeknight frying.',
      popular: true,
    },
    {
      id: 'pack-100',
      name: '$100 Mega Family Meat Pack',
      price: 100,
      badge: 'Best Value For Families',
      savings: 'Save $28 vs individual cuts',
      servings: 'Feeds 4–6 people for 7+ days',
      contents: [
        '2.0kg Thick BBQ Beef Sausages',
        '1.0kg Tender Victorian Grass-Fed Rump Steak',
        '1.0kg 100% Free-Range Chicken Breast Fillets',
        '1.0kg Extra Lean Beef Mince',
        '1.0kg Tender Australian Pork Loin Chops',
        '1.0kg Honey-Soy Marinated BBQ Lamb Chops',
      ],
      tagline: 'Packed, trimmed, and portioned fresh. Free vacuum packing available upon request.',
      popular: true,
    },
    {
      id: 'pack-150',
      name: '$150 Ultimate Freezer Stocker Pack',
      price: 150,
      badge: 'Bulk Value Pack',
      savings: 'Save $42 vs retail cuts',
      servings: 'Stock your freezer with 12kg of butcher cuts',
      contents: [
        '2.0kg Prime Aged Porterhouse Steaks',
        '2.0kg Pasture-Fed Lamb Loin Chops',
        '2.0kg House Gourmet Pork & Fennel Sausages',
        '2.0kg Hand-Diced Casserole Chuck Beef',
        '2.0kg Crumbed Chicken Breast Schnitzels',
        '2.0kg Extra Lean Premium Beef Mince',
      ],
      tagline: 'Vacuum-sealed in freezer-ready bags to keep your pantry and deep freeze fully stocked.',
      popular: false,
    },
  ];

  return (
    <section id="meat-packs" className="py-20 border-b border-stone-300/80 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Tabs */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-red-800/10 text-red-900 border border-red-800/20 uppercase tracking-widest">
            <Package className="w-3.5 h-3.5 text-red-700" /> Handcrafted Value Bundles
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-950 tracking-tight">
            Weekly Meat Packs &amp; Christmas Hams
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Prepared fresh daily by our skilled butchers at 92 Appin Street. Pre-order your weekly pack for lightning-fast counter pickup, or secure your traditional wood-smoked Christmas ham early.
          </p>

          {/* Toggle Tabs */}
          <div className="inline-flex p-1.5 rounded-2xl bg-stone-100 border border-stone-200 mt-4">
            <button
              onClick={() => setActiveTab('packs')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all ${
                activeTab === 'packs'
                  ? 'bg-red-800 text-white shadow-md'
                  : 'text-stone-700 hover:text-stone-950'
              }`}
            >
              <Flame className="w-4 h-4" />
              <span>Weekly Meat Packs ($50 / $100 / $150)</span>
            </button>
            <button
              onClick={() => setActiveTab('ham')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all ${
                activeTab === 'ham'
                  ? 'bg-red-800 text-white shadow-md'
                  : 'text-stone-700 hover:text-stone-950'
              }`}
            >
              <Gift className="w-4 h-4" />
              <span>Reserve a Christmas Ham</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Weekly Meat Packs */}
        {activeTab === 'packs' && (
          <div className="space-y-10 animate-in fade-in duration-300">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
              {meatPacks.map((pack) => (
                <div
                  key={pack.id}
                  className={`rounded-3xl border ${
                    pack.popular
                      ? 'border-red-700 shadow-xl bg-gradient-to-b from-red-50/50 via-white to-stone-50 ring-2 ring-red-700/20'
                      : 'border-stone-300 bg-white shadow-lg'
                  } p-6 sm:p-7 flex flex-col justify-between hover:shadow-2xl transition-all relative overflow-hidden`}
                >
                  {pack.popular && (
                    <div className="absolute top-0 right-0 bg-red-800 text-white text-[10px] font-black uppercase tracking-wider px-3.5 py-1 rounded-bl-xl shadow-sm">
                      {pack.badge}
                    </div>
                  )}

                  <div>
                    <div className="mb-4">
                      <span className="text-xs font-bold text-red-800 uppercase tracking-wider block">
                        Butcher Value Bundle
                      </span>
                      <h3 className="text-xl sm:text-2xl font-black text-stone-950 mt-1">
                        {pack.name}
                      </h3>
                      <div className="flex items-baseline gap-2 mt-2">
                        <span className="text-3xl sm:text-4xl font-black text-red-800">
                          ${pack.price}
                        </span>
                        <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                          {pack.savings}
                        </span>
                      </div>
                      <p className="text-xs text-stone-500 font-medium mt-1">
                        {pack.servings}
                      </p>
                    </div>

                    <div className="border-t border-stone-200 pt-4 mb-6">
                      <span className="text-xs font-black text-stone-900 uppercase tracking-wider block mb-2.5">
                        What&apos;s Inside:
                      </span>
                      <ul className="space-y-2.5 text-xs sm:text-sm text-stone-700">
                        {pack.contents.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                            <span className="font-medium leading-snug">{item}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="text-xs text-stone-500 mt-4 italic border-t border-stone-100 pt-3">
                        {pack.tagline}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2.5 pt-4 border-t border-stone-200">
                    <a
                      href="tel:0357213822"
                      className="w-full inline-flex items-center justify-center gap-2 bg-red-800 hover:bg-red-700 text-white font-black py-3.5 rounded-xl text-sm transition-all shadow-md hover:scale-[1.01]"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Order Ahead: (03) 5721 3822</span>
                    </a>
                    {onSelectPackForCart && (
                      <button
                        onClick={() => onSelectPackForCart(pack.name, pack.price)}
                        className="w-full inline-flex items-center justify-center gap-2 bg-stone-100 hover:bg-stone-200 border border-stone-300 text-stone-800 font-bold py-2.5 rounded-xl text-xs transition-colors"
                      >
                        <ShoppingCart className="w-3.5 h-3.5 text-red-800" />
                        <span>Add to Digital Cart</span>
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Custom Butcher Services Banner */}
            <div className="rounded-2xl bg-stone-900 text-stone-100 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
              <div className="space-y-1.5 max-w-2xl">
                <div className="flex items-center gap-2 text-amber-400 text-xs font-black uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4" /> Complimentary Vacuum Sealing &amp; Custom Portioning
                </div>
                <h4 className="text-xl font-black text-white">
                  Want your meat pack pre-packed in 2-person meal bags for your freezer?
                </h4>
                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                  Just let us know when ordering! We happily cryovac your steaks, mince, and schnitzels into convenient family portion sizes at no extra charge.
                </p>
              </div>
              <a
                href="tel:0357213822"
                className="shrink-0 inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-stone-950 font-black px-6 py-3.5 rounded-xl text-sm transition-transform hover:scale-105"
              >
                <Phone className="w-4 h-4" /> Call (03) 5721 3822
              </a>
            </div>
          </div>
        )}

        {/* Tab 2: Christmas Ham Deposit & Reservation */}
        {activeTab === 'ham' && (
          <div className="max-w-4xl mx-auto animate-in fade-in duration-300">
            <div className="rounded-3xl border border-red-700/30 bg-gradient-to-br from-red-950 via-stone-900 to-stone-950 text-white p-6 sm:p-10 shadow-2xl relative overflow-hidden">
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left Ham Information */}
                <div className="lg:col-span-5 space-y-5">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-400/20 text-amber-300 border border-amber-400/30 uppercase tracking-widest">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Traditional Smokehouse
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                    Reserve Your Christmas Ham
                  </h3>
                  <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                    Our famous bone-in leg hams are naturally cured in-house and wood-smoked using traditional Aussie redgum timber for unmistakable rich flavour and golden glaze.
                  </p>

                  <div className="space-y-3 pt-2 text-xs text-stone-200">
                    <div className="flex items-start gap-2 bg-white/5 border border-white/10 p-3 rounded-xl">
                      <Check className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                      <div>
                        <strong className="text-white block">100% Australian Pork:</strong>
                        Ethically raised, tender, and juicy meat.
                      </div>
                    </div>
                    <div className="flex items-start gap-2 bg-white/5 border border-white/10 p-3 rounded-xl">
                      <Check className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                      <div>
                        <strong className="text-white block">Lock In Your Preferred Pickup Date:</strong>
                        Collect fresh on Dec 22, 23, or 24 from 92 Appin Street.
                      </div>
                    </div>
                    <div className="flex items-start gap-2 bg-white/5 border border-white/10 p-3 rounded-xl">
                      <Check className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                      <div>
                        <strong className="text-white block">Simple Deposit:</strong>
                        Pay just $30 (half ham) or $50 (full ham) to guarantee your Christmas centerpiece.
                      </div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <a
                      href="tel:0357213822"
                      className="inline-flex items-center gap-2 text-amber-300 hover:text-white text-xs font-bold underline"
                    >
                      <Phone className="w-3.5 h-3.5" /> Prefer to reserve by phone? Call (03) 5721 3822
                    </a>
                  </div>
                </div>

                {/* Right Form */}
                <div className="lg:col-span-7 bg-stone-900/90 border border-stone-800 rounded-2xl p-6 sm:p-7 shadow-xl">
                  {submitSuccess ? (
                    <div className="text-center py-8 space-y-4">
                      <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                        <CheckCircle2 className="w-7 h-7" />
                      </div>
                      <h4 className="text-xl font-bold text-white">Ham Reservation Received!</h4>
                      <p className="text-stone-300 text-xs sm:text-sm leading-relaxed max-w-sm mx-auto">
                        Thank you! We have logged your Christmas ham request. Our team at G&amp;J Appin St Butchery will phone you to confirm your weight preference and finalize your booking.
                      </p>
                      <button
                        onClick={() => setSubmitSuccess(false)}
                        className="bg-stone-800 hover:bg-stone-700 text-white text-xs font-bold px-4 py-2 rounded-xl transition-colors"
                      >
                        Reserve Another Ham
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleHamSubmit} className="space-y-4">
                      <h4 className="font-bold text-white text-sm sm:text-base mb-1">
                        Reserve Your Cut &amp; Collection Window
                      </h4>

                      {submitError && (
                        <div className="p-3 bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs rounded-xl flex items-center gap-2">
                          <AlertCircle className="w-4 h-4 shrink-0" />
                          <span>{submitError}</span>
                        </div>
                      )}

                      <div>
                        <label className="block text-xs font-semibold text-stone-300 mb-1">
                          Select Christmas Ham Style *
                        </label>
                        <select
                          value={hamType}
                          onChange={(e) => setHamType(e.target.value)}
                          className="w-full bg-stone-950 border border-stone-700 rounded-xl px-3 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-red-500"
                        >
                          <option value="Traditional Wood-Smoked Bone-In Half Ham (~5-6kg)">
                            Traditional Wood-Smoked Bone-In Half Ham (~5-6kg) - $30 Deposit
                          </option>
                          <option value="Traditional Wood-Smoked Bone-In Full Ham (~9-11kg)">
                            Traditional Wood-Smoked Bone-In Full Ham (~9-11kg) - $50 Deposit
                          </option>
                          <option value="Easy-Carve Boneless Wood-Smoked Ham (~4-5kg)">
                            Easy-Carve Boneless Wood-Smoked Ham (~4-5kg) - $30 Deposit
                          </option>
                          <option value="Free-Range Rolled Seasoned Turkey Breast (~2.5kg)">
                            Free-Range Rolled Seasoned Turkey Breast (~2.5kg) - $30 Deposit
                          </option>
                          <option value="Rolled Seasoned Pork Loin with Crackling (~3kg)">
                            Rolled Seasoned Pork Loin with Crackling (~3kg) - $30 Deposit
                          </option>
                        </select>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-semibold text-stone-300 mb-1">
                            Your Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={customerName}
                            onChange={(e) => setCustomerName(e.target.value)}
                            placeholder="e.g. Sarah Miller"
                            className="w-full bg-stone-950 border border-stone-700 rounded-xl px-3 py-2 text-xs sm:text-sm text-white placeholder-stone-500 focus:outline-none focus:border-red-500"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-stone-300 mb-1">
                            Contact Phone *
                          </label>
                          <input
                            type="tel"
                            required
                            value={customerPhone}
                            onChange={(e) => setCustomerPhone(e.target.value)}
                            placeholder="e.g. 0418 555 123"
                            className="w-full bg-stone-950 border border-stone-700 rounded-xl px-3 py-2 text-xs sm:text-sm text-white placeholder-stone-500 focus:outline-none focus:border-red-500"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-semibold text-stone-300 mb-1">
                            Email Address (optional)
                          </label>
                          <input
                            type="email"
                            value={customerEmail}
                            onChange={(e) => setCustomerEmail(e.target.value)}
                            placeholder="sarah@example.com"
                            className="w-full bg-stone-950 border border-stone-700 rounded-xl px-3 py-2 text-xs sm:text-sm text-white placeholder-stone-500 focus:outline-none focus:border-red-500"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-stone-300 mb-1">
                            Pickup Date *
                          </label>
                          <select
                            value={pickupDate}
                            onChange={(e) => setPickupDate(e.target.value)}
                            className="w-full bg-stone-950 border border-stone-700 rounded-xl px-3 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-red-500"
                          >
                            <option value="2026-12-22">Tuesday 22 Dec (7:30am - 5:30pm)</option>
                            <option value="2026-12-23">Wednesday 23 Dec (7:30am - 5:30pm)</option>
                            <option value="2026-12-24">Christmas Eve 24 Dec (7:00am - 3:00pm)</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-stone-300 mb-1">
                          Special Butchery Notes
                        </label>
                        <input
                          type="text"
                          value={specialInstructions}
                          onChange={(e) => setSpecialInstructions(e.target.value)}
                          placeholder="e.g. Prefer lighter smoke / specific weight ~5.5kg"
                          className="w-full bg-stone-950 border border-stone-700 rounded-xl px-3 py-2 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-red-500"
                        />
                      </div>

                      {/* Deposit Notice */}
                      <div className="p-3 bg-red-950/60 border border-red-800/40 rounded-xl flex items-center justify-between text-xs">
                        <span className="text-stone-300">Initial Holding Deposit:</span>
                        <span className="text-amber-300 font-black text-sm">${depositAmount} AUD</span>
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-red-800 hover:bg-red-700 active:bg-red-900 disabled:opacity-50 text-white font-black py-3 px-4 rounded-xl text-xs sm:text-sm transition-all shadow-lg flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? (
                          <span>Reserving ham...</span>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            <span>Reserve Christmas Ham Now</span>
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>

              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
