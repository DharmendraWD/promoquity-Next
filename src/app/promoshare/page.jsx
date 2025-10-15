



// app/promoshare/page.jsx
import Link from 'next/link';
import Image from 'next/image';
import noImage from '../../../public/img/noImage.png';

const BASE_API = process.env.NEXT_PUBLIC_BASE_API || 'https://your-default-api.com';
const numOfCompanies = 10;

async function getCompanies(page) {
  const res = await fetch(
    `${BASE_API}/CompanyProfile/GetPagedCompanyProfileList?pageIndex=${page}&pageSize=${numOfCompanies}`,
    { cache: 'no-store' }
  );

  if (!res.ok) throw new Error('Failed to fetch company profiles');

  const data = await res.json();
  return data?.data || { items: [], totalPages: 1 };
}

export default async function PromoSharePage({ searchParams }) {
  const currentPage = parseInt(searchParams?.page || '1', 10);

  let companyData;
  try {
    companyData = await getCompanies(currentPage);
  } catch (err) {
    console.error('SSR Error:', err);
    return (
      <div className="text-center text-gray-400 py-10">Failed to load data.</div>
    );
  }

  const companies = companyData.items || [];
  const totalPages = companyData.totalPages || 1;

  if (companies.length === 0) {
    return <div className="text-center text-gray-400 py-10">No companies found.</div>;
  }

  const renderPageNumbers = () => {
    const pageNumbers = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= 2) {
        pageNumbers.push(1, 2, '...', totalPages);
      } else if (currentPage >= totalPages - 1) {
        pageNumbers.push(1, '...', totalPages - 1, totalPages);
      } else {
        pageNumbers.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
      }
    }

    return pageNumbers.map((number, index) =>
      number === '...' ? (
        <span key={index} className="px-2 text-gray-400">...</span>
      ) : (
        <Link
          key={index}
          href={`/promoshare?page=${number}`}
          className={`w-8 h-8 mx-1 flex items-center justify-center rounded ${
            currentPage === number
              ? 'bg-white text-black font-bold'
              : 'text-white hover:bg-gray-600'
          }`}
        >
          {number}
        </Link>
      )
    );
  };

  return (
    <div className="container mx-auto px-4 py-8 text-white">
            <h2 className="text-white text-2xl md:text-3xl font-semibold text-center mb-2">
        Company Profile
      </h2>
      <p className="text-white/60 text-sm text-center mb-6">
        Innovative. Engaging. Rewarding. Social.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {companies.map((item) => (
          <Link href={`/promoshare/${item?.id}`} key={item?.id}>
            <div className="w-fit">
              <div className="flex justify-center items-center p-4">
                <div className="max-w-xs allCards rounded-lg overflow-hidden p-4 shadow-lg text-white border border-gray-700 min-h-[313px] max-h-[313px]">
                  <Image
                    width={0}
                    height={0}
                    className="w-full max-w-[2020px] w-[220px] mx-auto max-h-[200px] min-h-[200px] object-cover"
                    src={noImage}
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
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-8 flex justify-center items-center space-x-1">
        {currentPage > 1 && (
          <Link href={`/promoshare?page=${currentPage - 1}`} className="px-3 py-1 text-white">
            Prev
          </Link>
        )}

        {renderPageNumbers()}

        {currentPage < totalPages && (
          <Link href={`/promoshare?page=${currentPage + 1}`} className="px-3 py-1 text-white">
            Next
          </Link>
        )}
      </div>
    </div>
  );
}
