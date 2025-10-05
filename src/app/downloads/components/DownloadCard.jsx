// components/DownloadCard.jsx
'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { FaDownload } from 'react-icons/fa';
import Loading from '@/components/Loading/Loading';

const API_URL = 'http://www.taskperfect.somee.com/api/DownloadFiles';

export default function DownloadCard() {
  const [data, setData] = useState(null);
  const [limit, setLimit] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [loadingIndex, setLoadingIndex] = useState(null);
  const [progressMap, setProgressMap] = useState({});

  const fetchPage = async (page) => {
    const skip = (page - 1) * limit;
    setLoading(true);
    try {
      const res = await axios.get(`${API_URL}/GetPagedDownloadList?pageIndex=${page}&pageSize=${limit}&companyId=0`);
      setData(res.data?.data);
      setCurrentPage(page);
      setTotalPages(Math.ceil(res.data?.data?.totalCount / limit));
    } catch (err) {
      console.error(err);
      setError('Failed to fetch data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPage(currentPage);
  }, []);

  const handleDownload = async (itemIndex) => {
    setLoadingIndex(itemIndex);
    setProgressMap(prev => ({ ...prev, [itemIndex]: 0 }));

    try {
      const item = data.items[itemIndex];
      const fileUrl = `http://www.taskperfect.somee.com${item.fileURL}${item.docName}`;

      const fileResp = await axios.get(fileUrl, {
        responseType: 'blob',
        onDownloadProgress: (evt) => {
          const percent = Math.round((evt.loaded * 100) / (evt.total || 1));
          setProgressMap(prev => ({ ...prev, [itemIndex]: percent }));
        }
      });

      const blobUrl = URL.createObjectURL(new Blob([fileResp.data]));
      const link = document.createElement('a');
      link.href = blobUrl;
      link.setAttribute('download', item.docName);
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(blobUrl);
    } catch (err) {
      alert("Download failed");
    } finally {
      setLoadingIndex(null);
      setProgressMap(prev => ({ ...prev, [itemIndex]: 0 }));
    }
  };

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    fetchPage(page);
  };

  if (loading) {
    return <div className="text-white min-h-screen flex justify-center items-center text-2xl"><Loading /></div>;
  }

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

  if (!data || !data.items || data.items.length < 1) {
    return <div className="text-white min-h-screen flex justify-center items-center text-2xl">No Data Found</div>;
  }

  return (
    <div className="min-h-screen p-6  text-white">
      <h2 className="text-3xl font-semibold text-center mb-2">Downloads</h2>
      <p className="text-sm text-center text-white/60 mb-6">
        Download the Account Details Update Form.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {data.items.map((item, index) => (
          <div key={index} className="border border-white p-4 rounded-xl shadow-md">
            <h2 className="font-semibold text-sm">{item.docTitle}</h2>
            <p className="text-xs text-gray-300">{item.docName}</p>

            <button
              onClick={() => handleDownload(index)}
              disabled={loadingIndex === index}
              className={`mt-4 px-3 py-2 text-xs rounded-md bg-white text-black hover:bg-gray-200 ${
                loadingIndex === index ? 'cursor-wait opacity-70' : ''
              }`}
            >
              {loadingIndex === index
                ? `Downloading... ${progressMap[index] || 0}%`
                : <><FaDownload size={12} className="inline mr-1" />Download</>}
            </button>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-2 mt-8 text-white text-sm">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-2 py-1 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          Prev
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1)
          .filter(p => p === 1 || p === totalPages || Math.abs(p - currentPage) <= 1)
          .map((p, idx, arr) => {
            const showDots = idx > 0 && p !== arr[idx - 1] + 1;
            return (
              <span key={p}>
                {showDots && <span className="px-1">...</span>}
                <button
                  onClick={() => handlePageChange(p)}
                  className={`px-2 py-1 rounded ${p === currentPage ? 'bg-white text-black' : 'hover:underline'}`}
                >
                  {p}
                </button>
              </span>
            );
          })}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-2 py-1 ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          Next
        </button>
      </div>
    </div>
  );
}
