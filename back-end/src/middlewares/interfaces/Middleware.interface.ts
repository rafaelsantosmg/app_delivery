import { Request } from 'express';

export interface IToken {
  id: number;
  name: string;
  email: string;
  role: string;
}

export interface RequestWithUserRole extends Request {
  data?: {
    id: number;
    name: string;
    role: string;
    email: string;
  };
}
