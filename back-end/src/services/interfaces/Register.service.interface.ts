import Users from '../../database/entities/Register';

export type UserRequest = {
  name: string;
  email: string;
  password: string;
  role: string;
};

export interface IRegister {
  createRegister(body: UserRequest): Promise<Users>;
  findAllRegisters(): Promise<Users[]>;
  findByRegisterId(id: number): Promise<Users | null>;
  findByRegisterRole(role: string): Promise<Users | null>;
  deleteRegister(id: number): Promise<string | null>;
}
