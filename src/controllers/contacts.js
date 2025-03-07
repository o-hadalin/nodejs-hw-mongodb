import createError from 'http-errors';
import contactsService from '../services/contacts.js';
import Contact from '../models/contact.js';

const getContacts = async (req, res, next) => {
  try {
    const contacts = await contactsService.getAllContacts();
    res.json({
      status: 200,
      message: 'Successfully retrieved contacts',
      data: contacts,
    });
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

    res.json({
      status: 200,
      message: 'Successfully retrieved contact',
      data: contact,
    });
  } catch (err) {
    next(err);
  }
};

const createContact = async (req, res, next) => {
  try {
    const { name, phoneNumber, email, isFavourite, contactType } = req.body;

    if (!name || !phoneNumber || !contactType) {
      return next(
        createError(
          400,
          'Missing required fields: name, phoneNumber, contactType',
        ),
      );
    }

    const newContact = new Contact({
      name,
      phoneNumber,
      email,
      isFavourite,
      contactType,
    });

    await newContact.save();

    res.status(201).json({
      status: 201,
      message: 'Successfully created a contact!',
      data: newContact,
    });
  } catch (err) {
    next(err);
  }
};

const patchContact = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const { name, phoneNumber, email, isFavourite, contactType } = req.body;

    const contact = await contactsService.getContactById(contactId);

    if (!contact) {
      return next(createError(404, 'Contact not found'));
    }

    if (name) contact.name = name;
    if (phoneNumber) contact.phoneNumber = phoneNumber;
    if (email) contact.email = email;
    if (isFavourite !== undefined) contact.isFavourite = isFavourite;
    if (contactType) contact.contactType = contactType;

    await contact.save();

    res.status(200).json({
      status: 200,
      message: 'Successfully patched a contact!',
      data: contact,
    });
  } catch (err) {
    next(err);
  }
};

const deleteContact = async (req, res, next) => {
  try {
    const { contactId } = req.params;

    const contact = await contactsService.getContactById(contactId);

    if (!contact) {
      return next(createError(404, 'Contact not found'));
    }

    await contactsService.deleteContactById(contactId);

    res.status(204).send();
  } catch (err) {
    next(err);
  }
};

export default {
  getContacts,
  getContactById,
  createContact,
  patchContact,
  deleteContact,
};
