import mysql from 'mysql2';
import { DATABASE_CONNECTION_CONFIG } from './constants.js';

export function connectDatabase() {
    const connecton = mysql.createConnection(DATABASE_CONNECTION_CONFIG);
    connecton.connect();
    return connecton;
}
