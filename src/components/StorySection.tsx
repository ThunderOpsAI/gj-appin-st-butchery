import React from 'react';
import { Award, Heart, CheckCircle2 } from 'lucide-react';

export default function StorySection() {
  return (
    <section className="py-20 bg-stone-900 text-stone-100 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-red-400 bg-red-950/80 px-3 py-1 rounded-full border border-red-800">
            Our Appin Street Tradition
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-serif text-white tracking-tight">
            Traditional Local Butchery for Wangaratta Families
          </h2>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            At G&J Appin St Butchery, we believe in doing things the right way. That means whole carcass breakdown by hand, relationships with regional Victorian livestock producers, and recipes perfected across decades.
          </p>
          <p className="text-stone-400 text-xs sm:text-sm leading-relaxed">
            Whether you are popping in for a quick pound of thin snags for Saturday morning sport, grabbing our famous $50 budget pack for the week's dinners, or securing a centrepiece bone-in Christmas ham for the holidays, you will always be greeted with friendly service and honest butcher advice.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-6 text-xs text-stone-300">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-red-400" /> 100% Australian Beef & Lamb
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-red-400" /> In-House Natural Casings Sausages
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-red-400" /> Custom Bulk Freezer Packing
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
