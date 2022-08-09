import { Router } from 'express';
import registerRouter from './Register.routes/Register.routes';

const router = Router();

router.use('/registers', registerRouter);

export default router;
