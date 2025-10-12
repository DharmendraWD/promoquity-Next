
import Marquee from './Marquee'
import LiveTradingTable from './LiveTradingTable'
import img from '../../../../public/img/noImage.png'
import LGTTtable from './LooserGainerTable'


import { MdOutlineTrendingDown } from "react-icons/md";
import { FaChartLine } from 'react-icons/fa'; // Importing necessary icons



function Nepse() {
  //  gainer data 
  const gainerData = [
    {
      id: 1,
      symbol: 'AAPL',
      company: 'Apple Inc.',
      ltp: '175.43',
      change: '+2.34%',
      qty: '150',
    },
    {
      id: 2,
      symbol: 'TSLA',
      company: 'Tesla Inc.',
      ltp: '248.87',
      change: '+2.34%',
      qty: '75',
    },
    {
      id: 3,
      symbol: 'GOOGL',
      company: 'Alphabet Inc.',
      ltp: '142.56',
      change: '+2.34%',
      qty: '200',
    },
    {
      id: 4,
      symbol: 'MSFT',
      company: 'Microsoft Corp.',
      ltp: '378.91',
      change: '+2.34%',
      qty: '120',
    },
    {
      id: 5,
      symbol: 'AMZN',
      company: 'Amazon.com Inc.',
      ltp: '145.32',
      change: '+2.34%',
      qty: '90',
    },
    {
      id: 6,
      symbol: 'NVDA',
      company: 'NVIDIA Corp.',
      ltp: '892.45',
      change: '+2.34%',
      qty: '45',
    },
  ];

  const gainerKeys = [
    {
      id: 1,
      key: 'Symbol',
    },
    {
      id: 2,
      key: 'LTP',
    },
    {
      id: 3,
      key: '% Change',
    },
    {
      id: 4,
      key: 'Qty',
    },
  ];
  return (
    <>
      <div className="text-white min-h-screen">
        <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
          {/* Main Content Area */}
          <div className="flex-grow lg:w-2/3">

            <LiveTradingTable></LiveTradingTable>
           
          </div>

          {/* Trending News Sidebar */}
          <div className="lg:w-1/3 relative scrollbar-thin">
            <div className="lg:sticky lg:top-[64px] rounded-lg p-6 scrollbar-thi lg:max-h-[calc(100vh-64px)] overflow-y-auto">
              {/* <h2 className="text-2xl font-bold mb-6">Trending News</h2> */}

              <LGTTtable Data={gainerData} Keys={gainerKeys} Icon={FaChartLine} IconColor={"green"} heading={"Top Gainers"} heading2={"Top Stock Gainers"} textBg={"bg-green-600/30"} textColor={"text-green-500"}></LGTTtable>
              <LGTTtable
                Data={gainerData}
                Keys={gainerKeys}
                Icon={MdOutlineTrendingDown}
                IconColor="red"
                heading="Top Losers"
                heading2="Top Stock Looser"
                textBg="bg-red-600/30"
                textColor="text-red-500"
              />

            </div>
          </div>
        </div>
        {/* <RelatedNews totalNews={relatedNews}></RelatedNews> */}
      </div>


    </>
  )
}

export default Nepse