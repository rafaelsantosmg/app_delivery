import { Router } from 'express';
import { RegisterController } from '../../controller/Register.controller';
import AuthMiddleware from '../../middlewares/AuthMiddleware';
import ValidateRole from '../../middlewares/ValidateRole';
import { celebrate } from 'celebrate';
import { createRegisterSchema } from '../../schemas/joi.schemas';

const router = Router();

const authMiddleware = new AuthMiddleware();
const validateRole = new ValidateRole();
const controller = new RegisterController();

router.get('/search', (req, res) => controller.findByRegisterRole(req, res));
router.get('/:id', (req, res) => controller.findByRegisterId(req, res));
router.post('/', celebrate(createRegisterSchema), (req, res) =>
  controller.createRegister(req, res)
);
router.get(
  '/',
  (req, res, next) => authMiddleware.validate(req, res, next),
  (req, res) => controller.findAllRegisters(req, res)
);
router.delete(
  '/:id',
  (req, res, next) => authMiddleware.validate(req, res, next),
  (req, res, next) => validateRole.validRoleAdmin(req, res, next),
  (req, res) => controller.deleteRegister(req, res)
);
export default router;
