import { Request, Response } from 'express';

export interface ISignIn {
  signIn(req: Request, res: Response): Promise<Response>;
}
