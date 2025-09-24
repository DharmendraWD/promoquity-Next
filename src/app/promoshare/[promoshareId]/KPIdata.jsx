"use client";

import React, { useEffect, useState } from "react";
import noImg from '../../../../public/img/noimage.png'
import googleAdImg from '../../../../public/img/googleAd.png'
import Barclays from '../../../../public/img/Barclays.png'

import dollarImg from '../../../../public/img/dollar.png'
import up from '../../../../public/img/up.png'
import percentage from '../../../../public/img/percentage.png'
import down from '../../../../public/img/down.png'
import chart from '../../../../public/img/chart.png'
import assets from '../../../../public/img/assets.png'
import profit from '../../../../public/img/profit.png'
import warn from '../../../../public/img/warn.png'
import Image from "next/image";
import HeadingL from "@/components/utilities/HeadingL";
import Loading from "@/components/Loading/Loading";




const KPIdata = ({ promoshareId, rem1, rem2, rem3 }) => {
  const BASE_API = process.env.NEXT_PUBLIC_BASE_API;
  const id = promoshareId;

  const [activeKpiData, setactiveKpiData] = useState(null);
  const [btnClicked, setbtnClicked] = useState("");
  const [tabIndex, settabIndex] = useState("");
  const [financialKPI, setfinancialKPI] = useState(null);
  const [operation, setoperation] = useState(null);
  const [valuation, setvaluation] = useState(null);
  const [market, setmarket] = useState(null);
  const [news, setnews] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const [paraGraph, setparaGraph] = useState(`${rem1} ${rem2} ${rem3}`);

  const [loading, setLoading] = useState(false);

  const kpiItems = [
    "Financial KPI",
    "Valuation KPI",
    "Operation KPI",
    "Market KPI",
    "News",
  ];

  // Improved getKPIdata with loading and await
  const getKPIdata = async (api) => {
    try {
      setLoading(true);
      const response = await fetch(`${BASE_API}${api}`, {
        cache: "no-store",
      });

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const activeKpi = await response.json();
      setactiveKpiData(activeKpi);
    } catch (error) {
    //   console.error(error);
      setactiveKpiData(null);
    } finally {
      setLoading(false);
    }
  };

  const handleClick = (index) => {
    setActiveIndex(index);
    setactiveKpiData(null); // reset immediately to reflect change/loading
    setbtnClicked(kpiItems[index]);
    settabIndex(index);

    let api = "";

    switch (kpiItems[index]) {
      case "Financial KPI":
        api = `/FinancialKPI/GetPagedFinancialKPIList?pageIndex=1&pageSize=10&companyId=${id}`;
        break;
      case "Valuation KPI":
        api = `/ValuationKPI/GetPagedValuationKPIList?pageIndex=1&pageSize=10&companyId=${id}`;
        break;
      case "Operation KPI":
        api = `/OperationalKPI/GetPagedOperationalKPIList?pageIndex=1&pageSize=10&companyId=${id}`;
        break;
      case "Market KPI":
        api = `/MarketKPI/GetPagedMarketKPIList?pageIndex=1&pageSize=10&companyId=${id}`;
        break;
      case "News":
        // No API call for News based on your logic
        setactiveKpiData(null);
        return;
      default:
        return;
    }

    getKPIdata(api);
  };

  useEffect(() => {
    if (btnClicked === "Financial KPI") {
              setvaluation(null);
                setoperation(null);
                 setmarket(null);
      setfinancialKPI(activeKpiData);
      setparaGraph(activeKpiData?.data?.items?.[0]?.description)
    } else if (btnClicked === "Valuation KPI") {
                 setmarket(null);

        setfinancialKPI(null);
      setvaluation(activeKpiData);
      setparaGraph(activeKpiData?.data?.items?.[0]?.description)
    //   console.log(valuation)
    } else if (btnClicked === "Operation KPI") {
                 setmarket(null);

         setfinancialKPI(null);
      setvaluation(null);
      setoperation(activeKpiData);
      setparaGraph(activeKpiData?.data?.items?.[0]?.description)

    //   console.log(operation)
    } else if (btnClicked === "Market KPI") {
           setfinancialKPI([]);
      setvaluation(null);
      setoperation(null);
      setmarket(activeKpiData);
      setparaGraph(activeKpiData?.data?.items?.[0]?.description)

    //   console.log(market)
    } else if (btnClicked === "News") {
      setnews(null);
      setfinancialKPI(null);
      setmarket(null);
      setvaluation(null);
      setoperation(null);
    }
  }, [btnClicked, activeKpiData]);

  return (
    <>
              <h2 className="text-2xl font-semibold text-white mb-4">Facts & Figures</h2>


      {/* Navigation Tabs */}
      <div
        className="mb-8 text-sm font-medium grid grid-cols-1
      md:grid-cols-3 md:gap-4 gap-2 xl:flex xl:space-x-2 xl:grid-cols-none"
      >
        {kpiItems.map((item, index) => (
          <button
            key={index}
            onClick={() => handleClick(index)}
            className={`py-2 px-4 border cursor-pointer border-gray-400 rounded-full transition-colors ${
              activeIndex === index
                ? "bg-white text-black"
                : "bg-transparent text-white hover:bg-[#313b52]"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Show loading indicator */}
      {loading && <div className="flex justify-center items-center min-w-full min-h-[100vh]">
        <Loading></Loading>
        </div>}

      {/* Show fetched KPI data for example */}
      {/* {activeKpiData && (
        <pre className="text-xs bg-gray-800 p-2 rounded text-white overflow-auto max-h-60">
          {JSON.stringify(activeKpiData, null, 2)}
        </pre>
      )} */}
 <div className="grid grid-cols-2 md:grid-cols-3 lg:flex lg:flex-row gap-4">
      {/* financialKPI */}
      {financialKPI && (
  <>
    {
      financialKPI?.data?.items?.map((data, index) => (
        <React.Fragment key={index}>
          <div key={"819"} className="bg-white/5 rounded-xl border border-dashed border-white/20 p-5 rounded-xl shadow-lg w-full">
      <div className="flex justify-between items-center mb-2">
        <p className="text-2xl text-white font-semibold">RS: {data?.eps}</p>
        <Image width={0} height={0} src={dollarImg} alt="" className="bg-white w-[30px] p-2 rounded-full text-white text-lg"/>
      </div>
        <p className="text-sm text-[#a2a2a2] font-semibold">Earning Per Share</p>
      <div className='flex items-center gap-2 mt-1 text-sm font-medium text-[grey] mt-2'>
          <Image width={0} height={0} src={up} alt="" />
          <p className='text-sm text-[#4bf187]'>+12.4%</p>
      </div>
    </div>

      <div key={"11"} className="bg-[white] p-5 rounded-xl shadow-lg w-full bg-white/5 rounded-xl border border-dashed border-white/20">
      <div className="flex justify-between items-center mb-2">
        <p className="text-2xl font-semibold text-white"> {data?.peRatio}</p>
        <Image width={0} height={0} src={percentage} alt="" className="bg-white  p-2 rounded-full text-white text-lg w-[30px]"/>
      </div>
        <p className="text-sm font-semibold text-[#a2a2a2]">P/E Ratio:</p>
      <div className='flex items-center gap-2 mt-1 text-sm font-medium text-[#4bf187] mt-2'>
          <Image width={0} height={0} src={up} alt="" />
          <p className='text-sm text-[#4bf187]'>+12.4%</p>
      </div>
    </div>

      <div key={"22"} className="bg-[white] p-5 rounded-xl shadow-lg w-full bg-white/5 rounded-xl border border-dashed border-white/20">
      <div className="flex justify-between items-center mb-2">
        <p className="text-2xl font-semibold text-white"> {data?.roe}</p>
        <Image width={0} height={0} src={chart} alt="" className="bg-white  p-2 rounded-full text-white text-lg w-[30px]"/>
      </div>
        <p className="text-sm font-semibold text-[#a2a2a2]">Return on Equity:</p>
      <div className='flex items-center gap-2 mt-1 text-sm font-medium text-[#4bf187] mt-2'>
          <Image width={0} height={0} src={down} alt="" />
          <p className='text-sm text-[#4bf187]'>+12.4%</p>
      </div>
    </div>

      <div key={"233"} className="bg-[white] p-5 rounded-xl shadow-lg w-full bg-white/5 rounded-xl border border-dashed border-white/20">
      <div className="flex justify-between items-center mb-2">
        <p className="text-2xl font-semibold text-white"> {data?.roa}</p>
        <Image width={0} height={0} src={assets} alt="" className="bg-white  p-2 rounded-full text-white text-lg w-[30px]"/>
      </div>
        <p className="text-sm font-semibold text-[#a2a2a2]">Return on Assets:</p>
      <div className='flex items-center gap-2 mt-1 text-sm font-medium text-[#4bf187] mt-2'>
          <Image width={0} height={0} src={up} alt="" />
          <p className='text-sm text-[#4bf187]'>+12.4%</p>
      </div>
    </div>

      <div key={"3423"} className="bg-[white] p-5 rounded-xl shadow-lg w-full bg-white/5 rounded-xl border border-dashed border-white/20">
      <div className="flex justify-between items-center mb-2">
        <p className="text-2xl font-semibold text-white"> {data?.netProfitMargin}</p>
        <Image width={0} height={0} src={profit} alt="" className="bg-white  p-2 rounded-full text-white text-lg w-[30px]"/>
      </div>
        <p className="text-sm font-semibold text-[#a2a2a2]">Net Profit Margin:</p>
      <div className='flex items-center gap-2 mt-1 text-sm font-medium text-[#4bf187] mt-2'>
          <Image width={0} height={0} src={down} alt="" />
          <p className='text-sm text-[#4bf187]'>+12.4%</p>
      </div>
    </div>

        </React.Fragment>
      ))}
  </>
)}

{/* valuation kpi  */}
{valuation && (
  <>
    {
      valuation?.data?.items?.length > 0 ? (
      valuation.data.items.map((data, index) => (
        <React.Fragment key={index}>
          {/* 1st card */}
          <div className="bg-white/5 rounded-xl border border-dashed border-white/20 p-5 rounded-xl shadow-lg w-full">
            <div className="flex justify-between items-center mb-2">
              <div className="flex justify-between w-full items-center gap-2">
                <p className="text-sm font-semibold text-[#a2a2a2]">P/B Ratio</p>
                <div className="flex items-center gap-2 mt-1 text-sm font-medium text-green-600">
                  <img src={warn} alt="" />
                  <p className="text-sm flex gap-4 text-[#4bf187]">+12.4%</p>
                  <img src={down} alt="" />
                </div>
              </div>
            </div>
            <div className="mt-1 text-sm font-medium">
              <p className="text-2xl font-semibold text-white">{data?.pbRatio}</p>
            </div>
          </div>

          {/* 2nd card */}
          <div className="bg-white/5 border border-dashed border-white/20 p-5 rounded-xl shadow-lg w-full">
            <div className="flex justify-between items-center mb-2">
              <div className="flex justify-between w-full items-center gap-2">
                <p className="text-sm font-semibold text-[#a2a2a2]">Dividend Yield</p>
                <div className="flex items-center gap-2 mt-1 text-sm font-medium text-green-600">
                  <img src={warn} alt="" />
                  <p className="text-sm flex gap-4 text-[#4bf187]">+12.4%</p>
                  <img src={down} alt="" />
                </div>
              </div>
            </div>
            <div className="mt-1 text-sm font-medium">
              <p className="text-2xl font-semibold text-black">{data?.dividentYield}</p>
            </div>
          </div>

          {/* 3rd card */}
          <div className="bg-white/5 rounded-xl border border-dashed border-white/20 p-5  shadow-lg w-full">
            <div className="flex justify-between items-center mb-2">
              <div className="flex justify-between w-full items-center gap-2">
                <p className="text-sm font-semibold text-[#a2a2a2]">EBITDA</p>
                <div className="flex items-center gap-2 mt-1 text-sm font-medium text-green-600">
                  <img src={warn} alt="" />
                  <p className="text-sm flex gap-4 text-[#f23e60]">+12.4%</p>
                  <img src={down} alt="" />
                </div>
              </div>
            </div>
            <div className="mt-1 text-sm font-medium">
              <p className="text-2xl font-semibold text-white">RS: {data?.ebitda}</p>
            </div>
          </div>
        </React.Fragment>
      ))
    ) : (
      <div className="text-gray-500 text-center mx-auto py-10 text-center text-lg font-medium">
        No Data Found.
      </div>
    )}
  </>
)}


{/* opearation kpi  */}
{operation && (
  <>
  {
    operation?.data?.items?.length > 0 ? (
      operation.data.items.map((data, index) => (
        <React.Fragment key={index}>
        {/* 1st card  */}
    <div key={"1006"} className="bg-white/5 rounded-xl border border-dashed border-white/20 p-5 shadow-lg w-full bg-white/5 rounded-xl border border-dashed border-white/20">
      <div className="flex justify-between items-center mb-2">    
        <div className='flex justify-between w-full items-center gap-2'>
              <div>
               <p className='text-sm font-semibold text-[#a2a2a2]'> Operating Margin</p>
              </div>
            <div className='flex items-center gap-2 mt-1 text-sm font-medium text-[#4bf187] mt-2'>
                  <img src={warn} alt="" />
              <p className='text-sm flex gap-4 text-[#f23e60]'>+12.4%</p>
                  <img src={down} alt="" />
            </div>
        </div>
      </div>
      <div className='mt-1 text-sm font-medium mt-2'>
        <p className="text-2xl font-semibold text-white">{data?.operatingMargin} </p>
      </div>
    </div>
    {/* 2nd card */}
    <div key={"1005"} className="bg-[white] p-5 rounded-xl shadow-lg w-full bg-white/5 rounded-xl border border-dashed border-white/20">
      <div className="flex justify-between items-center mb-2">    
        <div className='flex justify-between w-full items-center gap-2'>
              <div>
               <p className='text-sm font-semibold text-[#a2a2a2]'>Inventory Turnover</p>
              </div>
            <div className='flex items-center gap-2 mt-1 text-sm font-medium text-[#4bf187] mt-2'>
                  <img src={warn} alt="" />
              <p className='text-sm flex gap-4 text-[#f23e60]'>+12.4%</p>
                  <img src={down} alt="" />
            </div>
        </div>
      </div>
      <div className='mt-1 text-sm font-medium mt-2'>
        <p className="text-2xl font-semibold text-white">{data?.invTurnOver} </p>
      </div>
    </div>
        </React.Fragment>
      ))
    ) : (
      <div className="text-gray-500 text-center mx-auto py-10 text-center text-lg font-medium">
        No Data Found
      </div>
    )}
      
  </>
)}
{/* market kpi  */}
{market && (
  <>
  {
    market?.data?.items?.length > 0 ? (
      market.data.items.map((data, index) => (
        <React.Fragment key={index}>
        {/* 1st card  */}
    <div key={"1006"} className="bg-white/5 rounded-xl border border-dashed border-white/20 p-5 shadow-lg w-full bg-white/5 rounded-xl border border-dashed border-white/20">
      <div className="flex justify-between items-center mb-2">    
        <div className='flex justify-between w-full items-center gap-2'>
              <div>
               <p className='text-sm font-semibold text-[#a2a2a2]'> Operating Margin</p>
              </div>
            <div className='flex items-center gap-2 mt-1 text-sm font-medium text-[#4bf187] mt-2'>
                  <img src={warn} alt="" />
              <p className='text-sm flex gap-4 text-[#f23e60]'>+12.4%</p>
                  <img src={down} alt="" />
            </div>
        </div>
      </div>
      <div className='mt-1 text-sm font-medium mt-2'>
        <p className="text-2xl font-semibold text-white">{data?.operatingMargin} </p>
      </div>
    </div>
    {/* 2nd card */}
    <div key={"1005"} className="bg-[white] p-5 rounded-xl shadow-lg w-full bg-white/5 rounded-xl border border-dashed border-white/20">
      <div className="flex justify-between items-center mb-2">    
        <div className='flex justify-between w-full items-center gap-2'>
              <div>
               <p className='text-sm font-semibold text-[#a2a2a2]'>Inventory Turnover</p>
              </div>
            <div className='flex items-center gap-2 mt-1 text-sm font-medium text-[#4bf187] mt-2'>
                  <img src={warn} alt="" />
              <p className='text-sm flex gap-4 text-[#f23e60]'>+12.4%</p>
                  <img src={down} alt="" />
            </div>
        </div>
      </div>
      <div className='mt-1 text-sm font-medium mt-2'>
        <p className="text-2xl font-semibold text-white">{data?.invTurnOver} </p>
      </div>
    </div>
        </React.Fragment>
      ))
    ) : (
      <div className="text-gray-500 text-center mx-auto py-10 text-center text-lg font-medium">
        No Data Found
      </div>
    )}
      
  </>
)}


</div>
     <div className=" p-8 rounded-xl leading-relaxed text-gray-300">
        <p>
          {paraGraph}
        </p>
       
      </div>
    </>
  );
};

export default KPIdata;
