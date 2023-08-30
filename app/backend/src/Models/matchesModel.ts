import MatchesModelSequelize from '../database/models/MatchesModelSequelize';
import ICRUDMatches from '../Interfaces/ICRUDMatches';
import IMatches from '../Interfaces/IMatches';
import TeamsModelSequelize from '../database/models/TeamsModelSequelize';
import IMatchesUpdate from '../Interfaces/IMatchesUpdate';
import ICreateMatch from '../Interfaces/ICreateMatch';

export default class MatchesModel implements ICRUDMatches<IMatches> {
  private model = MatchesModelSequelize;

  async findAll(): Promise<IMatches[]> {
    const result = await this.model.findAll({
      include: [
        { model: TeamsModelSequelize, as: 'homeTeam', attributes: { exclude: ['id'] } },
        { model: TeamsModelSequelize, as: 'awayTeam', attributes: { exclude: ['id'] } },
      ],
    });
    return result;
  }

  async findAllInProgress(inProgress: string): Promise<IMatches[]> {
    const result = await this.model.findAll({
      where: { inProgress: inProgress === 'true' },
      include: [
        { model: TeamsModelSequelize, as: 'homeTeam', attributes: { exclude: ['id'] } },
        { model: TeamsModelSequelize, as: 'awayTeam', attributes: { exclude: ['id'] } },
      ],
    });
    return result;
  }

  async updateMatch(id: string): Promise<{ message: string }> {
    await this.model.update({ inProgress: false }, { where: { id } });
    return { message: 'Finished' };
  }

  async update(id: string, match: IMatchesUpdate): Promise<{ message: string }> {
    await this.model.update(match, { where: { id } });
    return { message: 'OK' };
  }

  async create(match: ICreateMatch): Promise<IMatches | null> {
    const { homeTeamId, awayTeamId } = match;
    const homeTeam = await TeamsModelSequelize.findByPk(homeTeamId);
    const awayTeam = await TeamsModelSequelize.findByPk(awayTeamId);
    if (!homeTeam?.dataValues || !awayTeam?.dataValues) return null;

    const allInfos = {
      ...match,
      inProgress: true,
    };
    const result = await this.model.create(allInfos);
    return result.dataValues;
  }
}
