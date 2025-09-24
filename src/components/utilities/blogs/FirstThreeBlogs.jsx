
import HeadingL from '../HeadingL';
import Para from '../Para';
import { MdArrowOutward } from "react-icons/md";
import noImg from '../../../../public/img/noImage.png';
import Link from 'next/link';
import Image from 'next/image';
import Button from '../Button';
// /Blog/GetPagedBlogList?pageIndex=${currentPage}&pageSize=${numOfBlogs}

const FirstThreeBlogs = () => {

let first3BlogsData = {
  "data": {
    "items": [
      {
        "id": 1,
        "title": "Market and Insights Concepts",
        "description": "Market and Insights Concepts involve analyzing trends, consumer behavior, and data to guide strategic business decisions and uncover growth opportunities.",
        "images": [
          "https://www.example.com/image1.jpg"
        ],
        "createdDate": "2023-09-25"
      },
      {
        "id": 2,
        "title": "Market and Insights Concepts",
        "description": "Market and Insights Concepts involve analyzing trends, consumer behavior, and data to guide strategic business decisions and uncover growth opportunities.",
        "images": [
          "https://www.example.com/image1.jpg"
        ],
        "createdDate": "2023-09-25"
      },
      {
        "id": 3,
        "title": "Market and Insights Concepts",
        "description": "Market and Insights Concepts involve analyzing trends, consumer behavior, and data to guide strategic business decisions and uncover growth opportunities.",
        "images": [
          "https://www.example.com/image2.jpg"
        ],
        "createdDate": "2023-09-25"
      }
    ]
  }
}

  return (
 <>
    <div className='py-[80px] max-w-[1440px] mx-auto'>
      <HeadingL label="Market and Insights Concepts" />
      <Para label="Market and Insights Concepts involve analyzing trends, consumer behavior, and data to guide strategic business decisions and uncover growth opportunities." />
      <div className=" text-white flex-col  font-sans flex items-start justify-center px-[10px] lg:px-[0px]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 w-full">
        {/* Large Card */}

        {first3BlogsData?.data?.items?.[0] && (
       <Link href={"/blog/"} className=''>
        <div className='flex  flex-col md:flex-row bg-transparent rounded-lg overflow-hidden'>
         <div className="relative allCards group overflow-hidden  md:col-span-1 lg:col-span-1">
           <Image width={0} height={0}
            src={noImg}
            alt={"img"}
            className="w-full h-[50%] object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-105"
          />
          <div className=" inset-0 flex flex-col justify-end ">
            <div className="text-gray-400 mt-2 text-lg flex justify-between mb-1">{"first3BlogsData?.data?.items?.[0].createdDate"} <MdArrowOutward /></div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2 leading-tight twoLinePara">{"first3BlogsData?.data?.items?.[0].blogTitle"}</h2>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed twoLinePara">{"first3BlogsData?.data?.items?.[0].blogDesc"}</p>

          </div>
        </div>
        </div>
          </Link>
        )}
 

        {/* Small Cards */}
        <div className="grid grid-cols-1 gap-8">
          {first3BlogsData?.data?.items.slice(1, 3).map((blog, index) => (
            <div key={index} className="flex allCards flex-col md:flex-row  bg-transparent rounded-lg overflow-hidden">
              <Link href={"/blog/"} className=''>
               <div className='flex flex-col md:flex-row items-center gap-4 bg-transparent rounded-lg overflow-hidden'>
                <div className="w-full md:w-1/2 flex-shrink-0 relative">
                <Image width={0} height={0}
                  src={noImg}
                  alt={"img"}
                  className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out hover:scale-105"
                />
              </div>
              <div className="pr-4 md:pr-6 w-full flex-grow flex flex-col justify-start">
                <span className="text-gray-400 text-sm mb-1">{"blog.createdDate"} </span>
                <h3 className="text-xl font-bold mb-2 leading-tight twoLinePara">{"blog.blogTitle"}</h3>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed twoLinePara">{"blog.blogDesc"}</p>
              </div>
              </div>
              </Link>
             
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