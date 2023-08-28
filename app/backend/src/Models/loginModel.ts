import UsersModelSequelize from '../database/models/UsersModelSequelize';
import ICRUDUser from '../Interfaces/ICRUDuser';
import IUsers from '../Interfaces/IUsers';

export default class UserModel implements ICRUDUser<IUsers> {
  private model = UsersModelSequelize;

  async login(email: string): Promise<IUsers | null> {
    const user = await this.model.findOne({ where: { email } });
    return user;
  }
}
