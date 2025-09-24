"use client";

import React, { useEffect, useState } from 'react';
import man1 from '../../../../public/img/man1.jpg';
import man2 from '../../../../public/img/man2.jpg';
import man3 from '../../../../public/img/man3.jpg';
import HeadingL from '@/components/utilities/HeadingL';
import Image from 'next/image';

// /HomeContent/GetPagedHomeContentList?pageIndex=1&pageSize=10

const TeamSupport = () => {
    const [showPopup, setShowPopup] = useState(false);


   
  return (
    <div className="flex xl:flex-row flex-col w-auto  lg:w-[1182px] mx-auto justify-between items-center gap-[85px]">
      <div className="w-[90%] lg:w-[500px]  relative h-[456px] shrink-0">
        <div className="lg:w-[222px] w-[40%] h-[50%] teamSuppImageParent lg:h-[222px] w-[146px] h-[146px] absolute top-0 left-[32px] shrink-0">
          <Image  width={0} height={0} src={man1} alt="" className='h-full w-full teamSuppImage  rounded-[30px] object-cover' />
        </div>

        <div className='lg:w-[261px] h-[46%] w-[40%] teamSuppImageParent w-[166px] h-[176px] lg:h-[198px] lg:left-[0px] left-[5px] absolute bottom-0'>
          <Image  width={0} height={0} src={man2} className='h-full w-full teamSuppImage object-cover rounded-[30px]' alt="" />
        </div>

        <div className='w-[40%]               /* ✅ Width for small screens */
  sm:w-[50%]            /* Optional: medium small tweak */
  md:w-[221px]          /* Width for md+ if needed */
  w-[146px]             /* ✅ Default width (overridden by 40% on small) */
  h-[193px] 
  lg:h-[263px] 
  h-[100%] 
  teamSuppImageParent 
  absolute 
  right-0 
  right-[5px] 
  lg:right-[0px] 
  top-[50%] 
  -translate-y-1/2' >
          <Image  width={0} height={0} className='h-full w-full teamSuppImage object-cover rounded-[30px]' src={man3} alt="" />
        </div>
      </div>

      <div className='lg:w-[587px] w-[auto] lg:px-0 px-[10px] lg:h-[259px]'>
  <div className="flex flex-col items-start ">
  
  {/* The "Precise Care" Tag */}
  <div className="flex justify-center items-center p-4">
  <div className="rounded-[57px] text-gray-400 border-b border-b-white/20 px-8 py-3 text-lg font-medium">
  Precise Care
  </div>
  </div>
  
  {/* Main Heading */}
  <HeadingL label={"teamSupportData?.topic"} />
  
  {/* Description Paragraph */}
  <div className="paraandTopic ">
    <p className="text-gray-400 text-base sm:text-lg md:text-xl  max-w-2xl twoLinePara">
  {"teamSupportData?.description"}
  </p><span
      className="text-white cursor-pointer ml-1 flex items-center gap-1"
      onClick={() => setShowPopup(true)}
    >
      View More
    </span>
  </div>
  
  {/* Call to Action Button */}
  {/* <button className="border-2 border-white text-white font-medium rounded-full px-8 py-3 sm:px-10 sm:py-4 hover:bg-white hover:text-black transition-colors duration-300">
  View More
  </button> */}
  
  </div>
  
    
      </div>
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-[#081a3b]  rounded-xl border border-dashed border-white/20 px-6 pb-6 pt-2 rounded-lg shadow-lg w-[90%] max-w-md animate-fade-in">
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowPopup(false)}
                className="px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700"
              >
               X
              </button>
            </div>
            {/* <h2 className="text-lg font-semibold text-gray-800 mb-4">Confirm Logout</h2> */}
            <p className="text-white mb-6">{"teamSupportData?.description"}</p>

          </div>
        </div>
      )}
    </div>
  );
};


export default TeamSupport;