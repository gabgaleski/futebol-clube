import { Request, Response } from 'express';
import LoginService from '../Services/loginService';

export default class LoginController {
  constructor(
    private loginService = new LoginService(),
  ) {}

  async login(req: Request, res: Response) {
    const { email, password } = req.body;
    const token = await this.loginService.login(email, password);
    if (token.status === 'UNAUTHORIZED') return res.status(401).json(token.data);
    return res.status(200).json(token.data);
  }
}
