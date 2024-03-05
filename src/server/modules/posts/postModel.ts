import { mongoRequireTrimString } from '@/server/validations/globalValidations';
import { categoriesValidation } from '@/server/validations/postValidations';
import mongoose, { Schema } from 'mongoose';

export type Post = {
  _id: string;

  category: string;
  content: string;
  mainTitle: string;
  subtitle: string;

  createdAt: string;
  updatedAt: string;
};

export interface PostDocument extends Document {
  category: string;
  content: string;
  mainTitle: string;
  subtitle: string;
}

const postSchema: Schema<PostDocument> = new Schema(
  {
    category: {
      ...mongoRequireTrimString,
      maxlength: 50,
      validate: categoriesValidation,
    },
    content: { ...mongoRequireTrimString, maxlength: 10000 },
    mainTitle: { ...mongoRequireTrimString, maxlength: 50 },
    subtitle: { ...mongoRequireTrimString, maxlength: 50, unique: true },
  },
  {
    timestamps: true,
  },
);

export const PostModel =
  mongoose.models.post || mongoose.model<PostDocument>('post', postSchema);
