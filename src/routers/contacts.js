import { Router } from 'express';
import contactController from '../controllers/contacts.js';
import ctrlWrapper from '../utils/ctrlWrapper.js';
import validateBody from '../middlewares/validateBody.js';
import isValidId from '../middlewares/isValidId.js';
import { contactSchema, updateContactSchema } from '../validation/contacts.js';

const router = Router();

router.get('/', ctrlWrapper(contactController.getContacts));
router.get(
  '/:contactId',
  isValidId,
  ctrlWrapper(contactController.getContactById),
);
router.post(
  '/',
  validateBody(contactSchema),
  ctrlWrapper(contactController.createContact),
);
router.patch(
  '/:contactId',
  isValidId,
  validateBody(updateContactSchema),
  ctrlWrapper(contactController.patchContact),
);
router.delete(
  '/:contactId',
  isValidId,
  ctrlWrapper(contactController.deleteContact),
);

export default router;
