export default interface ICRUDMatches<T> {
  findAll(): Promise<T[]>;
  findAllInProgress(inProgress: string): Promise<T[]>;
  updateMatch(id: string): Promise<{ message: string }>;
}
