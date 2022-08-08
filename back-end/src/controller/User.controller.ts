import { Request, Response } from 'express';
import UsersService from '../services/User.service';
import { IUserController } from './interfaces/User.interface';

export class UserController implements IUserController {
  private _service = new UsersService();

  async createRegister(req: Request, res: Response): Promise<Response> {
    try {
      const user = await this._service.createRegister(req.body);

      return res.status(201).json(user);
    } catch (error) {
      return res.status(400).json({ message: 'Error' });
    }
  }

  async findAllUsers(req: Request, res: Response): Promise<Response> {
    try {
      const users = await this._service.findAllUsers();

      return res.status(200).json(users);
    } catch (error) {
      return res.status(400).json({ message: 'Error' });
    }
  }

  async findAllSeller(req: Request, res: Response): Promise<Response> {
    try {
      const sellers = await this._service.findAllSeller();

      return res.status(200).json(sellers);
    } catch (error) {
      return res.status(400).json({ message: 'Error' });
    }
  }

  async findById(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const user = await this._service.findById(id);

      return res.status(200).json(user);
    } catch (error) {
      return res.status(400).json({ message: 'Error' });
    }
  }

  async findBySeller(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;

      const seller = await this._service.findBySeller(id);

      return res.status(200).json(seller);
    } catch (error) {
      return res.status(400).json({ message: 'Error' });
    }
  }

  async deleteRegister(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const result = await this._service.deleteRegister(id);
      return res.status(204).json(result);
    } catch (error) {
      return res.status(400).json({ message: 'Error' });
    }
  }
}
