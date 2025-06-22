// import pkg from "pg";
// const { Pool }=pkg;

// const pool=new Pool({
//     user: "postgres",
//     host: "localhost",
//     database: "mizu",
//     password: "jimmy123",
//     port: 5432,
// });

// export default pool;

import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false, // Required for Railway PostgreSQL
  },
});

export default pool;
