
import HeadingL from '@/components/utilities/HeadingL'
import Para from '@/components/utilities/Para'
import Image from 'next/image'

import cardImg from '../../../../public/img/Lightshade.png'

import ru from '../../../../public/img/ru.png'
// /HomeContentMid/GetPagedHomeContentMidList?pageIndex=1&pageSize=10`

function HomepageCard() {
      let cards = [
          {
            topic: "Low ticket size",
            description: "Low ticket size",
            image: cardImg,
          },
          {
            topic: "Low ticket size",
            description: "Low ticket size",
            image: cardImg,
          },
          {
            topic: "Low ticket size",
            description: "Low ticket size",
            image: cardImg,
          },
          {
            topic: "Low ticket size",
            description: "Low ticket size",
            image: cardImg,
          }
        ]
  return (
     <div className="py-[120px]">
      <HeadingL label="Low ticket size" />
    <Para label="Optimize business processes and streamline operations to significantly minimize costs and maximize overall efficiency." /> 
  <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

   {cards.map((card, index) => (
           <div key={index} className="bg_transparent relative rounded-[20px] min-h-[320px]  w-[100%] overflow-hidden p-4 md:p-6 lg:p-8 text-white">
             <Image width={0} height={0} src={card?.image || cardImg} alt="Card Image" className=" absolute right-[10%] w-[100px] opacity-40 object-cover mb-4 rounded" />
             <Image width={0} height={0} src={ru} alt="" className='background: #6b6969;
       padding: 7px;
       border-radius: 8px; absolute top-[10%]' />
       <div className='h-full flex flex-col justify-end pb-[10px]'> 
          <div>
              <h3 className="text-xl font-semibold mb-2">{card?.topic}</h3>
             <p className="text-sm text-gray-400">{card?.description}</p>
          </div>
           </div></div>
         ))}
 
</div></div>
  )
}

export default HomepageCard