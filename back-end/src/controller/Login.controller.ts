import { Request, Response } from 'express';
import AppError from '../errors/AppError';
import SignInService from '../services/Login.service';
import { ISignIn } from './interfaces/Login.controller.interface';

export default class SignIn implements ISignIn {
  private _service = new SignInService();

  async signIn(req: Request, res: Response): Promise<Response> {
    try {
      const login = await this._service.signIn(req.body);

      return res.status(200).json(login);
    } catch (error) {
      const { status, message } = error as AppError;

      return res.status(status).json({ message });
    }
  }
}
