import express, { Express, Request, Response } from 'express';

const app: Express = express();
const port: number = 3000;

app.get('/', (req: Request, res: Response) => {
	res.send(200);
});

app.listen(port, () => {
	console.log('App is listening on port ' + port);
});
