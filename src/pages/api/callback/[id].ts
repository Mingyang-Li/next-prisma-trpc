import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(403).json('Method not allowed');
  }

  const { claim } = req.body;
  res.status(200).json({ id: claim });
}
