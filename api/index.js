import express from 'express';
import mysql from 'mysql2';
import { readFile } from 'fs';

const NOTES_PATH = process.env.NOTES_PATH || 'notes/';

const PORT = process.env.SERVER_PORT || 8000;
const app = express();

const DATABASE_CONNECTION_CONFIG = {
    host: 'database',
    user: 'root',
    password: process.env.MYSQL_ROOT_PASSWORD,
    database: process.env.MYSQL_DATABASE
};

app.use('/raw', express.static('notes'));

function connectDatabase() {
    const connecton = mysql.createConnection(DATABASE_CONNECTION_CONFIG);
    connecton.connect();
    return connecton;
}

app.get('/note', (_, res) => {
    const databaseConnection = connectDatabase();
    databaseConnection.query('SELECT * FROM Posts WHERE published LIMIT 10', (error, results) =>
        error ? res.status(404).send() : res.send(results || [])
    );
    databaseConnection.end();
});

app.get('/note/:id', (req, res) => {
    const { id } = req.params;
    if (id === undefined || isNaN(id))
        return res.status(404).send();
    const databaseConnection = connectDatabase();
    databaseConnection.query('SELECT * FROM Posts WHERE id = ? AND published', id, (error, results) => 
        error || results.length === 0 ? res.status(404).send() : res.send(results[0])
    );
    databaseConnection.end();
});


app.listen(
    PORT,
    () => console.log('App running on', PORT)
);
