import createError from 'http-errors';
import contactsService from '../services/contacts.js';

const getContacts = async (req, res) => {
  const contacts = await contactsService.getAllContacts();
  res.json({
    status: 200,
    message: 'Successfully retrieved contacts',
    data: contacts,
  });
};

const getContactById = async (req, res) => {
  const { contactId } = req.params;
  const contact = await contactsService.getContactById(contactId);

  if (!contact) {
    throw createError(404, 'Contact not found');
  }

  res.json({
    status: 200,
    message: 'Successfully retrieved contact',
    data: contact,
  });
};

const createContact = async (req, res) => {
  const newContact = await contactsService.createContact(req.body);

  res.status(201).json({
    status: 201,
    message: 'Successfully created a contact!',
    data: newContact,
  });
};

const patchContact = async (req, res) => {
  const { contactId } = req.params;
  const updatedContact = await contactsService.updateContactById(
    contactId,
    req.body,
  );

  if (!updatedContact) {
    throw createError(404, 'Contact not found');
  }

  res.status(200).json({
    status: 200,
    message: 'Successfully updated a contact!',
    data: updatedContact,
  });
};

const deleteContact = async (req, res) => {
  const { contactId } = req.params;
  const deletedContact = await contactsService.deleteContactById(contactId);

  if (!deletedContact) {
    throw createError(404, 'Contact not found');
  }

  res.status(204).send();
};

export default {
  getContacts,
  getContactById,
  createContact,
  patchContact,
  deleteContact,
};
