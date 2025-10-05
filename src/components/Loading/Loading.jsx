import React from 'react'
import loadingImg from '../../../public/img/promoquityArow.gif'
import Image from 'next/image'
function Loading() {
  return (
    
<div className="flex">
<Image width={300} height={300} src={loadingImg} alt="Loading..." className="mx-auto my-20 h-20 w-20" />
</div>
  )
}

export default Loading