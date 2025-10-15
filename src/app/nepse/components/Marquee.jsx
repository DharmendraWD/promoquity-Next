"use client";
import React from 'react';

const MarqueeItem = ({ type, value, change, percentage, extraInfo, isUp }) => (
    <>
  <div className='flex flex-col gap-4'>
    {/* <div className="flex-shrink-0 rounded-[20px] border border-[rgba(67,67,67,0.29)] bg-[rgba(91,94,105,0.2)] px-4 py-2 mx-2 text-white text-sm flex items-center justify-center  md:w-auto">
    <div className="flex gap-2 flex-row items-center">
      <span className="font-bold text-base sm:text-lg mb-1">{type}</span>
      <div className="flex items-center text-xs sm:text-sm">
        <span className="mr-1">{value}</span>
        {isUp ? (
          <svg className="w-3 h-3 text-green-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        ) : (
          <svg className="w-3 h-3 text-red-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 112 0v7.586l2.293-2.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        )}
        <span className={isUp ? 'text-green-500' : 'text-red-500'}>{change}</span>
        <span className={`ml-1 ${isUp ? 'text-green-500' : 'text-red-500'}`}>{percentage}</span>
      </div>
      <span className="text-xs text-gray-400 mt-1">{extraInfo}</span>
    </div>
  </div>
    <div className="flex-shrink-0 rounded-[20px] border border-[rgba(67,67,67,0.29)] bg-[rgba(91,94,105,0.2)] px-4 py-2 mx-2 text-white text-sm flex items-center justify-center  md:w-auto">
    <div className="flex flex-row gap-2 items-center">
      <span className="font-bold text-base sm:text-lg mb-1">{type}</span>
      <div className="flex items-center text-xs sm:text-sm">
        <span className="mr-1">{value}</span>
        {isUp ? (
          <svg className="w-3 h-3 text-green-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        ) : (
          <svg className="w-3 h-3 text-red-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 112 0v7.586l2.293-2.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        )}
        <span className={isUp ? 'text-green-500' : 'text-red-500'}>{change}</span>
        <span className={`ml-1 ${isUp ? 'text-green-500' : 'text-red-500'}`}>{percentage}</span>
      </div>
      <span className="text-xs text-gray-400 mt-1">{extraInfo}</span>
    </div>
  </div> */}

  {/* --------- */}
  <div className="flex-shrink-0 rounded-[20px] border border-[rgba(67,67,67,0.29)] bg-[rgba(91,94,105,0.2)] px-4 py-2 mx-2 text-white text-sm flex items-center justify-center h-16 sm:h-20 w-48 sm:w-60 md:w-64">
    <div className="flex flex-col items-start">
      <span className="font-bold text-base sm:text-lg mb-1">{type}</span>
      <div className="flex items-center text-xs sm:text-sm">
        <span className="mr-1">{value}</span>
        {isUp ? (
          <svg className="w-3 h-3 text-green-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        ) : (
          <svg className="w-3 h-3 text-red-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 112 0v7.586l2.293-2.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        )}
        <span className={isUp ? 'text-green-500' : 'text-red-500'}>{change}</span>
        <span className={`ml-1 ${isUp ? 'text-green-500' : 'text-red-500'}`}>{percentage}</span>
      </div>
      <span className="text-xs text-gray-400 mt-1">{extraInfo}</span>
    </div>
  </div>
  </div>
  
  </>
);

const Marquee = () => {
  const data = [
    { type: 'NEPSE', value: '2068.74', change: '0.12', percentage: '0.12%', extraInfo: '(2210,203,220.38)', isUp: true },
    { type: 'BANK', value: '1431.78', change: '0.12', percentage: '0.12%', extraInfo: '103,884,145.78', isUp: false },
    { type: 'NEPSE', value: '2068.74', change: '0.21', percentage: '0.21%', extraInfo: '(2210,203,220.38)', isUp: true },
    { type: 'BANK', value: '1431.78', change: '0.12', percentage: '0.12%', extraInfo: '103,884,145.78', isUp: true },
    { type: 'NEPSE', value: '2068.74', change: '0.12', percentage: '0.12%', extraInfo: '(2210,203,220.38)', isUp: true },
    { type: 'BANK', value: '1431.78', change: '0.12', percentage: '0.12%', extraInfo: '103,884,145.78', isUp: false },
    { type: 'NEPSE', value: '2068.74', change: '0.21', percentage: '0.21%', extraInfo: '(2210,203,220.38)', isUp: true },
    { type: 'BANK', value: '1431.78', change: '0.12', percentage: '0.12%', extraInfo: '103,884,145.78', isUp: true },
    { type: 'NEPSE', value: '2068.74', change: '0.12', percentage: '0.12%', extraInfo: '(2210,203,220.38)', isUp: true },
    { type: 'BANK', value: '1431.78', change: '0.12', percentage: '0.12%', extraInfo: '103,884,145.78', isUp: false },
    // Duplicate data to ensure a smooth, continuous loop
    { type: 'NEPSE', value: '2068.74', change: '0.12', percentage: '0.12%', extraInfo: '(2210,203,220.38)', isUp: true },
    { type: 'BANK', value: '1431.78', change: '0.12', percentage: '0.12%', extraInfo: '103,884,145.78', isUp: false },
    { type: 'NEPSE', value: '2068.74', change: '0.21', percentage: '0.21%', extraInfo: '(2210,203,220.38)', isUp: true },
    { type: 'BANK', value: '1431.78', change: '0.12', percentage: '0.12%', extraInfo: '103,884,145.78', isUp: true },
  ];

  return (
    <div className="w-full py-4 overflow-hidden relative">
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 60s linear infinite;
        }
        .marquee-content {
          display: flex;
          width: fit-content;
        }
        .marquee-content:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="marquee-content animate-marquee">
        {data.map((item, index) => (
          <MarqueeItem key={index} {...item} />
        ))}
        {/* Duplicate the data to create a seamless loop */}
        {data.map((item, index) => (
          <MarqueeItem key={`duplicate-${index}`} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Marquee;