'use client';

import React, { useState } from 'react';
import { Calendar, ShoppingBag, CheckCircle, Sparkles, Send, PhoneCall, AlertCircle, Clock, Users, Mail } from 'lucide-react';

export default function HamDepositEnquiry() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [serviceType, setServiceType] = useState('Traditional Christmas Ham ($50 Deposit)');
  const [guestCount, setGuestCount] = useState('1');
  const [eventDate, setEventDate] = useState('');
  const [notes, setNotes] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const res = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          phone,
          email,
          service_type: serviceType,
          guest_count: guestCount,
          event_date: eventDate,
          notes: notes,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setSubmitSuccess(true);
        setName('');
        setPhone('');
        setEmail('');
        setNotes('');
      } else {
        setErrorMessage(data.error || 'Failed to submit inquiry. Please call G&J Appin St Butchery directly on (03) 5721 3822.');
      }
    } catch {
      setErrorMessage('Network error occurred. Please call G&J Appin St Butchery directly on (03) 5721 3822.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="enquiry" className="py-20 border-b border-stone-300/80 bg-stone-900 text-stone-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Context & Guarantees */}
          <div className="lg:col-span-5 space-y-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-red-950 text-red-300 border border-red-800">
              <ShoppingBag className="w-3.5 h-3.5" />
              Order Ahead & Reserve A Ham
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold font-serif text-white leading-tight">
              Reserve Your Xmas Ham or Weekly Meat Pack
            </h2>

            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              Don't miss out on our iconic wood-smoked bone-in Christmas hams or our weekly $50 & $100 meat packs. Submit your details below and our butcher counter team will confirm your order and pickup date.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3 bg-stone-800/80 p-3.5 rounded-xl border border-stone-700/60">
                <CheckCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Xmas Ham Security Guarantee</h4>
                  <p className="text-xs text-stone-300 mt-0.5">
                    Your ham is weighed, labeled, and chilled ready for Christmas Eve pickup.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-stone-800/80 p-3.5 rounded-xl border border-stone-700/60">
                <Calendar className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Weekly Pack Smoko Ready</h4>
                  <p className="text-xs text-stone-300 mt-0.5">
                    Order before 11:00 AM for same-day afternoon pickup or specify your preferred day.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-stone-800/80 p-3.5 rounded-xl border border-stone-700/60">
                <PhoneCall className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Direct Phone Ordering</h4>
                  <p className="text-xs text-stone-300 mt-0.5">
                    Prefer speaking to a butcher? Call us directly on <a href="tel:0357213822" className="text-red-400 font-bold underline">(03) 5721 3822</a>.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Order / Reservation Form */}
          <div className="lg:col-span-7 bg-white text-stone-900 rounded-2xl p-6 sm:p-8 shadow-2xl border border-stone-200">
            <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 mb-2">
              Order Ahead & Ham Deposit Form
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mb-6">
              Complete the form below. We'll contact you promptly to verify your specifications and arrange deposit payment if required.
            </p>

            {submitSuccess ? (
              <div className="bg-emerald-50 border border-emerald-300 text-emerald-900 rounded-xl p-6 text-center space-y-3">
                <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="text-lg font-bold">Order Request Received!</h4>
                <p className="text-sm text-stone-700 max-w-md mx-auto">
                  Thank you! The team at G&J Appin St Butchery will review your order and get in touch via phone to confirm your pickup details.
                </p>
                <button
                  onClick={() => setSubmitSuccess(false)}
                  className="mt-4 px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg text-xs font-semibold uppercase tracking-wider"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {errorMessage && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-xs text-red-800 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. John Mitchell"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-red-800"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. 0412 345 678"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-red-800"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. john@example.com"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-red-800"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                      Order / Reservation Type *
                    </label>
                    <select
                      value={serviceType}
                      onChange={(e) => setServiceType(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-red-800 bg-white"
                    >
                      <option value="Traditional Christmas Ham ($50 Deposit)">Traditional Christmas Ham ($50 Deposit)</option>
                      <option value="$50 Budget Tradie & Smoko Pack">$50 Budget Tradie & Smoko Pack</option>
                      <option value="$100 Jumbo Family Meat Pack">$100 Jumbo Family Meat Pack</option>
                      <option value="$150 Ultimate Freezer Stuffer Pack">$150 Ultimate Freezer Stuffer Pack</option>
                      <option value="$75 Weekend Footy BBQ Crate">$75 Weekend Footy BBQ Crate</option>
                      <option value="Custom Bulk Meat / Primal Cut Order">Custom Bulk Meat / Primal Cut Order</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                      Quantity / Quantity of Packs
                    </label>
                    <input
                      type="number"
                      min="1"
                      value={guestCount}
                      onChange={(e) => setGuestCount(e.target.value)}
                      placeholder="e.g. 1"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-red-800"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                      Preferred Pickup Date *
                    </label>
                    <input
                      type="date"
                      required
                      value={eventDate}
                      onChange={(e) => setEventDate(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-red-800 bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                    Butchery Notes & Cutting Instructions
                  </label>
                  <textarea
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="e.g. Sliced thick, vacuum pack into 500g portions, whole ham with skin intact, etc."
                    className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-red-800"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-lg bg-red-800 hover:bg-red-700 text-white font-bold text-sm tracking-wide uppercase transition-colors shadow-lg shadow-red-900/20 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span>Submitting Order...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Order Ahead / Reserve a Ham</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
