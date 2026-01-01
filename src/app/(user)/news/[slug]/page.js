// "use client";

// import { use, useEffect, useState } from "react";
// import { ArrowLeft, Calendar, Clock, Share2, Copy } from "lucide-react";
// import Navbar from "@/components/Navbar";
// import { newsService } from "@/api/news/newsService";
// import { timeAgo } from "@/utils/timeAgo";
// import Link from "next/link";
// import Loader from "@/components/Loader";

// export default function SingleNewsPage({ params }) {
//   const shareUrl = typeof window !== "undefined" ? window.location.href : "";
//   const { slug } = use(params); // ✅ FIX: unwrap params Promise

//   const [news, setNews] = useState(null);

//    // Copy link success state (optional: for animated text)
//   const [copied, setCopied] = useState(false);

//   const handleCopy = async () => {
//     await navigator.clipboard.writeText(shareUrl);
//     setCopied(true);

//     setTimeout(() => setCopied(false), 1500);
//   };




//   useEffect(() => {
//     async function fetchNews() {
//       try {
//         const data = await newsService.getSingle(slug);
//         setNews(data);
//       } catch (error) {
//         console.error("Error fetching news:", error);
//       }
//     }

//     if (slug) fetchNews();
//   }, [slug]); 


//   if (!news) return <p className="p-10 w-full min-h-screen flex justify-center items-center">
//     <Loader/>
//   </p>;

//   return (
//     <div className="max-w-4xl mx-auto px-5 py-6">
//       <Navbar />

//      <Link
//   href="/news"
//   className="flex items-center gap-2 text-black font-medium hover:text-[#ed7322] transition-colors duration-300"
// >
//   <ArrowLeft className="w-4 h-4" />
//   <span className="text-[#8a6f5c]">മടങ്ങുക</span>
// </Link>

//       <div className="flex  gap-7 items-center mt-10">
//         <span className="flex text-[#8a6f5c] items-center">
//           <Calendar />
//           <h4>{new Date(news.createdAt).toDateString()}</h4>
//         </span>

//         <span className="flex text-[#8a6f5c] items-center">
//           <Clock />
//           <h4>{timeAgo(news.updatedAt)}</h4>
//         </span>
//       </div>

//    <div className="flex items-center gap-3 mb-10 mt-5 pb-8 border-b border-border/50">
//       <span className="text-[#463a31]">ഷെയർ ചെയ്യുക:</span>

//       {/* WhatsApp */}
//       <a
//         href={`https://api.whatsapp.com/send?text=${encodeURIComponent(shareUrl)}`}
//         target="_blank"
//         rel="noopener noreferrer"
//         className="
//           inline-flex items-center gap-2
//           rounded-full border border-[#25d366]/30
//           bg-white px-4 py-1.5 text-sm font-medium text-[#075e54]
//           shadow-sm
//           hover:bg-[#e3f8ec]
//           hover:border-[#25d366]
//           transition-colors duration-200
//         "
//       >
//         <Share2 className="w-4 h-4" />
//         <span>WhatsApp</span>
//       </a>

//       {/* Facebook */}
//       <a
//         href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
//           shareUrl
//         )}`}
//         target="_blank"
//         rel="noopener noreferrer"
//         className="
//           inline-flex items-center gap-2
//           rounded-full border border-[#1877f2]/30
//           bg-white px-4 py-1.5 text-sm font-medium text-[#1877f2]
//           shadow-sm
//           hover:bg-[#e7f0ff]
//           hover:border-[#1877f2]
//           transition-colors duration-200
//         "
//       >
//         <Share2 className="w-4 h-4" />
//         <span>Facebook</span>
//       </a>

//       {/* Copy Link */}
//       <button
//         onClick={handleCopy}
//         className="
//           inline-flex items-center gap-2
//           rounded-full border border-gray-300
//           bg-white px-4 py-1.5 text-sm font-medium text-gray-700
//           shadow-sm
//           hover:bg-gray-100
//           transition-colors duration-200
//         "
//       >
//         <Copy className="w-4 h-4" />
//         <span>{copied ? "Copied!" : "Copy link"}</span>
//       </button>
//     </div>


//       <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-8 pt-4">
//         {news.heading}
//       </h1>

//       <p className="text-lg md:text-xl text-[#463a31] whitespace-pre-line leading-relaxed">
//         {news.body}
//       </p>

//       <div className="border-b border-border/30 mt-8"></div>
//     </div>
//   );
// }





"use client";

import { use, useEffect, useState } from "react";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Share2,
  Copy,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import { newsService } from "@/api/news/newsService";
import { timeAgo } from "@/utils/timeAgo";
import Link from "next/link";
import Loader from "@/components/Loader";

export default function SingleNewsPage({ params }) {
  const shareUrl =
    typeof window !== "undefined" ? window.location.href : "";

  const { slug } = use(params);

  const [news, setNews] = useState(null);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

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

  if (!news)
    return (
      <div className="w-full min-h-screen flex justify-center items-center">
        <Loader />
      </div>
    );

  return (
    <div className="w-full bg-white">
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Back */}
        <Link
          href="/news"
          className="inline-flex items-center gap-2 text-sm sm:text-base
          text-[#8a6f5c] hover:text-[#ed7322]
          transition-colors duration-300"
        >
          <ArrowLeft className="w-4 h-4" />
          മടങ്ങുക
        </Link>

        {/* Meta */}
        <div
          className="
            flex flex-wrap gap-4 sm:gap-6
            items-center mt-6 sm:mt-8
            text-xs sm:text-sm
          "
        >
          <span className="flex items-center gap-2 text-[#8a6f5c]">
            <Calendar className="w-4 h-4" />
            {new Date(news.createdAt).toDateString()}
          </span>

          <span className="flex items-center gap-2 text-[#8a6f5c]">
            <Clock className="w-4 h-4" />
            {timeAgo(news.updatedAt)}
          </span>
        </div>

        {/* Share */}
        <div
          className="
            flex flex-wrap gap-3
            items-center mt-6 mb-8 pb-6
            border-b border-border/50
          "
        >
          <span className="text-[#463a31] text-sm sm:text-base">
            ഷെയർ ചെയ്യുക:
          </span>

          {/* WhatsApp */}
          <a
            href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
              shareUrl
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-2
              rounded-full border border-[#25d366]/30
              bg-white px-4 py-1.5 text-xs sm:text-sm
              font-medium text-[#075e54]
              shadow-sm hover:bg-[#e3f8ec]
              hover:border-[#25d366]
              transition
            "
          >
            <Share2 className="w-4 h-4" />
            WhatsApp
          </a>

          {/* Facebook */}
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
              shareUrl
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-2
              rounded-full border border-[#1877f2]/30
              bg-white px-4 py-1.5 text-xs sm:text-sm
              font-medium text-[#1877f2]
              shadow-sm hover:bg-[#e7f0ff]
              hover:border-[#1877f2]
              transition
            "
          >
            <Share2 className="w-4 h-4" />
            Facebook
          </a>

          {/* Copy */}
          <button
            onClick={handleCopy}
            className="
              inline-flex items-center gap-2
              rounded-full border border-gray-300
              bg-white px-4 py-1.5 text-xs sm:text-sm
              font-medium text-gray-700
              shadow-sm hover:bg-gray-100
              transition
            "
          >
            <Copy className="w-4 h-4" />
            {copied ? "Copied!" : "Copy link"}
          </button>
        </div>

        {/* Heading */}
        <h1
          className="
            text-2xl sm:text-3xl md:text-4xl lg:text-5xl
            font-bold text-black
            mb-6 sm:mb-8
            leading-tight
          "
        >
          {news.heading}
        </h1>

        {/* Body */}
        <p
          className="
            text-base sm:text-lg md:text-xl
            text-[#463a31]
            whitespace-pre-line
            leading-relaxed
          "
        >
          {news.body}
        </p>

        <div className="border-b border-border/30 mt-8 sm:mt-10" />
      </div>
    </div>
  );
}
