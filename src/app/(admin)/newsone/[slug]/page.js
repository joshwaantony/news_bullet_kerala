"use client";

import { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import useNewsStore from "@/store/admin/news.store";

export default function NewsViewPage() {
  const { slug } = useParams();
  const router = useRouter();

  const {
    fetchNewsBySlug,
    singleNews,
    loading,
    error,
  } = useNewsStore();

  useEffect(() => {
    if (slug) {
      fetchNewsBySlug(slug);
    }
  }, [slug, fetchNewsBySlug]);

  if (loading) {
    return (
      <div className="p-10 text-center text-gray-500">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-10 text-center text-red-500">
        {error}
      </div>
    );
  }

  if (!singleNews) return null;

  return (
    <div className="p-6 sm:p-10 max-w-4xl mx-auto">
      {/* Back */}
      <button
        onClick={() => router.back()}
        className="mb-6 text-sm text-orange-600 hover:underline"
      >
        ← Back to News
      </button>

      {/* Title */}
      <h1 className="text-3xl font-bold text-[#231A15] mb-4">
        {singleNews.heading}
      </h1>

      {/* Date */}
      <p className="text-sm text-gray-500 mb-6">
        {new Date(singleNews.createdAt).toLocaleString()}
      </p>

      {/* Body */}
      <div className="text-gray-700 leading-relaxed whitespace-pre-line">
        {singleNews.body}
      </div>
    </div>
  );
}
