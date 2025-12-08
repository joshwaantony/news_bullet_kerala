"use client";

import { use, useEffect, useState } from "react";
import { newsService } from "@/api/news/newsService";
import { ArrowLeft, Calendar, Clock, Share2, Copy, Check } from "lucide-react";
import Navbar from "@/components/Navbar";

export default function SingleNewsPage({ params }) {
  const { slug } = use(params);
  const [news, setNews] = useState(null);

  return (
    <div className="max-w-4xl h-screen mx-auto px-5 py-6">
      <Navbar />
      <button
        className="
  flex items-center gap-2
  text-black font-medium
  hover:text-[#ed7322]
  transition-colors duration-300
"
      >
        <ArrowLeft className="w-4 h-4 " />
        <span className="text-[#8a6f5c]">മടങ്ങുക</span>
      </button>

      <section className="flex gap-3 items-center mt-3">
        <span className="flex  text-[#8a6f5c] items-center justify-center">
          <Calendar className="text-[18px]" />
          <h4>10 dec</h4>
        </span>

        <span className="flex  text-[#8a6f5c] items-center justify-center">
          <Clock className="text-[15px]" />
          <h4>1 min</h4>
        </span>
      </section>

      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-8 leading-tight">
        കേരളത്തിലെ വികസന തർക്കം ശക്തമാകുന്നു: ഭരണകക്ഷിയും പ്രതിപക്ഷവും പരസ്പരം
        ആരോപണങ്ങൾ ഉയർത്തുന്നു
      </h1>

      <div className="flex items-center  gap-3 mb-10 pb-8 border-b border-border/30">
        <span className="text-[#8a6f5c]">ഷെയർ ചെയ്യുക:</span>

        <button
          className="
      inline-flex items-center gap-2
      rounded-full border border-[#25d366]/30
      bg-white px-4 py-1.5 text-sm font-medium text-[#075e54]
      shadow-sm
      hover:bg-[#e3f8ec]
      hover:border-[#25d366]
      transition-colors duration-200
    "
        >
          <Share2 className="w-4 h-4" />
          <span>WhatsApp</span>
        </button>

        <button
          className="
      inline-flex items-center gap-2
      rounded-full border border-[#1877f2]/30
      bg-white px-4 py-1.5 text-sm font-medium text-[#1877f2]
      shadow-sm
      hover:bg-[#e7f0ff]
      hover:border-[#1877f2]
      transition-colors duration-200
    "
        >
          <Share2 className="w-4 h-4" />
          <span>Facebook</span>
        </button>

        <button
          className="
      inline-flex items-center gap-2
      rounded-full border border-gray-300
      bg-white px-4 py-1.5 text-sm font-medium text-gray-700
      shadow-sm
      hover:bg-gray-100
      transition-colors duration-200
    "
          // onClick={() => navigator.clipboard.writeText(window.location.href)}
          type="button"
        >
          <Copy className="w-4 h-4" />
          <span>Copy link</span>
        </button>
      </div>

      <div className="max-w-none ">
        <p className="text-lg md:text-xl text-[#463a31] leading-relaxed whitespace-pre-line">
          2025 ലെ നിയമസഭാ തിരഞ്ഞെടുപ്പിനെ മുന്നോടിയായി കേരളത്തിലെ രാഷ്ട്രീയ
          ചർച്ചകൾ കൂടുതൽ കടുത്ത സ്വഭാവം പ്രാപിച്ചിരിക്കുകയാണ്. സംസ്ഥാനത്ത്
          നടപ്പിലാക്കുന്ന പ്രധാന വികസന പദ്ധതികളിലെ പുരോഗതി വൈകുന്നതിനെ
          ചുറ്റിപ്പറ്റിയാണ് പുതിയ രാഷ്ട്രീയ വിവാദങ്ങൾക്ക് തുടക്കമായത്. ദേശീയപാത
          വികസനം, പുതിയ മെഡിക്കൽ കോളേജ് നിർമാണം, നഗര നവീകരണ പദ്ധതി എന്നിവ
          പ്രതീക്ഷിച്ചതിനേക്കാൾ പിന്നാക്കം പോകുന്നതായി പ്രതിപക്ഷം ആരോപിക്കുന്നു.
        </p>
      </div>

      <div className="border-b border-border/30 mt-8"></div>
    </div>
  );
}
