// app/(home)/components/ClientAuthWrapper.jsx
"use client";

import { useEffect, useState } from 'react';
import LoggedInHome from '../LoggedInHome';

export default function ClientAuthWrapper({ fallback }) {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  if (isLoggedIn === null) return <div>Loading...</div>;

  return isLoggedIn ? <LoggedInHome /> : fallback;
}
