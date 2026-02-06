

'use client';

import { useState } from 'react';
import axios from 'axios';
import { FaDownload } from 'react-icons/fa';
import Link from 'next/link';

export default function DownloadCard({ downloads, currentPage, totalPages }) {
  const [loadingIndex, setLoadingIndex] = useState(null);
  const [progressMap, setProgressMap] = useState({});

  const handleDownload = async (item, index) => {
    // console.log("Clicked on download");
    setLoadingIndex(index);
    setProgressMap(prev => ({ ...prev, [index]: 0 }));

    try {
      const fileUrl = `${process.env.NEXT_PUBLIC_BASE_CONTENT}${item.fileURL}${item.docName}`;

      const res = await axios.get(fileUrl, {
        responseType: 'blob',
        onDownloadProgress: (evt) => {
          const percent = Math.round((evt.loaded * 100) / (evt.total || 1));
          setProgressMap(prev => ({ ...prev, [index]: percent }));
        }
      });

      const blobUrl = URL.createObjectURL(new Blob([res.data]));
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
      setProgressMap(prev => ({ ...prev, [index]: 0 }));
    }
  };

  if (!downloads || downloads.length === 0) {
    return <div className="text-white min-h-screen flex justify-center items-center text-2xl">No Data Found</div>;
  }

  return (
    <div className="min-h-screen p-6 text-white">
      <h2 className="text-3xl font-semibold text-center mb-2">Downloads</h2>
      <p className="text-sm text-center text-white/60 mb-6">
        Download the Account Details Update Form.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {downloads.map((item, index) => (
          <div key={index} className="border border-white p-4 rounded-xl shadow-md">
            <h2 className="font-semibold text-sm">{item.docTitle}</h2>
            <p className="text-xs text-gray-300">{item.docName}</p>

            <button
              onClick={() => handleDownload(item, index)}
              disabled={loadingIndex === index}
              className={`mt-4 px-3 py-2 text-xs cursor-pointer rounded-md bg-white text-black hover:bg-gray-200 ${
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
        {currentPage > 1 && (
          <Link
            href={`/downloads?page=${currentPage - 1}`}
            className="px-2 py-1"
          >
            Prev
          </Link>
        )}

        {Array.from({ length: totalPages }, (_, i) => i + 1)
          .filter(p => p === 1 || p === totalPages || Math.abs(p - currentPage) <= 1)
          .map((p, idx, arr) => {
            const showDots = idx > 0 && p !== arr[idx - 1] + 1;
            return (
              <span key={p}>
                {showDots && <span className="px-1">...</span>}
                <Link
                  href={`/downloads?page=${p}`}
                  className={`px-2 py-1 rounded ${p === currentPage ? 'bg-white text-black' : 'hover:underline'}`}
                >
                  {p}
                </Link>
              </span>
            );
          })}

        {currentPage < totalPages && (
          <Link
            href={`/downloads?page=${currentPage + 1}`}
            className="px-2 py-1"
          >
            Next
          </Link>
        )}
      </div>
    </div>
  );
}

