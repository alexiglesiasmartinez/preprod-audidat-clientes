import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

export async function middleware(request) {

  const { pathname } = request.nextUrl;

  try {
    const tokenObject = request.cookies.get('auth-token');

    if (tokenObject && tokenObject.value) {
      const token = tokenObject.value;
      const secretKey = new TextEncoder().encode(process.env.JWT_SECRET);

      await jwtVerify(token, secretKey);

      if (pathname === '/login') {
        return NextResponse.redirect(new URL('/app', request.url));
      }

      return NextResponse.next();
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
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/app/:path*', '/login'],
};
