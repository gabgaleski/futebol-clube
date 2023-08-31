import ICRUDLeaderboard from '../Interfaces/ICrudLeader';
import ILeaderboard from '../Interfaces/ILeaderboard';
import LeaderboardModel from '../Models/leaderboardModel';

export default class LeaderboardService {
  constructor(
    private leaderBoardModel: ICRUDLeaderboard<ILeaderboard> = new LeaderboardModel(),
  ) {}

  async findAll(): Promise<{ status: string, data: ILeaderboard[] }> {
    const teams = await this.leaderBoardModel.findAll();

    return { status: 'SUCCESS', data: teams };
  }

  async findAllAway(): Promise<{ status: string, data: ILeaderboard[] }> {
    const teams = await this.leaderBoardModel.findAllAway();
    return { status: 'SUCCESS', data: teams };
  }

  async findAllGeneral(): Promise<{ status: string, data: ILeaderboard[] }> {
    const teams = await this.leaderBoardModel.findAllGeneral();
    return { status: 'SUCCESS', data: teams };
  }
}
