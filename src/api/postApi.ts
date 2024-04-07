import { UpsertPostSchema } from '@/client/validations/upsertPostValidation';
import { axios } from './axiosInstance';

export const postApi = {
  getOne: async (subtitle: string) => {
    try {
      const res = await axios.get('/posts', { params: { subtitle } });
      const post = res.data as Post;
      return post;
    } catch (error) {
      return null;
      // TODO toast
    }
  },

  getPaths: async () => {
    try {
      const res = await axios.get('/posts');
      const paths = res.data as SubtitlePath[];
      return paths;
    } catch (error) {
      return [];
      // TODO toast
    }
  },

  getTitles: async (category: AvailableCategories) => {
    try {
      const res = await axios.get('/posts', { params: { category } });
      console.log('---- res.data category', res.data);

      const titles = res.data as Title[];
      return titles;
    } catch (error) {
      // console.log('----error', error);

      return [];
      // TODO toast
    }
  },

  create: async (data: UpsertPostSchema) => {
    try {
      return await axios.post('/posts', data);
    } catch (error) {
      return [];
    }
  },

  update: async (_id: string, data: UpsertPostSchema) => {
    try {
      return await axios.put('/posts', data, { params: { _id } });
    } catch (error) {
      return [];
    }
  },

  delete: async (_id: string) => {
    try {
      return await axios.delete('/posts', { params: { _id } });
    } catch (error) {
      return [];
    }
  },
};
