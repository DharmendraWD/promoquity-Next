import { NextResponse } from 'next/server';

// Rename the function export to 'proxy' to satisfy the new requirement
export function proxy(request) {
  const token = request.cookies.get('token')?.value;
  const { pathname } = request.nextUrl;

  const protectedRoutes = ['/protected', '/test', '/users'];

  const isProtectedRoute = protectedRoutes.some((route) => 
    pathname === route || pathname.startsWith(`${route}/`)
  );

  if (isProtectedRoute && !token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/protected/:path*',
    '/test/:path*',
    '/users/:path*',
  ],
};