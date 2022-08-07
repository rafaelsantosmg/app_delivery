import app from './app'
import 'dotenv/config'
import {Request, Response} from 'express'

const port = process.env.API_PORT || 3333

app.get('/', (_req: Request, res: Response) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))