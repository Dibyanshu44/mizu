import pkg from "pg";
const { Pool }=pkg;

const pool=new Pool({
    user: "postgres",
    host: "localhost",
    database: "mizu",
    password: "jimmy123",
    port: 5432,
});

export default pool;