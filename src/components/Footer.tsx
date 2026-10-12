import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  onOpenLeadsModal?: () => void;
}

export default function Footer({ onOpenLeadsModal }: FooterProps) {
  return (
    <footer className="bg-stone-950 text-stone-400 text-xs py-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2 space-y-3">
            <h3 className="font-serif font-bold text-base text-white">G&J Appin St Butchery</h3>
            <p className="text-stone-400 max-w-sm leading-relaxed">
              Wangaratta's neighbourhood butcher. Specialising in weekly value meat packs, local grass-fed beef, house-made gourmet sausages, and traditional redgum smoked Christmas hams.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">Contact & Pickup</h4>
            <div className="flex items-center gap-2 text-stone-300">
              <MapPin className="w-3.5 h-3.5 text-red-500 shrink-0" />
              <span>92 Appin St, Wangaratta VIC</span>
            </div>
            <div className="flex items-center gap-2 text-stone-300">
              <Phone className="w-3.5 h-3.5 text-red-500 shrink-0" />
              <a href="tel:0357213822" className="hover:underline">(03) 5721 3822</a>
            </div>
            <div className="flex items-center gap-2 text-stone-300">
              <Mail className="w-3.5 h-3.5 text-red-500 shrink-0" />
              <a href="mailto:gjappinstbutchery@gmail.com" className="hover:underline">gjappinstbutchery@gmail.com</a>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">Quick Links</h4>
            <div><a href="#catalogue" className="hover:text-white transition-colors">Meat Packs</a></div>
            <div><a href="#menu" className="hover:text-white transition-colors">Counter Products</a></div>
            <div><a href="#enquiry" className="hover:text-white transition-colors">Order Ahead / Ham Deposit</a></div>
            <div><a href="#hours" className="hover:text-white transition-colors">Hours & Location</a></div>
          </div>
        </div>

        <div className="pt-8 border-t border-stone-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-stone-500">
          <div>
            &copy; {new Date().getFullYear()} G&J Appin St Butchery. All rights reserved.
          </div>
          {onOpenLeadsModal && (
            <button
              onClick={onOpenLeadsModal}
              className="text-stone-600 hover:text-stone-400 text-[11px] underline"
            >
              Admin Lead Management
            </button>
          )}
        </div>
      </div>
    </footer>
  );
}
