const { Joi, Segments } = require('celebrate');

export const createRegisterSchema = {
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    role: Joi.string().default('customer'),
  }),
};

export const loginSchema = {
  [Segments.BODY]: Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  }),
};
