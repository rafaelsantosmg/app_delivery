import { Router } from 'express';
import userRouter from './User.routes/User.routes';

const router = Router();

router.use('/users', userRouter);

export default router;
