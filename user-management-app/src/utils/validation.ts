import { z } from 'zod';

// Validation schema for user form
export const userSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().min(1, 'Email is required').email('Please enter a valid email'),
  phone: z.string().min(1, 'Phone is required'),
  companyName: z.string().min(1, 'Company name is required'),
});

export type UserFormValues = z.infer<typeof userSchema>;
