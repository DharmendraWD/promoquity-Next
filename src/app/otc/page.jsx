import React from 'react';

const OtcPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8 flex justify-center items-center">
      <div className="w-full max-w-4xl h-[90vh] border shadow-lg">
        <iframe
          src="/OTC.pdf"
          width="100%"
          height="100%"
          style={{ border: 'none' }}
        />
      </div>
    </div>
  );
};

export default OtcPage;
