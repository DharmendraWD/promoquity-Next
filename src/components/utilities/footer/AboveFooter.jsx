
import noImage from '../../../../public/img/noImage.png';
import Logo1 from '../../../../public/img/promoquityArow.gif';
// /HomeContent/GetPagedHomeContentList?pageIndex=1&pageSize=10
import Image from 'next/image';
import Button2 from '../Button2';
import HeadingL from '../HeadingL';

function HeroImage({my}) {
let homepageContent = {
  "homeContent": {
    "data": {
      "items": [
        {
          "id": 1,
          "title": "Market and Insights Concepts",
          "description": "Market and Insights Concepts involve analyzing trends, consumer behavior, and data to guide strategic business decisions and uncover growth opportunities.",
          "images": [
           noImage
          ],
          "createdDate": "2023-09-25"
        }
      ]
    }
  }
}


  return (
    <>
            <div className='flex items-center flex-col w-full items-center justify-center'>
    <HeadingL label="Your gateway to growth" />
</div>
  <div className={`${my}`}>
     <div className="hreoImg relative">
    <div className="mt-12 relative max-w-lg mx-auto">
      {homepageContent?.homeContent?.data?.items?.[0] && (
<Image width={0} height={0}
src={Logo1}
alt="Hand holding a phone"
className="w-full"
/>      
)}
</div>
<div className="bottomHandGrdientDiv absolute bottom-[-2px] left-0 w-full h-[254px]">
{/* <div className="bottomHandGrdientDiv absolute bottom-[-2px] left-0 w-full h-[254px]" style={{ background: handBg }}> */}
</div>
</div>
             
  </div>
<div className='flex items-center justify-center mt-8'>
        <Button2 label="Get Started Right Now"  link="/login"></Button2>
</div>

  
  </>
  )
}

export default HeroImage