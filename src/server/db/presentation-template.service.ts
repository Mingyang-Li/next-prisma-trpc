import { prisma } from '../prisma';
import { PresentationTemplate } from '@prisma/client';

const getPresentationTemplate =
  async (): Promise<PresentationTemplate | null> => {
    return await prisma.presentationTemplate.findFirst({});
  };

export { getPresentationTemplate };
