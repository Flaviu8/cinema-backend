import pg from "pg";
import * as dotenv from "dotenv";
dotenv.config();

const { Pool } = pg;

const config = {
  user: process.env.DATABASE_USER,
  host: process.env.DATABASE_HOST,
  database: process.env.DATABASE_NAME,
  password: process.env.DATABASE_PASSWORD,
  port: process.env.DATABASE_PORT,
};
console.log("config", config);

export const pool = new Pool(config);
