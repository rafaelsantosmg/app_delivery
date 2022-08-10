import { Request, Response } from 'express';
import RegisterService from '../services/Register.service';
import { IRegisterController } from './interfaces/Register.controller.interface';

export class RegisterController implements IRegisterController {
  private _service = new RegisterService();

  async createRegister(req: Request, res: Response): Promise<Response> {
    try {
      const user = await this._service.createRegister(req.body);

      return res.status(201).json(user);
    } catch (error) {
      return res.status(400).json({ message: 'Error' });
    }
  }

  async findAllRegisters(req: Request, res: Response): Promise<Response> {
    try {
      const users = await this._service.findAllRegisters();

      return res.status(200).json(users);
    } catch (error) {
      return res.status(400).json({ message: 'Error' });
    }
  }

  async findByRegisterId(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const user = await this._service.findByRegisterId(Number(id));

      return res.status(200).json(user);
    } catch (error) {
      return res.status(400).json({ message: 'Error' });
    }
  }

  async findByRegisterRole(req: Request, res: Response): Promise<Response> {
    try {
      const role = req.query.role;

      const seller = await this._service.findByRegisterRole(role as string);

      return res.status(200).json(seller);
    } catch (error) {
      return res.status(400).json({ message: 'Error s' });
    }
  }

  async deleteRegister(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;

      const result = await this._service.deleteRegister(Number(id));
      return res.status(204).json(result);
    } catch (error) {
      return res.status(400).json({ message: 'Error' });
    }
  }
}
