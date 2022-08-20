import { registerRepository } from '../database/repositories/Register.repository';
import bcript from 'bcryptjs';
import AppError from '../errors/AppError';
import Token from '../auth/Token';
import {
  ILogin,
  LoginReturn,
  LoginRequest,
} from './interfaces/Login.service.interface';

export default class SignIn implements ILogin {
  private _token = new Token();

  signIn = async (body: LoginRequest): Promise<LoginReturn> => {
    const { email, password } = body;
    const registerExist = await registerRepository.findOne({
      where: { email },
    });

    const pwdDecripted = await bcript.compare(password, registerExist.password);

    if (!pwdDecripted) {
      throw new AppError(401, 'Unauthorized (RFC 7235)');
    }
    const { id, name, role } = registerExist;
    const token = this._token.createToken({ id, name, email, role });

    return {
      id,
      name,
      email,
      role,
      token,
    };
  };
}
