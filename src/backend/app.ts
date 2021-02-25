import express, { Express } from 'express';
import { router } from './routes/router';

const app: Express = express();
const port: number = 3000;

app.use('/', router);

app.listen(port, () => {
	console.log('App is listening on port ' + port);
});
