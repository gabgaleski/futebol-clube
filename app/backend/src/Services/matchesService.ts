import ICRUDMatches from '../Interfaces/ICRUDMatches';
import IMatches from '../Interfaces/IMatches';
import MatchesModel from '../Models/matchesModel';

export default class MatchesService {
  constructor(
    private matchModel: ICRUDMatches<IMatches> = new MatchesModel(),
  ) {}

  async findAll(): Promise<{ status: string, data: IMatches[] }> {
    const matches = await this.matchModel.findAll();

    return { status: 'SUCCESS', data: matches };
  }

  async findAllInProgress(inProgress: string): Promise<{ status: string, data: IMatches[] }> {
    const matches = await this.matchModel.findAllInProgress(inProgress);
    return { status: 'SUCCESS', data: matches };
  }
}
