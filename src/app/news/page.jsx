"use client"

import React, { useEffect, useState } from 'react'
import NewsCard from './components/NewsCard'
import HeadingL from '@/components/utilities/HeadingL'
import Para from '@/components/utilities/Para'


function News() {

  return (
    <div>
        <HeadingL label="News" />
        <Para label="Stay updated with the latest news and announcements from our company." />
<NewsCard></NewsCard>

    </div>
  )
}

export default News