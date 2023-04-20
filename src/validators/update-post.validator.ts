import { z } from 'zod';

export const UpdatePostValidator = z.object({
  id: z.string().uuid(),
  data: z.object({
    title: z.string().min(1).max(32).optional(),
    text: z.string().min(1).optional(),
  }),
});
