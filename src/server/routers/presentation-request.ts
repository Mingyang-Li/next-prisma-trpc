import { createRouter } from '~/server/createRouter';
import { prisma } from '~/server/prisma';
import { createPresentationRequest } from '~/server/services/presentation.service';

export const presentationRequestRouter = createRouter()
  // create
  .mutation('create', {
    async resolve() {
      const req = createPresentationRequest();
      return req;
    },
  })
  // read
  .query('all', {
    async resolve() {
      return prisma.presentationRequest.findMany({});
    },
  });
