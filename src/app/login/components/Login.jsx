
'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import Link from 'next/link';
import Loading from '@/components/Loading/Loading';


const Login = () => {
  const router = useRouter();

  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('admin@123');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

const BASE_API = process.env.NEXT_PUBLIC_BASE_API || '';


  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

const handleSubmit = async (e) => {
    e.preventDefault();
    const credentials = {
      userName: username,
      password: password,
    };

    setIsLoading(true);
    setError('');

    try {
      const res = await fetch(`${BASE_API}/User/login`, {
        method: 'POST',
        body: JSON.stringify(credentials),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await res.json();

      if (res.ok && data?.data?.token) {
        // Set cookies
        document.cookie = `token=${data.data.token}; path=/`;
        document.cookie = `userId=${data.data.userId}; path=/`;


        // Dispatch custom event to notify other components
        window.dispatchEvent(new Event('login-success'));

        // Redirect to home
        router.push('/');
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (err) {
      setError('Network error');
    }

    setIsLoading(false);
  };
  return (
    <>
      {isLoading && <Loading />}
      {
        !isLoading && 
         <form className="mx-auto rounded-2xl p-6 md:p-10 w-full max-w-md" onSubmit={handleSubmit}>

      <h2 className="text-white text-2xl md:text-3xl font-semibold text-center mb-2">
        Sign In Your Account
      </h2>
      <p className="text-white/60 text-sm text-center mb-6">Enter your login details</p>

      <div className="mb-4">
        <label htmlFor="email" className="block text-white text-sm mb-2">
          Username
        </label>
        <input
          placeholder="Enter your username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full bg-[#222121] text-white py-3 px-4 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
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
        <p className="text-white/60 text-xs mb-6">Must be at least 8 characters.</p>
      </div>

      <button
        type="submit"
        className="w-full bg-white text-black py-3 rounded-lg text-sm font-semibold hover:bg-gray-100 transition duration-200"
        disabled={isLoading}
      >
        Sign In
      </button>

      <p className="text-white/60 text-sm mt-6 text-center">
        Don't have an account?{' '}
        <Link href="/signup" className="text-white font-medium hover:underline">
          Sign up
        </Link>
      </p>

      {error && <p className="text-red-500 text-sm mt-4 text-center">{error}</p>}
    </form>
      }
   
    </>
  );
};

export default Login;
