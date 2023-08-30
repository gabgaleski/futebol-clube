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

  async updateMatch(req: Request, res: Response) {
    const { id } = req.params;
    const match = await this.matchesService.updateMatch(id);
    res.status(200).json(match.data);
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const match = await this.matchesService.update(id, req.body);
    res.status(200).json(match.data);
  }

  async create(req: Request, res: Response) {
    const match = await this.matchesService.create(req.body);
    res.status(201).json(match.data);
  }
}
