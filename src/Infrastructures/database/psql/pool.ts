import { Pool } from 'pg';
import { env } from './env';

export const pool = new Pool({
  host: 'localhost',
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE
})
