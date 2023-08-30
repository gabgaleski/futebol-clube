import MatchesModelSequelize from '../database/models/MatchesModelSequelize';
import ICRUDMatches from '../Interfaces/ICRUDMatches';
import IMatches from '../Interfaces/IMatches';
import TeamsModelSequelize from '../database/models/TeamsModelSequelize';

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
}
