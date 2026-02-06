
import Logo1 from '../../../../public/img/Logo1.png'
import Link from 'next/link';
import footerImg from '../../../../public/img/footerbg.png';
import Image from 'next/image';



const Footer = async () => {

// const footerItems = data?.data?.data?.items;
// /PromoConfig/GetPagedPromoConfigList?pageIndex=1&pageSize=10

  const BASE_API = process.env.BASE_API;
  const BASE_CONTENT = process.env.BASE_CONTENT;
  let footerData = null;

    try {
    const response = await fetch(`${BASE_API}/PromoConfig/GetPagedPromoConfigList?pageIndex=1&pageSize=10`, {
    });

    if (!response.ok) throw new Error('Failed to fetch data');
    const result = await response.json();
    footerData = result;
  } catch (error) {
    console.error(error);
    return <div className="text-white text-center mt-10">Failed to load.</div>;
  }

  if(footerData){
    // console.log(footerData.data)
  }
    let footerItems = [
        {
          "id": 1,
          "title": "Market and Insights Concepts",
          "description": "Market and Insights Concepts involve analyzing trends, consumer behavior, and data to guide strategic business decisions and uncover growth opportunities.",
          "images": [
              "noImage"
          ],
          "createdDate": "2023-09-25"
        },
          ]

  return (
    <footer className="text-white px-4  max-w-[1440px] mx-auto mt-16 border-t-2 border-white/10 pb-16  left-0 right-0 bottom-0">
               <Image width={0} height={0} src={footerImg} alt="" className='absolute z-[-1] top-0 left-0 w-[100%] opacity-[30%] h-full'/>

      <div className="container grid grid-cols-1 lg:grid-cols-3 max-w-full gap-8  lg:pl-[0px] lg:grid-cols-[1.5fr_2fr]">
        {/* Left Section: Logo, Text, and Social Icons */}
        <div className="">
          <div className="flex items-center mb-4">
                  <Link href="/">  <Image width={0} height={0} src={Logo1} className='w-[60px]' alt="" /></Link>
        
          </div>
          <p className="text-sm text-gray-400 mb-6 w-[90%] lg:w-[85%]">
            Promoshare offers exclusive access to premier private growth enterprises and specialized trade finance investment opportunities for promoters.
          </p>
          <div className="flex space-x-2">
            {/* Social Icons - Using simple buttons as placeholders for icons */}
            <a href="#" className="bg-gray-800 p-2 rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter text-white">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </a>
            <a href="#" className="bg-gray-800 p-2 rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram text-white">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line>
              </svg>
            </a>
            <a href="#" className="bg-gray-800 p-2 rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin text-white">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a href="#" className="bg-gray-800 p-2 rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-dribbble text-white">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M8.56 2.75c4.81 1.05 6.42 5.67 6.42 5.67A4.62 4.62 0 0 1 16 11.5c.34 2.06-1.55 4-4.22 4-2.58 0-4.04-1.25-4.57-3.08-1.12-3.83 2.1-7.17 6.57-8.17z"></path>
              </svg>
            </a>
            <a href="#" className="bg-gray-800 p-2 rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-globe text-white">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
            </a>
          </div>
        </div>

        {/* Right Section: Link Columns */}
        <div className="flex-col lg:flex-row flex gap-8 justify-between">
          {/* Sections Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-400 flex flex-col">
    <Link href="/news"  className="hover:underline">News</Link>
    <Link href="/blogs"  className="hover:underline">Blogs</Link>
    <Link href="/faqs"  className="hover:underline">FAQs</Link>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400 flex flex-col">

         {
  footerData?.data?.items?.map((item, index) => {
    if (item?.title === "Our Office:") return null;

    return (
  <Link
  key={index}
  href={{
    pathname:
      "/legal/" +
      item?.title
        .replace(/\s+/g, '-')
        .toLowerCase()
        .replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase()),
    query: {
      data: item?.description, // ✅ pass your data here
      id: index,
      title: item?.title
    }
  }}
  className="hover:underline"
>
  {item?.title}
</Link>
    );
  })
}

            </ul>
          </div>
          {/* Pages Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Our Office</h4>
            <ul className="space-y-2 text-sm text-gray-400 max-w-[230px]">
    {
   footerData?.data?.items?.map((item, index) => {
    if (item?.title !== "Our Office:") return null;

    // Extract parts from description
    const description = item?.description || "";

    const gmailMatch = description.match(/[a-zA-Z0-9._%+-]+@gmail\.com/);
    const mobNumMatch = description.match(/\+977\s?\d{9}/);

    const gmailState = gmailMatch ? gmailMatch[0] : "";
    const mobNumState = mobNumMatch ? mobNumMatch[0] : "";
    const addressState = description
      .replace(gmailState, "")
      .replace(mobNumState, "")
      .trim();

    return (
      <div key={index} >

        {/* Address */}
        {addressState && (
          <p className="mb-1">
            <strong>Address:</strong> {addressState}
          </p>
        )}

        {/* Gmail */}
        {gmailState && (
          <p className="mb-1">
            <strong>Email:</strong>{" "}
            <Link href={`mailto:${gmailState}`} className='break-words text-sm leading-snug'>
              {gmailState}
            </Link>
          </p>
        )}

        {/* Mobile Number */}
        {mobNumState && (
          <p>
            <strong>Phone:</strong>{" "}
            <a href={`tel:${mobNumState}`}>
              {mobNumState}
            </a>
          </p>
        )}
      </div>
    );
  })
}

</ul>

          </div>
        </div>
      </div>
      <hr className='border-gray-600 my-4' />
{/* {
  footerItems?.map((item, index) => {
    if (
      item?.title === "Page end disclaimers:" ||
      item?.title === "Page end Disclaimers"
    ) {
      return (
        <p key={index} className="text-sm text-gray-500 text-justify">
          {item?.description}
        </p>
      );
    }

    // Skip everything else
    return null;
  })
} */}
{
  footerItems?.map((item, index) => {
    if (
      (item?.title === "Page end disclaimers:" || item?.title === "Page end Disclaimers") &&
      !hasRenderedDisclaimer
    ) {
      hasRenderedDisclaimer = true; // 👈 prevent further rendering

      const fullText = item?.description || "";
      const halfLength = Math.floor(fullText.length / 2);
      const visibleText = isExpanded ? fullText : fullText.slice(0, halfLength);

      return (
        <div key={index} className="text-sm text-gray-500 text-justify transition-all duration-300 ease-in-out">
          <p>{visibleText}{!isExpanded && '...'}</p>

          <button
            onClick={() => setIsExpanded(prev => !prev)}
            className="mt-2 text-blue-500 hover:underline text-sm"
          >
            {isExpanded ? "Show less" : "Show more"}
          </button>
        </div>
      );
    }

    // Skip everything else
    return null;
  })
}



    </footer>
  );
};

export default Footer;