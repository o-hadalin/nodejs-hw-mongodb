import Contact from '../models/contact.js';
import createError from 'http-errors';

const getAllContacts = async () => {
  return Contact.find();
};

const getContactById = async (contactId) => {
  return Contact.findById(contactId);
};

const deleteContactById = async (contactId) => {
  const contact = await Contact.findById(contactId);

  if (!contact) {
    throw createError(404, 'Contact not found');
  }

  await Contact.findByIdAndDelete(contactId);
};

export default {
  getAllContacts,
  getContactById,
  deleteContactById,
};
