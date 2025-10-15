// "use client";
// import React, { useEffect, useState } from 'react';
// import Link from 'next/link';
// import axios from 'axios';
// import parse from 'html-react-parser';
// import noImage from '../../../../public/img/noImage.png';
// import Loading from '@/components/Loading/Loadingk';
// import Image from 'next/image';


// const NewsCard = () => {
//     let BASE_WEB_URL = process.env.NEXT_PUBLIC_BASE_CONTENT;
//     let BASE_API = process.env.NEXT_PUBLIC_BASE_API;

//   const [items, setItems] = useState([]);
//   const [totalPages, setTotalPages] = useState(1);
//   const [isLoading, setIsLoading] = useState(true);
//   const [currentPage, setCurrentPage] = useState(1); // Default

//   // ✅ Initialize currentPage from localStorage on mount
//   useEffect(() => {
//     const savedPage = parseInt(localStorage.getItem('newsCurrentPage')) || 1;
//     setCurrentPage(savedPage);
//   }, []);

//   // ✅ Save currentPage to localStorage
//   useEffect(() => {
//     localStorage.setItem('newsCurrentPage', currentPage);
//   }, [currentPage]);

//   // ✅ Fetch news when currentPage changes
//   useEffect(() => {
//     const fetchNews = async () => {
//       setIsLoading(true);
//       try {
//         const res = await axios.get(`${BASE_API}/NewsAnnounce/GetPagedNewsList?pageIndex=${currentPage}&pageSize=6`);
//         const newsData = res.data?.data;
//         setItems(newsData?.items || []);
//         setTotalPages(newsData?.totalPages || 1);
//       } catch (error) {
//         console.error("Failed to fetch news:", error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchNews();
//   }, [currentPage]);

//   const handlePageChange = (page) => {
//     if (page >= 1 && page <= totalPages) {
//       setCurrentPage(page);
//       window.scrollTo({ top: 0, behavior: 'smooth' });
//     }
//   };

//   const renderPageNumbers = () => {
//     const pageNumbers = [];

//     if (totalPages <= 5) {
//       for (let i = 1; i <= totalPages; i++) {
//         pageNumbers.push(i);
//       }
//     } else {
//       if (currentPage <= 2) {
//         pageNumbers.push(1, 2, '...', totalPages);
//       } else if (currentPage >= totalPages - 1) {
//         pageNumbers.push(1, '...', totalPages - 1, totalPages);
//       } else {
//         pageNumbers.push(
//           1,
//           '...',
//           currentPage - 1,
//           currentPage,
//           currentPage + 1,
//           '...',
//           totalPages
//         );
//       }
//     }

//     return pageNumbers.map((number, index) =>
//       number === '...' ? (
//         <span key={index} className="px-2 text-gray-400">...</span>
//       ) : (
//         <button
//           key={index}
//           onClick={() => handlePageChange(number)}
//           className={`w-8 h-8 mx-1 flex items-center justify-center rounded ${
//             currentPage === number
//               ? 'bg-white text-black font-bold'
//               : 'text-white hover:bg-gray-600'
//           }`}
//         >
//           {number}
//         </button>
//       )
//     );
//   };



//   //  Show loading
//   if (isLoading) {
//     return (
//       <div className="text-white relative min-h-screen flex justify-center items-center text-2xl">
//         <Loading />
//       </div>
//     );
//   }

//   //  Show if no news found
//   if (!items || items.length === 0) {
//     return (
//       <div className="text-white text-center min-h-screen flex justify-center items-center text-2xl">
//         No News Found.
//       </div>
//     );
//   }

//   //  Main render
//   return (
//     <>
//       <div className="grid grid-cols-1 justify-self-center md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {items.map((news) => (
//           <Link className='w-fit mx-auto' key={news.id} href={`/news/${news.id}`} state={news}>
//             <div className="border allCards border-[#374151] rounded-[30px] w-fit px-[20px] py-[30px]">
//               <div className="max-w-[250px] sm:max-w-sm rounded-lg overflow-hidden text-white">
//                 <div className="relative">

// <Image src={BASE_WEB_URL+news?.fileURL+news?.image1 || noImage} width={300} height={300} alt='newsImg'></Image>
//                 </div>
//                 <div className="p-4">
//                   <div className="font-bold twoLinePara text-xl mb-2 text-white">
//                     {news.title}
//                   </div>
//                   <div className="text-gray-400 twoLinePara font-semibold text-base">
//                     {parse(news?.description || '')}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>

//       {/* Pagination Controls */}
//       <div className="mt-10 flex justify-center items-center space-x-1 text-white">
//         <button
//           onClick={() => handlePageChange(currentPage - 1)}
//           disabled={currentPage === 1}
//           className="px-3 py-1 text-white disabled:opacity-50"
//         >
//           Prev
//         </button>

//         {renderPageNumbers()}

//         <button
//           onClick={() => handlePageChange(currentPage + 1)}
//           disabled={currentPage === totalPages}
//           className="px-3 py-1 text-white disabled:opacity-50"
//         >
//           Next
//         </button>
//       </div>
//     </>
//   );
// };

// export default NewsCard;
