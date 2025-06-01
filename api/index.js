import express from 'express';
import { PORT, NOTES_PATH } from './modules/constants.js';
import { connectDatabase } from './modules/database.js';

const app = express();

app.use('/raw', express.static(NOTES_PATH));

app.get('/note', (_, res) => {
    const databaseConnection = connectDatabase();
    databaseConnection.query(
        'SELECT * FROM Posts WHERE published LIMIT 10',
        (error, results) => error
            ? res.status(404).send()
            : res.send(results || [])
    );
    databaseConnection.end();
});

app.get('/note/:id', (req, res) => {
    const { id } = req.params;
    if (id === undefined || isNaN(id))
        return res.status(404).send();
    const databaseConnection = connectDatabase();
    databaseConnection.query(
        'SELECT * FROM Posts WHERE id = ? AND published', id,
        (error, results) => error || results.length === 0
            ? res.status(404).send()
            : res.send(results[0])
    );
    databaseConnection.end();
});

app.listen(
    PORT,
    () => console.log('App running on', PORT)
);
