import { Request, Response } from 'express';

export interface IUserController {
  createRegister(req: Request, res: Response): Promise<Response>;
  findAllUsers(req: Request, res: Response): Promise<Response>;
  findAllSeller(req: Request, res: Response): Promise<Response>;
  findById(req: Request, res: Response): Promise<Response>;
  findBySeller(req: Request, res: Response): Promise<Response>;
  deleteRegister(req: Request, res: Response): Promise<Response>;
}
