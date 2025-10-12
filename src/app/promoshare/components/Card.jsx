
import Link from 'next/link';
import Image from 'next/image';
import noImage from '../../../../public/img/noImage.png';
const PromoShareCard = async () => {
const BASE_API = process.env.BASE_API || 'https://your-default-api.com';
const BASE_CONTENT = process.env.BASE_CONTENT || '';
// console.log(BASE_API);


  let companyProfile = [];

  try {
    const res = await fetch(
      `${BASE_API}/CompanyProfile/GetPagedCompanyProfileList?pageIndex=1&pageSize=10`,
      {
        cache: 'no-store', // SSR (no caching). Use 'force-cache' or revalidate for ISR.
      }
    );

    if (!res.ok) {
      throw new Error('Failed to fetch company profiles');
    }

    const data = await res.json();
    companyProfile = data?.data?.items || [];
  } catch (error) {
    console.error('SSR Error:', error);
    // Optional: fallback UI
    return <div className="text-center text-gray-400 py-10">Failed to load data.</div>;
  }

  if (!companyProfile.length) {
    return <div className="text-center text-gray-400 py-10">No companies found.</div>;
  }


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

