import { Router } from 'express';
import contactController from '../controllers/contacts.js';
import ctrlWrapper from '../utils/ctrlWrapper.js';

const router = Router();

router.get('/', ctrlWrapper(contactController.getContacts));
router.get('/:contactId', ctrlWrapper(contactController.getContactById));
router.post('/', ctrlWrapper(contactController.createContact));
router.patch('/:contactId', ctrlWrapper(contactController.patchContact));
router.delete('/:contactId', ctrlWrapper(contactController.deleteContact));

export default router;
