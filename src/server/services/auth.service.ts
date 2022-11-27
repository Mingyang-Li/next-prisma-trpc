import { prisma } from '~/server/prisma';
import { isTokenExpired } from '~/server/services/common.service';
import { config } from '~/utils/config';

export const setupMattrAuthToken = async () => {
  const authToken = await prisma.authToken.findFirst({});
  if (!authToken || isTokenExpired(authToken?.token ?? '')) {
    const resp = await fetch(`https://auth.mattr.global/oauth/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        client_id: `${config.MATTR_CLIENT_ID}`,
        client_secret: `${config.MATTR_CLIENT_SECRET}`,
        audience: 'https://vii.mattr.global',
        grant_type: 'client_credentials',
      }),
    });

    const data = await resp.json();
    const authToken = await prisma.authToken.create({
      data: { token: data.access_token, expiresIn: data.expires_in },
    });
    return { token: authToken.token };
  } else {
    return { token: authToken.token };
  }
};
