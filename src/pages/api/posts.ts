import { NextApiRequest, NextApiResponse } from 'next';

import { postController } from '@/server/modules/posts/postController';
import { mongooseConnect } from '@/server/config/db';

mongooseConnect();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { method, query } = req;

  console.log('method: ', method);
  switch (method) {
    case 'GET':
      if (query?.subtitle) return postController.getOne(req, res);
      if (query?.category) return postController.getTitles(req, res);
      return postController.getPaths(req, res);

    case 'POST':
      return postController.create(req, res);
    case 'PUT':
      return postController.update(req, res);
    case 'DELETE':
      return postController.delete(req, res);
    default:
      res.status(405).end();
  }
}
