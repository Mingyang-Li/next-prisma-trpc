import { z } from 'zod';

export const CreatePostValidator = z.object({
  id: z.string().uuid().optional(),
  title: z.string().min(1).max(32),
  text: z.string().min(1),
});
