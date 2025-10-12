
'use server';

import { compareHash, setAdminSessionCookie, checkRateLimit, recordFailedAttempt } from '@/lib/auth';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { z } from 'zod';

const schema = z.object({
  code1: z.string().length(4, 'Code must be 4 digits.').regex(/^\d{4}$/, 'Code must be numeric.'),
  code2: z.string().length(4, 'Code must be 4 digits.').regex(/^\d{4}$/, 'Code must be numeric.'),
});

export async function verifyStage5(prevState: any, formData: FormData) {
    const ip = headers().get('x-forwarded-for') ?? '127.0.0.1';
    const rateLimit = checkRateLimit(ip, 5);
    if (rateLimit.limited) {
        return { message: rateLimit.message };
    }
    
    const validatedFields = schema.safeParse({
        code1: formData.get('code1'),
        code2: formData.get('code2'),
    });

    if (!validatedFields.success) {
        const errors = validatedFields.error.flatten().fieldErrors;
        const firstError = Object.values(errors)[0]?.[0] || 'Invalid input.';
        return { message: firstError };
    }

    const { code1, code2 } = validatedFields.data;

    const [isCode1Correct, isCode2Correct] = await Promise.all([
        compareHash(code1, process.env.BACKUP_HASH_1!),
        compareHash(code2, process.env.BACKUP_HASH_2!),
    ]);

    if (!isCode1Correct || !isCode2Correct) {
        recordFailedAttempt(ip, 5);
        return { message: 'Access Denied.' };
    }

    await setAdminSessionCookie();
    redirect('/admin/dashboard');
}
