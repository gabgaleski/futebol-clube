import { Request, Response } from 'express';
import LeaderboardService from '../Services/leaderboardService';

export default class LeaderboardController {
  constructor(
    private leaderboardService = new LeaderboardService(),
  ) {}

  async findAll(_req: Request, res: Response) {
    const teams = await this.leaderboardService.findAll();
    res.status(200).json(teams.data);
  }
}
