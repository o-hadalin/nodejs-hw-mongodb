import Contact from '../models/contact.js';

const getAllContacts = async (page, perPage) => {
  const totalItems = await Contact.countDocuments();
  const contacts = await Contact.find()
    .skip((page - 1) * perPage)
    .limit(perPage);

  return { contacts, totalItems };
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
