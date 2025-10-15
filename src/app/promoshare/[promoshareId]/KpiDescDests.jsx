
"use client";
import Para from '@/components/utilities/Para'
import React, { useEffect, useState } from 'react'


// app/promoshare/[promoshareId]/page.jsx

export default  function KpiDescDests({clickedId}) {
    const [kpiDESCandDETS, setkpiDESCandDETS] = useState(null);
  const BASE_API = process.env.NEXT_PUBLIC_BASE_API;
 
    const getKPIDETandDESC = async (api) => {
    try {
    //   setLoading(true);
      const response = await fetch(`${BASE_API}/KPIDetail/GetPagedKPIDetailList?pageIndex=1&pageSize=10`, {
      });

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      setkpiDESCandDETS(data);
    } catch (error) {
    //   console.error(error);
      setactiveKpiData(null);
    } finally {

    }
  };

  useEffect(() => {
getKPIDETandDESC()
// console.log("run useeffs")
  }, [])
  
if(kpiDESCandDETS && clickedId !== undefined && clickedId !== null){
    
    console.log(kpiDESCandDETS?.data?.items?.[clickedId+1]?.details)
    console.log(kpiDESCandDETS?.data?.items?.[clickedId+1]?.description)
}
// ------------------KPI Detatails and description  --------------



if(kpiDESCandDETS && clickedId !== undefined && clickedId !== null){
    return (
        <>
        <hr className='border-1 border-gray-400 mt-2 mb-4' />
  <p className='mt-2 text-lg  text-justify text-gray-400 sm:text-base leading-relaxed mb-2'>
    {kpiDESCandDETS?.data?.items?.[clickedId+1]?.details || ""} 
  </p>
  
  <p  className='mt-2 text-lg  text-justify text-gray-400 sm:text-base leading-relaxed mb-2'>
    {kpiDESCandDETS?.data?.items?.[clickedId+1]?.description || ""}
  </p>
        </>
      
    );
 
}
}
