import React from 'react'
import loadingGIF from "../../public/img/promoquityArow.gif"
import Image from 'next/image'


const Loading = () => {
  return (
    <div className='min-h-screen flex justify-center items-center'>
      <Image src={loadingGIF} width={600} height={600} alt="loading" />
    </div>
  )
}

export default Loading