import React from "react";
import { CiCalendar } from "react-icons/ci";
import { Calendar, Clock, ChevronRight } from "lucide-react";

const NewsCard = ({ latest = false }) => {
  return latest ? (
    <div className="group w-full h-[450px] border-t-3 border-[#ed7322] bg-gradient-to-t from-[#ffffff] px-5 rounded-4xl to-[#fbf0e9] ">
      <div className="flex mt-4 gap-2">
        <span className="text-[#ed7322] text-sm font-medium  rounded-full flex gap-2 items-center bg-[#fae4d5] px-4 py-2 ">
          ഫീച്ചേർഡ്
        </span>

        <span className="flex  text-[#8a6f5c] items-center justify-center">
          <CiCalendar className="text-[18px]" />
          <h4>Dec 03,2025</h4>
        </span>
        <span className="flex  text-[#8a6f5c] items-center justify-center">
          <Clock className="text-[15px]" />
          <h4>1 min</h4>
        </span>
      </div>

      <h1 className="mt-4 text-3xl font-bold text-black leading-tight group-hover:text-[#ed7322] transition-colors duration-300">
        കേരളത്തിലെ വികസന തർക്കം ശക്തമാകുന്നു: ഭരണകക്ഷിയും പ്രതിപക്ഷവും പരസ്പരം
        ആരോപണങ്ങൾ ഉയർത്തുന്നു
      </h1>

      <p className="mt-2 text-[#8a6f5c] leading-relaxed line-clamp-4 mb-6">
        2025 ലെ നിയമസഭാ തിരഞ്ഞെടുപ്പിനെ മുന്നോടിയായി കേരളത്തിലെ രാഷ്ട്രീയ
        ചർച്ചകൾ കൂടുതൽ കടുത്ത സ്വഭാവം പ്രാപിച്ചിരിക്കുകയാണ്. സംസ്ഥാനത്ത്
        നടപ്പിലാക്കുന്ന പ്രധാന വികസന പദ്ധതികളിലെ പുരോഗതി വൈകുന്നതിനെ
        ചുറ്റിപ്പറ്റിയാണ് പുതിയ രാഷ്ട്രീയ വിവാദങ്ങൾക്ക് തുടക്കമായത്. ദേശീയപാത
        വികസനം, പുതിയ മെഡിക്കൽ കോളേജ് നിർമാണം, നഗര നവീകരണ പദ്ധതി എന്നിവ
        പ്രതീക്ഷിച്ചതിനേക്കാൾ പിന്നാക്കം പോകുന്നതായി പ്രതിപക്ഷം ആരോപിക്കുന്നു.
      </p>

      <div className="flex items-center text-[#8a6f5c] font-semibold hover:gap-3 gap-2 transition-all duration-300">
        <span>കൂടുതൽ വായിക്കുക</span>
        <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
      </div>
    </div>
  ) : (
    <div
      className="relative group w-full h-[350px] border border-[#ed7322]/20
  bg-white px-5 rounded-3xl shadow-2xl overflow-hidden"
    >
      {/* animated top border */}
      <div
        className="pointer-events-none absolute left-0 top-0 h-[3px] bg-[#ed7322]
    w-0 group-hover:w-full transition-all duration-300 ease-out"
      />

      <div className="flex mt-4 gap-2 text-[#8a6f5c] text-sm">
        <span className="flex items-center gap-1">
          <CiCalendar className="text-[16px]" />
          <h4>Dec 03, 2025</h4>
        </span>

        <span className="flex items-center gap-1">
          <Clock className="text-[14px]" />
          <h4>1 min</h4>
        </span>
      </div>

      <h2 className="mt-3 text-xl font-semibold text-black group-hover:text-[#ed7322] leading-snug transition-colors duration-300">
        കേരളത്തിലെ വികസന തർക്കം ശക്തമാകുന്നു
      </h2>

      <p className="mt-2 text-[#8a6f5c] leading-relaxed line-clamp-3 mb-6">
        സംസ്ഥാനത്ത് നടക്കുന്ന വികസനപ്രവർത്തനങ്ങളെ ചുറ്റിപ്പറ്റി പുതിയ രാഷ്ട്രീയ
        വിവാദങ്ങൾ ഉയരുന്നു...
      </p>

      <div className="flex items-center text-[#ed7322] font-semibold hover:gap-2 gap-1 transition-all duration-300">
        <span>വായിക്കുക</span>
        <ChevronRight className="w-4 h-4 transition-transform" />
      </div>
    </div>
  );
};

export default NewsCard;
