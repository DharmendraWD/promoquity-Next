
// import DownloadCard from './components/DownloadCard';

// export default function DownloadsPage() {
//   return <DownloadCard />;
// }


// app/downloads/page.jsx
import DownloadCard from './components/DownloadCard';

const BASE_API = process.env.NEXT_PUBLIC_BASE_API || 'http://www.taskperfect.somee.com/api';

const fetchDownloads = async (page, limit = 10) => {
  const res = await fetch(`${BASE_API}/DownloadFiles/GetPagedDownloadList?pageIndex=${page}&pageSize=${limit}&companyId=0`, {
    cache: 'no-store',
  });

  if (!res.ok) throw new Error('Failed to fetch downloads');

  const data = await res.json();
  return data?.data || { items: [], totalCount: 0 };
};

export default async function DownloadPage({ searchParams }) {
  const page = parseInt(searchParams?.page || '1', 10);
  const limit = 10;

  try {
    const data = await fetchDownloads(page, limit);
    const totalPages = Math.ceil(data.totalCount / limit);

    return (
      <DownloadCard
        downloads={data.items}
        currentPage={page}
        totalPages={totalPages}
      />
    );
  } catch (error) {
    console.error('SSR Error:', error);
    return <div className="text-red-500 text-center">Failed to load downloads</div>;
  }
}
