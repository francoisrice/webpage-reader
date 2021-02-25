import { Router, Request, Response } from 'express';
import { fetchAudio } from './logic';

export const router: Router = Router();

router.get('/', (req: Request, res: Response) => {
	res.status(200).send({
		status: 'Firing on all cylinders',
	});
});

router.get('/api/status', (req: Request, res: Response) => {
	res.status(200).send({
		status: 'Firing on all cylinders',
	});
});

router.post('/api/generate_speech', (req: Request, res: Response) => {
	// Business Logic....
	const audio = fetchAudio();

	res.status(200).send({
		// Business Logic result
		result: audio,
	});
});
