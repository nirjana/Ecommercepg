import Joi from 'joi';

const schema = Joi.object({
  name: Joi.string().max(100).optional(),
  description: Joi.string().max(200).optional(),
  price: Joi.number().optional(),
  stock: Joi.number().optional(),
  category: Joi.string().max(200).optional(),
  images: Joi.string().max(200).optional(),
});

export default schema;