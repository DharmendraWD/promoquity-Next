import React from 'react';
import { FaChevronRight, FaDownload, FaFileInvoiceDollar, FaRegEye } from 'react-icons/fa';
import { TbHandFinger } from 'react-icons/tb';



const ProcessFlow = () => {
  const steps = [
    {
      icon: <TbHandFinger className="text-black text-xl" />,
      title: "Choose your Company",
      bgColor: "bg-blue-600"
    },
    {
      icon: <FaRegEye className="text-black text-xl" />,
      title: "Read / Analyse / Finalize",
      bgColor: "bg-green-600"
    },
    {
      icon: <FaDownload className="text-black text-xl" />,
      title: "Download Form",
      bgColor: "bg-purple-600"
    },
    {
      icon: <FaFileInvoiceDollar className="text-black text-xl" />,
      title: "Fill KYC , application",
      bgColor: "bg-orange-600"
    }
  ];

  return (
    <div className="flex items-center justify-center p-4">
      <div className=" w-full">
        <h1 className="text-2xl md:text-3xl  text-center text-gray-200 mb-12">
          The Process to invest
        </h1>
        
        {/* Desktop/Tablet View */}
        <div className="hidden md:flex items-center justify-between relative">
                    <hr className="border-gray-600 my-4 top-[17%] w-full h-2 absolute"></hr>

          {steps.map((step, index) => (
              <React.Fragment key={index}>
              <div className="flex flex-col items-center flex-1">
                <div className={`w-16 z-[2] h-16 rounded-full flex items-center text-red justify-center bg-white mb-4`}>
                  {step.icon}
                </div>
                <p className="text-center text-gray-500 font-medium px-2">
                  {step.title}
                </p>
              </div>
              {/* {index < steps.length - 1 && (
                  <div className="flex-1 flex justify-center">
                    <hr class="border-gray-600 my-4 w-full h-1"></hr>
                
                </div>
              )} */}
            </React.Fragment>
          ))}
        </div>

        {/* Mobile View */}
        <div className="md:hidden space-y-6">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-sm border">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${step.bgColor} flex-shrink-0`}>
                {step.icon}
              </div>
              <div className="flex-1">
                <p className="text-gray-700 font-medium">
                  {step.title}
                </p>
              </div>
             
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProcessFlow;