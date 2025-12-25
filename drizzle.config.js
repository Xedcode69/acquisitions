import { DB_URI } from './src/config/env';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './src/models/*.js',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials:{
    url: DB_URI
  }
});
