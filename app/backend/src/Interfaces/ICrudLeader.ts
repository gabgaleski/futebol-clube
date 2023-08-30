export default interface ICRUDLeaderboard<T> {
  findAll(): Promise<T[]>;
}
