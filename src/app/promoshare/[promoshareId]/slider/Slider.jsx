// ImageSlider.jsx

"use client"
import React, { useEffect, useState } from 'react';
import styles from './ImageSlider.module.css'; // Import CSS module
import axios from 'axios';
  const BASE_API = process.env.NEXT_PUBLIC_BASE_API;
export const BASE_WEB_URL = process.env.NEXT_PUBLIC_BASE_CONTENT;





const ImageSlider = () => {
const [images, setimages] = useState([])


useEffect(() => {
  const fetchSLiderImage = async () => {
    try {
      const res = await axios.get(`${BASE_API}/CompanySlideShowImg/GetPagedSlideShowItemList?pageIndex=1&pageSize=10`);
      const data = res.data?.data?.items;
      setimages(data);
    } catch (error) {
      console.error(error);
    }
  };

  fetchSLiderImage();
}, []);



  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const handlePrev = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
      setFade(true);
    }, 300);
  };

  const handleNext = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
      setFade(true);
    }, 300);
  };
return (
  images.length >= 1 && (
    <div className={styles.sliderContainer}>
      <div
        className={`${styles.sliderImage} ${fade ? styles.fadeIn : styles.fadeOut}`}
      >
        <img
          src={BASE_WEB_URL + images[currentIndex]?.imageUrl}
          alt={`Slide ${currentIndex}`}
        />
      </div>
      <button className={styles.prevButton} onClick={handlePrev}>⟨</button>
      <button className={styles.nextButton} onClick={handleNext}>⟩</button>
    </div>
  )
);


};

export default ImageSlider;
