import Register from '../database/entities/Register';
import { registerRepository } from '../database/repositories/Register.repository';
import {
  IRegister,
  UserRequest,
} from './interfaces/Register.service.interface';

export default class RegisterService implements IRegister {
  async createRegister(body: UserRequest): Promise<Register> {
    const { email } = body;

    if (await registerRepository.findOne({ where: { email } })) {
      throw new Error('User already exists');
    }

    const register = registerRepository.create(body);

    await registerRepository.save(register);

    return register;
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
