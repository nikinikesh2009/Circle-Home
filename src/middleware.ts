
import { NextResponse, type NextRequest } from 'next/server';
import { verifySession } from '@/lib/auth';

export const ADMIN_SESSION_COOKIE = 'aco_admin_session';
export const LOGIN_STAGES_COOKIE = 'aco_admin_login_stage';

export const config = {
  matcher: '/admin/:path*',
};

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const adminSession = request.cookies.get(ADMIN_SESSION_COOKIE)?.value;
  const stageSession = request.cookies.get(LOGIN_STAGES_COOKIE)?.value;

  const baseUrl = request.nextUrl.clone();
  baseUrl.pathname = '/admin/login/stage-1';

  // If user is trying to access the dashboard
  if (pathname.startsWith('/admin/dashboard')) {
    if (!adminSession) return NextResponse.redirect(baseUrl);
    
    const adminPayload = await verifySession(adminSession);
    if (!adminPayload || adminPayload.stage !== 'authenticated') {
      return NextResponse.redirect(baseUrl);
    }
    return NextResponse.next();
  }

  // If user is on a login page
  if (pathname.startsWith('/admin/login/')) {
    // If they already have a full admin session, redirect to dashboard
    if (adminSession) {
      const adminPayload = await verifySession(adminSession);
      if (adminPayload?.stage === 'authenticated') {
        const dashboardUrl = request.nextUrl.clone();
        dashboardUrl.pathname = '/admin/dashboard';
        return NextResponse.redirect(dashboardUrl);
      }
    }

    const currentStageNumber = parseInt(pathname.split('/').pop()?.replace('stage-', '') || '1', 10);
    
    // Stage 1 is the entry point, anyone can access it
    if (currentStageNumber === 1) {
      return NextResponse.next();
    }

    // For stages > 1, we need to verify the stage session
    if (!stageSession) {
      return NextResponse.redirect(baseUrl);
    }

    const stagePayload = await verifySession(stageSession);

    // If the token is invalid or doesn't have a stage, deny
    if (!stagePayload || typeof stagePayload.stage !== 'number') {
      return NextResponse.redirect(baseUrl);
    }

    // The user's completed stage must be one less than the stage they are trying to access
    const requiredStage = currentStageNumber - 1;
    if (stagePayload.stage !== requiredStage) {
        // Redirect to the stage they should be on
        const correctStageUrl = request.nextUrl.clone();
        correctStageUrl.pathname = `/admin/login/stage-${stagePayload.stage + 1}`;
        return NextResponse.redirect(correctStageUrl);
    }
  }

  return NextResponse.next();
}
