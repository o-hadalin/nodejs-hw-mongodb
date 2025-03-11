import createHttpError from 'http-errors';

const validateBody = (schema) => async (req, _res, next) => {
  try {
    await schema.validateAsync(req.body, { abortEarly: false });
    next();
  } catch (error) {
    const errors = error.details.map((detail) => detail.message).join(', ');
    next(new createHttpError.BadRequest(errors));
  }
};

export default validateBody;
