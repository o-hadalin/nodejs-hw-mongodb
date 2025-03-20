import createHttpError from 'http-errors';
import authService from '../services/auth.js';

const register = async (req, res) => {
  const { name, email, password } = req.body;

  const existingUser = await authService.findUserByEmail(email);
  if (existingUser) {
    throw createHttpError(409, 'Email in use');
  }

  const newUser = await authService.createUser({ name, email, password });

  res.status(201).json({
    status: 201,
    message: 'Successfully registered a user!',
    data: {
      id: newUser._id,
      name: newUser.name,
      email: newUser.email,
    },
  });
};

export default { register };
