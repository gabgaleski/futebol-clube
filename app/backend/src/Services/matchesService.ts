import ICRUDMatches from '../Interfaces/ICRUDMatches';
import IMatches from '../Interfaces/IMatches';
import MatchesModel from '../Models/matchesModel';
import IMatchesUpdate from '../Interfaces/IMatchesUpdate';
import ICreateMatch from '../Interfaces/ICreateMatch';

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

  async updateMatch(id: string): Promise<{ status: string, data: { message: string } }> {
    const match = await this.matchModel.updateMatch(id);
    return { status: 'SUCCESS', data: match };
  }

  async update(id: string, match: IMatchesUpdate)
    : Promise<{ status: string, data: { message:string } }> {
    const updatedMatch = await this.matchModel.update(id, match);
    return { status: 'SUCCESS', data: updatedMatch };
  }

  async create(match: ICreateMatch): Promise<{ status: string, data: IMatches }> {
    const newMatch = await this.matchModel.create(match);
    return { status: 'SUCCESS', data: newMatch };
  }
}
