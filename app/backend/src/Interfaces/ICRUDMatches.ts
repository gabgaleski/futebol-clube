export default interface ICRUDMatches<T> {
  findAll(): Promise<T[]>;
}
