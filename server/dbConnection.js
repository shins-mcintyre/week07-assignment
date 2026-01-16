//TODO: set up a db pool

// imports
import dotenv from "dotenv";
import pg from "pg";

// confif dotenv
dotenv.config();

// create a pool with pg
// --requests sent by server to the database go into the pool (it's like a waiting room) - means that they can be accepted all at the same time rather than 1 by 1
export const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});
