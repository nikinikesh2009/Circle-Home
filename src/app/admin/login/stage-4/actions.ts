
'use server';

import { compareHash, setStageCookie, checkRateLimit, recordFailedAttempt } from '@/lib/auth';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { z } from 'zod';

const schema = z.object({
  email1: z.string().email('Invalid email format for Email 1.'),
  email2: z.string().email('Invalid email format for Email 2.'),
  email3: z.string().email('Invalid email format for Email 3.'),
});

export async function verifyStage4(prevState: any, formData: FormData) {
    const ip = headers().get('x-forwarded-for') ?? '127.0.0.1';
    const rateLimit = await checkRateLimit(ip, 4);
    if (rateLimit.limited) {
        return { message: rateLimit.message };
    }
    
    const validatedFields = schema.safeParse({
        email1: formData.get('email1'),
        email2: formData.get('email2'),
        email3: formData.get('email3'),
    });

    if (!validatedFields.success) {
        const errors = validatedFields.error.flatten().fieldErrors;
        const firstError = Object.values(errors)[0]?.[0] || 'Invalid input.';
        return { message: firstError };
    }

    const { email1, email2, email3 } = validatedFields.data;

    const [isEmail1Correct, isEmail2Correct, isEmail3Correct] = await Promise.all([
        compareHash(email1.toLowerCase(), process.env.EMAIL_HASH_1!),
        compareHash(email2.toLowerCase(), process.env.EMAIL_HASH_2!),
        compareHash(email3.toLowerCase(), process.env.EMAIL_HASH_3!),
    ]);

    if (!isEmail1Correct || !isEmail2Correct || !isEmail3Correct) {
        await recordFailedAttempt(ip, 4);
        return { message: 'Access Denied.' };
    }

    await setStageCookie(4);
    redirect('/admin/login/stage-5');
}
