import { Request, Router, Response } from 'express';
import LeaderboardController from '../Controllers/leaderboardController';

const router = Router();

const leaderboardController = new LeaderboardController();

router.get('/home', (req: Request, res: Response) => leaderboardController.findAll(req, res));
router.get('/away', (req: Request, res: Response) => leaderboardController.findAllAway(req, res));
router.get('/', (req: Request, res: Response) => leaderboardController.findAllGeneral(req, res));
export default router;
