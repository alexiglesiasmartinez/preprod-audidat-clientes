import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

export async function middleware(request) {

  const { pathname } = request.nextUrl;

  // Create a response object early so we can modify headers as needed in various conditions
  const response = NextResponse.next();
  // Set cache-control header to prevent caching
  response.headers.set('Cache-Control', 'no-store, max-age=0');

  try {
    const tokenObject = request.cookies.get('auth-token');

    if (tokenObject && tokenObject.value) {
      const token = tokenObject.value;
      const secretKey = new TextEncoder().encode(process.env.JWT_SECRET);

      await jwtVerify(token, secretKey);

      if (pathname === '/login') {
        return NextResponse.redirect(new URL('/app', request.url));
      }

      return response;
    }
    else {
      if (pathname.startsWith('/app')) {
        return NextResponse.redirect(new URL('/login', request.url));
      }
    }
  }
  catch (error) {
    console.error('Error verifying JWT:', error);
    if (pathname.startsWith('/app')) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  if (pathname === '/login') {
    return response;
  }

  return response;
}

export const config = {
  matcher: ['/app/:path*', '/login'],
};
