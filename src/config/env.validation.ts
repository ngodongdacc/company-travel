import * as Joi from 'joi';

export const validationSchema = Joi.object({
  // App
  API_DOMAIN: Joi.string().required(),
  APP_PORT: Joi.number().default(4003),
});
