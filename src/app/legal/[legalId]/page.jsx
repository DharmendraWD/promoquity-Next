'use client';
import React from 'react'
import Para from '@/components/utilities/Para';

import { useSearchParams } from 'next/navigation';
import HeadingL from '@/components/utilities/HeadingL';

const Page = () => {
  const searchParams = useSearchParams();
  const data = searchParams.get('data');
  const title = searchParams.get('title');
  const id = searchParams.get('id');

  return (
    <div className='min-h-screen'>
        <HeadingL label={title}></HeadingL>
    <Para label={data}></Para>
    </div>
  );
};

export default Page;
