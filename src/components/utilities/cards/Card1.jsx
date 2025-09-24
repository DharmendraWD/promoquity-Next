
import cardImg from '../../../../public/img/Lightshade.png'

import ru from '../../../../public/img/ru.png'
 const Card1 = () => {

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
    <>
      {cards.map((card, index) => (
        <div key={index} className="bg_transparent relative rounded-[20px] min-h-[320px]  w-[100%] overflow-hidden p-4 md:p-6 lg:p-8 text-white">
          <img src={card?.image || cardImg} alt="Card Image" className=" absolute right-[10%] w-[100px] opacity-40 object-cover mb-4 rounded" />
          <img src={ru} alt="" className='background: #6b6969;
    padding: 7px;
    border-radius: 8px; absolute top-[10%]' />
    <div className='h-full flex flex-col justify-end pb-[10px]'> 
       <div>
           <h3 className="text-xl font-semibold mb-2">{card?.topic}</h3>
          <p className="text-sm text-gray-400">{card?.description}</p>
       </div>
        </div></div>
      ))}
     </>
  );
};
export default Card1;
