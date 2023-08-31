import ICRUDLeaderboard from '../Interfaces/ICrudLeader';
import ILeaderboard from '../Interfaces/ILeaderboard';
import LeaderboardModel from '../Models/leaderboardModel';

export default class LeaderboardService {
  constructor(
    private teamModel: ICRUDLeaderboard<ILeaderboard> = new LeaderboardModel(),
  ) {}

  async findAll(): Promise<{ status: string, data: ILeaderboard[] }> {
    const teams = await this.teamModel.findAll();

    return { status: 'SUCCESS', data: teams };
  }

  async findAllAway(): Promise<{ status: string, data: ILeaderboard[] }> {
    const teams = await this.teamModel.findAll();
    return { status: 'SUCCESS', data: teams };
  }
}
