"use client";

import { useEffect, useState, useRef } from "react";
import Navbar from "./Navbar";

export default function Videos() {
  const [videos, setVideos] = useState([]);
  const [nextPage, setNextPage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const loaderRef = useRef(null);

  const API_KEY = "AIzaSyA-6REW6Tdgq3CgxzTyQ900stzYib4L_T4";
  const CHANNEL_ID = "UCbXD5z_1OflMuiekSJfEO8Q";

  // 🔥 Fetch videos (append mode)
  const fetchVideos = async (pageToken = "") => {
    if (!hasMore) return;

    setLoading(true);

    try {
      const res = await fetch(
        `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=50&pageToken=${pageToken}`
      );
      const data = await res.json();

      // Append new videos
      setVideos((prev) => [...prev, ...(data.items || [])]);

      // Store next page token
      if (data.nextPageToken) {
        setNextPage(data.nextPageToken);
      } else {
        setHasMore(false); // No more videos
      }
    } catch (err) {
      console.error("Error loading videos:", err);
    }

    setLoading(false);
  };

  // Initial load
  useEffect(() => {
    fetchVideos();
  }, []);

  // 🔥 Infinite Scroll Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && nextPage && !loading) {
          fetchVideos(nextPage);
        }
      },
      { threshold: 1 }
    );

    if (loaderRef.current) observer.observe(loaderRef.current);

    return () => observer.disconnect();
  }, [nextPage, loading]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* HERO SECTION */}
      <section className="w-full py-20 pt-36 text-center bg-gradient-to-br from-[#E87331] to-[#563D2F] text-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Latest Stories
          </h2>
          <p className="text-lg md:text-xl font-medium mb-2 opacity-95">
            Watch our latest news reports and investigative stories from across
            Kerala
          </p>
          <p className="text-sm md:text-base opacity-90 leading-relaxed">
            Connecting the logic behind every story — Independent journalism you
            can trust
          </p>
        </div>
      </section>

      {/* FEATURED SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <h3 className="text-2xl font-bold text-center text-black mb-3">
          Featured Reports & Investigations
        </h3>
        <p className="text-center max-w-3xl mx-auto text-gray-600 mb-10">
          At News Bullet Kerala, we believe in journalism that empowers you to
          think critically. Our mission is to bring authentic news stories that
          matter to our community.
        </p>

        {/* VIDEO GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 ">
          {videos.map((v, i) => (
            <div
              key={v.id.videoId || v.etag || i}
              className="rounded-xl overflow-hidden shadow-md border bg-white hover:scale-[1.02] transition"
            >
              {/* Thumbnail */}
              <a
                href={`https://www.youtube.com/watch?v=${v.id.videoId}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={v.snippet?.thumbnails?.high?.url}
                  alt={v.snippet?.title}
                  className="w-full h-48 object-cover"
                />
              </a>

              <div className="px-5 pt-2 pb-5 bg-white">
                {/* Title */}
                <h4 className="font-semibold text-black text-lg leading-snug mb-3 line-clamp-2 hover:text-[#945835] transition">
                  {v.snippet?.title}
                </h4>

                {/* Description */}
                <p className="text-sm text-[#896F5D] mb-5 line-clamp-3 leading-relaxed">
                  {v.snippet?.description}
                </p>

                {/* Divider */}
                <div className="w-full h-px bg-gray-200 mb-4"></div>

                {/* Button */}
                <a
                  href={`https://www.youtube.com/watch?v=${v.id.videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block text-sm text-center px-4 py-1 rounded-lg
              border border-[#533D2E]
               text-black font-medium shadow-md hover:opacity-90 transition-all
               active:scale-95"
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

          {!hasMore && (
            <p className="text-gray-500 text-center">
              No more videos available.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
