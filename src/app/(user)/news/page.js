



"use client";

import { newsService } from "@/api/news/newsService";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import NewsCard from "@/components/news/NewsCard";
import { Newspaper, TrendingUp } from "lucide-react";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [newsList, setNewsList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    newsService.getAll().then((res) => {
      setNewsList(res || []);
      setLoading(false);
    });
  }, []);

  if (loading)
    return (
      <div className="w-full min-h-screen flex justify-center items-center">
        <Loader />
      </div>
    );

  return (
    <div className="w-full min-h-screen bg-white">
      <Navbar />

      {/* HERO SECTION */}
      <section className="px-4 sm:px-6 md:px-10 lg:px-16">
        <div
          className="
            w-full
            h-[320px] sm:h-[380px] md:h-[450px]
            bg-gradient-to-t from-[#ffffff] to-[#fbf0e9]
            rounded-2xl
            mt-8 sm:mt-10
            flex flex-col justify-center items-center
            text-center
            px-4
          "
        >
          <span
            className="
              text-[#ed7322]
              text-xs sm:text-sm
              font-medium
              rounded-full
              flex gap-2 items-center
              bg-[#fae4d5]
              px-3 sm:px-4 py-1.5 sm:py-2
            "
          >
            <TrendingUp size={16} />
            ട്രെൻഡിംഗ് ന്യൂസ്
          </span>

          <h1
            className="
              text-[#ed7322]
              font-medium
              text-3xl sm:text-4xl md:text-5xl
              mt-3
            "
          >
            വാർത്തകൾ
          </h1>

          <p
            className="
              text-[#8a6f5c]
              mt-3 sm:mt-4
              font-light
              text-sm sm:text-base md:text-[20px]
              max-w-2xl
            "
          >
            കേരളത്തിലെയും ഇന്ത്യയിലെയും ലോകത്തെയും ഏറ്റവും പുതിയ വാർത്തകൾ
          </p>
        </div>
      </section>

      {/* MAIN NEWS */}
      <section className="px-4 sm:px-6 md:px-10 lg:px-16 mt-10">
        <div className="flex gap-2 items-center">
          <Newspaper className="text-[#ed7322]" size={22} />
          <h3 className="text-black text-lg sm:text-xl font-bold">
            പ്രധാന വാർത്ത
          </h3>
        </div>
      </section>

      <section className="px-4 sm:px-6 md:px-10 lg:px-16 mt-4">
        {newsList.length > 0 && (
          <NewsCard news={newsList[0]} latest />
        )}
      </section>

      {/* MORE NEWS */}
      <section className="px-4 sm:px-6 md:px-10 lg:px-16 mt-12">
        <div className="flex gap-2 items-center">
          <TrendingUp className="text-[#ed7322]" size={22} />
          <h3 className="text-black text-lg sm:text-xl font-bold">
            കൂടുതൽ വാർത്തകൾ
          </h3>
        </div>
      </section>

      <section className="px-4 sm:px-6 md:px-10 lg:px-16 mt-4 pb-16">
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-4 sm:gap-6
          "
        >
          {newsList.slice(1).map((item) => (
            <NewsCard key={item.slug} news={item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Page;
