import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: process.env.DB_HOST, // Your MySQL server address
  user: process.env.DB_USER, // Your MySQL username
  password: process.env.DB_PASSWORD, // Your MySQL password
  database: process.env.DB_NAME, // Your database name
});

export default pool;
