import { Request, Router, Response } from 'express';
import TeamsController from '../Controllers/teamsController';

const router = Router();

const teamsController = new TeamsController();

router.get('/', (req: Request, res: Response) => teamsController.findAll(req, res));
router.get('/:id', (req: Request, res: Response) => teamsController.findOne(req, res));

export default router;
