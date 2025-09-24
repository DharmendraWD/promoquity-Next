import Loading from '@/components/Loading/Loading';
import noImg from '../../../../public/img/noimage.png';
import HeadingL from '@/components/utilities/HeadingL';
import Image from 'next/image';
import googleAdImg from '../../../../public/img/googleAd.png';

import Barclays from '../../../../public/img/Barclays.png'

import dollarImg from '../../../../public/img/dollar.png'
import up from '../../../../public/img/up.png'
import percentage from '../../../../public/img/percentage.png'
import down from '../../../../public/img/down.png'
import chart from '../../../../public/img/chart.png'
import assets from '../../../../public/img/assets.png'
import profit from '../../../../public/img/profit.png'
import warn from '../../../../public/img/warn.png'
import KPIdata from './KPIdata';


// app/promoshare/[promoshareId]/page.jsx

export default async function Promosharedets(props) {
const { params } = props;
  const awaitedParams = await params;
  const promoshareId = awaitedParams.promoshareId;
  let isLoading = true; 

  const BASE_API = process.env.BASE_API;
  const BASE_CONTENT = process.env.BASE_CONTENT;

  try {
    const response = await fetch(`${BASE_API}/CompanyProfile/GetCompanyProfileById/${promoshareId}`, {
      cache: 'no-store',
    });

    isLoading = false;

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const singleCompanyProfile = await response.json();

// ------------------Single COmpany Data --------------




    return (
       <div className=" text-white font-sans min-h-screen p-8">
      {/* Header Section */}
      <div className="flex justify-between flex-col md:flex-row gap-[20px] md:gap-[auto] items-center mb-6">
        <div className="flex items-center space-x-4 md:justify-start w-full md:w-auto justify-between">
          {/* <img src={singleCompanyProfile?.data?.imageUrl ? `${BASE_CONTENT}${singleCompanyProfile?.data?.imageUrl}` : noImg} alt="Company Logo" className="h-16 w-16 rounded-full" /> */}
          <Image width={0} height={0} src={ noImg} alt="Company Logo" className="h-16 w-16 rounded-full" />
          <div>
          <HeadingL label={singleCompanyProfile?.data?.companyName || "Company Name"}></HeadingL>

            <div className="text-sm text-gray-400 flex gap-8">
              <p>{singleCompanyProfile?.data?.sector}</p>
               <p>{singleCompanyProfile?.data?.remarks2 ? singleCompanyProfile?.data?.remarks2 : "Address No Available"} </p>
                  </div>
          </div>
        </div>
        <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-full shadow-lg transition-colors">
          Available Now
        </button>
      </div>
      
      {/* Price & Available On Section */}
      <div className="flex items-center space-x-16 mb-8">
        <div>
          <p className="text-gray-400 text-sm">Price Per Share</p>
          <p className="text-lg truncate-two-words">{singleCompanyProfile?.data?.remarks1} <span className="text-gray-400 text-sm">| Face Value |</span></p>
        </div>
        <div>
          <p className="text-gray-400 text-sm">Available on</p>
          <div className="flex space-x-2 mt-1">
            <Image width={0} height={0} src={googleAdImg} alt="Google" className="h-10 w-10 rounded-md" />
            <Image width={0} height={0} src={Barclays} alt="Bing" className="h-10 w-10 rounded-md" />
          </div>
        </div>
      </div>

      {/* KPI DATA  */}
      <KPIdata promoshareId={promoshareId} rem1={singleCompanyProfile?.data?.remarks1} rem2={singleCompanyProfile?.data?.remarks2} rem3={singleCompanyProfile?.data?.remarks3}></KPIdata>
      </div>
    );
  } catch (error) {
    console.error(error);
    return (
      <div className="text-red-500">
        ❌ Failed to load company data.
      </div>
    );
  }
}
