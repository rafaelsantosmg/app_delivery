import Users from '../database/entities/User';

export type UserRequest = {
  name: string;
  email: string;
  password: string;
  role: string;
};

export interface IUser {
  createRegister(body: UserRequest): Promise<Users>;
  findAllUsers(): Promise<Users[]>;
  findAllSeller(): Promise<Users[]>;
  findById(id: string): Promise<Users | undefined>;
  findBySeller(id: string): Promise<Users | undefined>;
  deleteRegister(id: string): Promise<string | undefined>;
}
