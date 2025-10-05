// src/components/home/HeroSection.jsx

// import React, { useEffect } from 'react';
import HeadingXL from '../../../components/utilities/HeadingXL';
import Para from '../../../components/utilities/Para';
import Link from 'next/link';
import Image from 'next/image';
import MultiCarousel from './MultiCarousal';
import LowTicket from './LowTicket';
import TeamSupport from './TeamSupport';
import FAQ from '@/components/utilities/faq/FAQ';
import FirstThreeBlogs from '@/components/utilities/blogs/FirstThreeBlogs';
import AboveFooter from '@/components/utilities/footer/AboveFooter';
import Footer from '@/components/utilities/footer/Footer';
import ProcessFlow from '@/components/utilities/cards/ProcessFlow';

export default async function HeroSection() {
const response = await fetch(`${process.env.BASE_API}/HomeContent/GetPagedHomeContentList?pageIndex=1&pageSize=10`, );
  if (!response.ok) {
    return null;
    throw new Error('Failed to fetch data');
  }

const data = await response.json();
const BASE_CONTENT = process.env.BASE_CONTENT



  const handBg = "linear-gradient(0deg, #0a265c 17.55%, rgba(0, 0, 0, 0.00) 88.6%)";
  const my = "my-8 sm:my-12 md:my-16 lg:my-20";


  

  return (
    <>
    <div className='hero-section'>
      <div className="relative z-[8] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mx-auto mt-[110px]">
          <div className="p-4 sm:p-6 md:p-8 flex items-center justify-center rounded-xl my-8 mx-auto w-full max-w-2xl">
            <div className="flex items-center space-x-2 sm:space-x-4">
              <div className="flex">
                <div className="relative w-[2rem] h-[2rem] sm:w-[3rem] sm:h-[3rem] rounded-full border-2 border-white overflow-hidden">
                  <Image width={30} height={30} src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=250&auto=format&fit=crop" alt="User 1" className="object-cover w-full h-full" />
                </div>
                <div className="relative w-[2rem] h-[2rem] sm:w-[3rem] sm:h-[3rem] rounded-full border-2 border-white overflow-hidden ml-[-20px]">
                  <Image alt="user" width={30} height={30} src="https://randomuser.me/api/portraits/women/75.jpg" className="object-cover w-full h-full" />
                </div>
                <div className="relative w-[2rem] h-[2rem] sm:w-[3rem] sm:h-[3rem] rounded-full border-2 border-white overflow-hidden ml-[-20px]">
                  <Image alt="user" width={30} height={30} src="https://randomuser.me/api/portraits/women/64.jpg" className="object-cover w-full h-full" />
                </div>
              </div>
              <span className="text-white text-sm sm:text-xl md:text-xl font-medium whitespace-nowrap">
                Trusted by people
              </span>
            </div>
          </div>

          <HeadingXL label={data?.data?.items?.[0]?.topic} />
          <Para label={data?.data?.items?.[0]?.description} />

          <div className="mt-8">
            <Link
              href="/login"
              >
            <button
              className="bg-white text-green-800 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition-colors duration-300"
            >
              Reserve Access
            </button></Link>
          </div>
        </div>

{/* hero image  */}
      <div className={`${my}`}>
         <div className="hreoImg relative">
        <div className="mt-12 relative max-w-lg mx-auto">
         
    <Image
    width={600}
    height={600}
    src={BASE_CONTENT + data?.data?.items?.[0]?.imageUrl}
    alt="Hand holding a phone"
    className="w-full"
    />      
    
    </div>
    <div className="bottomHandGrdientDiv absolute bottom-[-2px] left-0 w-full h-[254px]" style={{ background: handBg }}>
    </div>
    </div>
      </div>
      </div>
    </div>
     <MultiCarousel />
          <LowTicket />
          <TeamSupport />
          <FAQ />
          <FirstThreeBlogs />
          <ProcessFlow></ProcessFlow>
          <AboveFooter my="100px" />
          </>
  );
};

