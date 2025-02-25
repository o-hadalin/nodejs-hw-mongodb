import Contact from '../models/contact.js';

const getAllContacts = async () => {
  try {
    const contacts = await Contact.find();
    console.log('Fetched contacts:', contacts);
    return contacts;
  } catch (error) {
    throw new Error(`Error fetching contacts: ${error.message}`);
  }
};

export default {
  getAllContacts,
};
