import { issuanceRouter } from '~/server/routers/issuance.router';
import { createRouter } from '../createRouter';
import { postRouter } from './post.router';
import superjson from 'superjson';

export const appRouter = createRouter()
  .transformer(superjson)
  .query('healthz', {
    async resolve() {
      return 'yay!';
    },
  })
  .merge('post.', postRouter)
  .merge('issuance.', issuanceRouter);

export type AppRouter = typeof appRouter;
