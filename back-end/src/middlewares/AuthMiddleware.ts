import { Request, Response, NextFunction } from 'express';
import Token from '../auth/Token';

interface IToken {
  id: number;
  name: string;
  email: string;
  role: string;
}

interface RequestWithUserRole extends Request {
  data?: {
    id: number;
    name: string;
    role: string;
    email: string;
  };
}

class AuthMiddleware {
  private _decodedToken = new Token();

  async validate(req: RequestWithUserRole, res: Response, next: NextFunction) {
    const { authorization } = req.headers;
    const token = authorization;

    if (!token) return res.status(404).json({ message: 'Token not found' });

    const decoded = this._decodedToken.decodedToken(token) as IToken;

    if (!decoded) return res.status(401).json({ message: 'Invalid token' });

    req.data = decoded;

    next();
  }
}

export default AuthMiddleware;
