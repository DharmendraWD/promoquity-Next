"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BlogPostCard from './components/BlogCard';
import noImage from "../../../public/img/noImage.png";
import FirstThreeBlogs from '@/components/utilities/blogs/FirstThreeBlogs';

const AllBlogPosts = () => {
  const BASE_API = process.env.NEXT_PUBLIC_BASE_API;

  const [items, setItems] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1); // default to 1

  const numOfBlogs = 9;

  // ✅ Set current page from localStorage once we’re on client
  useEffect(() => {
    const savedPage = parseInt(localStorage.getItem('blogCurrentPage')) || 1;
    setCurrentPage(savedPage);
  }, []);

  // ✅ Save to localStorage whenever page changes
  useEffect(() => {
    localStorage.setItem('blogCurrentPage', currentPage);
  }, [currentPage]);

  // ✅ Fetch blogs when page changes
  useEffect(() => {
    const fetchBlogs = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(`${BASE_API}/Blog/GetPagedBlogList?pageIndex=${currentPage}&pageSize=${numOfBlogs}`);
        const blogsData = res.data?.data;
        setItems(blogsData?.items || []);
        setTotalPages(blogsData?.totalPages || 1);
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogs();
  }, [BASE_API, currentPage]);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= 2) {
        pageNumbers.push(1, 2, '...', totalPages);
      } else if (currentPage >= totalPages - 1) {
        pageNumbers.push(1, '...', totalPages - 1, totalPages);
      } else {
        pageNumbers.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
      }
    }

    return pageNumbers.map((number, index) =>
      number === '...' ? (
        <span key={index} className="px-2 text-gray-400">...</span>
      ) : (
        <button
          key={index}
          onClick={() => handlePageChange(number)}
          className={`w-8 h-8 mx-1 flex items-center justify-center rounded ${
            currentPage === number
              ? 'bg-white text-black font-bold'
              : 'text-white hover:bg-gray-600'
          }`}
        >
          {number}
        </button>
      )
    );
  };

  // ✅ Show loading
  if (isLoading) {
    return (
      <div className='text-white min-h-screen flex justify-center items-center text-2xl'>
        Loading...
      </div>
    );
  }

  // ✅ No blogs found
  if (!items || items.length === 0) {
    return (
      <div className='text-white min-h-screen flex justify-center items-center text-2xl'>
        No Blog Post Found.
      </div>
    );
  }

return (
  <>
    <FirstThreeBlogs />

    {items.length >= 4 && (
      <div className="container mx-auto px-4 py-8 text-white">
        <h1 className="text-3xl font-bold mb-8">All blogs</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((blog) => (
            <BlogPostCard key={blog.id} blog={blog} noImage={noImage} />
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-8 flex justify-center items-center space-x-1">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1 text-white disabled:opacity-50"
          >
            Prev
          </button>

          {renderPageNumbers()}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 text-white disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    )}
  </>
);
};

export default AllBlogPosts;
