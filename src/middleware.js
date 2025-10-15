import { NextResponse } from 'next/server'

export function middleware(request) {
  const token = request.cookies.get('token')?.value
  const { pathname } = request.nextUrl

  // 1. Redirect logged-in users away from /login to /home
  if (pathname === '/login' && token) {
    return NextResponse.redirect(new URL('/home', request.url))
  }

  // 2. Protect /protected route — if no token, redirect to /login
  if (pathname.startsWith('/protected') && !token) {
    // console.log(token)
    return NextResponse.redirect(new URL('/login', request.url))
  }

  // 3. Allow all other routes
  return NextResponse.next()
}

// Apply middleware only to specific paths
export const config = {
  matcher: ['/login', '/protected/:path*'],
}
