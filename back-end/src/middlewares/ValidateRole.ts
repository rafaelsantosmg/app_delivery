import { Response, NextFunction } from 'express';
import { IToken, RequestWithUserRole } from './interfaces/Middleware.interface';

export default class ValidateRole {
  validRoleAdmin = (
    req: RequestWithUserRole,
    res: Response,
    next: NextFunction
  ) => {
    const { role } = req.data as IToken;

    if (role !== 'admin') {
      return res.status(401).json({ message: 'Unauthorized (RFC 7235)' });
    }
    next();
  };
}
