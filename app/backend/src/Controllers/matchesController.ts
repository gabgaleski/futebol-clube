import { Request, Response } from 'express';
import MatchesService from '../Services/matchesService';

export default class MatchesController {
  constructor(
    private matchesService = new MatchesService(),
  ) {}

  async findAll(_req: Request, res: Response) {
    const matches = await this.matchesService.findAll();
    res.status(200).json(matches.data);
  }
}
