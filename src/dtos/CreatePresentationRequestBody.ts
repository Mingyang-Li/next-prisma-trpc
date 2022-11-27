export interface CreatePresentationRequestBody {
  challenge: string;
  did: string;
  templateId: string;
  expiresTime?: number;
  callbackUrl: string;
}
