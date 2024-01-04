import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import Validate from "./app/utils/session/Validate";

export async function middleware(request: NextRequest, response: NextResponse) {
  // if (request.url === `${process.env.DEV_URL}/login` && request.cookies.get('refreshToken') ){
  //   return NextResponse.redirect(new URL('/home', request.url))
  // }
  // if (await Validate() && request.url === `${process.env.DEV_URL}/login`) {
  //   console.log('first')
  //   return NextResponse.redirect(new URL('/home', request.url))
  // }
  console.log('from middlewar ')
}


export const config = {
  matcher: ['/home/:path*', '/home']
}