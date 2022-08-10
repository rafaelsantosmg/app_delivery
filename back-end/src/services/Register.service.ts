import { hash } from 'bcryptjs';
import Token from '../auth/Token';
import Register from '../database/entities/Register';
import { registerRepository } from '../database/repositories/Register.repository';
import {
  IRegister,
  UserRequest,
} from './interfaces/Register.service.interface';

interface INewRegister extends Register {
  token: string;
}
export default class RegisterService implements IRegister {
  private _createToken = new Token();

  async createRegister(body: UserRequest): Promise<INewRegister> {
    if (await registerRepository.findOne({ where: { email: body.email } })) {
      throw new Error('User already exists');
    }

    const pwdHash = await hash(body.password, 10);

    const register = registerRepository.create({
      name: body.name,
      email: body.email,
      password: pwdHash,
      role: body.role,
    });

    const { id, name, email, role, password, sales } = register;

    const token = this._createToken.createToken({
      id,
      name,
      email,
      role,
    });
    await registerRepository.save(register);

    return { id, name, email, role, password, sales, token };
  }

  async findAllRegisters(): Promise<Register[]> {
    const register = registerRepository.find();

    return register;
  }

  async findByRegisterId(id: number): Promise<Register | null> {
    const register = registerRepository.findOne({ where: { id } });
    if (!register) {
      throw new Error('Register not found');
    }

    return register;
  }

  async findByRegisterRole(role: string): Promise<Register | null> {
    const register = registerRepository.findOne({ where: { role } });
    if (!register) {
      throw new Error('Register not found');
    }

    return register;
  }

  async deleteRegister(id: number): Promise<string | null> {
    if (!(await registerRepository.findOne({ where: { id } }))) {
      throw new Error('User not exists');
    }

    await registerRepository.delete(id);

    return 'Ok';
  }
}
