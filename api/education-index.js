import express from 'express';
import { PORT } from './modules/constants.js';
import { connectDatabase } from './modules/database.js';

const ONE_DAY_IN_MS =  8.64e+7;
const app = express();

app.get('/education', async (_, res) => {
    try {
        const databaseConnection = await connectDatabase();
        const [results] = await databaseConnection.query('SELECT * FROM Education');
        databaseConnection.release();
        res.send(results.map(r => {
                r.started = r.started.getTime()+ONE_DAY_IN_MS;
                if (r.ended !== null)
                    r.ended = r.ended.getTime()+ONE_DAY_IN_MS;
                return r;
        }));
    } catch (error) {
        console.log(error);
        res.status(404).send();
    }
});

app.get('/education/:id',async (req, res) => {
    const { id } = req.params;
    if (id === undefined || isNaN(id))
        return res.status(404).send();
    try {
        const databaseConnection = await connectDatabase();
        const [results] = await databaseConnection.query('SELECT * FROM Education WHERE id = ? LIMIT 1', [id]);
        databaseConnection.release();
        res.send(results[0]);
    } catch (error) {
        console.log(error);
        res.status(404).send();
    }
});

app.listen(
    PORT,
    () => console.log('App running on', PORT)
);
