import React from 'react';
import { FaSearch, FaArrowDown, FaArrowUp } from 'react-icons/fa';



const LiveTradingTable = () => {
  const data = [
    {
      id: 1,
      symbol: 'AAPL',
      company: 'Apple Inc.',
      ltp: '175.43',
      xChange: '+2.34%',
      isUp: true,
      open: '172.50',
      high: '176.80',
      low: '171.20',
      qty: '2.4M',
      pClose: '171.43',
      diff: '+4.00',
    },
    {
      id: 2,
      symbol: 'AAPL',
      company: 'Apple Inc.',
      ltp: '175.43',
      xChange: '+2.34%',
      isUp: true,
      open: '172.50',
      high: '176.80',
      low: '171.20',
      qty: '2.4M',
      pClose: '171.43',
      diff: '+4.00',
    },
    {
      id: 3,
      symbol: 'AAPL',
      company: 'Apple Inc.',
      ltp: '175.43',
      xChange: '+2.34%',
      isUp: true,
      open: '172.50',
      high: '176.80',
      low: '171.20',
      qty: '2.4M',
      pClose: '171.43',
      diff: '+4.00',
    },
    {
      id: 4,
      symbol: 'AAPL',
      company: 'Apple Inc.',
      ltp: '175.43',
      xChange: '+2.34%',
      isUp: true,
      open: '172.50',
      high: '176.80',
      low: '171.20',
      qty: '2.4M',
      pClose: '171.43',
      diff: '+4.00',
    },
    {
      id: 5,
      symbol: 'AAPL',
      company: 'Apple Inc.',
      ltp: '175.43',
      xChange: '+2.34%',
      isUp: true,
      open: '172.50',
      high: '176.80',
      low: '171.20',
      qty: '2.4M',
      pClose: '171.43',
      diff: '+4.00',
    },
    {
      id: 6,
      symbol: 'AAPL',
      company: 'Apple Inc.',
      ltp: '175.43',
      xChange: '+2.34%',
      isUp: true,
      open: '172.50',
      high: '176.80',
      low: '171.20',
      qty: '2.4M',
      pClose: '171.43',
      diff: '+4.00',
    },
    {
      id: 7,
      symbol: 'AAPL',
      company: 'Apple Inc.',
      ltp: '175.43',
      xChange: '+2.34%',
      isUp: true,
      open: '172.50',
      high: '176.80',
      low: '171.20',
      qty: '2.4M',
      pClose: '171.43',
      diff: '+4.00',
    },
    {
      id: 8,
      symbol: 'AAPL',
      company: 'Apple Inc.',
      ltp: '175.43',
      xChange: '+2.34%',
      isUp: true,
      open: '172.50',
      high: '176.80',
      low: '171.20',
      qty: '2.4M',
      pClose: '171.43',
      diff: '+4.00',
    },
    {
      id: 9,
      symbol: 'AAPL',
      company: 'Apple Inc.',
      ltp: '175.43',
      xChange: '+2.34%',
      isUp: true,
      open: '172.50',
      high: '176.80',
      low: '171.20',
      qty: '2.4M',
      pClose: '171.43',
      diff: '+4.00',
    },
    {
      id: 10,
      symbol: 'AAPL',
      company: 'Apple Inc.',
      ltp: '175.43',
      xChange: '+2.34%',
      isUp: true,
      open: '172.50',
      high: '176.80',
      low: '171.20',
      qty: '2.4M',
      pClose: '171.43',
      diff: '+4.00',
    },
    {
      id: 11,
      symbol: 'AAPL',
      company: 'Apple Inc.',
      ltp: '175.43',
      xChange: '+2.34%',
      isUp: true,
      open: '172.50',
      high: '176.80',
      low: '171.20',
      qty: '2.4M',
      pClose: '171.43',
      diff: '+4.00',
    },
    {
      id: 12,
      symbol: 'AAPL',
      company: 'Apple Inc.',
      ltp: '175.43',
      xChange: '+2.34%',
      isUp: true,
      open: '172.50',
      high: '176.80',
      low: '171.20',
      qty: '2.4M',
      pClose: '171.43',
      diff: '+4.00',
    },
    {
      id: 2123,
      symbol: 'AAPL',
      company: 'Apple Inc.',
      ltp: '175.43',
      xChange: '-1.23%',
      isUp: false,
      open: '172.50',
      high: '176.80',
      low: '171.20',
      qty: '2.4M',
      pClose: '171.43',
      diff: '+4.00',
    },
    {
      id: 14,
      symbol: 'AAPL',
      company: 'Apple Inc.',
      ltp: '175.43',
      xChange: '+2.34%',
      isUp: true,
      open: '172.50',
      high: '176.80',
      low: '171.20',
      qty: '2.4M',
      pClose: '171.43',
      diff: '+4.00',
    },
    {
      id: 164,
      symbol: 'AAPL',
      company: 'Apple Inc.',
      ltp: '175.43',
      xChange: '-1.23%',
      isUp: false,
      open: '172.50',
      high: '176.80',
      low: '171.20',
      qty: '2.4M',
      pClose: '171.43',
      diff: '+4.00',
    },
    // ... add more data here to fill the table
  ];


  // right side


  return (
    <>
    <div className='grid mt-8 grid-cols-1 md:grid-cols-[3fr_1fr] gap-4'>
<div className=" rounded-[20px] border border-gray-700 text-gray-300 h-fit p-4 sm:p-6 lg:p-8">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <h1 className="text-xl sm:text-2xl font-semibold text-white">
          Live Trading
        </h1>
        <div className="flex flex-col sm:flex-row items-center mt-4 sm:mt-0 space-y-2 sm:space-y-0 sm:space-x-4">
          <div className="relative w-full sm:w-auto">
            <input
              type="text"
              placeholder="Search stocks..."
              className="bg-grey-300 text-black rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-green-500 w-full sm:w-auto"
            />
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
          <div className="text-sm text-gray-400 whitespace-nowrap">
            As of 2025/08/25 15:00
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto rounded-lg table-container scrollbar-thin">
        <table className="min-w-full  border-separate border-spacing-y-2">
          <thead>
            <tr className="">
              {['Symbol', 'LTP', 'X-Change', 'Open', 'High', 'Low', 'Qty', 'P. Close', 'Diff'].map((header) => (
                <th
                  key={header}
                  className="px-4 py-2 text-left text-xs font-medium text-gray-400 uppercase"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.id + row.symbol} className=" hover:bg-[rgba(91,94,105,0.2)] transition-colors duration-200">
                <td className="px-4 py-2 border-b border-b-gray-700 rounded-l-md whitespace-nowrap">
                  <div className="font-medium text-white">{row.symbol}</div>
                  <div className="text-xs text-gray-400">{row.company}</div>
                </td>
                <td className="px-4 border-b border-b-gray-700 py-2 whitespace-nowrap">{row.ltp}</td>
                <td className="px-4 border-b border-b-gray-700 py-2 whitespace-nowrap">
                  <span
                    className={`flex items-center text-sm font-semibold p-1 rounded-md ${
                      row.isUp ? 'bg-green-600/30 text-green-500' : 'bg-red-600/30 text-red-500'
                    }`}
                  >
                    {row.isUp ? <FaArrowUp className="mr-1" /> : <FaArrowDown className="mr-1" />}
                    {row.xChange}
                  </span>
                </td>
                <td className="px-4 border-b border-b-gray-700 py-2 whitespace-nowrap">{row.open}</td>
                <td className="px-4 border-b border-b-gray-700 py-2 whitespace-nowrap">{row.high}</td>
                <td className="px-4 border-b border-b-gray-700 py-2 whitespace-nowrap">{row.low}</td>
                <td className="px-4 border-b border-b-gray-700 py-2 whitespace-nowrap">{row.qty}</td>
                <td className="px-4 border-b border-b-gray-700 py-2 whitespace-nowrap">{row.pClose}</td>
                <td
                  className={`px-4 border-b border-b-gray-700 py-2 rounded-r-md font-semibold whitespace-nowrap ${
                    row.isUp ? 'text-green-500' : 'text-red-500'
                  }`}
                >
                  {row.diff}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
{/* <div className='flex flex-col gap-4'>
      <LGTTtable Data={gainerData} Keys={gainerKeys}></LGTTtable>
    <LGTTtable Data={gainerData} Keys={gainerKeys}></LGTTtable>
    <LGTTtable Data={gainerData} Keys={gainerKeys}></LGTTtable>
    <LGTTtable Data={gainerData} Keys={gainerKeys}></LGTTtable>
</div> */}
    </div>

    </>
  );
};

export default LiveTradingTable;