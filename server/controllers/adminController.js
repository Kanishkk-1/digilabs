const path = require('path');
// import path from "path";

const updateLogo = (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }

  // You can save the file path or other relevant information to a database here
//   const filePath = path.join(__dirname, '..', 'uploads', req.file.filename);

  // You might also want to update your database with the new logo path

  // Respond with a success message or relevant information
  res.json({ success: true, message: 'Logo updated successfully' });
};

module.exports = {
  updateLogo
};
