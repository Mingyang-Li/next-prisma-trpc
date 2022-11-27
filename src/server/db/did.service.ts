import { prisma } from '../prisma';
import { DID, Role } from '@prisma/client';

const getDid = async (role: Role): Promise<DID | undefined> => {
  const dids = await prisma.dID.findMany({
    where: {
      role,
    },
  });
  return dids[0];
};

export { getDid };
