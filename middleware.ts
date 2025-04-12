import { NextRequest, NextResponse } from "next/server";
import acceptLanguage from "accept-language";
import { fallbackLng, languages, cookieName } from "@/i18n/settings";

export const config = {
  // matcher: '/:language*'
  matcher: ["/((?!_next/static|_next/images|images|icons|favicon.ico|manifest.json|images).*)"],
};

export function middleware(req: NextRequest) {
  let lng;
  if (req.cookies.has(cookieName))
    lng = acceptLanguage.get(req.cookies.get(cookieName)!.value);
  if (!lng) lng = acceptLanguage.get(req.headers.get("Accept-Language"));
  if (!lng) lng = fallbackLng;

  const response = NextResponse.next();

  // Redirect if lng in path is not supported
  if (
    !languages.some((loc) => req.nextUrl.pathname.startsWith(`/${loc}`)) &&
    !req.nextUrl.pathname.startsWith("/_next")
  ) {
    return NextResponse.redirect(
      new URL(`/${lng}${req.nextUrl.pathname}`, req.url)
    );
  }

  // set lng
  if (req.headers.has("referer")) {
    const refererUrl = new URL(req.headers.get("referer")!);
    const lngInReferer = languages.find((l) =>
      refererUrl.pathname.startsWith(`/${l}`)
    );
    if (lngInReferer) response.cookies.set(cookieName, lngInReferer);
  }

  // set theme
  const theme = req.cookies.get('theme')?.value;
  if (theme === 'dim' || theme === 'pastel') {
    response.cookies.set('theme', theme);
    response.headers.set('x-theme', theme);
  }

  return response;
}

