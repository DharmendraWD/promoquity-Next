// app/(home)/components/ClientAuthWrapper.jsx
"use client";
import { useSelector } from 'react-redux';
import Protected from '@/app/protected/page';

export default function ClientAuthWrapper({ fallback }) {
  // const [isLoggedIn, setIsLoggedIn] = useState(null);
  let isLoggedIn = useSelector((state) => state.isAuth.token);

  if (isLoggedIn === null) return <div className='min-h-screen bg-red-200 w-full flex justify-center self-center  items-center m-auto'>
  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium eligendi excepturi rem odit, suscipit optio explicabo quod iste fugit esse.
  </div>;

  return isLoggedIn ? <h1 className='min-h-screen bg-green-200 w-full flex justify-center self-center  items-center m-auto'>You are Logged In</h1> : fallback;
}
