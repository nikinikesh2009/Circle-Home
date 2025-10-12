
'use server';

import { compareHash, setStageCookie, checkRateLimit, recordFailedAttempt } from '@/lib/auth';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { z } from 'zod';

const schema = z.object({
  password: z.string().min(32, 'Password must be 32 characters long.'),
});

export async function verifyStage1(prevState: any, formData: FormData) {
    const ip = headers().get('x-forwarded-for') ?? '127.0.0.1';
    const rateLimit = checkRateLimit(ip, 1);
    if (rateLimit.limited) {
        return { message: rateLimit.message };
    }

    const validatedFields = schema.safeParse({
        password: formData.get('password'),
    });

    if (!validatedFields.success) {
        return { message: 'Invalid input.' };
    }

    const { password } = validatedFields.data;
    const isCorrect = await compareHash(password, process.env.STAGE1_HASH!);

    if (!isCorrect) {
        recordFailedAttempt(ip, 1);
        return { message: 'Access Denied.' };
    }

    await setStageCookie(1);
    redirect('/admin/login/stage-2');
}
