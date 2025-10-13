// "use client"

// import React, { useEffect, useState } from 'react'
// import NewsCard from './components/NewsCard'
// import HeadingL from '@/components/utilities/HeadingL'
// import Para from '@/components/utilities/Para'


// function News() {

//   return (
//     <div>
// <NewsCard></NewsCard>

//     </div>
//   )
// }

// export default News



import Link from 'next/link';
import Image from 'next/image';
import parse from 'html-react-parser';
import noImage from '../../../public/img/noImage.png';
import HeadingL from '@/components/utilities/HeadingL';
import Para from '@/components/utilities/Para';

const NEWS_PAGE_SIZE = 6;

async function fetchNews(page) {
  const BASE_API = process.env.NEXT_PUBLIC_BASE_API;
  const res = await fetch(
    `${BASE_API}/NewsAnnounce/GetPagedNewsList?pageIndex=${page}&pageSize=${NEWS_PAGE_SIZE}`,
    { cache: 'no-store' }
  );
  if (!res.ok) {
    throw new Error('Failed to fetch news');
  }
  const json = await res.json();
  return json?.data || { items: [], totalPages: 1 };
}

export default async function NewsPage(props) {
  // **Await searchParams**
  const sp = await props.searchParams;
  const pageParam = sp?.page;

  const currentPage = parseInt(pageParam || '1', 10);
  const pageNumber = isNaN(currentPage) || currentPage < 1 ? 1 : currentPage;

  const newsData = await fetchNews(pageNumber);
  const items = newsData.items || [];
  const totalPages = newsData.totalPages || 1;

  const BASE_WEB_URL = process.env.NEXT_PUBLIC_BASE_CONTENT;

  if (!items.length) {
    return (
      <div className="text-white text-center min-h-screen flex justify-center items-center text-2xl">
        No News Found.
      </div>
    );
  }

  const renderPageNumbers = () => {
    const pageNumbers = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (pageNumber <= 2) {
        pageNumbers.push(1, 2, '...', totalPages);
      } else if (pageNumber >= totalPages - 1) {
        pageNumbers.push(1, '...', totalPages - 1, totalPages);
      } else {
        pageNumbers.push(
          1,
          '...',
          pageNumber - 1,
          pageNumber,
          pageNumber + 1,
          '...',
          totalPages
        );
      }
    }

    return pageNumbers.map((num, idx) =>
      num === '...' ? (
        <span key={idx} className="px-2 text-gray-400">...</span>
      ) : (
        <Link
          key={idx}
          href={`/news?page=${num}`}
          className={`w-8 h-8 mx-1 flex items-center justify-center rounded ${
            pageNumber === num
              ? 'bg-white text-black font-bold'
              : 'text-white hover:bg-gray-600'
          }`}
        >
          {num}
        </Link>
      )
    );
  };

  return (
    <div className="container mx-auto px-4 py-8 text-white">
      <HeadingL label="News" />
      <Para label="Stay updated with the latest news and announcements from our company." />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((news) => (
          <Link key={news.id} href={`/news/${news.id}`}>
            <div className="border allCards border-[#374151] rounded-[30px] w-fit px-[20px] py-[30px]">
              <div className="max-w-[250px] sm:max-w-sm rounded-lg overflow-hidden text-white">
                <div className="relative">
                  <Image
                    src={
                      news?.image1
                        ? `${BASE_WEB_URL}${news.fileURL}${news.image1}`
                        : noImage
                    }
                    width={300}
                    height={300}
                    alt={news.title}
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="p-4">
                  <div className="font-bold twoLinePara text-xl mb-2 text-white">
                    {news.title}
                  </div>
                  <div className="text-gray-400 twoLinePara font-semibold text-base">
                    {parse(news.description || '')}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-10 flex justify-center items-center space-x-1 text-white">
        {pageNumber > 1 && (
          <Link href={`/news?page=${pageNumber - 1}`} className="px-3 py-1 text-white">
            Prev
          </Link>
        )}

        {renderPageNumbers()}

        {pageNumber < totalPages && (
          <Link href={`/news?page=${pageNumber + 1}`} className="px-3 py-1 text-white">
            Next
          </Link>
        )}
      </div>
    </div>
  );
}
