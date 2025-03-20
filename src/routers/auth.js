import { Router } from 'express';
import authController from '../controllers/auth.js';
import validateBody from '../middlewares/validateBody.js';
import { registerSchema } from '../validation/auth.js';
import ctrlWrapper from '../utils/ctrlWrapper.js';

const router = Router();

router.post(
  '/register',
  validateBody(registerSchema),
  ctrlWrapper(authController.register),
);

export default router;
