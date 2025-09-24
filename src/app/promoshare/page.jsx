import React from 'react';
import Card from './components/Card';


const PromoShareCard = async () => {


  return (
    <>
      <h2 className="text-white text-2xl md:text-3xl font-semibold text-center mb-2">
        Promoshare
      </h2>
      <p className="text-white/60 text-sm text-center mb-6">
        Innovative. Engaging. Rewarding. Social.
      </p>

      <div className="grid grid-cols-1 justifyItemsCenter md:grid-cols-2 items-center justify-center lg:grid-cols-4 gap-6 mb-6">
 <Card></Card>
      </div>
    </>
  );
};

export default PromoShareCard;
