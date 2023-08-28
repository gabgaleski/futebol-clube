import ICRUDModel from '../Interfaces/ICrudModel';
import ITeams from '../Interfaces/ITeams';
import TeamsModel from '../Models/teamsModel';

export default class TeamsService {
  constructor(
    private teamModel: ICRUDModel<ITeams> = new TeamsModel(),
  ) {}

  async findAll(): Promise<{ status: string, data: ITeams[] }> {
    const teams = await this.teamModel.findAll();

    return { status: 'SUCCESS', data: teams };
  }

  async findOne(id: string): Promise<{ status: string, data: ITeams | null }> {
    const team = await this.teamModel.findOne(id);
    if (!team) return { status: 'NOT_FOUND', data: null };

    return { status: 'SUCCESS', data: team };
  }
}
