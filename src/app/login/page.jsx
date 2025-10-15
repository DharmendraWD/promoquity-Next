
// pages/login.js

import lineImage from '../../../public/img/line.png';
import Image from 'next/image';
import Card1 from '@/components/utilities/cards/Card1';
import Login from './components/Login';


export default function LoginPage() {
  

  return (
<>
        <div className='loginParentBox relative grid-cols-1 grid lg:grid-cols-2'>
     <Login></Login>

<Image height={3} width={3} src={lineImage} className='absolute left-1/2 hidden lg:block h-[600px] -translate-x-1/2 opacity-50' alt="" />
      {/* right side part  */}
      <div>
<div className='grid sm:grid-cols-2  grid-cols-1 gap-4 p-10'>
  <Card1></Card1>
</div>
      </div>
    </div>
  </>
   
  );
}
