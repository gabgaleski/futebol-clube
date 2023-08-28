import { Request, Router, Response } from 'express';
import LoginController from '../Controllers/loginController';
import LoginValidate from '../middlewares/loginValidate';

const router = Router();

const loginController = new LoginController();

router.post(
  '/',
  LoginValidate.validateFields,
  (req: Request, res: Response) => loginController.login(req, res),
);

export default router;
