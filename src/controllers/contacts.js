const getContacts = (req, res) => {
  res.json({ message: 'Returning all contacts' });
};

const getContactById = (req, res) => {
  res.json({ message: `Returning contact with ID: ${req.params.contactId}` });
};

export default { getContacts, getContactById };
