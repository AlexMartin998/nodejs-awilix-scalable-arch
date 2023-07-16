import { config } from 'dotenv';

if (process.env.NODE_ENV !== 'production') config();

export default {
  PORT: process.env.PORT,
  MONGO_URI: process.env.MONGO_URI,
  APPLICATION_NAME: process.env.APPLICATION_NAME,
  STAGE: process.env.STAGE || 'development',
  JWT_SECRET: process.env.JWT_SECRET,
  CACHE_KEY: process.env.CACHE_KEY,
};
