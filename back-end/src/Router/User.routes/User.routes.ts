import { Router } from 'express';
import { UserController } from '../../controller/User.controller';
const router = Router();

const controller = new UserController();
router.get('/:id', (req, res) => controller.findById(req, res));
router.post('/', (req, res) => controller.createRegister(req, res));
router.get('/', (req, res) => controller.findAllUsers(req, res));
export default router;
