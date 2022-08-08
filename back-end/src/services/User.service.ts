import { getRepository } from 'typeorm';
import Users from '../database/entities/User';
import { IUser, UserRequest } from './interfaces/User.interface';

export default class UsersService implements IUser {
  async createRegister(body: UserRequest): Promise<Users> {
    const { email } = body;

    const repo = getRepository(Users);

    if (await repo.findOne({ where: { email } })) {
      throw new Error('User already exists');
    }

    const user = repo.create(body);

    await repo.save(user);

    return user;
  }

  async findAllUsers(): Promise<Users[]> {
    const repo = getRepository(Users);

    const users = repo.find();

    return users;
  }

  findAllSeller(): Promise<Users[]> {
    const repo = getRepository(Users);

    const sellers = repo.find();

    return sellers;
  }

  findById(id: string): Promise<Users | undefined> {
    const repo = getRepository(Users);
    const user = repo.findOne({ where: { id } });
    if (!user) {
      throw new Error('User not found');
    }

    return user;
  }

  async findBySeller(id: string): Promise<Users | undefined> {
    const repo = getRepository(Users);

    const seller = await repo.findOne({ where: { id } });

    if (!seller) {
      throw new Error('Seller not exists');
    }

    return seller;
  }

  async deleteRegister(id: string): Promise<string | undefined> {
    const repo = getRepository(Users);
    if (!(await repo.findOne({ where: { id } }))) {
      throw new Error('User not exists');
    }

    await repo.delete(id);

    return 'Ok';
  }
}
