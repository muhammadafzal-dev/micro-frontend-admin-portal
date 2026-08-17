import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import {
  SESSION_COOKIE,
  ROUTES,
  absoluteUrl,
  sessionClearOptions,
} from "@portal/config";

/**
 * /auth/logout — clears the session cookie and returns to the login screen.
 *
 * Implemented as a GET route handler so the sidebar's "Log out" link works as a
 * plain anchor. Trade-off noted: a state-changing GET is convenient for a demo
 * but a production app should use a POST form (+ CSRF token) to log out.
 */
export async function GET() {
  const store = await cookies();
  store.set(SESSION_COOKIE, "", sessionClearOptions());
  return NextResponse.redirect(absoluteUrl(ROUTES.login));
}
