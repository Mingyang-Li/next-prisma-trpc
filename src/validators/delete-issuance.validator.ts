import { z } from 'zod';

export const DeleteIssuanceValidator = z.object({
  where: z.object({
    id: z.string().min(1),
  }),
});
