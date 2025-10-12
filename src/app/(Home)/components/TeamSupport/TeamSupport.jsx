import Image from 'next/image';
import HeadingL from '@/components/utilities/HeadingL';
import PopupModal from './PopupModal';
import man1 from '../../../../../public/img/man1.jpg';
import man2 from '../../../../../public/img/man2.jpg';
import man3 from '../../../../../public/img/man3.jpg';
import axios from 'axios';

const BASE_API = process.env.NEXT_PUBLIC_BASE_API;

export default async function TeamSupport() {
  let item = null;
  try {
    const res = await axios.get(`${BASE_API}/HomeContent/GetPagedHomeContentList?pageIndex=1&pageSize=10`);
    item = res.data?.data?.items?.[1] || null;
  } catch (err) {
    console.error('Failed to fetch content:', err);
  }

  if (!item) return null;

  return (
    <div className="flex xl:flex-row flex-col w-auto lg:w-[1182px] mx-auto justify-between items-center gap-[85px]">
      {/* Images */}
      <div className="w-[90%] lg:w-[500px] relative h-[456px] shrink-0">
        <div className="lg:w-[222px] w-[40%] h-[50%] teamSuppImageParent absolute top-0 left-[32px]">
          <Image src={man1} alt="" className="h-full w-full rounded-[30px] object-cover" />
        </div>

        <div className="w-[40%] lg:w-[261px] h-[198px] absolute bottom-0 left-[5px] teamSuppImageParent">
          <Image src={man2} alt="" className="h-full w-full rounded-[30px] object-cover" />
        </div>

        <div className="w-[40%] md:w-[221px] h-[193px] lg:h-[263px] teamSuppImageParent absolute right-[5px] lg:right-0 top-[50%] -translate-y-1/2">
          <Image src={man3} alt="" className="h-full w-full rounded-[30px] object-cover" />
        </div>
      </div>

      {/* Text Content */}
      <div className="lg:w-[587px] w-auto px-[10px] lg:px-0">
        <div className="flex flex-col items-start">
          <div className="flex justify-center items-center p-4">
            <div className="rounded-[57px] text-gray-400 border-b border-b-white/20 px-8 py-3 text-lg font-medium">
              Promoquity Care
            </div>
          </div>

          <HeadingL label={item?.topic} />

          <div className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl paraandTopic">
            <p className="twoLinePara">{item?.description}</p>
            
            {/* 👇 Client popup trigger here */}
            <PopupModal description={item?.description} />
          </div>
        </div>
      </div>
    </div>
  );
}
