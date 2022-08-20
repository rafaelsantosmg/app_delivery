import { Router } from 'express';
import registerRouter from './Register.routes/Register.routes';
import loginRouter from './Login.routes/Login.routes';

const router = Router();

router.use('/registers', registerRouter);
router.use('/login', loginRouter);

export default router;
