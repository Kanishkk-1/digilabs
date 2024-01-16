const express = require('express');
const multer = require('multer');
const path = require('path');
const adminController = require('./controllers/adminController');

const app = express();
const port = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configure multer for handling file uploads
const storage = multer.diskStorage({
  destination: './server/uploads/',
  filename: function (req, file, cb) {
    cb(null, 'logo' + path.extname(file.originalname));
  }
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 } // Set a file size limit (1MB in this example)
});

// Serve your React frontend (assuming it's built and located in the 'client' folder)
app.use(express.static(path.join(__dirname, 'client')));

// Set up your API endpoints
app.post('/api/update-logo', upload.single('logo'), adminController.updateLogo);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
