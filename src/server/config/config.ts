import { cleanEnv, str } from 'envalid';

export const config = cleanEnv(process.env, {
  DATABASE: str(),
});
