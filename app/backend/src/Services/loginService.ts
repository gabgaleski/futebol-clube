import { compareSync } from 'bcryptjs';
import IUsers from '../Interfaces/IUsers';
import ICRUDUser from '../Interfaces/ICRUDuser';
import UserModel from '../Models/loginModel';
import JWT from '../utils/JWT';

export default class LoginService {
  constructor(
    private teamModel: ICRUDUser<IUsers> = new UserModel(),
  ) {}

  async login(email: string, password: string) {
    const user = await this.teamModel.login(email);
    if (!user || !compareSync(password, user.password)) {
      return { status: 'UNAUTHORIZED', data: { message: 'Invalid email or password' } };
    }
    const token = JWT.sign({ email });
    return { status: 'SUCCESSFUL', data: { token } };
  }
}
