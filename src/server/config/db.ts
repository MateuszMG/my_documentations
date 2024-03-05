import mongoose from 'mongoose';

import { config } from './config';

export const mongooseConnect = async () =>
  mongoose.connect(config.DATABASE).then(
    () => console.log('Mongoose connected'),
    (error: any) => console.log('Mongoose error', error),
  );
