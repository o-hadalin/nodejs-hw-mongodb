import Contact from '../models/contact.js';

const getAllContacts = async () => {
  return Contact.find();
};

const getContactById = async (contactId) => {
  return Contact.findById(contactId);
};

const createContact = async (contactData) => {
  return Contact.create(contactData);
};

const updateContactById = async (contactId, updateData) => {
  return Contact.findOneAndUpdate({ _id: contactId }, updateData, {
    new: true,
  });
};

const deleteContactById = async (contactId) => {
  return Contact.findByIdAndDelete(contactId);
};

export default {
  getAllContacts,
  getContactById,
  createContact,
  updateContactById,
  deleteContactById,
};
