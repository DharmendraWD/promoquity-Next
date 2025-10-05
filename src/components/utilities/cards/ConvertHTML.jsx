"use client"
import React from 'react'
import parse from 'html-react-parser';


const ConvertHTML = ({cardDec}) => {
      const cleanDesc = cardDec?.replace(/<p>(&nbsp;|\s)*<\/p>/gi, '');

  return (
          <div className="text-sm text-gray-400 threeLinePara">{parse(cleanDesc)}</div>
   
  )
}

export default ConvertHTML