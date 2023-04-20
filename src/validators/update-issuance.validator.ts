import { z } from 'zod';

export const UpdateIssuanceValidator = z.object({
  where: z.object({
    id: z.string().min(1),
  }),
  data: z.object({
    issuedTo: z.string().min(1),
    courseName: z.string().min(1),
    courceLevel: z.number().min(1),
  }),
});
