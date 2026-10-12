import React from 'react';
import { DollarSign, CheckCircle2, ShieldAlert, HeartHandshake } from 'lucide-react';

export default function DirectOrderBanner() {
  return (
    <section className="bg-red-900 text-white py-8 border-y border-red-950 shadow-inner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-center md:text-left">
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <div className="w-12 h-12 rounded-xl bg-red-950/80 border border-red-800 flex items-center justify-center text-red-200 shrink-0">
              <DollarSign className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider text-red-200">
                Direct Butcher Prices
              </h4>
              <p className="text-xs text-red-100">
                Zero third-party markup. 100% of your dollars support local tradesmen.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 justify-center md:justify-start">
            <div className="w-12 h-12 rounded-xl bg-red-950/80 border border-red-800 flex items-center justify-center text-red-200 shrink-0">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider text-red-200">
                Custom Cuts & Portions
              </h4>
              <p className="text-xs text-red-100">
                Steaks cut to thickness, bulk packs vacuum sealed ready for the freezer.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 justify-center md:justify-start">
            <div className="w-12 h-12 rounded-xl bg-red-950/80 border border-red-800 flex items-center justify-center text-red-200 shrink-0">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider text-red-200">
                Guaranteed Christmas Hams
              </h4>
              <p className="text-xs text-red-100">
                Place a simple $30 or $50 deposit and your ham is locked in for Christmas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
