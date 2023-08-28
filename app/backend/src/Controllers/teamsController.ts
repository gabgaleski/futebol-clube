import { Request, Response } from 'express';
import TeamsService from '../Services/teamsService';

export default class TeamsController {
  constructor(
    private teamsService = new TeamsService(),
  ) {}

  async findAll(_req: Request, res: Response) {
    const teams = await this.teamsService.findAll();
    res.status(200).json(teams.data);
  }

  async findOne(req: Request, res: Response) {
    const team = await this.teamsService.findOne(req.params.id);
    if (team.status === 'NOT_FOUND') return res.status(404).json({ message: 'Team not found' });
    res.status(200).json(team.data);
  }
}
