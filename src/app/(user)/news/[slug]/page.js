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
