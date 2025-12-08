
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
      setNewsList(res);
      setLoading(false);
    });
  }, []);

  if (loading) return <p className="w-full min-h-screen flex justify-center items-center">
    <Loader/>
  </p>;

  return (
    <div className="w-full min-h-screen bg-white px-16">
      <Navbar />

      {/* HERO SECTION */}
      <section>
        <div className="w-full h-[450px] bg-gradient-to-t from-[#ffffff] to-[#fbf0e9] rounded-2xl mt-25 flex flex-col justify-center items-center">
          <span className="text-[#ed7322] text-sm font-medium rounded-full flex gap-2 items-center bg-[#fae4d5] px-4 py-2 ">
            <TrendingUp />
            ട്രെൻഡിംഗ് ന്യൂസ്
          </span>

          <h1 className="text-[#ed7322] font-medium text-5xl mt-3">
            വാർത്തകൾ
          </h1>

          <p className="text-[#8a6f5c] mt-4 font-light text-[20px]">
            കേരളത്തിലെയും ഇന്ത്യയിലെയും ലോകത്തെയും ഏറ്റവും പുതിയ വാർത്തകൾ
          </p>
        </div>
      </section>

      {/* MAIN NEWS */}
      <section className="px-7">
        <div className="flex gap-3 mt-2">
          <Newspaper className="text-[#ed7322]" />
          <h3 className="text-black text-xl font-bold">പ്രധാന വാർത്ത</h3>
        </div>
      </section>

      <section className="px-7 mt-4">
        {newsList.length > 0 && (
          <NewsCard news={newsList[0]} latest={true} />
        )}
      </section>

      {/* MORE NEWS */}
      <section className="px-7">
        <div className="flex gap-3 mt-2">
          <TrendingUp className="text-[#ed7322]" />
          <h3 className="text-black text-xl font-bold">കൂടുതൽ വാർത്തകൾ</h3>
        </div>
      </section>

      <section className="px-7 mt-4">
        <div className="grid grid-cols-2 gap-4">
          {newsList.slice(1).map((item) => (
            <NewsCard key={item.slug} news={item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Page;
