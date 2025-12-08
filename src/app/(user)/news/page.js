"use client";

import { newsService } from "@/api/news/newsService";
import Navbar from "@/components/Navbar";
import NewsCard from "@/components/news/NewsCard";
import { Newspaper, TrendingUp, Search } from "lucide-react";

import React, { useEffect, useState } from "react";

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [newsList, setNewsList] = useState([]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    newsService.getAll().then(setNewsList);
  }, []);

  console.log(newsList);

  return (
    <div className="w-full h-screen bg-white px-16 ">
      <Navbar />
      <section>
        <div className="w-full h-[450px] bg-gradient-to-t from-[#ffffff] to-[#fbf0e9] rounded-2xl mt-25 flex flex-col justify-center items-center">
          <div>
            <span className="text-[#ed7322] text-sm font-medium rounded-full flex gap-2 items-center bg-[#fae4d5] px-4 py-2 ">
              {/* <BsGraphUpArrow className="text-[#ed7322] font-bold" /> */}
              <TrendingUp />
              ട്രെൻഡിംഗ് ന്യൂസ്
            </span>
          </div>
          <div>
            <h1 className="text-[#ed7322] font-medium  text-5xl mt-3">
              വാർത്തകൾ
            </h1>
          </div>
          <p className="text-[#8a6f5c] mt-4 font-light text-[20px]">
            കേരളത്തിലെയും ഇന്ത്യയിലെയും ലോകത്തെയും ഏറ്റവും പുതിയ വാർത്തകൾ
          </p>
        </div>
      </section>

      <section className="px-7">
        <div className="flex gap-3 mt-2">
          <Newspaper className="text-[#ed7322]" />
          <h3 className="text-black text-xl font-bold">പ്രധാന വാർത്ത</h3>
        </div>
      </section>

      <section className="px-7 mt-4">
        {newsList.length > 0 && <NewsCard news={newsList[0]} latest="true" />}
      </section>

      <section className="px-7">
        <div className="flex gap-3 mt-2">
          <TrendingUp className="text-[#ed7322]" />
          <h3 className="text-black text-xl font-bold">കൂടുതൽ വാർത്തകൾ </h3>
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

export default page;
