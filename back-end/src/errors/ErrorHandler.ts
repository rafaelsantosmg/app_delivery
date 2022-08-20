import { NextFunction, Request, Response } from 'express';
import { isCelebrateError } from 'celebrate';
import status from '../utils/StatusCode';
export default (
  err: Error,
  _request: Request,
  response: Response,
  _next: NextFunction
) => {
  if (isCelebrateError(err)) {
    const result = { message: '' };
    for (const [segment, joiError] of err.details.entries()) {
      result.message = joiError.details[0].message;
    }
    return response.status(400).json({
      message: result.message,
    });
  }
  console.log('\x1b[31m%s\x1b[0m', '************* ⚠️  ERRO ⚠️ *************');
  console.error(err.message);
  console.log('\x1b[31m%s\x1b[0m', '*************************************');
  return response.status(500).json({
    status: status[500],
    message: 'Internal server error',
  });
};
