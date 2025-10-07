'use server'

import { z } from 'zod';
import postgres from 'postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
// import { signIn } from '@/auth';
import AuthError from 'next-auth';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

export type messageFormState = {
    errors?: {}
    message?: string | null
}

// todo either email or phone is required
// todo validation rules
const messageFormSchema = z.object({
    subject: z.string().min(1, { message: 'Subject is required' }),
    inquiryType: z.coerce.number(),
    name: z.string().min(1, { message: 'Name is required' }),
    email: z.email({ message: 'Invalid email' }),
    company: z.string().optional(),
    urgent: z.coerce.boolean().default(false),
    message: z.string().min(1, { message: 'Message is required' }),
});

// This is actually really cool, no need to define an API.
export async function CreateMessage (initialState: any, formData: FormData) {
    const validatedData = messageFormSchema.safeParse(Object.fromEntries(formData));

    if (!validatedData.success) {
        return {
            errors: z.treeifyError(validatedData.error).errors,
            message: 'Missing Fields. Failed to send message.',
        };
    }

    const { subject,
        inquiryType,
        name,
        email,
        company,
        urgent,
        message} = validatedData.data;
    console.log(subject,+ "\n"+inquiryType+ "\n"+name+ "\n"+ email+ "\n"+ company+ "\n"+ urgent+ "\n"+ message);
    try {
        if(company === undefined) {
            const result = await sql`INSERT INTO Messages (subject, message, email, name, type, urgent)
                                     VALUES (${subject}, ${message}, ${email}, ${name}, ${inquiryType}, ${urgent})`;
        }else{
            const result = await sql `INSERT INTO Messages (subject, message,email,name,type,urgent, company) VALUES (${subject}, ${message}, ${email}, ${name}, ${inquiryType}, ${urgent}, ${company})`;
        }
        // todo add success message
    } catch (error) {
        console.error('Error creating message:', error);
        throw new Error('Failed to create message');
    }
    return {
        message: 'Message sent successfully!',
    };
}
