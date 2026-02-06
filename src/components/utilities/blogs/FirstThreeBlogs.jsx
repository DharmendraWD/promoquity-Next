
import HeadingL from '../HeadingL';
import Para from '../Para';
import { MdArrowOutward } from "react-icons/md";
import noImg from '../../../../public/img/noImage.png';
import Link from 'next/link';
import Image from 'next/image';
import Button from '../Button';
// import Loading from '@/components/Loading/Loadingk';
import parse from 'html-react-parser';
import formatDate from '../features/dateFormat';



const FirstThreeBlogs = async() => {
const BASE_API = process.env.BASE_API; 
const BASE_CONTENT = process.env.BASE_CONTENT;

 let blogItems = [];

  try {
    const res = await fetch(`${BASE_API}/Blog/GetPagedBlogList?pageIndex=1&pageSize=3`, {
    });

    if (!res.ok) throw new Error('Failed to fetch blogs');

    const data = await res.json();
    blogItems = data?.data?.items || [];
  } catch (err) {
    console.error(' Blog fetch failed:', err);

  }

  if (!blogItems.length) {
    return <div className="text-center text-gray-400 py-10">No blogs available</div>;
  }


// let formatedDate1 = formatDate(data?.data?.items?.[0].createdDate);


// formatDate(data?.data?.items?.[0].createdDate)
let firstBlogDesc= blogItems?.[0]?.blogDesc;


  return (
 <>
    <div className='py-[80px] max-w-[1440px] mx-auto'>
      <HeadingL label="Market and Insights Concepts" />
      <Para label="Market and Insights Concepts involve analyzing trends, consumer behavior, and data to guide strategic business decisions and uncover growth opportunities." />
      <div className=" text-white flex-col  font-sans flex items-start justify-center px-[10px] lg:px-[0px]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 w-full px-[11px]">
        {/* Large Card */}

        {blogItems && (
          <div className="relative allCards group overflow-hidden  md:col-span-1 lg:col-span-1">
       <Link href={`/blogs/${blogItems?.[0]?.id}`} className=''>
        <div className='flex  flex-col md:flex-row bg-transparent rounded-lg overflow-hidden'>
         <div className='h-min'>
           <Image width={0} height={0}
            src={BASE_CONTENT + blogItems?.[0]?.fileURL+ blogItems?.[0]?.image1}
            alt={"img"}
            className="w-full h-[50%] object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-105"
          />
          <div className=" inset-0 flex flex-col justify-end ">
            <div className="text-gray-400 mt-2 text-lg flex justify-between mb-1">{formatDate(blogItems ? blogItems?.[0].createdDate: "")} <MdArrowOutward /></div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2 leading-tight twoLinePara">{blogItems?.[0]?.blogTitle}</h2>

          </div>
        </div>
        </div>
          </Link>
            <div className="text-gray-300 text-sm md:text-base leading-relaxed twoLinePara">{parse(firstBlogDesc)}</div>
            </div>
        )}
 

        {/* Small Cards */}
        <div className="grid grid-cols-1 gap-8">
          {blogItems?.slice(1, 3).map((blog, index) => (
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
                <span className="text-gray-400 text-sm mb-1">{formatDate(blogItems ? blogItems?.[index+1].createdDate : "")} </span>
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