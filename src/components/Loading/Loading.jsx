import React from 'react'
import loadingImg from '../../../public/img/promoquityArow.gif'
import Image from 'next/image'
function Loadingfascmn() {
  return (
    
<div className="flex w-full items-center justify-center min-h-screen">
<Image width={600} height={600} src={loadingImg} alt="Loading..." className="mx-auto my-20 h-[200px] w-[300px]" />
</div>
  )
}

export default Loadingfascmn