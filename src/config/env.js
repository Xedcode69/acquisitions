import { config } from 'dotenv';


config({path: `.env.${process.env.NODE_ENV || 'development'}.local`});


export const {PORT, DB_URI, LOG_LEVEL} = process.env;