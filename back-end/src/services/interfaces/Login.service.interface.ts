export type LoginReturn = {
  id: number;
  name: string;
  email: string;
  role: string;
  token: string;
};

export type LoginRequest = {
  email: string;
  password: string;
};

export interface ILogin {
  signIn(body: LoginRequest): Promise<LoginReturn>;
}
