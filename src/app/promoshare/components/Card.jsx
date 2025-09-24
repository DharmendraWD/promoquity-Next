"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import noImage from '../../../../public/img/noimage.png';
import axios from 'axios';
import Loading from '@/components/Loading/Loading';

const PromoShareCard = () => {
const BASE_API = process.env.NEXT_PUBLIC_BASE_API || 'https://your-default-api.com';
// console.log(BASE_API);

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `${BASE_API}/CompanyProfile/GetPagedCompanyProfileList?pageIndex=1&pageSize=10`
        );
        setData(response?.data);
        // console.log("data", response.data);
        setIsLoading(false);
      } catch (error) {
        // console.error(error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);
  if (isLoading) {
    return <Loading />;
  }

let companyProfile = data?.data?.items;

  return (
    <>
    {
        companyProfile?.map((item) => (
          <Link
           href={`/promoshare/${item?.id}`}
           key={item?.id}
           >
            <div className="w-fit">
              <div className="flex justify-center items-center p-4">
                <div className="max-w-xs allCards rounded-lg overflow-hidden p-4 shadow-lg text-white border border-gray-700 min-h-[313px] max-h-[313px]">
                  <Image
                    width={0}
                    height={0}
                    className="w-full max-w-[2020px] w-[220px] mx-auto max-h-[200px] min-h-[200px] object-cover"
                    src={ noImage}
                    // src={item?.imageUrl ? item?.imageUrl : noImage}
                    alt="Company Image"
                  />
                  <div className="pl-4 pr-4 pb-4">
                    <div className="twoLinePara font-bold text-lg md:text-xl mb-2 text-white">
                      {item?.companyName}
                    </div>
                    <p className="twoLinePara text-gray-400 text-sm md:text-base">
                      Sector
                    </p>
                    <p className="twoLinePara text-gray-100 text-sm md:text-base">
                      {item?.sector}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))
    }
      
    </>
  );
};

export default PromoShareCard;

