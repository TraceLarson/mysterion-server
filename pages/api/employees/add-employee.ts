// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import 'reflect-metadata';

type Data = {
  name: string;
};

export async function POST(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).json({ name: 'add employee' });
}
