import { Request, Router, Response } from 'express';
import LeaderboardController from '../Controllers/leaderboardController';

const router = Router();

const leaderboardController = new LeaderboardController();

router.get('/home', (req: Request, res: Response) => leaderboardController.findAll(req, res));

export default router;
