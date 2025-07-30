import mysql2 from "mysql2/promise.js";
import dotenv from "dotenv";

dotenv.config();

export const privateApiDB = mysql2.createPool({
  host: process.env.HOST,
  user: process.env.USER,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
});

export const testConnection = async () => {
  try {
    const response = await privateApiDB.getConnection();
    console.log("Conexión establecida exitosamente");
  } catch (error) {
    console.error("Sucedió un error.");
    console.log(error)
  }
};
