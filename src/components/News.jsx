"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const News = () => {
    const [news, setNews] = useState([]);
    const [articleNum, setArticleNum] = useState(3);

    useEffect(() => {
        fetch(
            `https://saurav.tech/NewsAPI/top-headlines/category/technology/us.json`
        )
            .then((response) => response.json())
            .then((data) => {
                // console.log(data);
                setNews(data.articles.slice(0, articleNum));
            });
    }, [articleNum]);

    return (
        <div className="text-gray-700 space-y-3 bg-gray-100 rounded-xl pt-2">
            <h4 className="font-bold text-xl px-4">Whats Happening</h4>
            {news.slice(0, articleNum).map((article) => (
                <div key={article.url}>
                    <Link href={article.url} target="_blank">
                        <div className="flex items-center justify-between px-4 py-2 space-x-1 hover:bg-gray-200 transition duration-200">
                            <div className="space-y-0.5">
                                <h6 className="text-sm font-bold line-clamp-3">
                                    {article.title}
                                </h6>
                                <p className="text-xs font-medium text-gray-500">
                                    {article.source.name}
                                </p>
                            </div>
                            <Image
                                src={article.urlToImage}
                                alt={article.title}
                                width={100}
                                height={100}
                                className="rounded-xl w-20 h-12"
                                unoptimized
                            />
                        </div>
                    </Link>
                </div>
            ))}
            <button
                onClick={() => setArticleNum(articleNum + 3)}
                className="text-blue-400 pl-4 pb-3 hover:text-blue-500 text-md font-sans"
            >
                Load More
            </button>
        </div>
    );
};

export default News;
