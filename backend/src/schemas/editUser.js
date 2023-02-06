import Joi from 'joi';

const schema = Joi.object({
  name: Joi.string().max(50).optional(),
  username: Joi.string().max(50).optional(),
  password: Joi.string().min(8).max(20).optional(),
  email: Joi.string().email().max(50).optional(),
});

export default schema;