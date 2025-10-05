
"use client";
import HeadingL from '../HeadingL';
import Para from '../Para';
import { MdArrowOutward } from "react-icons/md";
import noImg from '../../../../public/img/noImage.png';
import Link from 'next/link';
import Image from 'next/image';
import Button from '../Button';
import Loading from '@/components/Loading/Loading';
import parse from 'html-react-parser';
import formatDate from '../features/dateFormat';
import { useEffect, useState } from 'react';
import axios from 'axios';



const FirstThreeBlogs = () => {
const [isLoading, setLoading] = useState(true)
let BASE_API = process.env.NEXT_PUBLIC_BASE_API;
let BASE_CONTENT = process.env.NEXT_PUBLIC_BASE_CONTENT;
  const [Blogitems, setitems] = useState([]);


useEffect(() => {
  const fetchItems = async () => {
    try {
      const res = await axios.get(`${BASE_API}/Blog/GetPagedBlogList?pageIndex=1&pageSize=3`);
      setitems(res.data?.data?.items || []);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  fetchItems();
}, [BASE_API]);



// let formatedDate1 = formatDate(data?.data?.items?.[0].createdDate);

if(isLoading === true){
  return <Loading />;
}
// formatDate(data?.data?.items?.[0].createdDate)
let firstBlogDesc= Blogitems?.[0]?.blogDesc;


  return (
 <>
    <div className='py-[80px] max-w-[1440px] mx-auto'>
      <HeadingL label="Market and Insights Concepts" />
      <Para label="Market and Insights Concepts involve analyzing trends, consumer behavior, and data to guide strategic business decisions and uncover growth opportunities." />
      <div className=" text-white flex-col  font-sans flex items-start justify-center px-[10px] lg:px-[0px]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 w-full">
        {/* Large Card */}

        {Blogitems && (
          <div className="relative allCards group overflow-hidden  md:col-span-1 lg:col-span-1">
       <Link href={`/blogs/${Blogitems?.[0]?.id}`} className=''>
        <div className='flex  flex-col md:flex-row bg-transparent rounded-lg overflow-hidden'>
         <div className='h-min'>
           <Image width={0} height={0}
            src={BASE_CONTENT + Blogitems?.[0]?.fileURL+ Blogitems?.[0]?.image1}
            alt={"img"}
            className="w-full h-[50%] object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-105"
          />
          <div className=" inset-0 flex flex-col justify-end ">
            <div className="text-gray-400 mt-2 text-lg flex justify-between mb-1">{formatDate(Blogitems ? Blogitems?.[0].createdDate: "")} <MdArrowOutward /></div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2 leading-tight twoLinePara">{Blogitems?.[0]?.blogTitle}</h2>

          </div>
        </div>
        </div>
          </Link>
            <div className="text-gray-300 text-sm md:text-base leading-relaxed twoLinePara">{parse(firstBlogDesc)}</div>
            </div>
        )}
 

        {/* Small Cards */}
        <div className="grid grid-cols-1 gap-8">
          {Blogitems?.slice(1, 3).map((blog, index) => (
            <div key={index} className="flex allCards flex-col md:flex-row  bg-transparent rounded-lg overflow-hidden">
              <div className=''>
              <Link href={`/blogs/`+blog.id} className=''>
               <div className='h-min'>
                <div className="w-full md:w-1/2 flex-shrink-0 relative">
                <Image width={300} height={300}
                  src={blog.image1 ? BASE_CONTENT + blog.fileURL + blog.image1 : noImg}
                  alt={"img"}
                  className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out hover:scale-105"
                  loading='lazy'
                />
              </div>
              <div className="pr-4 md:pr-6 w-full flex-grow flex flex-col justify-start">
                <span className="text-gray-400 text-sm mb-1">{formatDate(Blogitems ? Blogitems?.[index+1].createdDate : "")} </span>
                <h3 className="text-xl font-bold mb-2 leading-tight twoLinePara">{blog.blogTitle}</h3>
              </div>
              </div>
              </Link>
                <div className="text-gray-300 text-sm md:text-base leading-relaxed twoLinePara">{parse(blog.blogDesc)}</div>
                </div>
             
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>


<div>

<Button label={"View more"} link={"/blog"} />
</div>
 </>
  );
};

export default FirstThreeBlogs;