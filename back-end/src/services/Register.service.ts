import { hash } from 'bcryptjs';
import Token from '../auth/Token';
import Register from '../database/entities/Register';
import { registerRepository } from '../database/repositories/Register.repository';
import AppError from '../errors/AppError';
import {
  IRegister,
  RegisterRequest,
} from './interfaces/Register.service.interface';

interface INewRegister {
  token: string;
}
export default class RegisterService implements IRegister {
  private _createToken = new Token();

  async createRegister(body: RegisterRequest): Promise<string> {
    if (await registerRepository.findOne({ where: { email: body.email } })) {
      throw new AppError(409, 'Conflict');
    }

    const pwdHash = await hash(body.password, 10);

    const register = registerRepository.create({
      name: body.name,
      email: body.email,
      password: pwdHash,
      role: body.role,
    });

    await registerRepository.save(register);

    return 'Success';
  }

  async findAllRegisters(): Promise<Register[]> {
    const register = registerRepository.find();

    return register;
  }

  async findByRegisterId(id: number): Promise<Register | null> {
    const register = registerRepository.findOne({ where: { id } });
    if (!register) {
      throw new AppError(404, 'Not Found');
    }

    return register;
  }

  async findByRegisterRole(role: string): Promise<Register | null> {
    const register = registerRepository.findOne({ where: { role } });
    if (!register) {
      throw new AppError(404, 'Not Found');
    }

    return register;
  }

  async deleteRegister(id: number): Promise<string | null> {
    if (!(await registerRepository.findOne({ where: { id } }))) {
      throw new AppError(404, 'Not Found');
    }

    await registerRepository.delete(id);

    return 'Ok';
  }
}
