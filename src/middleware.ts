import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { authRoutes, defaultLoginRedirect, publicRoutes } from './settings'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    const { nextUrl } = request
    const accessToken = request.cookies.get("accessToken")?.value
    const isAuth = !!accessToken
    const isAuthRouts = authRoutes.includes(nextUrl.pathname)
    const isPublicRoutes = publicRoutes.includes(nextUrl.pathname)

    if (isAuthRouts) {
        if (isAuth) {
            return NextResponse.redirect(new URL(defaultLoginRedirect, request.url))
        }
        return null
    }
    // If you try to access other routes instead of public routes without logging in, send to the login route:
    // if (!isPublicRoutes && !isAuth) {
    //     return NextResponse.redirect(new URL('/login', request.url))
    // }


    return null
}

export const config = {
    matcher: [
        // Skip Next.js internals and all static files, unless found in search params
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        // Always run for API routes
        '/(api|trpc)(.*)',
    ],
}
