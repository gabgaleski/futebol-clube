export default interface ICRUDModel<T> {
  findAll(): Promise<T[]>;
  findOne(id: string): Promise<T | null>;
}
