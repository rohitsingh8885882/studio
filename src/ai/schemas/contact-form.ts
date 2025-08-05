/**
 * @fileOverview Schemas for the contact form flow.
 */
import { z } from 'zod';

// Define the schema for the contact form input
export const ContactFormInputSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  phone: z.string().optional(),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});
export type ContactFormInput = z.infer<typeof ContactFormInputSchema>;

// Define the schema for the output
export const ContactFormOutputSchema = z.object({
  success: z.boolean().describe('Whether the email was sent successfully.'),
  error: z.string().optional().describe('An error message if the email failed to send.'),
});
export type ContactFormOutput = z.infer<typeof ContactFormOutputSchema>;
