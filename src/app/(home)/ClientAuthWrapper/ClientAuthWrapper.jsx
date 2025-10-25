// app/(home)/components/ClientAuthWrapper.jsx
import { cookies } from 'next/headers';
import Protected from '@/app/protected/page';

export default async function ClientAuthWrapper({ fallback }) {
  // Get cookies from request headers (server side)
  const cookieStore = await cookies(); 
  const token = cookieStore.get('token')?.value;  // Adjust 'token' to your actual cookie name

  if (!token) {
    // No token in cookie → show fallback (e.g. login prompt)
    return fallback || <div>Please login to continue.</div>;
  }

  // Token exists → render protected content or "logged in" UI
  return (
    <h1 className='min-h-screen bg-green-200 w-full flex justify-center self-center items-center m-auto'>
      You are Logged In
    </h1>
  );
}
