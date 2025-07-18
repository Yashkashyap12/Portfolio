import mysql from "mysql2/promise";

export const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "yash@8808",
  database: "Contact_db",
});

const testConnection = async () => {
  try {
    const connection = await db.getConnection();
    console.log("Database connected successfully");
    connection.release();
  } catch (err) {
    console.error("Connection Failed", err);
    process.exit(1);
  }
};

testConnection();
