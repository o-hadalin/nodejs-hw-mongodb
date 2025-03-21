import { Router } from 'express';
import contactController from '../controllers/contacts.js';
import ctrlWrapper from '../utils/ctrlWrapper.js';
import validateBody from '../middlewares/validateBody.js';
import isValidId from '../middlewares/isValidId.js';
import * as validation from '../validation/contact.js';

const router = Router();

router.get('/', ctrlWrapper(contactController.getContacts));

router.get(
  '/:contactId',
  isValidId,
  ctrlWrapper(contactController.getContactById),
);

router.post(
  '/',
  validateBody(validation.contactSchema),
  ctrlWrapper(contactController.createContact),
);

router.patch(
  '/:contactId',
  isValidId,
  validateBody(validation.updateContactSchema),
  ctrlWrapper(contactController.patchContact),
);

router.delete(
  '/:contactId',
  isValidId,
  ctrlWrapper(contactController.deleteContact),
);

export default router;
