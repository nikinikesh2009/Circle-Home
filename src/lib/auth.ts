
'use server';

import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';
import { NextRequest } from 'next/server';

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET!);

// --- In-memory rate limiting and logging (for demonstration) ---
// In a production app, use a persistent store like Redis or a database.
const loginAttempts = new Map<string, { count: number; expiry: number }>();
const MAX_ATTEMPTS = 5;
const LOCKOUT_MINUTES = 15;

function getIp(req: NextRequest) {
    return req.ip ?? req.headers.get('x-forwarded-for') ?? '127.0.0.1';
}

export async function checkRateLimit(ip: string, stage: number): Promise<{ limited: boolean; message: string }> {
    const key = `${ip}:${stage}`;
    const now = Date.now();
    const attempt = loginAttempts.get(key);

    if (attempt && now < attempt.expiry) {
        const timeLeft = Math.ceil((attempt.expiry - now) / (1000 * 60));
        return { limited: true, message: `Too many attempts. Please try again in ${timeLeft} minutes.` };
    }

    if (attempt && attempt.count >= MAX_ATTEMPTS) {
        loginAttempts.set(key, { count: 0, expiry: now + LOCKOUT_MINUTES * 60 * 1000 });
         const timeLeft = Math.ceil(( (now + LOCKOUT_MINUTES * 60 * 1000) - now) / (1000 * 60));
        return { limited: true, message: `Too many attempts. Please try again in ${timeLeft} minutes.` };
    }

    return { limited: false, message: '' };
}

export async function recordFailedAttempt(ip: string, stage: number) {
    const key = `${ip}:${stage}`;
    const now = Date.now();
    const currentAttempt = loginAttempts.get(key) || { count: 0, expiry: 0 };
    
    currentAttempt.count += 1;
    loginAttempts.set(key, currentAttempt);

    // Simple file logging
    console.log(`[AUTH_FAIL] IP: ${ip}, Stage: ${stage}, Timestamp: ${new Date().toISOString()}`);
}

// --- Hashing and Verification ---

export async function compareHash(value: string, hash: string): Promise<boolean> {
    // This is NOT secure. It's a placeholder.
    // In a real application, you would use a secure hashing algorithm like bcrypt.
    return value === hash;
}

// --- Session Management ---

async function createSessionToken(payload: object, expiresIn: string | number) {
    return new SignJWT(payload)
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime(expiresIn)
        .sign(JWT_SECRET);
}

export async function verifySession(token: string): Promise<any | null> {
    try {
        const { payload } = await jwtVerify(token, JWT_SECRET);
        return payload;
    } catch (error) {
        return null;
    }
}

export async function setStageCookie(stage: number) {
    const token = await createSessionToken({ stage }, '15m'); // Stage progression expires in 15 mins
    cookies().set('aco_admin_login_stage', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        path: '/admin',
        sameSite: 'lax',
    });
}

export async function setAdminSessionCookie() {
    const token = await createSessionToken({ stage: 'authenticated' }, '12h'); // Full session for 12 hours
    cookies().set('aco_admin_session', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        path: '/admin',
        sameSite: 'lax',
        maxAge: 12 * 60 * 60, // 12 hours in seconds
    });
    // Clear the stage progression cookie
    cookies().delete('aco_admin_login_stage');
}

export async function logout() {
    cookies().delete('aco_admin_session');
    cookies().delete('aco_admin_login_stage');
}
