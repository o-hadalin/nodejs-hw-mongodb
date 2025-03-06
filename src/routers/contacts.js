import { Router } from 'express';
import contactController from '../controllers/contacts.js';
import ctrlWrapper from '../utils/ctrlWrapper.js';

const router = Router();

router.get('/', ctrlWrapper(contactController.getContacts));
router.get('/:contactId', ctrlWrapper(contactController.getContactById));

export default router;
