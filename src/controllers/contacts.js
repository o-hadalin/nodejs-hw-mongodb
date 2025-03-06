import createError from 'http-errors';
import contactsService from '../services/contacts.js';

const getContacts = async (req, res, next) => {
  try {
    const contacts = await contactsService.getAllContacts();
    res.json(contacts);
  } catch (err) {
    next(err);
  }
};

const getContactById = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const contact = await contactsService.getContactById(contactId);

    if (!contact) {
      return next(createError(404, 'Contact not found'));
    }

    res.json(contact);
  } catch (err) {
    next(err);
  }
};

export default { getContacts, getContactById };
