import { Router } from 'express';
import SignIn from '../../controller/Login.controller';

const router = Router();
const signIn = new SignIn();

router.post('/', (req, res) => signIn.signIn(req, res));

export default router;
