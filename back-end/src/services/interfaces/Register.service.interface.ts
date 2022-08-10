import Register from '../../database/entities/Register';

export type UserRequest = {
  name: string;
  email: string;
  password: string;
  role: string;
};

export interface IRegister {
  createRegister(body: UserRequest): Promise<Register>;
  findAllRegisters(): Promise<Register[]>;
  findByRegisterId(id: number): Promise<Register | null>;
  findByRegisterRole(role: string): Promise<Register | null>;
  deleteRegister(id: number): Promise<string | null>;
}
