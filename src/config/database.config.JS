import { DB_URI } from "./env.js";
import { neon } from '@neondatabase/serverless';
import { drizzle } from "drizzle-orm/neon-http";


const sql = neon(DB_URI);

const db = drizzle(sql);

export default { sql, db};