"use client";
// import pdfFile from "../../../public/OTC.pdf";
import { useEffect } from "react";

const Otc = () => {
  useEffect(() => {
    // This path is relative to the root of your deployed domain
    const pdfUrl = '/OTC.pdf'; 
    window.open(pdfUrl, '_blank');
    window.location.href = '/';
  }, []);

  return <></>;
};

export default Otc;