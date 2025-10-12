// app/(home)/components/MultiCarouselClient.jsx (CLIENT COMPONENT)

'use client';

import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import HeadingL from '@/components/utilities/HeadingL';
import Button from '@/components/utilities/Button';
import noImage from '../../../../public/img/noImage.png';

export default function MultiCarouselClient({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsToShow(5);
      } else if (window.innerWidth >= 768) {
        setItemsToShow(3);
      } else {
        setItemsToShow(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const getVisibleItems = () => {
    const visible = [];
    for (let i = 0; i < itemsToShow; i++) {
      visible.push(items[(currentIndex + i) % items.length]);
    }
    return visible;
  };

  return (
    <section className="text-white mt-[150px]">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <HeadingL label="Our Products" />
          <p className="mt-2 text-lg text-gray-400">
            Explore Nepal’s Leading growth companies at your fingertips.
          </p>
        </div>

        <div className="relative">
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full z-10 text-black bg-gray-200 hover:bg-gray-300"
          >
            <FaChevronLeft size={20} />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full z-10 text-black bg-gray-200 hover:bg-gray-300"
          >
            <FaChevronRight size={20} />
          </button>

          <div className="flex justify-center md:justify-start">
            {getVisibleItems().map((item, idx) => (
              <Link
                href={`/promoshare/${item?.id}`}
                key={idx}
                className="flex-shrink-0 p-2 transition-transform duration-300"
                style={{ width: `${100 / itemsToShow}%` }}
              >
                <div className="rounded-[20px] overflow-hidden">
                  <Image
                    width={300}
                    height={300}
                    alt={item?.companyName || 'Company'}
                    src={item?.imageUrl ? item.imageUrl : noImage}
                    className="w-full h-40 object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-gray-50">{item?.companyName}</h3>
                  <p className="text-xs text-gray-400 leading-tight line-clamp-2">{item?.remarks1}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <Button link="/" label="View More" />
      </div>
    </section>
  );
}
