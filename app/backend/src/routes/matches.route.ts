import { Request, Router, Response } from 'express';
import MatchesController from '../Controllers/matchesController';
import LoginValidate from '../middlewares/loginValidate';

const router = Router();

const matchesController = new MatchesController();

router.get('/', (req: Request, res: Response) => matchesController.findAll(req, res));
router.patch(
  '/:id/finish',
  LoginValidate.validateToken,
  (req: Request, res: Response) => matchesController.updateMatch(req, res),
);
router.patch(
  '/:id',
  LoginValidate.validateToken,
  (req: Request, res: Response) => matchesController.update(req, res),
);

export default router;
