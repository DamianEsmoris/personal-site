import express from 'express';
import { PORT } from './modules/constants.js';
import { connectDatabase } from './modules/database.js';

const app = express();

app.get('/education', (_, res) => {
    const databaseConnection = connectDatabase();
    databaseConnection.query(
        'SELECT * FROM Education',
        (error, results) => error
            ? res.status(404).send()
        : res.send(results.map(r => {
            r.started = r.started.getTime();
            if (r.ended != null)
                r.ended = r.ended.getTime();
            return r;
        }) || [])
    );
    databaseConnection.end();
});

app.get('/education/:id', (req, res) => {
    const { id } = req.params;
    if (id === undefined || isNaN(id))
        return res.status(404).send();
    const databaseConnection = connectDatabase();
    databaseConnection.query(
        'SELECT * FROM Education WHERE id = ?', id,
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
