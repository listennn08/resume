import { NextRequest, NextResponse } from "next/server";
import acceptLanguage from "accept-language";
import { fallbackLng, languages, cookieName } from "@/i18n/settings";

export const config = {
  // matcher: '/:language*'
  matcher: ["/((?!_next/static|_next/images?|images|icons|favicon.ico|manifest.json|assets).*)"],
};

export function middleware(req: NextRequest) {
  const response = NextResponse.next();
  const pathname = req.nextUrl.pathname;
  let lng: string | null | undefined;

  acceptLanguage.languages(languages);
  if (req.cookies.has(cookieName))
    lng = acceptLanguage.get(req.cookies.get(cookieName)!.value);
  if (!lng) lng = acceptLanguage.get(req.headers.get("accept-language"));
  if (!lng) lng = fallbackLng;

  // Auto-redirect to /lng/resume if locale prefix is missing
  const isMissingLocale = !languages.some((loc) => pathname.startsWith(`/${loc}`));
  const isNextAsset = pathname.startsWith("/_next");
  if (isMissingLocale && !isNextAsset) {
    return NextResponse.redirect(new URL(`/${lng}/resume`, req.url));
  }

  const maybeLng = pathname.split("/")[1];

  if (languages.includes(maybeLng) && !pathname.endsWith("/resume") && !isNextAsset) {
    return NextResponse.redirect(new URL(`/${maybeLng}/resume`, req.url));
  }

  // set language cookie from referer
  if (req.headers.has("referer")) {
    const refererUrl = new URL(req.headers.get("referer")!);
    const lngInReferer = languages.find((l) =>
      refererUrl.pathname.startsWith(`/${l}`)
    );
    if (lngInReferer) {
      response.cookies.set(cookieName, lngInReferer);
    }
  }

  // set theme
  const theme = req.cookies.get('theme')?.value;
  if (theme === 'dark' || theme === 'light') {
    response.cookies.set('theme', theme);
    response.headers.set('x-theme', theme);
  }

  return response;
}

