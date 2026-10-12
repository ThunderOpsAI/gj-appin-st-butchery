import React from 'react';
import { MapPin, Phone, Mail, Clock, Calendar } from 'lucide-react';

export default function LocationHours() {
  return (
    <section id="hours" className="py-20 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Details */}
          <div className="space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-red-700 bg-red-100 px-3 py-1 rounded-full border border-red-200">
              Visit Us in Wangaratta
            </span>
            <h2 className="text-3xl font-extrabold font-serif text-stone-900">
              Trading Hours & Shop Location
            </h2>
            <p className="text-stone-600 text-sm leading-relaxed">
              Conveniently located at 92 Appin Street in Wangaratta with easy street parking right in front of the shop.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5">
                <MapPin className="w-5 h-5 text-red-800 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-stone-900">Address</h4>
                  <p className="text-xs sm:text-sm text-stone-600">92 Appin Street, Wangaratta, VIC 3677</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Phone className="w-5 h-5 text-red-800 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-stone-900">Phone</h4>
                  <a href="tel:0357213822" className="text-xs sm:text-sm text-red-800 font-bold hover:underline">
                    (03) 5721 3822
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Mail className="w-5 h-5 text-red-800 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-stone-900">Email</h4>
                  <a href="mailto:gjappinstbutchery@gmail.com" className="text-xs sm:text-sm text-stone-600 hover:underline">
                    gjappinstbutchery@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-stone-200">
              <h4 className="font-bold text-sm text-stone-900 mb-3 flex items-center gap-2">
                <Clock className="w-4 h-4 text-red-800" />
                Weekly Trading Hours
              </h4>
              <div className="grid grid-cols-2 gap-2 text-xs text-stone-700 max-w-sm">
                <div className="font-medium">Monday – Friday:</div>
                <div className="text-right font-bold text-stone-900">7:00 AM – 5:30 PM</div>
                <div className="font-medium">Saturday:</div>
                <div className="text-right font-bold text-stone-900">7:00 AM – 12:30 PM</div>
                <div className="font-medium text-stone-400">Sunday:</div>
                <div className="text-right text-stone-400 font-semibold">Closed</div>
              </div>
            </div>
          </div>

          {/* Map Preview Frame */}
          <div className="bg-white p-4 rounded-2xl border border-stone-200 shadow-sm">
            <div className="w-full h-80 rounded-xl overflow-hidden bg-stone-100 relative">
              <iframe
                title="G&J Appin St Butchery Location Map"
                src="https://maps.google.com/maps?q=92+Appin+Street+Wangaratta+VIC+3677&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="mt-3 text-center text-xs text-stone-500">
              92 Appin Street, Wangaratta VIC 3677 • Easy street front parking
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
