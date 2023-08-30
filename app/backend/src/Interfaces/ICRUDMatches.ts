import IMatchesUpdate from './IMatchesUpdate';
import ICreateMatch from './ICreateMatch';

export default interface ICRUDMatches<T> {
  findAll(): Promise<T[]>;
  findAllInProgress(inProgress: string): Promise<T[]>;
  updateMatch(id: string): Promise<{ message: string }>;
  update(id: string, match: IMatchesUpdate): Promise<{ message: string }>;
  create(match: ICreateMatch): Promise<T | null>;
}
