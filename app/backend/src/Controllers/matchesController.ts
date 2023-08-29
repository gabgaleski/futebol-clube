import { Request, Response } from 'express';
import MatchesService from '../Services/matchesService';

export default class MatchesController {
  constructor(
    private matchesService = new MatchesService(),
  ) {}

  async findAll(req: Request, res: Response) {
    const { inProgress } = req.query;
    if (inProgress) {
      const matches = await this.matchesService.findAllInProgress(inProgress as string);
      res.status(200).json(matches.data);
      return;
    }
    const matches = await this.matchesService.findAll();
    res.status(200).json(matches.data);
  }
}
