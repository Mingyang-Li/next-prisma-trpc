import { randomUUID } from 'crypto';
import { CreatePresentationRequestBody } from '~/dtos/CreatePresentationRequestBody';
import { getDid } from '~/server/db/did.service';
import { getPresentationTemplate } from '~/server/db/presentation-template.service';
import { setupMattrAuthToken } from '~/server/services/auth.service';
import { config } from '~/utils/config';

const createPresentationRequest = async () => {
  const presentationTemplate = await getPresentationTemplate();
  let templateId = '';
  if (presentationTemplate) {
    const template = JSON.parse(
      presentationTemplate.presentationTemplate as string,
    );
    templateId = template.id;
  }
  const did = await getDid('Verifier');
  let verifierDid = '';
  if (did) {
    verifierDid = JSON.parse(did.did as string).id;
  }
  const body: CreatePresentationRequestBody = {
    challenge: randomUUID(),
    did: verifierDid,
    templateId,
    callbackUrl: '',
  };
  const { token } = await setupMattrAuthToken();
  const resp = await fetch(
    `https://${config.MATTR_TENANT}.vii.mattr.global/core/v1/presentations/requests`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    },
  );

  const data = await resp.json();
  return data;
};

export { createPresentationRequest };
