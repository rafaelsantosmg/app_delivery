import { Router } from 'express';
import { RegisterController } from '../../controller/Register.controller';
const router = Router();

const controller = new RegisterController();
router.get('/search', (req, res) => controller.findByRegisterRole(req, res));
router.get('/:id', (req, res) => controller.findByRegisterId(req, res));
router.post('/', (req, res) => controller.createRegister(req, res));
router.get('/', (req, res) => controller.findAllRegisters(req, res));
router.delete('/:id', (req, res) => controller.deleteRegister(req, res));
export default router;
