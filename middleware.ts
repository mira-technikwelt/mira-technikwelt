import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.nextUrl;

  // Lass Next.js interne Dateien & Assets durch
  if (
    url.pathname.startsWith("/_next") ||
    url.pathname.startsWith("/favicon") ||
    url.pathname.startsWith("/robots.txt") ||
    url.pathname.startsWith("/sitemap") ||
    url.pathname.startsWith("/logo") ||
    url.pathname.match(/\.(png|jpg|jpeg|webp|svg|ico|css|js)$/)
  ) {
    return NextResponse.next();
  }

  // Wartungsseite für alles andere
  return new NextResponse(
    `<!doctype html>
    <html lang="de">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Wartung</title>
        <style>
          body{margin:0;min-height:100vh;display:flex;align-items:center;justify-content:center;
               font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;background:#000;color:#fff;padding:24px}
          .card{max-width:560px;text-align:center}
          h1{font-size:28px;margin:0 0 12px}
          p{opacity:.75;margin:0}
        </style>
      </head>
      <body>
        <div class="card">
          <h1>Wir sind bald wieder für Sie da</h1>
          <p>Die Website wird gerade aktualisiert. Bitte später nochmal vorbeischauen.</p>
        </div>
      </body>
    </html>`,
    { headers: { "content-type": "text/html; charset=utf-8" } }
  );
}

export const config = {
  matcher: "/:path*",
};
