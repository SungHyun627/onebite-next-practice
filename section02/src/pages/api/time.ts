import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const date = new Date();

  res.json({ tiem: date.toLocaleString() });
}
