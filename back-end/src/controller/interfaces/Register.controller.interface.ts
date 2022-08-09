import { Request, Response } from 'express';

export interface IRegisterController {
  createRegister(req: Request, res: Response): Promise<Response>;
  findAllRegisters(req: Request, res: Response): Promise<Response>;
  findByRegisterId(req: Request, res: Response): Promise<Response>;
  findByRegisterRole(req: Request, res: Response): Promise<Response>;
  deleteRegister(req: Request, res: Response): Promise<Response>;
}
