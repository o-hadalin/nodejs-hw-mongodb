import bcrypt from 'bcryptjs';
import User from '../models/user.js';

const findUserByEmail = async (email) => {
  return User.findOne({ email });
};

const createUser = async ({ name, email, password }) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  return User.create({ name, email, password: hashedPassword });
};

export default {
  findUserByEmail,
  createUser,
};
