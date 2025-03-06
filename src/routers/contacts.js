import { Router } from 'express';
import contactController from '../controllers/contacts.js';

const router = Router();

router.get('/', contactController.getContacts);
router.get('/:contactId', contactController.getContactById);

export default router;
