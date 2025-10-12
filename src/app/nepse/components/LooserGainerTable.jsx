import React from 'react';
import { FaChartLine, FaArrowUp } from 'react-icons/fa'; // Importing necessary icons
import { MdOutlineTrendingDown } from "react-icons/md";



const LGTTtable = ({Keys, Data, Icon: Icon, IconColor, heading, heading2, textColor, textBg}) => {

  return (
    <>
    <div className="border rounded-[20px] border-gray-700 p-4 sm:p-6 lg:p-8 shadow-lg max-w-full mx-auto">
      {/* Header Section */}
      <div className="flex items-center mb-2">
        {/* <FaChartLine className="text-green-500 text-xl sm:text-2xl mr-2" /> */}
       <Icon style={{ color: IconColor, fontSize: '20px' }} />

        <h2 className="text-lg sm:text-xl font-semibold text-white">{heading}</h2>
      </div>
      <p className="text-sm text-gray-400 mb-6">{heading2}</p>

      {/* Table Section */}
      <div className="overflow-x-auto">
        <table className="min-w-full border-separate border-spacing-y-2">
          <thead>
            <tr>
              {
                Keys.map((key) => (
                  <th key={key.id} className="px-3 py-2 text-left text-xs font-medium text-gray-400 uppercase">{key.key}</th>
                ))
              }
            </tr>
          </thead>
          <tbody>
            {Data.map((stock) => (
              <tr key={stock.id} className=" hover:bg-[rgba(91,94,105,0.2)] transition-colors duration-200">
                <td className="px-3 border-b border-b-gray-700 py-3 rounded-l-md whitespace-nowrap">
                  <div className="font-medium text-white text-base">{stock.symbol}</div>
                  <div className="text-xs text-gray-400">{stock.company}</div>
                </td>
                <td className="px-3 border-b border-b-gray-700 py-3 font-bold text-white whitespace-nowrap">{stock.ltp}</td>
                <td className="px-3 border-b border-b-gray-700 py-3 whitespace-nowrap">
                  <span className={`inline-flex items-center ${textBg} ${textColor} text-sm font-semibold px-2 py-1 rounded-md`}>
  <FaArrowUp className="mr-1 text-xs" /> {stock.change}
</span>

                </td>
                <td className="px-3 py-3 border-b border-b-gray-700 rounded-r-md text-white whitespace-nowrap">{stock.qty}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    <br />
    
    </>
  );
};

export default LGTTtable;