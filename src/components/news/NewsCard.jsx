import React from "react";
import { CiCalendar } from "react-icons/ci";
import { Calendar, Clock, ChevronRight } from "lucide-react";
import Link from "next/link";

const NewsCard = ({ latest = false, news }) => {
  if (!news) return null;

  return latest ? (
    <div className="group w-full h-[450px] border-t-3 border-[#ed7322] bg-gradient-to-t from-[#ffffff] px-5 rounded-4xl to-[#fbf0e9] ">
      <div className="flex mt-4 gap-2">
        <span className="text-[#ed7322] text-sm font-medium  rounded-full flex gap-2 items-center bg-[#fae4d5] px-4 py-2 ">
          ഫീച്ചേർഡ്
        </span>

        <span className="flex  text-[#8a6f5c] items-center justify-center">
          <CiCalendar className="text-[18px]" />
          <h4>{new Date(news.createdAt).toDateString()}</h4>
        </span>
        <span className="flex  text-[#8a6f5c] items-center justify-center">
          <Clock className="text-[15px]" />
          <h4>1 min</h4>
        </span>
      </div>

      <h1 className="mt-4 text-3xl font-bold text-black leading-tight group-hover:text-[#ed7322] transition-colors duration-300">
        {news.heading}
      </h1>

      <p className="mt-2 text-[#8a6f5c] leading-relaxed line-clamp-4 mb-6">
        {news.body}
      </p>
      <Link href={`/news/${news.slug}`}>
        <div className="flex items-center text-[#8a6f5c] font-semibold hover:gap-3 gap-2 transition-all duration-300">
          <span>കൂടുതൽ വായിക്കുക</span>
          <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
        </div>
      </Link>
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
          <h4>{new Date(news.createdAt).toDateString()}</h4>
        </span>

        <span className="flex items-center gap-1">
          <Clock className="text-[14px]" />
          <h4>1 min</h4>
        </span>
      </div>

      <h2 className="mt-3 text-xl font-semibold text-black group-hover:text-[#ed7322] leading-snug transition-colors duration-300">
        {news.heading}
      </h2>

      <p className="mt-2 text-[#8a6f5c] leading-relaxed line-clamp-3 mb-6">
        {news.body}
      </p>
      <Link href={`/news/${news.slug}`}>
        <div className="flex items-center text-[#ed7322] font-semibold hover:gap-2 gap-1 transition-all duration-300">
          <span>വായിക്കുക</span>
          <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1 transition-transform duration-300" />
        </div>
      </Link>
    </div>
  );
};

export default NewsCard;
