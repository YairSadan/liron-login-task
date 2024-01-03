import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest, response: NextResponse) {
  // if (request.url === `${process.env.DEV_URL}/login` && request.cookies.get('refreshToken') ){
  //   return NextResponse.redirect(new URL('/home', request.url))
  // }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/home/:path*', '/home']
}