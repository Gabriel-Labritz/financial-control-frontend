import { MiddlewareConfig, NextRequest, NextResponse } from "next/server";
import verifyJwtIsExpired from "./utils/verify-jwt-is-expired";

const publicsRoutes = [
  {
    path: "/signup",
    whenAuthenticated: "redirect",
  },
  {
    path: "/signin",
    whenAuthenticated: "redirect",
  },
] as const;
const REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE = "/signin";

export function middleware(request: NextRequest) {
  const pathName = request.nextUrl.pathname;
  const publicRoute = publicsRoutes.find((route) => route.path === pathName);
  const token = request.cookies.get("jwt")?.value;

  if (!token && publicRoute) {
    return NextResponse.next();
  }

  if (!token && !publicRoute) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE;
    return NextResponse.redirect(redirectUrl);
  }

  if (token && publicRoute) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = "/";
    return NextResponse.redirect(redirectUrl);
  }

  if (token && !publicRoute && verifyJwtIsExpired(token)) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE;
    return NextResponse.redirect(redirectUrl);
  }
}

export const config: MiddlewareConfig = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.png|.*\\.js$).*)"],
};
