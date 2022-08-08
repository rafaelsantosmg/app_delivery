import { Request, Response } from 'express';
import 'dotenv/config';

import app from './app';

const PORT = process.env.API_PORT || 3333;

app.get('/', (_request: Request, response: Response) =>
  response.json({
    message: 'Meu server App Delivery',
  })
);

app.listen(PORT, () => {
  console.log(`Back-end app delivery in port ${PORT}!`);
});
