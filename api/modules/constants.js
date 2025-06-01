export const NOTES_PATH = process.env.NOTES_PATH || 'notes/';

export const PORT = process.env.SERVER_PORT || 8000;

export const DATABASE_CONNECTION_CONFIG = {
    host: 'database',
    user: 'root',
    password: process.env.MYSQL_ROOT_PASSWORD,
    database: process.env.MYSQL_DATABASE
};
