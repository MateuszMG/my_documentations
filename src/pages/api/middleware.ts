import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  console.log('middleware --');

  return NextResponse.next();
}
// if (!isAuthenticated(request)) {
//     // Respond with JSON indicating an error message
//     return Response.json(
//       { success: false, message: 'authentication failed' },
//       { status: 401 }
//     )
//   }
//   if (request.nextUrl.pathname.startsWith('/about')) {
//     return NextResponse.rewrite(new URL('/about-2', request.url));
//   }

//   if (request.nextUrl.pathname.startsWith('/dashboard')) {
//     return NextResponse.rewrite(new URL('/dashboard/user', request.url));
//   }
