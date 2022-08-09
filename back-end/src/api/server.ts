import 'dotenv/config';
import { Request, Response } from 'express';

import { AppDataSource } from '../data-source.ts';
import app from './app';

const PORT = process.env.API_PORT || 3333;
AppDataSource.initialize().then(() => {
  app.get('/', (_request: Request, response: Response) =>
    response.json({
      message: 'Meu server App Delivery',
    })
  );

  return app.listen(PORT, () => {
    console.log(`Back-end app delivery in port ${PORT}!`);
  });
});
