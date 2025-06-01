import mysql from 'mysql2/promise';
import { DATABASE_CONNECTION_CONFIG } from './constants.js';

const pool = mysql.createPool(DATABASE_CONNECTION_CONFIG);

export async function connectDatabase() {
    const connection = await pool.getConnection();
    await connection.query("SET NAMES utf8mb4;");
    return connection;
}
