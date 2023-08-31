import MatchesModelSequelize from '../database/models/MatchesModelSequelize';
import ICRUDLeaderboard from '../Interfaces/ICrudLeader';
import ILeaderboard from '../Interfaces/ILeaderboard';
import TeamsModelSequelize from '../database/models/TeamsModelSequelize';
import { resultAway, resultHome, orderLeaderboard, resultGeneral } from '../utils/leaderboardHome';

export default class LeaderboardModel implements ICRUDLeaderboard<ILeaderboard> {
  private model = MatchesModelSequelize;
  private teamModel = TeamsModelSequelize;

  async findAll(): Promise<ILeaderboard[]> {
    const teams = await this.teamModel.findAll();

    const getLeaderboard = await teams.map(async (team) => {
      const matches = await this.model.findAll({
        where: {
          homeTeamId: team.id,
          inProgress: false,
        },
      });
      const homeStatistics = await matches.map((match) => resultHome(team.teamName, [match]));
      const resultHomeStatistics = homeStatistics[homeStatistics.length - 1];

      return { ...resultHomeStatistics };
    });

    const result = await Promise.all(getLeaderboard);
    return orderLeaderboard(result);
  }

  async findAllAway(): Promise<ILeaderboard[]> {
    const teams = await this.teamModel.findAll();

    const getLeaderboard = await teams.map(async (team) => {
      const matches = await this.model.findAll({
        where: {
          awayTeamId: team.id,
          inProgress: false,
        },
      });
      const homeStatistics = await matches.map((match) => resultAway(team.teamName, [match]));
      const resultHomeStatistics = homeStatistics[homeStatistics.length - 1];

      return { ...resultHomeStatistics };
    });

    const result = await Promise.all(getLeaderboard);
    return orderLeaderboard(result);
  }

  async findAllGeneral(): Promise<ILeaderboard[]> {
    const teams = await this.findAll();
    const awayTeams = await this.findAllAway();
    const resultTable = resultGeneral(teams, awayTeams);
    return orderLeaderboard(resultTable);
  }
}
