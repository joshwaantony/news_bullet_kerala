"use client";

import { use, useEffect, useState } from "react";
import { ArrowLeft, Calendar, Clock, Share2, Copy } from "lucide-react";
import Navbar from "@/components/Navbar";
import { newsService } from "@/api/news/newsService";
import { timeAgo } from "@/utils/timeAgo";
import Link from "next/link";

export default function SingleNewsPage({ params }) {
  const { slug } = use(params); // ✅ FIX: unwrap params Promise

  const [news, setNews] = useState(null);




  useEffect(() => {
    async function fetchNews() {
      try {
        const data = await newsService.getSingle(slug);
        setNews(data);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    }

    if (slug) fetchNews();
  }, [slug]); 


  if (!news) return <p className="p-10">Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto px-5 py-6">
      <Navbar />

     <Link
  href="/news"
  className="flex items-center gap-2 text-black font-medium hover:text-[#ed7322] transition-colors duration-300"
>
  <ArrowLeft className="w-4 h-4" />
  <span className="text-[#8a6f5c]">മടങ്ങുക</span>
</Link>

      <div className="flex  gap-7 items-center mt-10">
        <span className="flex text-[#8a6f5c] items-center">
          <Calendar />
          <h4>{new Date(news.createdAt).toDateString()}</h4>
        </span>

        <span className="flex text-[#8a6f5c] items-center">
          <Clock />
          <h4>{timeAgo(news.updatedAt)}</h4>
        </span>
      </div>

      <div className="flex items-center gap-3 mb-10 mt-5 pb-8 border-b border-border/50">
  <span className="text-[#463a31]">ഷെയർ ചെയ്യുക:</span>

  {/* WhatsApp */}
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

  {/* Facebook */}
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

  {/* Copy link */}
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


      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-8 pt-4">
        {news.heading}
      </h1>

      <p className="text-lg md:text-xl text-[#463a31] whitespace-pre-line leading-relaxed">
        {news.body}
      </p>

      <div className="border-b border-border/30 mt-8"></div>
    </div>
  );
}
