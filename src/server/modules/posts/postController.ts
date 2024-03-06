import { idValidation } from '@/server/validations/globalValidations';
import { upsertPostValidation } from '@/server/validations/postValidations';
import { NextApiRequest, NextApiResponse } from 'next';
import { PostModel } from './postModel';

export const postController = {
  getOne: async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const { subtitle } = req.query;
      const post = await PostModel.findOne({ subtitle });
      res.status(200).json(post);
    } catch (error) {
      res.status(500).json({ error });
    }
  },

  getPaths: async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const paths = await PostModel.find({}).select(['subtitle', 'category']);
      res.status(200).json(paths);
    } catch (error) {
      res.status(500).json({ error });
    }
  },

  getTitles: async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const category = req.query.category;
      console.log('req getTitles', category);

      const titles = await PostModel.find({ category }).select([
        '_id',
        'mainTitle',
        'subtitle',
      ]);
      res.status(200).json(titles);
    } catch (error) {
      res.status(500).json({ error });
    }
  },

  create: async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const { category, post, mainTitle, subtitle } =
        await upsertPostValidation.validate(req.body);

      const newPst = await new PostModel({
        category,
        post,
        mainTitle,
        subtitle,
      }).save();

      res.status(201).json(newPst);
    } catch (error) {
      console.log('error', error);

      res.status(500).json({ error });
    }
  },

  update: async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const { category, post, mainTitle, subtitle } =
        await upsertPostValidation.validate(req.body);

      const { _id } = await idValidation.validate(req.query);

      const editedPost = await PostModel.findByIdAndUpdate(
        _id,
        { category, post, mainTitle, subtitle },
        { new: true },
      );

      res.status(200).json(editedPost);
    } catch (error) {
      res.status(500).json({ error });
    }
  },

  delete: async (req: NextApiRequest, res: NextApiResponse) => {
    const { _id } = await idValidation.validate(req.query);

    try {
      await PostModel.findByIdAndDelete(_id);
      res.status(204);
    } catch (error) {
      res.status(500).json({ error });
    }
  },
};
