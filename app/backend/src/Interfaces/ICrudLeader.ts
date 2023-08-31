export default interface ICRUDLeaderboard<T> {
  findAll(): Promise<T[]>;
  findAllAway(): Promise<T[]>;
  findAllGeneral(): Promise<T[]>;
}
