import { Request, Router, Response } from 'express';
import MatchesController from '../Controllers/matchesController';

const router = Router();

const matchesController = new MatchesController();

router.get('/', (req: Request, res: Response) => matchesController.findAll(req, res));

export default router;
