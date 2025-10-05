"use client"
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useRouter } from 'next/navigation'; 
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import Link from 'next/link';
import Loading from '@/components/Loading/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../../../store/slices/counterSlice';

import { loginUser } from '../../../store/slices/Login/authSlice';

const Login = () => {
    const router = useRouter();
  const [username, setusername] = useState('admin');
  const [password, setPassword] = useState('admin@123');
  const [error, setError] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isloading, setisloading] = useState(false);



    const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  
  // --------------------------redux part -----------------
  const dispatch = useDispatch();
  const counterValue = useSelector((state) => state.counter.value);
    const auth = useSelector((state) => state.auth);



 const handleSubmit = (e) => {
    e.preventDefault();
    const credentials = {
      userName:username,
      password: password,
    };

    dispatch(loginUser(credentials));
  };

  useEffect(() => {
  if (auth.isAuthenticated) {
    router.push('/');
  }
}, [auth.isAuthenticated]);


  return (
    <>
    <form
        className="mx-auto rounded-2xl  p-6 md:p-10 w-full max-w-md"
        onSubmit={handleSubmit}
      >

{
  auth.loading && <Loading />}


 <h2 className="text-white text-2xl md:text-3xl font-semibold text-center mb-2">
          Sign In Your Account
        </h2>
        <p className="text-white/60 text-sm text-center mb-6">
          Enter your login details
        </p>
        <div className="mb-4">
          <label htmlFor="email" className="block text-white text-sm mb-2">
            Username
          </label>
          <input 
            placeholder='Enter your username'
          type="text"
        value={username}
        onChange={(e) => setusername(e.target.value)}

            className="w-full bg-[#222121]  text-white py-3 px-4 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-white text-sm mb-2">
            Password
          </label>
          <div className="relative">
            <input
              type={passwordVisible ? 'text' : 'password'}
              id="password"
              className="w-full bg-[#222121] text-white py-3 px-4 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
              placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white focus:outline-none"
              onClick={togglePasswordVisibility}
            >
              {passwordVisible ? <AiOutlineEyeInvisible className="h-5 w-5" /> : <AiOutlineEye className="h-5 w-5" />}
            </button>
          </div>
          <p className="text-white/60 text-xs mb-6">
            Must be at least 8 characters.
          </p>
        </div>
        <button
          type="submit"
          className="w-full bg-white text-black py-3 rounded-lg text-sm font-semibold hover:bg-gray-100 transition duration-200"
          // disabled={isLoading}
        >
          Sign In
        </button>
        <p className="text-white/60 text-sm mt-6 text-center">
          Don't have an account? <Link href="/signup" className="text-white font-medium hover:underline">Sign up</Link>
        </p>
        {error && <p className="text-red-500 text-sm mt-4 text-center">{error}</p>}
      </form>



      </>
  )
}

export default Login