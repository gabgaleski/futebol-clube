export default interface ICRUDUser<T> {
  login(email:string): Promise<T | null>;
}
