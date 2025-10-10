
import ticketimg0 from '../../../../public/lowTicket/11.png'
import ticketimg1 from '../../../../public/lowTicket/22.png'
import ticketimg2 from '../../../../public/lowTicket/44.png'
import ticketimg3 from '../../../../public/lowTicket/rech1.png'
import Image from 'next/image';
import ConvertHTML from './ConvertHTML'

 const Card1 = async () => {
    const ticketImages = [ticketimg0, ticketimg1, ticketimg2, ticketimg3];
    const BASE_CONTENT = process.env.BASE_CONTENT



const response = await fetch(`${process.env.BASE_API}/HomeContentMid/GetPagedHomeContentMidList?pageIndex=1&pageSize=10`, );
  if (!response.ok) {
    return null;
    throw new Error('Failed to fetch data');
  }

const data = await response.json();

  return (
    <>
      {data?.data?.items.slice(0, 4).map((card, index) => (
        <div key={index} className="bg_transparent relative rounded-[20px] min-h-[320px]  w-[100%] overflow-hidden p-4 md:p-6 lg:p-8 text-white">
          {/* <img src={card?.image || cardImg} alt="Card Image" className=" absolute right-[10%] w-[100px] opacity-40 object-cover mb-4 rounded" /> */}
          {/* <img src={"ticketimg"+index+".jpeg"} alt="" className='background: #6b6969;
    padding: 7px;
    border-radius: 8px; absolute top-[10%]' /> */}
    <div className='h-full flex flex-col pb-[p5x]'> 
   {ticketImages[index] ? (
  <Image
    width={300}
    height={300}
    src={ticketImages[index]}
    alt={`Ticket ${index}`}
    className="widthWkitFIll rounded-[20px] h-[170px]"
  />
) : null}

       <div className='mt-1'>
           <h3 className="text-xl oneLinePara font-semibold mb-2">{card?.topic}</h3>
         <ConvertHTML cardDec={card?.description}></ConvertHTML>
       </div>
        </div>
        </div>
      ))}
     </>
  );
};
export default Card1;
