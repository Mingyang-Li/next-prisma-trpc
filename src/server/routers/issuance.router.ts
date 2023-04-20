import { Prisma } from '@prisma/client';
import { createRouter } from '~/server/createRouter';
import { prisma } from '~/server/prisma';
import { CreateIssuanceValidator } from '~/validators/create-issuance.validator';
import { UpdateIssuanceValidator } from '~/validators/update-issuance.validator';
import { DeleteIssuanceValidator } from '~/validators/delete-issuance.validator';

const defaultIssuanceSelect = Prisma.validator<Prisma.IssuanceSelect>()({
  id: true,
  issuedTo: true,
  courseName: true,
  courceLevel: true,
});

export const issuanceRouter = createRouter()
  .mutation('add', {
    input: CreateIssuanceValidator,
    async resolve({ input }) {
      return await prisma.issuance.create({
        data: input,
        select: defaultIssuanceSelect,
      });
    },
  })
  .query('all', {
    async resolve() {
      return prisma.issuance.findMany({
        select: defaultIssuanceSelect,
      });
    },
  })
  .mutation('update', {
    input: UpdateIssuanceValidator,
    async resolve({ input }) {
      return await prisma.issuance.update({
        where: input.where,
        data: input.data,
      });
    },
  })
  .mutation('delete', {
    input: DeleteIssuanceValidator,
    async resolve({ input }) {
      const { where } = input;
      return await prisma.issuance.delete({ where });
    },
  });
