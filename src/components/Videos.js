


"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Navbar from "./Navbar";
import api from "@/api/axios";
import { SubscriptionService } from "@/api/payments/subscriptionService";

export default function Videos() {
  const [videos, setVideos] = useState([]);
  const [page, setPage] = useState(1);            // ⭐ your API uses pages
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [checkingInfo, setCheckingInfo] = useState(true);
  
  const router = useRouter();

  const loaderRef = useRef(null);

const API_URL = `https://newsbulletkerala.com/server/api/youtube`;

const fetchVideos = async () => {
  if (!hasMore || loading) return;

  setLoading(true);

  try {
    const res = await api.get(`${API_URL}?page=${page}`);

    // ⛔ If API fails — Axios throws error before here, so no res.ok needed
    console.log("API Response:", res);

    // Axios always returns data inside res.data
    const json = res.data;

    // Validate structure
    if (!json?.data?.videos || !Array.isArray(json.data.videos)) {
      console.warn("Invalid API response format");
      setHasMore(false);
      setLoading(false);
      return;
    }

    // Append new videos
    setVideos((prev) => [...prev, ...json.data.videos]);

    // Pagination logic
    if (json.data.hasMore === true) {
      setPage((prev) => prev + 1);
    } else {
      setHasMore(false);
    }

  } catch (err) {
    console.error("Network/API Error:", err);
    setHasMore(false); // stop infinite scroll
  }

  setLoading(false);
};


  // Initial fetch
  useEffect(() => {
    const checkSubscriptionAndFetch = async () => {
      try {
        const res = await SubscriptionService.getUserSubscriptions();
        const subs = res?.data?.data || [];
        const isSubscribed = subs.some((sub) =>
          ["active", "authenticated", "pending"].includes(sub.status)
        );

        if (!isSubscribed) {
          router.replace("/donation");
        } else {
          setCheckingInfo(false);
          fetchVideos();
        }
      } catch (error) {
        console.error("Subscription check failed", error);
        router.replace("/donation");
      }
    };

    checkSubscriptionAndFetch();
  }, []);

  // 🔥 Infinite scroll trigger
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !loading) {
          fetchVideos();
        }
      },
      { threshold: 1 }
    );

    if (loaderRef.current) observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, [hasMore, loading]);

  if (checkingInfo) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="w-10 h-10 border-4 border-orange-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#e3e3e377]">
      <Navbar />


<section className="w-full h-[300px] bg-white  relative">
  <img
    src="/banner.jpg"
    alt="Banner"
    className="w-full h-full md:block hidden  object-cover"
    

  />
    <img
    src="/mobile.png"
    alt="Banner"
    className="w-full h-full md:hidden block object-contain"
    

  />
</section>

      {/* FEATURED SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <h3 className="text-2xl font-bold text-center text-black mb-3">
          Featured Reports & Investigations
        </h3>

        <p className="text-center max-w-3xl mx-auto text-gray-600 mb-10">
          At News Bullet Kerala, we believe in journalism that empowers you to think critically.
        </p>

        {/* VIDEO GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {videos.map((v, i) => (
            <div
               key={`${v.videoId}-${i}`}
              className="rounded-xl overflow-hidden shadow-md border bg-white hover:scale-[1.02] transition"
            >
              <a
                href={`https://www.youtube.com/watch?v=${v.videoId}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={v.thumbnail}
                  alt={v.title}
                  className="w-full h-48 object-cover"
                />
              </a>

              <div className="px-5 pt-2 pb-5 bg-white">
                <h4 className="font-semibold text-black text-lg leading-snug mb-3 line-clamp-2 hover:text-[#945835] transition">
                  {v.title}
                </h4>

                <p className="text-sm text-[#896F5D] mb-5 line-clamp-3 leading-relaxed">
                  {v.description}
                </p>

                <div className="w-full h-px bg-gray-200 mb-4"></div>

                <a
                  href={`https://www.youtube.com/watch?v=${v.videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block text-sm text-center px-4 py-1 rounded-lg
                  border border-[#533D2E] text-black font-medium shadow-md
                  hover:opacity-90 transition-all active:scale-95"
                >
                  Watch Video
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Infinite Scroll Loader */}
        <div ref={loaderRef} className="w-full flex justify-center py-10">
          {loading && (
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 border-4 border-orange-600 border-t-transparent rounded-full animate-spin"></div>
              <p className="mt-3 text-gray-600">Loading more videos...</p>
            </div>
          )}

          {/* {!hasMore && (
            <p className="text-gray-500 text-center">No more videos available.</p>
          )} */}
          {!hasMore && videos.length === 0 && (
  <p className="text-center text-red-500 font-medium">
    Failed to load videos. Please try again later.
  </p>
)}

        </div>
      </section>
    </div>
  );
}
