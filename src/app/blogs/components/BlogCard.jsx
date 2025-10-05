
"use client";
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';
import parse from 'html-react-parser';

const BlogPostCard = ({ blog, noImage }) => {
    let BASE_WEB_URL = process.env.NEXT_PUBLIC_BASE_CONTENT;
  // Optional: Clean up blogDesc from unwanted empty tags
  const cleanDesc = blog.blogDesc?.replace(/<p>(&nbsp;|\s)*<\/p>/gi, '');

  return (
    <div className="rounded-lg allCards overflow-hidden shadow-lg transition-transform duration-300 hover:scale-[1.02]">
      <div className="relative h-48 sm:h-56">
        <img
          src={BASE_WEB_URL+blog?.fileURL+blog?.image1 || noImage}
          alt={blog.blogTitle}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center text-sm text-gray-400 mb-2">
          <span>{blog.createdDate}</span>
        </div>
        <h3 className="text-xl font-semibold mb-2">{blog.blogTitle}</h3>

        {/* ✅ Render blogDesc as HTML */}
        <div className="text-gray-300 twoLinePara text-sm mb-4 line-clamp-5 overflow-hidden">
          {parse(cleanDesc)}
        </div>

        <Link
          href={`/blogs/${blog.id}`}
          className="flex items-center text-blue-500 font-medium hover:text-blue-400 transition-colors duration-200"
        >
          <span className="mr-2">Read more</span>
          <FaArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default BlogPostCard;
