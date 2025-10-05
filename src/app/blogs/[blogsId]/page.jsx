// app/blogs/[blogsId]/page.jsx
import React from 'react';
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import parse from 'html-react-parser';

import ctaImage from '../../../../public/img/carousels1/2.jpg';
import noImage from '../../../../public/img/noImage.png';
import Link from 'next/link';
import { extractYouTubeEmbedData } from '@/components/utilities/tools/ExtractYTURL';

// ✅ Server Component
export default async function BlogPostDetail(props) {
const { params } = props;
  const awaitedParams = await params;
  const blogsId = awaitedParams.blogsId;

  const BASE_API = process.env.BASE_API;
  const BASE_CONTENT = process.env.BASE_CONTENT;

  let blog = null;
  try {
    const response = await fetch(`${BASE_API}/Blog/GetBlogById/${blogsId.toString()}`, {
    });

    if (!response.ok) throw new Error('Failed to fetch data');
    const result = await response.json();
    blog = result;
  } catch (error) {
    console.error(error);
    return <div className="text-white text-center mt-10">Failed to load blog post.</div>;
  }
  // yt videoo 
if(blog?.data?.videoURL){
var videoURL = blog?.data?.videoURL;
 var { videoId, playlistId } = extractYouTubeEmbedData(videoURL || "");

  var embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}${
    playlistId ? `?list=${playlistId}` : ""
  }`;
}
// yt videoo end

  const HeroSection = () => (
    <div className="pt-12 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
          {blog?.data?.blogTitle || 'Untitled Blog'}
        </h1>
        <div className="flex flex-col sm:flex-row justify-center items-center text-gray-400 text-sm mb-8 space-y-2 sm:space-y-0 sm:space-x-8">
          <span>{blog?.data?.createdDate}</span>
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-white transition-colors"><FaTwitter /></Link>
            <Link href="#" className="hover:text-white transition-colors"><FaFacebookF /></Link>
            <Link href="#" className="hover:text-white transition-colors"><FaLinkedinIn /></Link>
            <Link href="#" className="hover:text-white transition-colors"><FaInstagram /></Link>
          </div>
          <span>2 mins read</span>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-8 relative h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden shadow-xl">

        {
  blog?.data?.videoURL ? (
     <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg">
      <iframe
        src={embedUrl}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="absolute top-0 left-0 w-full h-full"
      ></iframe>
    </div>
  ) : (
    <img src={
      blog?.data?.images?.[0]
              ? `${BASE_CONTENT}${blog?.data?.fileURL}${blog?.data?.image1}`
              : noImage.src
    } alt="Blog Post Hero" className="w-full h-full object-cover" />
  )
}
        <div className="absolute inset-0" />
      </div>
    </div>
  );

  const ContentSection = () => (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6">{blog?.data?.image1Titile}</h2>
      <div className="text-gray-300 mb-6 leading-relaxed">
        {parse(blog?.data?.blogDesc || '')}
      </div>

      {/* Optional Quote Section */}
      {/* <blockquote className="border-l-4 border-green-500 pl-4 py-2 mb-8 italic text-gray-200">
        "A great quote here."
      </blockquote> */}

      <h2 className="text-2xl sm:text-3xl font-bold mb-6">{blog?.data?.image2Title}</h2>
      <div className="text-gray-300 mb-6 leading-relaxed">
        {parse(blog?.data?.blogDesc || '')}
      </div>
    </div>
  );

  const CTABanner = () => (
    <div className="relative w-full h-auto flex flex-col md:flex-row min-h-[300px] overflow-hidden rounded-lg shadow-lg">
      <div className="relative w-full md:w-1/2 p-8 sm:p-12 flex flex-col justify-center items-center md:items-start text-center md:text-left bg-gradient-to-br from-blue-600 to-green-500 text-white">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </h2>
        <p className="text-base sm:text-lg mb-8 max-w-md">
          Lorem ipsum dolor sit amet, consectetur. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
        <button className="bg-white text-green-700 font-semibold py-3 px-8 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-300">
          Book Your Trek
        </button>
      </div>

      <div className="relative w-full md:w-1/2 min-h-[200px] md:min-h-full">
        <img
          src={ctaImage.src}
          alt="Stock Chart"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-40" />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen text-white">
      <HeroSection />
      <ContentSection />
      <CTABanner />
    </div>
  );
}
