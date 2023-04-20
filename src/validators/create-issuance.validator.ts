import { z } from 'zod';

export const CreateIssuanceValidator = z.object({
  issuedTo: z.string().min(1).max(32),
  courseName: z.string().min(1),
  courceLevel: z.number().min(1),
});
