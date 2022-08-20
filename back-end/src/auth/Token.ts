import { sign, SignOptions, verify } from 'jsonwebtoken';
import fs from 'fs';
import path from 'path';

type RegisterTypeToken = {
  id: number;
  name: string;
  email: string;
  role: string;
};

class Token {
  private _privateKey = fs.readFileSync(
    path.join(__dirname, './../../private.key')
  );

  private _signOptions: SignOptions = {
    expiresIn: '15d',
    algorithm: 'HS256',
  };

  createToken(register: RegisterTypeToken) {
    const token = sign(register, this._privateKey, this._signOptions);

    return token;
  }

  decodedToken(token: string) {
    try {
      const decoded = verify(token, this._privateKey);
      return decoded;
    } catch (error) {
      return false;
    }
  }
}

export default Token;
