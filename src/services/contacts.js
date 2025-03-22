import Contact from '../models/contact.js';

const getAllContacts = async (
  userId,
  page,
  perPage,
  sortBy,
  sortOrder,
  filter,
) => {
  const { contactType, isFavourite } = filter;

  const query = { userId };
  if (contactType) query.contactType = contactType;
  if (isFavourite !== null) query.isFavourite = isFavourite;

  const totalItems = await Contact.countDocuments(query);
  const contacts = await Contact.find(query)
    .sort({ [sortBy]: sortOrder })
    .skip((page - 1) * perPage)
    .limit(perPage);

  return { contacts, totalItems };
};

const getContactById = async (contactId, userId) => {
  return Contact.findOne({ _id: contactId, userId });
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
